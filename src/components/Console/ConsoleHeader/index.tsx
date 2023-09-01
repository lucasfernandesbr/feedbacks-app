'use client'

import { useState } from 'react'
import { User, Sparkle } from 'lucide-react'

import { useAuth } from '@/hooks/useAuth'

import {
  Header,
  HeaderButtons,
  HeaderBall,
  Logout,
  LogoutLabel,
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

  return (
    <Header>
      <HeaderButtons>
        <Logout type="button" onClick={signOut}>
          <HeaderBall color="#ED6A5E" />

          <LogoutLabel>logout</LogoutLabel>
        </Logout>

        <HeaderBall />
        <HeaderBall />
      </HeaderButtons>

      <HeaderTabs>
        <Tab isactive={!!(tab === 1)} onClick={() => handleTab(1)}>
          <User color={tab === 1 && true ? '#e0def4' : '#908CAA'} size={16} />
          {!user ? 'Login' : 'Profile'}
        </Tab>

        {user && username && username[0] !== user.username && (
          <Tab isactive={!!(tab === 2)} onClick={() => handleTab(2)}>
            <Sparkle
              color={tab === 2 && true ? '#e0def4' : '#908CAA'}
              size={16}
            />
            Give feedback
          </Tab>
        )}
      </HeaderTabs>
    </Header>
  )
}
