import styled from 'styled-components'

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 64px;
  height: 30px;
  background-color: ${(props) => props.theme.accentBg};
  border-radius: 25px;
  padding: 2px;
  padding-left: 4px;

  @media screen and (max-width: 340px) {
    margin-top: 1rem;
  }
`

const StyledLabel = styled.label`
  position: absolute;
  display: inline-block;
  width: 50px;
  height: 25px;
  margin: auto 4px;
`

const StyledSpan = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition: background-color 0.2s ease;

  &::before {
    position: absolute;
    content: '';
    left: -3px;
    top: 2px;
    width: 22px;
    height: 22px;
    background-color: ${(props) => props.theme.accent1Color};
    border-radius: 50%;
    transition: transform 0.3s ease;
  }

  @media screen and (max-width: 636px) {
    &::before {
      top: 1px;
    }
  }

  @media screen and (max-width: 341px) {
    &::before {
      top: 2px;
    }
  }
`

const StyledInput = styled.input`
  display: none;

  &:checked + span::before {
    transform: translateX(33px);
  }
`

const StyledMoonIcon = styled.svg``

const StyledSunIcon = styled.svg``

export {
  StyledLabel,
  StyledContainer,
  StyledMoonIcon,
  StyledSunIcon,
  StyledSpan,
  StyledInput
}
