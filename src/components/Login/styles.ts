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

  gap: 1.4rem;
`

export const Title = styled.h3`
  font-size: 1.6rem;

  text-align: center;
`

export const Box = styled.div`
  display: flex;
  align-items: center;

  gap: 0.4rem;
`

export const Input = styled.input`
  display: flex;

  width: 100%;
  height: 3.125rem;

  padding: 1rem;

  background-color: #e0def4;

  border-radius: 0.3rem;
  border: 2px solid ${lighten(0.05, '#29273f')};

  color: #29273f;

  &::placeholder {
    font-weight: 700;
    color: ${lighten(0.15, '#29273f')};
  }
`
