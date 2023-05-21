import { useState } from 'react'
import './App.css'
import BlobBackground from './components/BlobBackground'
import Welcome from './components/Welcome'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <BlobBackground />
      <Welcome />
    </main>
  )
}

