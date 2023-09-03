import styled from 'styled-components'
import { lighten } from 'polished'

const Textarea = styled.textarea`
  resize: none;

  width: 100%;
  min-width: 320px;
  height: 100%;

  padding: 1rem;

  background-color: #232137;

  border-radius: 0.2rem;
  border: none;

  font-family: 'Roboto';
  font-size: 16px;
  color: #e0def4;

  &::placeholder {
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 1.2px;
    color: ${lighten(0.05, '#29273f')};
  }

  &::-webkit-scrollbar {
    width: 2px;
    height: 6px;
  }

  &::-webkit-scrollbar-thumb {
    height: 6px;
    background-color: rgba(73, 70, 112, 0.4);

    border-radius: 10px;
  }
`

export default Textarea
