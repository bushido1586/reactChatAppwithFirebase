import Container from './components/container';
import EmailAdderComponent from './components/addName';
import React from 'react';
 
function App() {
 const [name,setName] = React.useState()
 return (
   <div className="App">
     {!name && <EmailAdderComponent setName={setName} />}
     {name && <Container name={name} />}
   </div>
 );
}
 
export default App;
