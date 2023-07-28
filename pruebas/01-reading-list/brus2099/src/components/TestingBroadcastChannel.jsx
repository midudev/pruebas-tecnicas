import React from "react";

const TestingBroadcastChannel = () => {

  /*
  const bc = new BroadcastChannel('myChannel');
  
  const sendMessagesToChannel = () => {
    bc.postMessage('Hello from TestingBroadcastChannel.jsx');
    bc.postMessage({ prop: "a new value", number: 99 });
  };

  bc.addEventListener('message', (event) => {
    console.log('received message!!')
    console.log(event.data);
  });

  bc.close();
  */

  return (
    <div>
      <p>BroadcastChannel</p>
    </div>
  );
}

export default TestingBroadcastChannel;