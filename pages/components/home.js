import TryCompLevelStyle from "./TryCompLevelStyle";
import { useEffect } from "react";
import React from 'react'

const home = () => {
useEffect(() => {
  fetch('http://localhost:3000/api/newendp')
  fetch('http://localhost:3000/api/newendp')
  .then((response) => response.json())
  .then((data) => console.log(data));
}, [])


  return (
    <div>
        <TryCompLevelStyle/>
        <div>
<p>home</p>
        </div>
    </div>
  )
}

export default home