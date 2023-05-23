export default function Quiz(props) {

    const selectedStyle = {
        backgroundColor: "#4D5B9E"
      }

    const correctStyle = {
        backgroundColor: "#94D7A2"
    }

    const incorrectStyle = {
        backgroundColor: "#F8BCBC"
    }

    function resultCalc() {
        let results = 0
        for (let i = 0; i < props.results.length; i++) {
            if (props.results[i] === true) {
                results += 1
            }              
        }
        return results
    }

    const quiz = props.quiz.map(question => {

        const answers = question.allAnswers.map((answer, index) => {
            return (
                <div>
                    <input type="radio" name={question.id} 
                    value={answer} key={index + question.id} className="answer-btn"
                    id={index + question.id} onChange={(e) => props.selectAnswer(e, question.id, index)}
                    disabled={props.answersChecked ? true : false}
                    />
                    <label htmlFor={index + question.id} className="answer-label"
                        style={question.selectedAnswer === index ? selectedStyle : null}
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
                <button className="check-btn" onClick={()=>props.checkAnswers()} >Check Answers</button>
        </div>
    )
}