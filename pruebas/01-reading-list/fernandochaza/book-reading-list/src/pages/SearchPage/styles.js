import styled from 'styled-components'

const StyledCardsSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 240px));
  gap: 20px;
  align-items: baseline;
  place-content: center;
`

export { StyledCardsSection }