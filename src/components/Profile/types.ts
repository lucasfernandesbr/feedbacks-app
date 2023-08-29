const data = {
  id: '3b2c441b-8f40-4daa-bf76-7c77d9195875',
  name: 'Lucas Fernandes Souza',
  username: 'lucasfernandesbr',
  avatar_url: 'https://avatars.githubusercontent.com/u/54141141?v=4',
  location: 'null',
  bio: 'Desenvolvedor Front-end Jr - Gympass\r\n\r\nAtualmente focado em Javascript voltado para as tecnologias NodeJS, React e React Native',
  feedbacks: [
    {
      id: '99136a89-4b7d-4843-a71d-75d0d02ceb2c',
      user_id: '3b2c441b-8f40-4daa-bf76-7c77d9195875',
      pinned_by: 'dc98c6cd-179d-4e70-904a-04141ba6cd6f',
      content: 'Keep doing this',
    },
  ],
}

export type FeedbackTagProps = {
  color: string
}

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

export type ProfileProps = {
  content: User
}
