import styled from 'styled-components'

const StyledText = styled.p`
  grid-column: 1 / -1;
  text-align: center;
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
`

const StyledNotFoundSection = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  place-content: center;
`

const StyledNoResults = styled.h2`
  text-align: center;
  font-size: 1.4rem;
  margin-bottom: 1rem;
`

export { StyledText, StyledNoResults, StyledNotFoundSection }
