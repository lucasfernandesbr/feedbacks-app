'use client'

import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;

  padding: 5rem;

  @media (min-width: 728px) {
    padding: 6rem;
  }

  @media (min-width: 1024px) {
    padding: 8rem;
  }

  @media (min-width: 1280px) {
    padding: 8rem 16rem;
  }
`

export default Container
