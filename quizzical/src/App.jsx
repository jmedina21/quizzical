import { useState } from 'react'
import './App.css'
import Welcome from './components/Welcome'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Welcome />
    </main>
  )
}

