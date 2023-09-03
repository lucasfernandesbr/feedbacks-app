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

export const FormContent = styled.div`
  display: flex;

  gap: 1rem;
`

export const Title = styled.h3`
  font-size: 1.6rem;
`

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 360px;
  height: 3.125rem;

  background: ${lighten(0.05, '#29273f')};

  border: none;
  border-radius: 0.3rem;

  cursor: pointer;

  font-size: 0.9rem;
  font-weight: 700;
  color: #e0def4;
`
