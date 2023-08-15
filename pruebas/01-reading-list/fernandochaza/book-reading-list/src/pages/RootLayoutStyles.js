import styled from 'styled-components'

const StyledMain = styled.main`
  margin: 0 auto;
  padding: 1rem;
  max-width: 1100px;
  height: calc(100% - 104px);
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${(props) => props.theme.breakpointSm}) {
    display: grid;
    grid-template-columns: 240px auto;
    column-gap: 20px;
    height: calc(100% - 64px);
  }
`

export { StyledMain }
