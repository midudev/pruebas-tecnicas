import styled from 'styled-components'

const StyledContainer = styled.div`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  z-index: 1;
  color: ${(props) => props.theme.accent1Color};
  cursor: pointer;

  transition: transform 0.3s ease-in-out;

  @media screen and (min-width: ${(props) => props.theme.breakpointLg}) {
    bottom: 2.5rem;
    right: 2.5rem;
  }

  &::before,
  &::after {
    display: ${(props) => props.$display ? 'inline' : 'none'};
    --scale: 0;
    position: absolute;
    content: '';
    top: -1rem;
    left: 50%;
    transform: translateX(-90%) translateY(-100%) scale(var(--scale));
    transition: 150ms transform;
    transform-origin: bottom right;
  }

  &::before {
    content: attr(data-tooltip);
    padding: 0.5rem;
    width: max-content;
    max-width: 188px;
    height: auto;
    border-radius: 12px;
    text-align: center;
    line-height: 1.3rem;
    color: ${(props) => props.theme.mainBg};
    background-color: ${(props) => props.theme.mainTxt};
  }

  &::after {
    content: '';
    border: 12px solid transparent;
    border-top-color: ${(props) => props.theme.mainTxt};
    transform: translateX(-50%) translateY(-3%) scale(var(--scale));
    transform-origin: top right;

  }

  &:hover::before,
  &:hover::after {
    --scale: 1;
  }


  &:hover {
    transform: scale(1.05);
    color: ${(props) => props.theme.dark};
  }

  &:hover svg {
    fill: ${(props) => props.theme.dark};
  }

  &:hover svg path {
    fill: ${(props) => props.theme.light};
  }

  &:hover svg g {
    stroke: ${(props) => props.theme.dark};
  }
`

export { StyledContainer }
