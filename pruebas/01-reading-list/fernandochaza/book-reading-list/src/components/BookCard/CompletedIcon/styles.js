import styled from 'styled-components'

const StyledAddButton = styled.button`
  border: none;
  cursor: pointer;
  color: ${(props) => props.theme.mainBg};

  transition: color .25s ease;
`

const StyledCheckIcon = styled.svg`
  position: absolute;
  width: 40px;
  height: 40px;
  right: 8px;
  top: 60px;
`

export { StyledAddButton, StyledCheckIcon }
