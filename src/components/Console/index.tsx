'use client'

import { useEffect, useState } from 'react'

import { useAuth } from '@/hooks/useAuth'

import Profile from '../Profile'
import Login from '../Login'

import ConsoleHeader from './ConsoleHeader'

import { Wrapper, Content } from './styles'

import { ConsoleProps } from './types'

export default function Console({ username }: ConsoleProps) {
  const { user } = useAuth()

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!user) {
      setLoading(false)
      return
    }

    setLoading(false)
  }, [user])

  return (
    <Wrapper>
      <ConsoleHeader username={username} />

      <Content>
        {loading && <h1>Loading...</h1>}

        {!user && loading === false && <Login>Login</Login>}

        {user && loading === false && <Profile content={user} />}
      </Content>
    </Wrapper>
  )
}
