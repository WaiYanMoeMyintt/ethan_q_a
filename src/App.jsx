import { useState } from 'react'
import './App.css'
import Primary from './context/Primary'
import Nav from './component/Nav'
function App() {

  return (
     <Primary>
         <Nav />
     </Primary>
  )
}

export default App
