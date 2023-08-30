'use client'

import { Github } from 'lucide-react'
import { useForm } from 'react-hook-form'

import axios from 'axios'

import { Wrapper, Form, Title, Box, Input, Button } from './styles'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

type LoginProps = {
  children: React.ReactNode
}

const schema = z.object({
  username: z.string().nonempty('Required field'),
  password: z.string().nonempty('Required field'),
})

const githubSchema = z.object({
  name: z.string(),
  username: z.string(),
  avatarUrl: z.string(),
  location: z.string(),
  bio: z.string(),
})

export default function Login({ children }: LoginProps) {
  type User = z.infer<typeof schema>
  type Github = z.infer<typeof githubSchema>

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    resolver: zodResolver(schema),
  })

  const handleFormSubmit = async (data: User) => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const { username } = data

      const githubUser = await fetch(
        `https://api.github.com/users/${username}`,
      ).then((res) => res.json())

      const payload: Github = {
        name: githubUser.name,
        username: githubUser.login,
        avatarUrl: githubUser.avatar_url,
        location: githubUser.location || '',
        bio: githubUser.bio,
      }

      const user = await axios.post<Github>(
        'https://feedbacks-api-yqkl.onrender.com/users',
        payload,
      )

      localStorage.setItem('user', JSON.stringify(user))
    }
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
