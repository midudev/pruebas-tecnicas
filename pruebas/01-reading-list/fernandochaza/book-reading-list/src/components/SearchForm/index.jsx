import ColoredButton from '../ColoredButton'
import {
  PagesFilterContainer,
  StyledAside,
  StyledFilterTitle,
  StyledForm,
  StyledFormTitle,
  StyledRadioInput,
  StyledRadioLabel,
  StyledTextInput,
  StyledTextLabel
} from './styles'

const SearchForm = () => {
  return (
    <StyledAside>
      <StyledFormTitle>Search</StyledFormTitle>
      <StyledForm>
        <StyledTextLabel>
          Book name{' '}
          <StyledTextInput type='text' placeholder='Search a book...' />
        </StyledTextLabel>
        <StyledTextLabel>
          Author{' '}
          <StyledTextInput type='text' placeholder='Search an author...' />
        </StyledTextLabel>
        <PagesFilterContainer>
          <StyledFilterTitle>Max. Pages</StyledFilterTitle>
          <StyledRadioLabel>
            <StyledRadioInput name='book-pages' type='radio' value='200' /> 200
          </StyledRadioLabel>
          <StyledRadioLabel>
            <StyledRadioInput name='book-pages' type='radio' value='500' /> 500
          </StyledRadioLabel>
          <StyledRadioLabel>
            <StyledRadioInput name='book-pages' type='radio' value='1000' /> 1000
          </StyledRadioLabel>
          <StyledRadioLabel>
            <StyledRadioInput name='book-pages' type='radio' value='2000' /> 2000
          </StyledRadioLabel>
        </PagesFilterContainer>
        <ColoredButton type='submit'>Search my books</ColoredButton>
      </StyledForm>
    </StyledAside>
  )
}

export default SearchForm
