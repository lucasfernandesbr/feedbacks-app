'use client'

import { Github } from 'lucide-react'
import { useForm } from 'react-hook-form'

import axios from 'axios'

import { Wrapper, Form, Box, Input, InputBox, Button } from './styles'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

type LoginProps = {
  children: React.ReactNode
}

const schema = z.object({ username: z.string() })

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
        <Box>
          <Github color="#e0def4" size={24} />

          <h3>Login using GitHub</h3>
        </Box>

        <Input
          {...register('username')}
          type="text"
          placeholder="Github username"
        />

        <Button type="submit">Login</Button>
      </Form>
    </Wrapper>
  )
}
