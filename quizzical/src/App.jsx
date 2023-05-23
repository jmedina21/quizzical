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
  const [loading, setLoading] = useState(true)
  const [quizQuestions, setQuizQuestions] = useState([])
  const [answersChecked, setAnswersChecked] = useState(false)
  const [results, setResults] = useState([])

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
              allAnswers: shuffle([...decodedIncorrectAnswers, decodedCorrectAnswer]),
              selectedAnswer: "",
            }
      })))
      .then(() => setLoading(false))
      .then(() => {
        for(let i = 0; i < 5; i++){
        }
      })
  }, [])

  function startQuiz() {
    setQuizStarted(true)
  }

  function selectAnswer(e, questionId, index) {
    setQuizQuestions(prevQuiz => {
      return prevQuiz.map(question => {
        if (question.id === questionId) {
          return {
            ...question,
            selectedAnswer: index
          };
        }
        return question;
      });
    });
  }

  function checkAnswers() {
    setAnswersChecked(true)
    const newResults = []
    for (let i = 0; i < quizQuestions.length; i++) {
      if (quizQuestions[i].allAnswers[quizQuestions[i].selectedAnswer] === quizQuestions[i].correctAnswer) {
        newResults.push(true)
      } else {
        console.log("incorrect")
        newResults.push(false)
      }
    }
    setResults(newResults)
    // if (answersChecked) {
    //   setAnswersChecked(false)
    // }
  }

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))
        let temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
    return array
}

  return (
    <main>
      <BlobBackground />
      {loading && quizStarted ? <Loader /> : null}
      {!quizStarted ? <Welcome startQuiz={startQuiz}/> 
        : <Quiz 
            quiz={quizQuestions} 
            selectAnswer={selectAnswer}
            checkAnswers={checkAnswers}
            answersChecked={answersChecked}
            results={results}
            />}
    </main>
  )
}