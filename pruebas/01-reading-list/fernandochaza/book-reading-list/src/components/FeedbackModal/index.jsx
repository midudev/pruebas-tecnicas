import { useAtom, useSetAtom } from 'jotai'
import { displayFeedbackModal, formSent } from '../../context/atoms'

import ContactForm from './ContactForm'
import RocketIcon from './Icons/RocketIcon'
import ModalFooter from './ModalFooter'

import { useAutoAnimate } from '@formkit/auto-animate/react'

import {
  StyledModalBackground,
  StyledModalContainer,
  StyledHeader,
  StyledCloseButton,
  StyledSuccessContainer,
  StyledSuccessMessage
} from './styles'

const FeedbackModal = () => {
  const [isFormSent, setIsFormSent] = useAtom(formSent)
  const setDisplayForm = useSetAtom(displayFeedbackModal)
  const [parent] = useAutoAnimate()

  const handleCloseModal = () => {
    setDisplayForm(false)
    setIsFormSent(false)
  }

  return (
    <StyledModalBackground>
      <StyledModalContainer ref={parent}>
        <StyledCloseButton onClick={handleCloseModal}>✖</StyledCloseButton>
        {!isFormSent ? (
          <>
            <StyledHeader>Your feedback is greatly appreciated!</StyledHeader>
            <ContactForm />
          </>
        ) : (
          <>
            <StyledSuccessContainer>
              <StyledSuccessMessage>
                Your message was sent!
              </StyledSuccessMessage>
              <RocketIcon></RocketIcon>
              <StyledSuccessMessage>
                Thanks for taking the time to provide feedback
              </StyledSuccessMessage>
            </StyledSuccessContainer>
          </>
        )}
        <ModalFooter />
      </StyledModalContainer>
    </StyledModalBackground>
  )
}

export default FeedbackModal
