import { useState } from 'react'
import ToDo from './ToDo.jsx'
import Header from './Header.jsx'
// import './App.css'

function App() {

  return(
    <>
      <Header/>
      <div style={{width : '90%', margin:'auto', marginTop:'1em'}}><ToDo/></div>
    </>
  ) 
}

export default App;
