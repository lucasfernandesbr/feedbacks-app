type User = {
  id: string
  name: string
  username: string
  avatarUrl: string
  location: string
  bio: string
}

export type SignInCredentials = {
  username: string
  password: string
}

export type AuthContextData = {
  user: User
  signIn(credentials: SignInCredentials): Promise<void>
  signOut(): void
}

export type AuthProviderProps = {
  children: React.ReactNode
}

export type AuthStateProps = {
  user: User
  token: string
}

export type GithubUser = {
  name: string
  login: string
  avatar_url: string
  location: string
  bio: string
}

export type AuthState = {
  user: User
  token: string
}
