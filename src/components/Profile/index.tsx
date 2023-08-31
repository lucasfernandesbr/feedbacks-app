/* eslint-disable camelcase */

'use client'
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
} from './styles'

import { ProfileProps } from './types'

export default function Profile({ content }: ProfileProps) {
  const { avatar_url, username, name, bio } = content

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

      <Feedbacks>
        <FeedbackCard>
          <FeedbackTag color="#84E5B4">Keep doing</FeedbackTag>

          <FeedbackKeepIcon />

          <FeedbackTitle>Feedbacks</FeedbackTitle>
          <FeedbackDescription>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </FeedbackDescription>
        </FeedbackCard>

        <FeedbackCard>
          <FeedbackTag color="#84E5B4">Keep doing</FeedbackTag>

          <FeedbackKeepIcon />

          <FeedbackTitle>Feedbacks</FeedbackTitle>
          <FeedbackDescription>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </FeedbackDescription>
        </FeedbackCard>

        <FeedbackCard>
          <FeedbackTag color="#f0bc69">Start doing</FeedbackTag>

          <FeedbackStartIcon />

          <FeedbackTitle>Feedbacks</FeedbackTitle>
          <FeedbackDescription>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </FeedbackDescription>
        </FeedbackCard>

        <FeedbackCard>
          <FeedbackTag color="#f0bc69">Start doing</FeedbackTag>

          <FeedbackStartIcon />

          <FeedbackTitle>Feedbacks</FeedbackTitle>
          <FeedbackDescription>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </FeedbackDescription>
        </FeedbackCard>

        <FeedbackCard>
          <FeedbackTag color="#E56A6A">Stop doing</FeedbackTag>

          <FeedbackStopIcon />

          <FeedbackTitle>Feedbacks</FeedbackTitle>
          <FeedbackDescription>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </FeedbackDescription>
        </FeedbackCard>

        <FeedbackCard>
          <FeedbackTag color="#E56A6A">Stop doing</FeedbackTag>

          <FeedbackStopIcon />

          <FeedbackTitle>Feedbacks</FeedbackTitle>
          <FeedbackDescription>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </FeedbackDescription>
        </FeedbackCard>
      </Feedbacks>
    </>
  )
}
