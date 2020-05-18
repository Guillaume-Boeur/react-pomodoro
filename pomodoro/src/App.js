import React, { useState } from "react";
// Don't forget to add my futur component as :
// import Minus from './Minus';
// import Play from './Play';
// import Plus from './Plus';
// import Reset from './Reset';
// import Time from './Time';

//Parent
const App = () => {
  const [time, setTime] = useState(0);

  return (
    <div className="App">
      <p>{'Il reste : ${time}'}</p>
      <button onClick={() => setTime(time + 1)}>{"+"}</button>
      <button onClick={() => setTime(time - 1)}>{"-"}</button>
      <button>{"Play"}</button>
      <button>{"Reset"}</button>

    </div>
  );
  
}

export default App;
