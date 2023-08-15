import styled from 'styled-components'

const StyledCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${(props) => props.theme.accent1Color};
  border-top: 1px solid ${(props) => props.theme.accent1Color};
  padding-bottom: 1rem;
  border-radius: 8px;
  position: relative;
  align-self: start;
  height: 100%;

  @media screen and (min-width: 576px) {
  }
`

const StyledBookCover = styled.img`
  width: 50%;
  max-height: 300px;
  margin: 1rem auto;
  border-radius: 8px;

  @media screen and (min-width: 576px) {
    width: 80%;
    height: auto;
  }
`

const BookTitle = styled.h3`
  text-align: center;
`

export { StyledCardContainer, StyledBookCover, BookTitle }
