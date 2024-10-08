import React, { useState } from 'react'

const NewComp = () => {
    let [name, setName] = useState("tamil");
    // setName("tamil");
  return( <div>{name}</div>);
}

export default NewComp