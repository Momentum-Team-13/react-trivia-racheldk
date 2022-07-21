import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Correct from './Correct'
import Incorrect from './Incorrect'

function Question ({ categoryURL }) {
    const [questionList, setQuestionList] = useState([])
    const [index, setIndex] = useState(0)
    // const [question, setQuestion] = useState(questionList[index])
    const [userAnswer, setUserAnswer] = useState(null)
    // const [correctAnswer, setCorrectAnswer] = useState(null)
    const [answered, setAnswered] = useState(null)

    const handleAnswers = (userAnswer) => {
        setUserAnswer(userAnswer)
        evaluateAnswers(userAnswer, questionList[index].correct_answer)
    }
    
    const evaluateAnswers = (userAnswer, correctAnswer) =>
    {userAnswer === correctAnswer ? (
        // if userAnswer is the same as correctAnswer, setAnswered to correct
        setAnswered("correct")
        ) : (
            // if userAnswer is not the same as correctAnswer, setAnswered to incorrect
            setAnswered("incorrect")
            )}

    const handleNext = () => {
        setIndex(index+1)
        setAnswered(null)
    }        
                    
            
    useEffect(() => {
        console.log(`url: ${categoryURL}`)
        axios
        .get(categoryURL)
        .then((res) => {
            setQuestionList(res.data.results)
        }
    )}, [])  


    // useEffect(() =>{
    //     setQuestion(questionList[index])
    //     console.log(questionList[index])
    // }, [questionList, index])    
    
    return (
        <div>
            {questionList.length>0 && 
            (<div>
                <h1>Question {index +1} of 10</h1>
            <p>{questionList[index].question}</p>
            <div>
                <button type="button" value={questionList[index].correct_answer} onClick={(e)=>handleAnswers(e.target.value)}>{questionList[index].correct_answer}</button>

                {questionList[index].incorrect_answers.map((answer) =>
                <button type="button" value={answer} onClick={(e)=>handleAnswers(e.target.value)}>{answer}</button>
                )}

            </div>
                {(answered === "correct") ? (
                    <>
                        <p>userAnswer: {userAnswer}</p>
                        <p>correctAnswer: {questionList[index].correct_answer}</p>
                        <Correct handleNext={handleNext}/>
                    </>   
                ) : (answered === "incorrect") ? (
                    <>
                        <p>userAnswer: {userAnswer}</p>
                        <p>correctAnswer: {questionList[index].correct_answer}</p>
                        <Incorrect handleNext={handleNext}/>
                    </>
                ) : (
                    'No answer chosen'
                )}
            </div>
            )
}
        </div>

)
}

export default Question 

