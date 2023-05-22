import { useEffect, useState } from 'react'
import './App.css'
import he from 'he'
import { nanoid } from 'nanoid'
import BlobBackground from './components/BlobBackground'
import Welcome from './components/Welcome'
import Loader from './components/Loader'
import Quiz from './components/Quiz'

export default function App() {

  const [quizStarted, setQuizStarted] = useState(false)
  const [quizQuestions, setQuizQuestions] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&type=multiple")
      .then(response => response.json())
      .then(data => setQuizQuestions(data.results.map(question => {

        const decodedQuestion = he.decode(question.question);
        const decodedCorrectAnswer = he.decode(question.correct_answer);
        const decodedIncorrectAnswers = question.incorrect_answers.map(answer => he.decode(answer));

        return {
            id: nanoid(),
            question: decodedQuestion,
            correctAnswer: decodedCorrectAnswer,
            incorrectAnswers: decodedIncorrectAnswers,
        }
      })))
      .then(() => setLoading(false))
  }, [])

  function startQuiz() {
    setQuizStarted(true)
  }

  return (
    <main>
      <BlobBackground />
      {loading && quizStarted? <Loader /> : null}
      {!quizStarted ? <Welcome startQuiz={startQuiz}/> : <Quiz quiz={quizQuestions}/>}
    </main>
  )
}