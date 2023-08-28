import {
  StyledModalBackground,
  StyledModalContainer,
  StyledHeader,
  StyledFooter,
  StyledFooterMessage,
  StyledContainer
} from './styles'

import WhatsappIconLink from './Icons/WhatsappLink'
import ContactForm from './ContactForm'
import DiscordIconLink from './Icons/DiscordLink'
import LinkedInIconLink from './Icons/LinkedInLink'

import { WHATSAPP_URL, DISCORD_URL, LINKEDIN_URL } from '../../constants/global'

const FeedbackModal = () => {
  return (
    <StyledModalBackground>
      <StyledModalContainer>
        <StyledHeader>Your feedback is greatly appreciated!</StyledHeader>
        <ContactForm />
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
