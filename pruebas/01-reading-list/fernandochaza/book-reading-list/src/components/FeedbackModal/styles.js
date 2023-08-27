import styled from 'styled-components'

const StyledModalBackground = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  z-index: 6;

  align-items: center;
  justify-content: center;
`

const StyledModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  min-width: 576px;
  height: max-content;
  border-radius: 12px;
  border: 1px solid ${(props) => props.theme.mainBorder};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  background-color: ${(props) => props.theme.mainBg};
`

const StyledPrompt = styled.p`
  color: ${(props) => props.theme.mainTxt};
  text-align: center;
  font-size: 1.2rem;
  margin: 0.5rem auto;
`

const StyledSelectMessage = styled.p``

export {
  StyledModalBackground,
  StyledModalContainer,
  StyledPrompt,
  StyledSelectMessage
}
