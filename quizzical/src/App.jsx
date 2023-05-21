import { useState } from 'react'
import './App.css'
import Blob1 from "./assets/blob 5.png"
import Blob2 from "./assets/blob 5-1.png"
import Welcome from './components/Welcome'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <div className="BlobsBackground">
        <img src={Blob1} className="blob1" />
        <img src={Blob2} className="blob2" />
      </div>
      <Welcome />
    </main>
  )
}

