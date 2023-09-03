import styled, { keyframes } from 'styled-components'

const blinkCursor = keyframes`
  0%, 75% {
    opacity: 1;
  }

  76%, 100% {
    opacity: 0;
  }
`

const typing = keyframes`
  0% {
    width: 0;
  }

  100% {
    width: 281px;
  }
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 3rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

export const CommandContent = styled.p`
  margin-right: 20px;
  font-size: 2em;
  color: #ed6a5e;
`

export const Loader = styled.div`
  position: relative;

  &:after {
    content: '';

    position: absolute;
    top: 0;
    right: 0;

    width: 2px;
    height: 100%;

    background-color: #e0def4;

    animation: ${blinkCursor} 0.8s steps(3) infinite;
  }
`

export const LoadingContent = styled.div`
  white-space: nowrap;
  position: relative;
  width: fit-content;
  color: #e0def4;
  font-size: 2em;
  text-transform: lowercase;
  animation: ${typing} 0.8s steps(18);
  overflow: hidden;
`
