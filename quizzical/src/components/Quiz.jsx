
export default function Quiz(props) {

    const selectedStyle = {
        backgroundColor: "#4D5B9E"
      }

    const quiz = props.quiz.map(question => {

        const answers = question.allAnswers.map((answer, index) => {
            return (
                <div>
                    <input type="radio" name={question.id} 
                    value={answer} key={index + question.id} className="answer-btn"
                    id={index + question.id} onChange={(e) => props.selectAnswer(e, question.id, index)}
                    />
                    <label htmlFor={index + question.id} className="answer-label"
                        style={props.selectedAnswer === index ? selectedStyle : null}
                    >{answer}</label>
                </div>
            )
        })

       return (        
            <div>
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
            <button className="check-btn">Submit</button>
        </div>
    )
}