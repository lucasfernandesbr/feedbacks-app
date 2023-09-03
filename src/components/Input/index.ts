import styled from 'styled-components'
import { lighten } from 'polished'

const Input = styled.input`
  display: flex;

  width: 100%;
  max-width: 360px;
  height: 56px;

  padding: 1rem;

  background-color: #232137;

  border-radius: 0.3rem;
  border: 2px solid #29273f;

  color: #e0def4;

  &::placeholder {
    text-transform: uppercase;
    font-size: 10px;
    font-weight: 700;
    color: ${lighten(0.05, '#29273f')};
  }

  @media (min-width: 1024px) {
    &::placeholder {
      font-size: 12px;
    }
  }
`

export default Input
