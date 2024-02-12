import {useState } from "react";
//import {actionPagesReducer,initialState } from '../reducers/PagesReducer'

function useCar(){
/*   const [state, dispatch]=useReducer(actionPagesReducer,initialState);
  console.log(state) 

 */
 // const carInitialState = JSON.parse(window.localStorage.getItem('car')) || []
  const [switchCase, setSwitchCase]=useState(carInitialState); 

const addToCar= (event,bookElement)=>{

  setSwitchCase([...switchCase,bookElement])
  //const newArray=[...carInitialState].push(bookElement) 
    console.log([switchCase])
    console.log(event)
  //return {switchCase}
  }
  function functionStorage(arr){
    window.localStorage.setItem('car', JSON.stringify(arr))
    }
    
  function functionBoolean() {
    const valueBoolean = switchCase.length>0 ? true : false

  }
  return  {switchCase, addToCar}

}


//export default useCar;