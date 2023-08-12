import styled from 'styled-components'

const StyledCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${(props) => props.theme.accent1Color};
  border-top: 1px solid ${(props) => props.theme.accent1Color};
  padding-bottom: 1rem;
  border-radius: 8px;
  position: relative;

  @media screen and (min-width: 576px) {
  }
`

const StyledBookCover = styled.img`
  width: 50%;
  margin: 1rem auto;
  border-radius: 8px;

  @media screen and (min-width: 576px) {
    width: 90%;
  }
`

const BookTitle = styled.h3`
  text-align: center;
`

export { StyledCardContainer, StyledBookCover, BookTitle }
