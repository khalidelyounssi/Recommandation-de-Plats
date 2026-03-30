import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import PlateCard from './components/PlateCard'

function App() {
  
  return  <>
      <PlateCard name="Pizza" price={50} is_available={true} />
      <PlateCard name="Burger" price={40} is_available={false} />
      <PlateCard name="Tacos" price={30} is_available={true} />
    </>
}


export default App
