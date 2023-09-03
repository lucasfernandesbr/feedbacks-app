import styled from 'styled-components'

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

  width: 100%;

  gap: 2rem;

  @media (min-width: 1024px) {
    height: 100%;
  }
`

export const FormContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  height: 100%;

  gap: 1rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    max-width: 738px;
    max-height: 128px;
  }
`

export const Title = styled.h3`
  font-size: 1.6rem;

  text-align: center;
`

export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  height: 100%;

  gap: 1rem;
`
