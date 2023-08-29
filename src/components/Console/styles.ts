import styled from 'styled-components'
import { lighten } from 'polished'

import { HeaderBallProps, HeaderTabProps } from './types'

export const Wrapper = styled.div`
  overflow: hidden;

  width: 100%;
  height: 100%;
  max-height: 560px;

  background-color: #29273f;

  border-radius: 0.5rem;

  aspect-ratio: 16/9;

  color: #e0def4;
`

export const Header = styled.div`
  display: flex;
  align-items: center;

  gap: 2rem;

  background-color: #232137;

  width: 100%;
  height: 2.6rem;

  padding: 0 0.75rem;
`

export const HeaderButtons = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const HeaderButton = styled.button<HeaderBallProps>`
  background-color: ${({ color }) => color};

  width: 0.75rem;
  height: 0.75rem;

  border: none;
  border-radius: 50%;

  cursor: pointer;
`

export const HeaderTabs = styled.div`
  display: flex;
  align-items: flex-end;

  height: 100%;

  gap: 0.5rem;
`

export const Tab = styled.button<HeaderTabProps>`
  background-color: ${({ active }) => (active ? '#29273f' : 'transparent')};

  height: 2rem;

  padding: 0.4rem 0.6rem;

  border: none;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;

  font-size: 0.75rem;

  cursor: pointer;
  color: ${({ active }) => (active ? '#e0def4' : '#908CAA')};
  font-weight: ${({ active }) => (active ? 700 : 400)};

  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${(lighten(0.02), '#29273f')};
  }
`

export const Content = styled.div`
  overflow: hidden;
  overflow-y: scroll;

  height: calc(100% - 2.6rem);

  padding: 1.5rem 2.5rem;

  &::-webkit-scrollbar {
    display: none;
  }
`
