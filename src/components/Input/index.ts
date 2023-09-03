import styled from 'styled-components'
import { lighten } from 'polished'

const Input = styled.input`
  display: flex;

  width: 100%;
  min-width: 320px;
  height: 56px;

  padding: 1rem;

  background-color: #232137;

  border-radius: 0.3rem;
  border: 2px solid #29273f;

  color: #e0def4;

  &::placeholder {
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 1.2px;
    color: ${lighten(0.05, '#29273f')};
  }
`

export default Input
