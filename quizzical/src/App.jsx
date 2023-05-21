import { useState } from 'react'
import './App.css'
import BlobBackground from './components/BlobBackground'
import Welcome from './components/Welcome'
import Quiz from './components/Quiz'

export default function App() {

  const [quizStarted, setQuizStarted] = useState(false)
  const [quizQuestions, setQuizQuestions] = useState([])

  function startQuiz() {
    setQuizStarted(true)
    fetch("https://opentdb.com/api.php?amount=5&type=multiple")
      .then(response => response.json())
      .then(data => setQuizQuestions(data.results))
  }

  return (
    <main>
      <BlobBackground />
      {!quizStarted ? <Welcome startQuiz={startQuiz}/> : <Quiz quiz={quizQuestions}/>}
    </main>
  )
}