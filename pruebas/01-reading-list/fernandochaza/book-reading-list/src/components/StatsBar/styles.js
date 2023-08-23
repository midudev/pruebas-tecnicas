import styled from 'styled-components'

const StyledContainer = styled.div`
  background-color: ${(props) => props.theme.mainBg};
  padding: 2rem;

  transition: background-color 0.25s ease;
`

const StyledStatsSection = styled.section`
  display: flex;
  justify-content: space-evenly;
  max-width: 700px;
  margin: 4rem auto 0 auto;
  padding: 0.25rem 0.75rem;
  border-radius: 16px;
  background-color: ${(props) => props.theme.mainBg};
  box-shadow: 0 0 8px 0 ${(props) => props.theme.accent1Color};
  transition: background-color 0.25s ease, box-shadow 0.25s ease;

  @media screen and (max-width: ${(props) => props.theme.breakpointMd}) {
    max-width: 75%;
  }

  @media screen and (max-width: ${(props) => props.theme.breakpointSm}) {
    max-width: 60%;
    flex-direction: column;
    align-items: center;
    padding: 0.75rem 0.5rem;
    row-gap: 1rem;
  }
`

const StyledSectionField = styled.div`
  display: flex;
  align-items: center;
`

const StyledSectionFieldTitle = styled.p`
  font-size: 1rem;
  padding-left: 0.5rem;
`

export {
  StyledStatsSection,
  StyledSectionField,
  StyledSectionFieldTitle,
  StyledContainer
}
