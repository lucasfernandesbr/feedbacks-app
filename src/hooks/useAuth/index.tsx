'use client'

import { useState, useCallback, createContext, useContext } from 'react'

import api from '@/services/api'

import {
  AuthContextData,
  AuthProviderProps,
  AuthStateProps,
  SignInCredentials,
  GithubUser,
  AuthState,
} from './types'

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

async function AuthProvider({ children }: AuthProviderProps) {
  const [data, setData] = useState<AuthStateProps>(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const user = localStorage.getItem('@feedbacks:user')
      const token = localStorage.getItem('@feedbacks:token')

      if (token && user) {
        api.defaults.headers.authorization = `Bearer ${token}`

        return { token, user: JSON.parse(user) }
      }
    }

    return {} as AuthStateProps
  })

  const signIn = useCallback(
    async ({ username, password }: SignInCredentials) => {
      const userExists: AuthState = await api.get(
        `https://api.github.com/users/${username}`,
      )

      if (userExists) {
        const { user, token } = userExists

        localStorage.setItem('@feedbacks:user', JSON.stringify(userExists))
        localStorage.setItem('@feedbacks:token', JSON.stringify(userExists))

        api.defaults.headers.authorization = `Bearer ${token}`

        setData({ user, token })
        return
      }

      const githubUser: GithubUser = await api.get(
        `https://api.github.com/users/${username}`,
      )

      const payload = {
        name: githubUser.name,
        username: githubUser.login,
        // password,
        avatarUrl: githubUser.avatar_url,
        location: githubUser.location || '',
        bio: githubUser.bio,
      }

      const createUser: AuthState = await api.post(
        'https://feedbacks-api-yqkl.onrender.com/users',
        payload,
      )

      const { user, token } = createUser

      localStorage.setItem('@feedbacks:user', JSON.stringify(userExists))
      localStorage.setItem('@feedbacks:token', JSON.stringify(userExists))

      api.defaults.headers.authorization = `Bearer ${token}`

      setData({ user, token })
    },
    [],
  )

  const signOut = useCallback(async () => {
    localStorage.removeItem('@feedbacks:user')
    localStorage.removeItem('@feedbacks:token')

    setData({} as AuthState)
  }, [])

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(): AuthContextData {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }

  return context
}

export { AuthProvider, useAuth }
