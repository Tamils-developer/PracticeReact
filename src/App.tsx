import React, { createContext, Dispatch, SetStateAction, useEffect, useState } from 'react'
import NewComp from './NewComp';
import Comp1 from './Comp1';
import Comp2 from './Comp2';

const App = () => {
  const [toggle, setToggle] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(count);
  },[count])

  const handleToggle = () => {
    setToggle(!toggle);
    setCount((count) => count + 1);
    
    console.log("===>",count);
    // newFun();
  }
   
  const newFun = () => { 
    console.log(count);
  }

  return (
    <div>
      <button onClick={handleToggle}>Change component</button>
      <div>{toggle && <Comp1 />}</div>
      {!toggle && <Comp2 />}
    </div>
  );
}

export default App