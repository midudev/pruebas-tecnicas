import React from 'react';

function Selector({field, record, object}) {

  let options = [...new Set(object.map(e=>e[record][field]).sort((a,b)=>a<b?-1:a>b?1:0))]

  console.log(options)




  return (
    <>
      <select name="cars" id="cars">
            {options.map(o=><option value="{o}" key={Math.random()}>{o}</option>)}
    </select>

    </>
  );
}

export default Selector;
