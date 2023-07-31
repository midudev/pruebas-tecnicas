import React from 'react';
import LectureList from './LectureList';
import styled from 'styled-components';
import poyoLogo from '../assets/poyoLogo.svg';

const Header = () => {

  const ContainerHeader = styled.header`
    padding: 20px;
    margin: 5px 0;
    color: #000000;
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    `;

  const LogoTitle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    `;


  return (
    <ContainerHeader>
      <LogoTitle>
        <img src={poyoLogo} alt="Poyo Logo" />
        <h1>Poyo Books</h1>
      </LogoTitle>
      <LectureList />
    </ContainerHeader>
  );

};

export default Header;
