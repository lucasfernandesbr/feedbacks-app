import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { zodResolver } from '@hookform/resolvers/zod'
import { useAuth } from '@/hooks/useAuth'

import Input from '@/components/Input'
import Textarea from '@/components/Textarea'
import Button from '@/components/Button'

import { Wrapper, Form, FormContent, Title, Box } from './styles'
import api from '@/services/api'
import { User } from './types'

type LoginProps = {
  username: string
}

const feedbackSchema = z.object({
  type: z.string().nonempty('Required field'),
  title: z.string().nonempty('Required field'),
  content: z.string().nonempty('Required field'),
})

export default function Feedback({ username }: LoginProps) {
  type FeedbackData = z.infer<typeof feedbackSchema>

  const { user, setUserAuthState } = useAuth()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FeedbackData>({
    resolver: zodResolver(feedbackSchema),
  })

  const handleFormSubmit = async (data: FeedbackData) => {
    await api.post('/feedbacks', {
      receiving_feedback_username: username[0],
      giving_feedback_username: user.username,
      title: data.type,
      content: data.content,
      type: data.type,
    })

    const getUser = await api.get<User, User>(`/users/username/${username}`)

    setUserAuthState(getUser)
  }

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit(handleFormSubmit)}>
        <Title>Give your feedback to {username}</Title>

        <FormContent>
          <Box>
            <Input
              {...register('title')}
              type="text"
              placeholder="Type a feedback title"
            />

            <Input
              {...register('type')}
              type="select"
              placeholder="Choose the feedback type"
            />
          </Box>

          <Box>
            <Textarea
              {...register('content')}
              placeholder="Write your feedback"
            />
          </Box>
        </FormContent>

        <Button type="submit" disabled={isSubmitting}>
          Give feedback!
        </Button>
      </Form>
    </Wrapper>
  )
}
