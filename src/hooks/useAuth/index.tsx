import { useState, useCallback, createContext, useContext } from 'react'

import api from '@/services/api'

import {
  AuthContextData,
  AuthProviderProps,
  AuthStateProps,
  SignInCredentials,
  AuthState,
  AxiosResponse,
} from './types'

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

function AuthProvider({ children }: AuthProviderProps) {
  const [data, setData] = useState<AuthStateProps>(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const user = localStorage.getItem('@feedbacks:user')
      const token = localStorage.getItem('@feedbacks:token')

      if (token && user) {
        api.defaults.headers.authorization = `Bearer ${JSON.parse(token)}`

        return { token, user: JSON.parse(user) }
      }
    }

    return {} as AuthStateProps
  })

  const signIn = useCallback(
    async ({ username, password }: SignInCredentials) => {
      const signInPayload = {
        username,
        password,
      }

      const { data } = await api.post<AxiosResponse, AxiosResponse>(
        '/session',
        signInPayload,
      )
      const { user, token } = data

      const parsedUsed = JSON.stringify(user)
      const parsedToken = JSON.stringify(token)

      localStorage.setItem('@feedbacks:user', parsedUsed)
      localStorage.setItem('@feedbacks:token', parsedToken)

      api.defaults.headers.authorization = `Bearer ${JSON.parse(token)}`

      setData({ user, token })
    },
    [],
  )

  const signOut = useCallback(() => {
    localStorage.removeItem('@feedbacks:user')
    localStorage.removeItem('@feedbacks:token')

    setData({} as AuthState)
  }, [])

  return (
    <AuthContext.Provider
      value={{ user: data.user, token: data.token, signIn, signOut }}
    >
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

export { AuthProvider, AuthContext, useAuth }
