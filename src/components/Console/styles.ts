import styled from 'styled-components'

export const Wrapper = styled.div`
  overflow: hidden;

  width: 100%;
  max-width: 1024px;
  height: 100%;
  max-height: 720px;

  background-color: #29273f;

  border-radius: 0.5rem;

  aspect-ratio: 16/9;

  color: #e0def4;

  @media (min-width: 480px) {
    max-height: 720px;
  }

  @media (min-width: 480px) {
    max-height: 560px;
  }
`

export const Content = styled.div`
  overflow: hidden;
  overflow-y: scroll;

  height: calc(100% - 1.8rem);

  padding: 1.5rem 2.5rem;

  &::-webkit-scrollbar {
    display: none;
  }
`
