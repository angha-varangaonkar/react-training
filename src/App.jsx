// file ka first letter should be capital
//jsx contains both html and react 
// rfce for normal function 
// fafce for arrow function 
// className
// curly braces for writing  number
// style ke liye object bana padega {()} 
// PROPS PARENT SE CHILD MAINE 
// PROPS -JS OBJECTS 
import Button from "./button" 
function App(){
  const styles={color:'red',backgroundColor:'blue'};
  return (
    <div>
      <Button text="click"/>
      <Button text="Submit"/>
      <Button text="apply"/>
      <Button text="contact"/>
      <h1 style={styles}>react</h1>
      <input maxLength={5}/>

     
    </div>

  )
 }

export default App

