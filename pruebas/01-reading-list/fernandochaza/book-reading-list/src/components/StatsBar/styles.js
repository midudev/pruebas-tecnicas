import styled from 'styled-components'

const StyledStatsSection = styled.section`
  display: flex;
  justify-content: space-evenly;
  max-width: 700px;
  margin: 0.5rem auto;
  padding: 0.25rem 0.75rem;
  border-radius: 16px;
  background-color: ${(props) => props.theme.mainBg};
  box-shadow: 0 0 8px 0 ${(props) => props.theme.accent1Color};

  @media screen and (max-width: ${(props) => props.theme.breakpointMd}) {
    max-width: 75%;
  }

  @media screen and (max-width: ${(props) => props.theme.breakpointSm}) {
    max-width: 100%;
  }
`

const StyledSectionField = styled.div`
  display: flex;
  align-items: center;
`

const StyledSectionFieldTitle = styled.p`
  font-size: 1rem;
  padding-left: .5rem;
`

export {
  StyledStatsSection,
  StyledSectionField,
  StyledSectionFieldTitle
}
