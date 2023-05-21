import { useState } from 'react'
import './App.css'
import { nanoid } from 'nanoid'
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
      .then(data => setQuizQuestions(data.results.map(question => {
        return {
            id: nanoid(),
            question: question.question,
            correct_answer: question.correct_answer,
            incorrect_answers: question.incorrect_answers
        }
      })))
  }

  return (
    <main>
      <BlobBackground />
      {!quizStarted ? <Welcome startQuiz={startQuiz}/> : <Quiz quiz={quizQuestions}/>}
    </main>
  )
}