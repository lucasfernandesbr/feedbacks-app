'use client'

import { useEffect, useState, useCallback } from 'react'

import { useAuth } from '@/hooks/useAuth'
import api from '@/services/api'

import Login from '../Login'
import Profile from '../Profile'
import Feedback from '../Feedback'

import ConsoleHeader from './ConsoleHeader'

import { Wrapper, Content } from './styles'

import { ConsoleProps, User } from './types'

export default function Console({ username }: ConsoleProps) {
  const { user } = useAuth()

  const [loading, setLoading] = useState(true)
  const [profile, setProfile] = useState<User>({} as User)
  const [tab, setTab] = useState(1)

  const getProfile: () => Promise<User> = useCallback(async () => {
    const { data } = await api.get(`/users/username/${username}`)

    return data
  }, [username])

  useEffect(() => {
    if (!user) {
      setLoading(false)
      return
    }

    setLoading(false)
  }, [user])

  useEffect(() => {
    setLoading(true)

    if (username && username !== user.username) {
      getProfile().then((response) => {
        setProfile(response)
        setLoading(false)
      })

      return
    }

    setProfile(user)
    setLoading(false)
  }, [user, username, getProfile])

  return (
    <Wrapper>
      <ConsoleHeader username={username} tab={tab} handleTab={setTab} />

      <Content>
        {loading && <h1>Loading...</h1>}

        {!user && loading === false && <Login>Login</Login>}

        {user && profile && loading === false && tab === 1 && (
          <Profile content={profile} />
        )}

        {user && loading === false && tab === 2 && <Feedback />}
      </Content>
    </Wrapper>
  )
}
