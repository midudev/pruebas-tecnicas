import propTypes from 'prop-types'
import { StyledCardsSection } from './styles'

const CardsContainer = ({ children }) => {
  return <StyledCardsSection>{children}</StyledCardsSection>
}

CardsContainer.propTypes = {
  children: propTypes.node
}

export default CardsContainer
