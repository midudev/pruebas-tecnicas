import { StyledContainer, StyledFooter, StyledLink, StyledSign } from './styles'

const Footer = () => {
  return (
    <StyledFooter>
      <StyledSign>
        By Fernando Chazarreta{' '}
        <StyledLink href='https://github.com/fernandochaza'>
          https://github.com/fernandochaza
        </StyledLink>
      </StyledSign>
      <StyledContainer>
        <StyledSign>Data provided by Google.</StyledSign>
        <StyledSign>
          <StyledLink href='https://developers.google.com/books'>
            https://developers.google.com/books
          </StyledLink>
        </StyledSign>
      </StyledContainer>
    </StyledFooter>
  )
}

export default Footer
