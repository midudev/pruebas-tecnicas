import { styled } from "styled-components";

export const SectionBooks = styled.section`
  width: 30%;
  min-height: 750px;
  color: #fff;

  display: flex;
  flex-direction: column;

  h4{
    padding:.6rem;
    text-align: center;
    color: #ef9517;
    color: #DBDBDB;
    font-weight: bolder;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  span {
    color: #695EFF;
  }

  
  @media screen and (max-width: 850px){
    width: 50%;
  }
`

export const UlList = styled.ul`
  width: 100%;
  display: grid;
  place-items: center;
  max-height: 750px;

  grid-template-columns: repeat(auto-fill, minmax(min(100%, 10em), 1fr));
  gap: .5rem;
  position: sticky;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 4px; 
  }

  &::-webkit-scrollbar-track {
    background-color: #000; 
  }

  &::-webkit-scrollbar-thumb {
    background-color: #c2c2c2;
    background-color: #6D31FA;
    background-color: #695EFF;
    border-radius: 4px; 
  }
`

export const LiList = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5px;
  width: 100%;
  cursor: pointer;
  transition: all 0.3s ease;

  img{
    width: 150px;
    height: 220px;
    object-fit: cover;
    transition: all 0.3s ease;
  }

  img:hover {
    filter: grayscale(1);
    transform: scale(1.1);
  }

  h4 {
    width: 170px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  p{
    color: #acacac;
  }
`

export const P = styled.p`
  color: #fff;
  font-size: 1.2rem;
  width: 400px;
  font-weight: bold;
  margin: auto;
`