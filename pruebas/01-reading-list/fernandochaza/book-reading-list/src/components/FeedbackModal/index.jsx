import { useState } from 'react'

import {
  StyledModalBackground,
  StyledModalContainer,
  StyledPrompt
} from './styles'
import WhatsappButton from './WhatsappButton'
import EmailButton from './EmailButton'

const FeedbackModal = () => {
  const [selectedForm, setSelectedForm] = useState()

  const handleSelectedForm = (selectedForm) => {
    setSelectedForm(selectedForm)
  }

  return (
    <StyledModalBackground>
      <StyledModalContainer>
        <StyledPrompt>I appreciate you take the time for this!</StyledPrompt>
        <StyledPrompt>Please, select a contact method</StyledPrompt>
        <div>
          <WhatsappButton
            onClick={() => handleSelectedForm('Whatsapp')}
          ></WhatsappButton>
          <EmailButton
            value='Email'
            onClick={() => handleSelectedForm('Email')}
          ></EmailButton>
        </div>
      </StyledModalContainer>
    </StyledModalBackground>
  )
}

export default FeedbackModal
