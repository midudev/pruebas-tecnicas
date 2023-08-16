import styled from 'styled-components'

const StyledButtonContainer = styled.div`
  height: 100%;
  background-image: linear-gradient(90deg, #842cd7, #21f5f1);
  border-radius: 4px;
  padding: 1px;
`

const StyledButton = styled.button`
  background-color: ${(props) => props.theme.contrastBg};
  color: ${(props) => props.theme.mainTxt};
  border: 1px solid transparent;
  padding: 0.3rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 400;
  width: 100%;
`

export { StyledButtonContainer, StyledButton }
