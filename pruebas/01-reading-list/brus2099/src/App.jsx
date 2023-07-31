import './App.css'
import BookList from './components/BookList'
import Filter from './components/Filter'
import Header from './components/Header'
import Status from './components/Status'
import { DataProvider } from './context/DataContext'
import styled, { createGlobalStyle } from "styled-components";

function App() {

  const GlobalStyle = createGlobalStyle`
    * {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
      font-family: 'Roboto Condensed', sans-serif;
    }

    h1, h2, h3 {
      font-weight: 400;
      font-family: 'Playfair Display', serif;
    }

    body {
      background-color: #fafafa;
    }
    `;

  const ContentWrapper = styled.div`
    max-width: 85%;
    margin: 0 auto;
    padding: 20px;

    @media (min-width: 768px) {
      max-width: 80%;
    }

    @media (min-width: 1024px) {
      max-width: 70%;
    }
    `;


  return (
    <DataProvider>
      <GlobalStyle />
      <ContentWrapper>
        <Header />
        <Status />
        <Filter />
        <BookList />
      </ContentWrapper>
    </DataProvider>
  )
}

export default App