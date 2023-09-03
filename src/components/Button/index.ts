import styled from 'styled-components'
import { lighten, darken } from 'polished'

const buttonColor = lighten(0.05, '#29273f')

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 360px;
  height: 3.125rem;

  background-color: ${buttonColor};

  border: none;
  border-radius: 0.3rem;

  cursor: pointer;

  font-size: 0.9rem;
  font-weight: 700;
  color: #e0def4;
  text-transform: uppercase;

  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${darken(0.02, buttonColor)};
  }
`

export default Button
