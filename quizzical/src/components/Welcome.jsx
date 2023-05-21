export default function Welcome(props) {
    return (
        <div className="Welcome">
            <h1>Welcome to Quizzical!</h1>
            <p>Are you ready to take a quick quizz?</p>
            <button className="start-btn" onClick={props.startQuiz}>Start Quiz</button>
        </div>
    )
}
