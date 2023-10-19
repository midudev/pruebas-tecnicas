import styled from 'styled-components'

const StyledCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 8px 0 ${(props) => props.theme.secondaryTxt};
  background-color: ${(props) => props.theme.contrastBg};
  padding-bottom: 1rem;
  border-radius: 8px;
  position: relative;
  align-self: start;
  height: 100%;
  transition: transform 0.25s ease-in-out, box-shadow .25s ease, background-color .25s ease;

  @media screen and (min-width: 576px) {
    &:hover {
      transform: scale(1.02);
      box-shadow: 0 0 12px 0 ${(props) => props.theme.secondaryTxt};
    }
  }
`

const StyledBookCover = styled.img`
  width: 128px;
  height: 189px;
  margin: 1rem auto;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.accentBg};
  transition: border .25s ease;
`

const BookTitle = styled.h2`
  text-align: center;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 0 12px;
  margin-bottom: .25rem;
`

const StyledText = styled.p`
  text-align: center;
`

export { StyledCardContainer, StyledBookCover, BookTitle, StyledText }
