'use client'

import { useEffect, useState } from 'react'
import { User, Sparkle } from 'lucide-react'

import Profile from '../Profile'
import Login from '../Login'

import {
  Wrapper,
  Header,
  HeaderButtons,
  HeaderButton,
  Logout,
  LogoutLabel,
  HeaderTabs,
  Tab,
  Content,
} from './styles'

import { Feedback, ConsoleProps } from './types'

export default function Console({ username }: ConsoleProps) {
  const [loading, setLoading] = useState(true)
  const [tab, setTab] = useState(1)
  const [user, setUser] = useState<{
    avatar_url: string
    username: string
    name: string
    bio: string
    feedbacks: Feedback[]
  }>()

  const handleTab = (tab: number) => {
    setTab(tab)
  }

  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const userData = localStorage.getItem('user')

      if (!userData) {
        setLoading(false)
        return
      }

      const { data } = JSON.parse(userData)

      setUser(data)
      setLoading(false)
    }
  }, [username])

  return (
    <Wrapper>
      <Header>
        <HeaderButtons>
          <Logout>
            <HeaderButton color="#ED6A5E" />

            <LogoutLabel>logout</LogoutLabel>
          </Logout>
          <HeaderButton />
          <HeaderButton />
        </HeaderButtons>

        <HeaderTabs>
          <Tab active={tab === 1 && true} onClick={() => handleTab(1)}>
            <User color={tab === 1 && true ? '#e0def4' : '#908CAA'} size={16} />
            {!user ? 'Login' : 'Profile'}
          </Tab>

          {user && username && username !== user?.username && (
            <Tab active={tab === 2 && true} onClick={() => handleTab(2)}>
              <Sparkle
                color={tab === 2 && true ? '#e0def4' : '#908CAA'}
                size={16}
              />
              Give feedback
            </Tab>
          )}
        </HeaderTabs>
      </Header>

      <Content>
        {loading && <h1>Loading...</h1>}

        {!user && loading === false && <Login>Login</Login>}

        {user && loading === false && tab === 1 && <Profile content={user} />}
      </Content>
    </Wrapper>
  )
}
