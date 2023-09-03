type Feedback = {
  id: string
  user_id: string
  pinned_by: string
  title: string
  content: string
  type: string
}

export type User = {
  name: string
  username: string
  avatar_url: string
  bio: string
  feedbacks: Feedback[]
}

export type SignInCredentials = {
  username: string
  password: string
}

export type AuthProviderProps = {
  children: React.ReactNode
}

export type AuthStateProps = {
  user: User
  token: string
}

export type AuthContextData = {
  user: User
  token: string
  setUserAuthState(stateData: User): void
  signIn(credentials: SignInCredentials): void
  signOut(): void
}

export type AuthState = {
  user: User
  token: string
}

export type AxiosResponse = {
  data: AuthState
}
