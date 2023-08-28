import WhatsappIconLink from '../Icons/WhatsappLink'
import DiscordIconLink from '../Icons/DiscordLink'
import LinkedInIconLink from '../Icons/LinkedInLink'

import { StyledContainer, StyledFooter, StyledFooterMessage } from './styles'

import {
  WHATSAPP_URL,
  DISCORD_URL,
  LINKEDIN_URL
} from '../../../constants/global'

const ModalFooter = () => {
  return (
    <StyledFooter>
      <StyledContainer>
        <StyledFooterMessage>Contact me directly on:</StyledFooterMessage>
        <WhatsappIconLink href={WHATSAPP_URL} target='_blank' />
        <DiscordIconLink href={DISCORD_URL} target='_blank' />
        <LinkedInIconLink href={LINKEDIN_URL} target='_blank' />
      </StyledContainer>
    </StyledFooter>
  )
}

export default ModalFooter
