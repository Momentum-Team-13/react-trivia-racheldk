import React, {useEffect, useState} from 'react'

function AnswerDisplay ({questionList, index, handleAnswers }) {
    const [answerChoices, setAnswerChoices] = useState([])
    const [randomAnswers, setRandomAnswers] = useState([])

    const shuffleAnswers = (answerChoices) => {
        setRandomAnswers(answerChoices.sort(() => Math.random() - 0.5))
        // do the random stuff. 
        // push to randomAnswers array 
        // but when will this be called?! 
    }

    
    useEffect (() => {
        console.log(`incorrect answers: ${questionList[index].incorrect_answers}`)
        setAnswerChoices(questionList[index].incorrect_answers)
        
    }, [questionList, index])
    
    useEffect (() =>{
        answerChoices.push(questionList[index].correct_answer)
        shuffleAnswers(answerChoices)
    }, [answerChoices])
    
    return (
        <div>
            { answerChoices.length > 0 &&
            (<>
            {/* <div>answerChoices: {answerChoices}</div>
            <div>randomAnswers: {randomAnswers}</div> */}
                {randomAnswers.map((answer) =>
                    <button type="button" value={answer} onClick={(e)=>handleAnswers(e.target.value)}>{answer}</button>)}
            </>) 
            }
        </div>
    )
}

export default AnswerDisplay





// add correct answer to answerChoices
// map through incorrect answres to add all incorrect answers to answerChoices
// shuffle answers
// return: map through randomAnswers to display
