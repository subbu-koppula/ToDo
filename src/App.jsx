import { useState } from 'react'
import ToDo from './ToDo.jsx'
import Header from './Header.jsx'
import './App.css'

function App() {

  return(
    <>
      <Header/>
      <div className='mainBody'><ToDo/></div>
    </>
  ) 
}

export default App;
