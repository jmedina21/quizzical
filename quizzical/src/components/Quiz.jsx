export default function Quiz(props) {

    function resultCalc() {
        let results = 0
        for (let i = 0; i < props.results.length; i++) {
            if (props.results[i] === true) {
                results += 1
            }              
        }
        return results
    }

    const quiz = props.quiz.map((question, index) => {
        const checkedStyle = props.results[index] === true ? 
        {backgroundColor: "#60c476", color: "#000"} : 
        {backgroundColor: "#b43b3b", opacity: "0.7"}

        const answers = question.allAnswers.map((answer, index) => {            
            //label styles
            const selectedStyle = question.selectedAnswer === index ? {backgroundColor: "#4D5B9E"} : null

            return (
                <div>
                    <input 
                        type="radio" 
                        name={question.id}
                        value={answer}
                        key={index + question.id}
                        className="answer-btn"
                        id={index + question.id} 
                        onChange={(e) => props.selectAnswer(e, question.id, index)}
                        disabled={props.answersChecked ? true : false}
                    />
                    <label 
                        htmlFor={index + question.id} 
                        className={`answer-label ${props.answersChecked && question.correctAnswer === answer ? "correct-answer" : ""}`}
                        style={props.answersChecked && question.selectedAnswer === index ?
                             checkedStyle : selectedStyle }
                    >{answer}</label>
                </div>
            )
        })

       return (        
            <div className="quiz-header">
                <h4>{question.question}</h4>
                <div className="answer-list">
                    {answers}
                </div>
            </div>
        )
    })

    return (
        <div className="quiz">
            {quiz}
                {props.answersChecked ? <h3 className="results">
                    {"You scored " + resultCalc() + "/" + props.results.length + " correct answers"}</h3> : null}
                <button 
                    className="check-btn" 
                    onClick={()=>props.checkAnswers()} >
                        {!props.answersChecked ? "Check Answers" : "Play Again"}</button>
        </div>
    )
}