import {
  Avatar,
  UserInfo,
  UserData,
  Feedbacks,
  FeedbackCard,
  FeedbackTag,
  FeedbackKeepIcon,
  FeedbackStartIcon,
  FeedbackStopIcon,
  FeedbackTitle,
  FeedbackDescription,
  FeedbacksEmpty,
} from './styles'

import { ProfileProps } from './types'

export default function Profile({ content }: ProfileProps) {
  const { avatar_url, username, name, bio, feedbacks } = content

  return (
    <>
      <UserInfo>
        <Avatar src={avatar_url} alt={username} />

        <UserData>
          <h1>{name}</h1>
          <h2>{username}</h2>
          <p>{bio}</p>
        </UserData>
      </UserInfo>

      {feedbacks.length === 0 ? (
        <FeedbacksEmpty>🚀 No feedbacks registered yet</FeedbacksEmpty>
      ) : (
        <Feedbacks>
          {feedbacks.map(({ title, type, content }, index) => (
            <FeedbackCard key={`${index}`}>
              {type === 'keep' && <FeedbackKeepIcon />}
              {type === 'start' && <FeedbackStartIcon />}
              {type === 'stop' && <FeedbackStopIcon />}

              <FeedbackTag type={type}>Keep doing</FeedbackTag>

              <FeedbackTitle>{title}</FeedbackTitle>

              <FeedbackDescription>{content}</FeedbackDescription>
            </FeedbackCard>
          ))}
        </Feedbacks>
      )}
    </>
  )
}
