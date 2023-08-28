import { useForm } from 'react-hook-form'
import {
  StyledColoredButton,
  StyledForm,
  StyledInput,
  StyledTextArea,
  StyledContactInfo
} from './styles'
import { toast } from 'sonner'

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = (data) => console.log(data)

  const onError = () => {
    if (errors.Name) {
      toast.error(errors.Name?.message)
    } else if (errors.Message) {
      toast.error(errors.Message?.message)
    }
  }

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit, onError)}>
      <label htmlFor='name' aria-label='Enter your name'>
        <StyledInput
          id='name'
          type='text'
          name='name'
          placeholder='Your name'
          {...register('Name', { required: 'Name is required' })}
        />
      </label>
      <label htmlFor='message' aria-label='Enter the message'>
        <StyledTextArea
          id='message'
          placeholder='Message'
          {...register('Message', { required: 'Message is required' })}
        />
      </label>
      <StyledContactInfo>
        These are optional. But I&apos;d love to keep in touch!
      </StyledContactInfo>
      <label htmlFor='email' aria-label='Enter your Email'>
        <StyledInput
          id='email'
          type='email'
          name='email'
          placeholder='Email'
          {...register('Email')}
        />
      </label>
      <label htmlFor='phone' aria-label='Enter your phone number'>
        <StyledInput
          id='phone'
          type='tel'
          name='phone'
          placeholder='Phone number'
          {...register('Phone')}
        />
      </label>

      <StyledColoredButton>Send my message</StyledColoredButton>
    </StyledForm>
  )
}

export default ContactForm
