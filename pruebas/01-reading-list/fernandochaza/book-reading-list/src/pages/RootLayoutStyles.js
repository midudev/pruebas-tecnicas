import styled from 'styled-components'

const StyledMain = styled.main`
  margin: 0 auto;
  padding: 2rem 1rem;
  max-width: 1100px;
  height: calc(100% - 104px);
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${(props) => props.theme.breakpointSm}) {
    column-gap: 20px;
    min-height: calc(100vh - 68px);
  }
`

export { StyledMain }
