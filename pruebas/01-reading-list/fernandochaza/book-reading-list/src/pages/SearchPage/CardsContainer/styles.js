import styled from 'styled-components'

const StyledCardsSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 240px));
  column-gap: 28px;
  row-gap: 20px;
  padding: 1rem;
  align-items: baseline;
  place-content: center;
  border-radius: 16px;
  transition: box-shadow .5s ease-in-out;

  box-shadow: 0 0 16px -4px ${(props) => props.theme.accent1Color};

  &:hover {
    box-shadow: 0 0 24px -4px ${(props) => props.theme.accent1Color};
  }
`

export { StyledCardsSection }
