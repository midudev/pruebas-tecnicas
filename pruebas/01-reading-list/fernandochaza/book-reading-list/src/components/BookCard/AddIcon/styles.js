import styled from 'styled-components'

const StyledBookIcon = styled.svg`
  position: absolute;
  right: 8px;
  top: 10px;
`

const StyledAddIcon = styled.svg`
  position: absolute;
  top: 2px;
  right: 6px;
`

const StyledAddButton = styled.button`
  border: none;
  cursor: pointer;
  color: ${(props) => props.theme.contrastBg};
  transition: color .25s ease;
`

export { StyledBookIcon, StyledAddIcon, StyledAddButton }
