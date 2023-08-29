'use client'

import { useEffect, useState } from 'react'

import Profile from '../Profile'
import Login from '../Login'

import {
  Wrapper,
  Header,
  HeaderButtons,
  HeaderButton,
  HeaderTabs,
  Tab,
  Content,
} from './styles'

import { Feedback, ConsoleProps } from './types'

const data = {
  id: '3b2c441b-8f40-4daa-bf76-7c77d9195875',
  name: 'Lucas Fernandes Souza',
  username: 'lucasfernandesbr',
  avatar_url: 'https://avatars.githubusercontent.com/u/54141141?v=4',
  location: 'null',
  bio: 'Desenvolvedor Front-end Jr - Gympass\r\n\r\nAtualmente focado em Javascript voltado para as tecnologias NodeJS, React e React Native',
  feedbacks: [
    {
      id: '99136a89-4b7d-4843-a71d-75d0d02ceb2c',
      user_id: '3b2c441b-8f40-4daa-bf76-7c77d9195875',
      pinned_by: 'dc98c6cd-179d-4e70-904a-04141ba6cd6f',
      content: 'Keep doing this',
    },
  ],
}

export default function Console({ username }: ConsoleProps) {
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
        return
      }

      const { data } = JSON.parse(userData)

      setUser(data)
    }
  }, [username])

  return (
    <Wrapper>
      <Header>
        <HeaderButtons>
          <HeaderButton color="#ED6A5E" />
          <HeaderButton color="#F4BF4F" />
          <HeaderButton color="#61C454" />
        </HeaderButtons>

        <HeaderTabs>
          <Tab active={tab === 1 && true} onClick={() => handleTab(1)}>
            {!user ? 'Login' : 'Profile'}
          </Tab>

          {user && username && username !== user?.username && (
            <Tab active={tab === 2 && true} onClick={() => handleTab(2)}>
              Give feedback
            </Tab>
          )}
        </HeaderTabs>
      </Header>

      <Content>
        {!user && <Login>Login</Login>}

        {user && tab === 1 && <Profile content={user} />}
      </Content>
    </Wrapper>
  )
}
