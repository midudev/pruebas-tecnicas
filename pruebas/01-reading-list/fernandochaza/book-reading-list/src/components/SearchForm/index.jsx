import { PagesFilterContainer, StyledAside, StyledForm, StyledRadioInput, StyledRadioLabel, StyledSubmitButton, StyledTextInput, StyledTextLabel } from './styles'

const SearchForm = () => {
  return (
    <StyledAside>
      <StyledForm>
        <StyledTextLabel>
          Book name <StyledTextInput type='text' placeholder='Search a book...' />
        </StyledTextLabel>
        <StyledTextLabel>
          Author <StyledTextInput type='text' placeholder='Search an author...' />
        </StyledTextLabel>
        <PagesFilterContainer>
          Max. Pages
          <StyledRadioLabel>
            <StyledRadioInput name='book-pages' type='radio' value='100' /> 100
          </StyledRadioLabel>
          <StyledRadioLabel>
            <StyledRadioInput name='book-pages' type='radio' value='200' /> 200
          </StyledRadioLabel>
          <StyledRadioLabel>
            <StyledRadioInput name='book-pages' type='radio' value='300' /> 300
          </StyledRadioLabel>
          <StyledRadioLabel>
            <StyledRadioInput name='book-pages' type='radio' value='500' /> 500
          </StyledRadioLabel>
        </PagesFilterContainer>
        <StyledSubmitButton type='submit'>Find my books</StyledSubmitButton>
      </StyledForm>
    </StyledAside>
  )
}

export default SearchForm
