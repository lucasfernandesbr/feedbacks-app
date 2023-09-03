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
