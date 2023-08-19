import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'

import { useSetAtom } from 'jotai'
import { userReadingList } from '../../context/atoms'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import { StyledPageContainer } from './styles'

import { getUserReadingList } from '../../Utils/getUserReadingList'

const RootPage = () => {
  const setReadingList = useSetAtom(userReadingList)

  useEffect(() => {
    const currentData = getUserReadingList()
    setReadingList(currentData)
  }, [setReadingList])

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
