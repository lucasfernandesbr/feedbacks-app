import { Github } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { zodResolver } from '@hookform/resolvers/zod'
import { useAuth } from '@/hooks/useAuth'

import Input from '@/components/Input'

import { Wrapper, Form, Title, Box, Button } from './styles'

type LoginProps = {
  children: React.ReactNode
}

const signInCredentials = z.object({
  username: z.string().nonempty('Required field'),
  password: z.string().nonempty('Required field'),
})

export default function Login({ children }: LoginProps) {
  type SignInCredentials = z.infer<typeof signInCredentials>

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInCredentials>({
    resolver: zodResolver(signInCredentials),
  })
  const { signIn } = useAuth()

  const handleFormSubmit = async (data: SignInCredentials) => {
    await signIn(data)
  }

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit(handleFormSubmit)}>
        <Github color="#e0def4" size={48} strokeWidth={2} />

        <Box>
          <Title>Sign In using GitHub</Title>
        </Box>

        <>
          <Input
            {...register('username')}
            name="username"
            type="text"
            placeholder="Github Username"
          />
          {errors.username?.message}
        </>

        <Input
          {...register('password')}
          type="password"
          placeholder="Password"
        />

        <Button type="submit">Sign In</Button>
      </Form>
    </Wrapper>
  )
}
