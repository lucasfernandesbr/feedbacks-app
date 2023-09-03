type Feedback = {
  id: string
  user_id: string
  pinned_by: string
  content: string
}

type User = {
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

export type AuthContextData = {
  user: User
  token: string
  signIn(credentials: SignInCredentials): void
  signOut(): void
}

export type AuthProviderProps = {
  children: React.ReactNode
}

export type AuthStateProps = {
  user: User
  token: string
}

export type AuthState = {
  user: User
  token: string
}

export type AxiosResponse = {
  data: AuthState
}
