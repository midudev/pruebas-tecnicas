import styled from 'styled-components'

const StyledButtonContainer = styled.div`
  width: 100%;
  height: max-content;
  background-image: linear-gradient(90deg, #842cd7, #21f5f1);
  border-radius: 4px;
  padding: 1px;

  &:hover button {
    background-color: transparent;
    color: ${(props) => props.theme.mainBg};
    font-weight: 600;
  }
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
  position: relative;

  transition: background-color 0.25s ease, color 0.25s ease,
    font-weight 0.25s ease;

  /* Wrapping label in a span to position it */
  & span {
    position: absolute;
    top: 0.3rem;
    bottom: 0.3rem;
    left: 0.3rem;
    right: 0.3rem;
  }

  /* Using this to prevent button resizing when hover*/
  &:before {
    content: attr(data-label);
    font-weight: 600;
    font-size: 1rem;
    visibility: hidden;
    padding: 0.3rem;
  }
`

export { StyledButtonContainer, StyledButton }
