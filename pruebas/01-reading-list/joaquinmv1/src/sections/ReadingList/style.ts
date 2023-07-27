import styled from "styled-components";

export const ContainerReadingList = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 30%;
  color: #fff;
  
  h4 {
    text-align: center;
    padding:.6rem;
    color: #ef9517;
    color: #DBDBDB;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  
  span {
    color: #695EFF;
  }

  @media screen and (max-width: 850px){
    display: none;
  }
`

export const SectionReading = styled.section`
  width: 100%;
  color: #fff;
  border: 1px solid #695EFF;
  padding: 1rem;
  height: 750px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 2px; 
  }

  &::-webkit-scrollbar-track {
    background-color: #000; 
  }

  &::-webkit-scrollbar-thumb {
    background-color: #c2c2c2;
    border-radius: 4px; 
  }


`

export const UlReading = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-wrap: wrap;
  gap: 10px;

  @media screen and (max-width: 850px){
    display: none;
  }
  `
export const List = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  width: 100%;
  font-size: bold;

 img {
  width: 20%;
 }

 button {
  display: block;
  padding: 0.5rem;
  border: none;
  font-weight: bold;
  background-color: #695EFF;
  color: #fff;
  border-radius: 50%;
 }

 button:hover{
  background-color: #7167ff;
 }

 @media screen and (max-width: 1350px) {
  flex-direction: column;
  padding: .5rem;
  gap: 10px;

  img{
    width: 70%;
  }

  p{
    width: 100%;
  }
 }
`
export const ContainerClearButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: .2rem 0;
  gap: 10px;

  p{
    font-weight: bold;
  }
`

export const InfoBook = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  p{
    width: 80%;
    text-align: center;
  }
`