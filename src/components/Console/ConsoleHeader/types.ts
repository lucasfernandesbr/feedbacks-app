export type ConsoleHeaderProps = {
  username: string
  tab: number
  handleTab: (tab: number) => void
  isLoading: boolean
}

export type HeaderBallProps = {
  color?: string
}

export type HeaderTabProps = {
  $isActive?: boolean
}
