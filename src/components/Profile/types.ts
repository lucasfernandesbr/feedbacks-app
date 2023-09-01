export type FeedbackTagProps = {
  color: string
}

type Feedback = {
  id: string
  user_id: string
  pinned_by: string
  content: string
}

export type User = {
  name: string
  username: string
  avatar_url: string
  bio: string
  feedbacks: Feedback[]
}

export type ProfileProps = {
  content: User
}
