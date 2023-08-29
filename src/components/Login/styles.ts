import styled from 'styled-components'
import { lighten } from 'polished'

export const Wrapper = styled.div`
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  background-color: #29273f;

  border-radius: 0.5rem;

  aspect-ratio: 16/9;

  color: #e0def4;
`

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: 2rem;
`

export const Box = styled.div`
  display: flex;
  align-items: center;

  gap: 0.4rem;
`

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  color: #e0def4;

  gap: 0.4rem;

  label {
    font-size: 0.8rem;
  }
`

export const Input = styled.input`
  display: flex;

  width: 100%;
  height: 2.4rem;

  padding: 1rem;

  background: none;

  border-radius: 0.3rem;
  border: 1px solid ${lighten(0.05, '#29273f')};

  color: #e0def4;

  &::placeholder {
    color: ${lighten(0.15, '#29273f')};
  }
`

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 2.4rem;

  background: ${lighten(0.05, '#29273f')};

  border: none;
  border-radius: 0.3rem;

  cursor: pointer;

  color: #e0def4;
`
