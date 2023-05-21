import he from 'he'

export default function Quiz(props) {

    const questions = props.quiz.map((question, index) => {
        const decodedQuestion = he.decode(question.question);
        const decodedCorrectAnswer = he.decode(question.correct_answer);
        const decodedIncorrectAnswers = question.incorrect_answers.map(answer => he.decode(answer));
        
        const allAnswers = decodedIncorrectAnswers.concat(decodedCorrectAnswer);

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
          <div className="quiz-header" key={index}>
            <h3>{decodedQuestion}</h3>
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
