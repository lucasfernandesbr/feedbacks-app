'use client'

import { User, Sparkle } from 'lucide-react'
import { useRouter } from 'next/navigation'

import { useAuth } from '@/hooks/useAuth'

import {
  Header,
  HeaderButtons,
  HeaderBall,
  Logout,
  HeaderTabs,
  Tab,
} from './styles'

import { ConsoleHeaderProps } from './types'

export default function ConsoleHeader({
  username,
  tab,
  handleTab,
}: ConsoleHeaderProps) {
  const { user, signOut } = useAuth()
  const { push } = useRouter()

  const handleSignOut = () => {
    signOut()
    push('/')
  }

  return (
    <Header>
      <HeaderButtons>
        <Logout type="button" onClick={handleSignOut}>
          <HeaderBall color="#ED6A5E" />
        </Logout>

        <HeaderBall />
        <HeaderBall />
      </HeaderButtons>

      {user && (
        <HeaderTabs>
          <Tab $isActive={tab === 1} onClick={() => handleTab(1)}>
            <User color={tab === 1 && true ? '#e0def4' : '#908CAA'} size={16} />
            {'Profile'}
          </Tab>

          {username && username[0] !== user.username && (
            <Tab $isActive={tab === 2} onClick={() => handleTab(2)}>
              <Sparkle
                color={tab === 2 && true ? '#e0def4' : '#908CAA'}
                size={16}
              />
              Give feedback
            </Tab>
          )}
        </HeaderTabs>
      )}
    </Header>
  )
}
