import he from 'he'

export default function Quiz(props) {

    console.log(props.quiz)

    const questions = props.quiz.map((question, index) => {
        const decodedQuestion = he.decode(question.question);
        const decodedCorrectAnswer = he.decode(question.correct_answer);
        const decodedIncorrectAnswers = question.incorrect_answers.map(answer => he.decode(answer));
        console.log(decodedIncorrectAnswers);
        return (
          <div key={index}>
            <h2>{decodedQuestion}</h2>
            <p>{decodedCorrectAnswer}</p>
            <p>{decodedIncorrectAnswers}</p>
          </div>
        );
      });
      

    return (
        <div className='quiz'>
            <div className='quiz-header'>
                <h3 className='question'>How would you say hello in Spanish?</h3>
                <div className='answer-list'>
                    <div className='answer-btn'>adios</div>
                    <div className='answer-btn'>hola</div>
                    <div className='answer-btn'>hasta luego</div>
                    <div className='answer-btn'>hasta manana</div>
                </div>
            </div>
            <div className='quiz-header'>
                <h3 className='question'>How would you say hello in Spanish?</h3>
                <div className='answer-list'>
                    <div className='answer-btn'>adios</div>
                    <div className='answer-btn'>hola</div>
                    <div className='answer-btn'>hasta luego</div>
                    <div className='answer-btn'>hasta manana</div>
                </div>
            </div>
            <div className='quiz-header'>
                <h3 className='question'>How would you say hello in Spanish?</h3>
                <div className='answer-list'>
                    <div className='answer-btn'>adios</div>
                    <div className='answer-btn'>hola</div>
                    <div className='answer-btn'>hasta luego</div>
                    <div className='answer-btn'>hasta manana</div>
                </div>
            </div>
            <div className='quiz-header'>
                <h3 className='question'>How would you say hello in Spanish?</h3>
                <div className='answer-list'>
                    <div className='answer-btn'>adios</div>
                    <div className='answer-btn'>hola</div>
                    <div className='answer-btn'>hasta luego</div>
                    <div className='answer-btn'>hasta manana</div>
                </div>
            </div>
            <div className='quiz-header'>
                <h3 className='question'>How would you say hello in Spanish?</h3>
                <div className='answer-list'>
                    <div className='answer-btn'>adios</div>
                    <div className='answer-btn'>hola</div>
                    <div className='answer-btn'>hasta luego</div>
                    <div className='answer-btn'>hasta manana</div>
                </div>
            </div>
            <button className='check-btn'>Check Answers</button>
        </div>
    )
}
