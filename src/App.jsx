
// import Button from "./button" 
import List from "./components/List";
import Form from "./components/Form";

import { useState } from "react";

function App(){
 const [firstName,setFirstName]=useState('abc')
// firstName is always abc but the onclick chnages are happening in function 
   const handleClick=()=>{
    setFirstName('xyz')
    console.log(firstName);
   }
  return (
    <div>
      <p>{firstName}</p>
     
      <button onClick={handleClick}
       className="bg-blue-500 py-2 px-6 rounded-md m-2 text-white">click</button>
       <List/>
       <Form/>
      
      
    </div>

  )
 }

export default App;

