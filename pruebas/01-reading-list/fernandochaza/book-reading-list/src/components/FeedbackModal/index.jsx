import { useAtom, useSetAtom } from 'jotai'
import { displayFeedbackModal, formSent } from '../../context/atoms'

import WhatsappIconLink from './Icons/WhatsappLink'
import ContactForm from './ContactForm'
import DiscordIconLink from './Icons/DiscordLink'
import LinkedInIconLink from './Icons/LinkedInLink'

import {
  StyledModalBackground,
  StyledModalContainer,
  StyledHeader,
  StyledFooter,
  StyledFooterMessage,
  StyledContainer,
  StyledCloseButton,
  StyledSuccessContainer,
  StyledSuccessMessage
} from './styles'

import { WHATSAPP_URL, DISCORD_URL, LINKEDIN_URL } from '../../constants/global'
import RocketIcon from './Icons/RocketIcon'

const FeedbackModal = () => {
  const [isFormSent, setIsFormSent] = useAtom(formSent)
  const setDisplayForm = useSetAtom(displayFeedbackModal)

  const handleCloseModal = () => {
    setDisplayForm(false)
    setIsFormSent(false)
  }

  return (
    <StyledModalBackground>
      <StyledModalContainer>
        <StyledCloseButton onClick={handleCloseModal}>✖</StyledCloseButton>
        {!isFormSent ? (
          <>
            <StyledHeader>Your feedback is greatly appreciated!</StyledHeader>
            <ContactForm />
          </>
        ) : (
          <>
            <StyledSuccessContainer>
              <StyledSuccessMessage>Your message was sent!</StyledSuccessMessage>
              <RocketIcon></RocketIcon>
              <StyledSuccessMessage>
                Thanks for taking the time to provide feedback
              </StyledSuccessMessage>
            </StyledSuccessContainer>
          </>
        )}
        <StyledFooter>
          <StyledContainer>
            <StyledFooterMessage>Contact me directly on:</StyledFooterMessage>
            <WhatsappIconLink href={WHATSAPP_URL} target='_blank' />
            <DiscordIconLink href={DISCORD_URL} target='_blank' />
            <LinkedInIconLink href={LINKEDIN_URL} target='_blank' />
          </StyledContainer>
        </StyledFooter>
      </StyledModalContainer>
    </StyledModalBackground>
  )
}

export default FeedbackModal
