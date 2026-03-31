import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import PlateCard from './components/PlateCard'
function App() {

  const plates = [
    { id: 1, name: "Pizza", price: 50, is_available: true },
    { id: 2, name: "Burger", price: 40, is_available: false },
    { id: 3, name: "Tacos", price: 30, is_available: true }
  ];

  return (
  <>
    {plates.map((p) => (
      <PlateCard
        key={p.id}
        name={p.name}
        price={p.price}
        is_available={p.is_available}
      />
    ))}
  </>
);
}


export default App
