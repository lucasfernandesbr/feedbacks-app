'use client'

import { useEffect, useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'

import { useAuth } from '@/hooks/useAuth'
import api from '@/services/api'

import Loading from '../Loading'
import Login from '../Login'
import Profile from '../Profile'
import Feedback from '../Feedback'

import ConsoleHeader from './ConsoleHeader'

import { Wrapper, Content } from './styles'

import { ConsoleProps, User } from './types'

export default function Console({ username }: ConsoleProps) {
  const { user } = useAuth()
  const { push } = useRouter()

  const [loading, setLoading] = useState(true)
  const [profile, setProfile] = useState<User>({} as User)
  const [tab, setTab] = useState(1)

  const getProfile: () => Promise<User> = useCallback(async () => {
    try {
      const { data } = await api.get(`/users/username/${username}`)

      return data
    } catch (err) {
      setLoading(false)
      push('/')
    }
  }, [push, username])

  useEffect(() => {
    if (!user) {
      setLoading(false)
      return
    }

    setLoading(false)
  }, [user])

  useEffect(() => {
    console.log(username[0])
    setLoading(true)

    if (
      user &&
      username &&
      username[0] !== user.username &&
      username[0] !== 'index'
    ) {
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
      <ConsoleHeader
        username={username}
        tab={tab}
        handleTab={setTab}
        isLoading={loading}
      />

      <Content>
        {loading && (
          <Loading commandLine="~/feebacks-app" content="⏳ building content" />
        )}

        {!user && !profile && loading === false && <Login />}

        {user && profile && loading === false && tab === 1 && (
          <Profile content={profile} />
        )}

        {user && loading === false && tab === 2 && (
          <Feedback username={username} />
        )}
      </Content>
    </Wrapper>
  )
}
