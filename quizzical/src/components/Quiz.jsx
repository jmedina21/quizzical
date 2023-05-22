export default function Quiz(props) {

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1))
            let temp = array[i]
            array[i] = array[j]
            array[j] = temp
        }
        return array
    }

    const questions = props.quiz.map((question, index) => {
        
        const allAnswers = question.incorrectAnswers.concat(question.correctAnswer);
          
        return (
          <div className="quiz-header" key={index}>
            <h4>{question.question}</h4>
            <div className='answer-list'>
                {shuffle(allAnswers).map((answer, index) => {
                    return <div className='answer-btn' key={index}>{answer}</div>
                })}
            </div>
          </div>
        );
      });
      

    return (
        <div className='quiz'>
            {questions}
            <button className='check-btn'>Check Answers</button>
        </div>
    )
}
