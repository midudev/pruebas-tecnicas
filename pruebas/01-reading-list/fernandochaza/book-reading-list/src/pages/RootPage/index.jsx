import { Outlet } from 'react-router-dom'

import { useSetAtom } from 'jotai'
import { userCompletedBooks, userReadingList } from '../../context/atoms'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import { StyledPageContainer } from './styles'

import { getUserReadingList } from '../../Utils/getUserReadingList'
import { getUserCompletedBooks } from '../../Utils/getUserCompletedBooks'

const RootPage = () => {
  const setReadingList = useSetAtom(userReadingList)
  const setCompletedBooks = useSetAtom(userCompletedBooks)

  const currentReadingList = getUserReadingList()
  setReadingList(currentReadingList)

  const currentCompletedBooks = getUserCompletedBooks()
  setCompletedBooks(currentCompletedBooks)

  return (
    <>
      <StyledPageContainer>
        <Header />
        <Outlet />
        <Footer />
      </StyledPageContainer>
    </>
  )
}

export default RootPage
