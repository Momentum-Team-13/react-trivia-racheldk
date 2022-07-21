import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Correct from './Correct'
import Incorrect from './Incorrect'

function Question ({ categoryURL }) {
    const [questionList, setQuestionList] = useState([])
    const [question, setQuestion] = useState(null)
    // const [index, setIndex] = useState(0)
    const [userAnswer, setUserAnswer] = useState(null)
    const [correctAnswer, setCorrectAnswer] = useState(null)
    const [answered, setAnswered] = useState(null)

    const handleAnswers = (userAnswer) => {
        setUserAnswer(userAnswer)
        setCorrectAnswer(questionList[0].correct_answer)
        evaluateAnswers(userAnswer, correctAnswer)
    }

    const evaluateAnswers = (userAnswer, correctAnswer) =>
        {userAnswer === correctAnswer ? (
            // if userAnswer is the same as correctAnswer, setAnswered to correct
            setAnswered("correct")
        ) : (
            // if userAnswer is not the same as correctAnswer, setAnswered to incorrect
            setAnswered("incorrect")
        )}

    
    useEffect(() => {
        console.log(`url: ${categoryURL}`)
        axios
        .get(categoryURL)
        .then((res) => {
            setQuestionList(res.data.results)
        }
        )}, [])  


    // useEffect((questionList) =>{
        // setQuestion(questionList[0])
        // console.log(questionList[0])
    // })    
    
    return (
        <div>
            <h1>Question</h1>
            {questionList.length>0 && 
            (<div>
            <p>{questionList[0].question}</p>
            <div>
                <button type="button" value={questionList[0].correct_answer} onClick={(e)=>handleAnswers(e.target.value)}>{questionList[0].correct_answer}</button>

                {questionList[0].incorrect_answers.map((answer) =>
                <button type="button" value={answer} onClick={(e)=>handleAnswers(e.target.value)}>{answer}</button>
                )}
            </div>
                {(answered === "correct") ? (
                    <>
                        <p>userAnswer: {userAnswer}</p>
                        <p>correctAnswer: {correctAnswer}</p>
                        <Correct />
                    </>   
                ) : (answered === "incorrect") ? (
                    <>
                        <p>userAnswer: {userAnswer}</p>
                        <p>correctAnswer: {correctAnswer}</p>
                        <Incorrect />
                    </>
                ) : (
                    'No answer chosen'
                )}


            {/* {userAnswer === correctAnswer ? (
                    // go to Correct component
                    // console.log('you are correct!')
                    <>
                        <p>userAnswer: {userAnswer}</p>
                        <p>correctAnswer: {correctAnswer}</p>
                        <Correct />
                    </>
                    ) : (
                        // go to Incorrect component 
                    // console.log('nope, that is wrong')
                    <>
                        <p>userAnswer: {userAnswer}</p>
                        <p>correctAnswer: {correctAnswer}</p>
                        <Incorrect />
                    </>
                )
                } */}
            </div>
            )
}
        </div>

)
}

export default Question 

