import styled from 'styled-components'

const StyledFooter = styled.footer`
  width: 100%;
  border-top: 1px solid ${(props) => props.theme.accentBg};
`

const StyledContainer = styled.div`
  width: 75%;
  display: grid;
  grid-template-columns: 50% repeat(3, 1fr);
  align-items: center;
  margin: 0 auto;

  @media screen and (max-width: ${(props) => props.theme.breakpointSm}) {
    width: 90%;
  }
`

const StyledFooterMessage = styled.p`
  font-size: 0.95rem;
  text-align: center;
  grid-column: 1;
  grid-row: 1;
`

export { StyledFooter, StyledContainer, StyledFooterMessage }
