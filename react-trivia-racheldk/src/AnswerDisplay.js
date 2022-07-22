import React, {useEffect, useState} from 'react'

function AnswerDisplay ({questionList, index, handleAnswers }) {
    const [answerChoices, setAnswerChoices] = useState([])
    const [randomAnswers, setRandomAnswers] = useState([])

    const shuffleAnswers = (answerChoices) => {
        setRandomAnswers(answerChoices.sort(() => Math.random() - 0.5))
    }

    
    useEffect (() => {
        console.log(`incorrect answers: ${questionList[index].incorrect_answers}`)
        setAnswerChoices(questionList[index].incorrect_answers)
        
    }, [questionList, index])
    
    useEffect (() =>{
        answerChoices.push(questionList[index].correct_answer)
        shuffleAnswers(answerChoices)
    }, [answerChoices, questionList, index])
    
    return (
        <div className='card-content'>
            { answerChoices.length > 0 &&
            (<>
            {/* <div>answerChoices: {answerChoices}</div>
            <div>randomAnswers: {randomAnswers}</div> */}
                {randomAnswers.map((answer) =>
                <div className="m-2">
                    <button type="button" className="button is-info is-outlined"value={answer} onClick={(e)=>handleAnswers(e.target.value)}>{answer}</button>
                </div>)}
                
            </>) 
            }
        </div>
    )
}

export default AnswerDisplay


