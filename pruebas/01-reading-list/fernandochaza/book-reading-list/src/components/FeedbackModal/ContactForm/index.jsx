import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser'

import { useSetAtom } from 'jotai'
import { formSent } from '../../../context/atoms'

import { toast } from 'sonner'

import {
  StyledColoredButton,
  StyledForm,
  StyledInput,
  StyledTextArea,
  StyledContactInfo
} from './styles'

const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const ContactForm = () => {
  const setIsFormSent = useSetAtom(formSent)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = async (data) => {
    const from = data.Name
    const email = data.Email
    const phone = data.Phone
    const message = data.Message

    const params = {
      from_name: from,
      message: message,
      email: email,
      phone: phone
    }

    try {
      const response = await emailjs.send(
        'readings_feedback',
        'template_oamls6w',
        params,
        PUBLIC_KEY
      )
      if (response.status === 200) {
        setIsFormSent(true)
        return
      }
      console.log(response)
    } catch (err) {
      console.error(err)
    }
  }

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
