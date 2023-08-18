import styled from 'styled-components'

const StyledCardsSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 240px));
  column-gap: 28px;
  row-gap: 28px;
  padding: 2rem 1rem;
  align-items: baseline;
  place-content: center;
  border-radius: 16px;
  transition: box-shadow 0.5s ease-in-out;
`

export { StyledCardsSection }
