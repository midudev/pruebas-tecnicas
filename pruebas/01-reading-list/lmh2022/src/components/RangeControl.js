import React from 'react';

function RangeControl({setCurrentValue, currentValue, object, item, attribute}) {


    const getMaxPage = object => {
        let maximumAttribute = Math.max(...object.map(e=>e[item][attribute]))
        return  maximumAttribute
      }


    const handleChange = (event) => {
        setCurrentValue(event.target.value)
      }
    





  return (
    <>
          <input type="range" id="page" name="page" min="0" max={getMaxPage(object)} onChange={handleChange} value={currentValue}></input>
      

    </>
  );
}

export default RangeControl;
