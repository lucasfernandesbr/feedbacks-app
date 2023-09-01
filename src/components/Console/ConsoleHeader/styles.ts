import styled from 'styled-components'
import { lighten } from 'polished'

import { HeaderBallProps, HeaderTabProps } from './types'

export const Header = styled.div`
  display: flex;
  align-items: center;

  gap: 2rem;

  background-color: #232137;

  width: 100%;
  height: 3rem;

  padding: 0 0.75rem;
`

export const HeaderButtons = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const HeaderBall = styled.div<HeaderBallProps>`
  background-color: ${({ color }) => color || '#29273f'};

  width: 0.75rem;
  height: 0.75rem;

  border: none;
  border-radius: 50%;

  cursor: pointer;
`

export const Logout = styled.button<HeaderBallProps>`
  display: flex;
  align-items: center;

  background: none;

  gap: 0.5rem;

  margin-right: 0.5rem;

  border: none;

  cursor: pointer;
`

export const LogoutLabel = styled.p`
  font-size: 0.5rem;
  font-weight: 700;

  color: #e0def4;

  text-transform: uppercase;
`

export const HeaderTabs = styled.div`
  display: flex;
  align-items: flex-end;

  height: 100%;

  gap: 0.5rem;
`

export const Tab = styled.button<HeaderTabProps>`
  display: flex;
  align-items: center;

  gap: 0.4rem;
  background-color: ${({ isactive }) => (isactive ? '#29273f' : 'transparent')};

  height: 2.4rem;

  padding: 0.4rem 0.6rem;

  border: none;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;

  font-size: 0.75rem;

  cursor: pointer;
  color: ${({ isactive }) => (isactive ? '#e0def4' : '#908CAA')};
  font-weight: ${({ isactive }) => (isactive ? 700 : 400)};

  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${(lighten(0.02), '#29273f')};
  }
`
