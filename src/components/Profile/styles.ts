import styled from 'styled-components'

import { Sparkles, Coffee, XOctagon } from 'lucide-react'

import { FeedbackTagProps } from './types'

type Colors = {
  keep: string
  start: string
  stop: string
}

const cardTagColor: Colors = {
  keep: '#84E5B4',
  start: '#f0bc69',
  stop: '#E56A6A',
}

export const Avatar = styled.img`
  width: 140px;
  height: 140px;

  padding: 0.4rem;

  border: 1px solid #e0def4;
  border-radius: 50%;
`

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  gap: 2rem;

  width: 100%;

  margin-bottom: 2rem;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`

export const UserData = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  gap: 0.8rem;

  text-align: center;

  @media (min-width: 1024px) {
    align-items: start;
    text-align: left;
  }
`

export const Feedbacks = styled.div`
  overflow: hidden;
  overflow-x: scroll;

  display: flex;
  align-items: center;
  justify-content: start;

  width: 100%;

  margin-top: 1.25rem;
  padding-bottom: 0.8rem;

  gap: 0.8rem;

  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-thumb {
    height: 6px;
    background-color: rgba(73, 70, 112, 0.4);

    border-radius: 10px;
  }

  @media (min-width: 1024px) {
    justify-content: start;
    align-items: center;
  }
`

export const FeedbackCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-shrink: 0;

  gap: 1.2rem;

  background-color: #232137;

  width: 11.25rem;
  height: 16.7rem;

  padding: 1.4rem;

  border-radius: 0.5rem;
`

export const FeedbackTag = styled.div<FeedbackTagProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  background-color: ${({ type }) =>
    type ? cardTagColor[type as keyof Colors] : type};

  width: max-content;
  height: 20px;

  padding: 0.25rem;

  border-radius: 0.2rem;

  font-size: 0.8rem;
  font-weight: 700;
  color: #232137;
`

export const FeedbackKeepIcon = styled(Sparkles).attrs({
  color: cardTagColor.keep,
  size: 36,
})`
  flex-shrink: 0;
`

export const FeedbackStartIcon = styled(Coffee).attrs({
  color: cardTagColor.start,
  size: 36,
})`
  flex-shrink: 0;
`

export const FeedbackStopIcon = styled(XOctagon).attrs({
  color: cardTagColor.stop,
  size: 36,
})`
  flex-shrink: 0;
`

export const FeedbackTitle = styled.h3``

export const FeedbackDescription = styled.p`
  overflow: hidden;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const FeedbacksEmpty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: calc(100% - 244px);

  font-size: 3em;
  font-weight: 700;

  text-align: center;
`
