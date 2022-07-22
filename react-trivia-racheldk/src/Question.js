import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Correct from './Correct'
import Incorrect from './Incorrect'
import GameOver from './GameOver'
import AnswerDisplay from './AnswerDisplay'

function Question ({ categoryURL, setSelectedCat }) {
    const [questionList, setQuestionList] = useState([])
    const [index, setIndex] = useState(0)
    const [userAnswer, setUserAnswer] = useState(null)
    const [answered, setAnswered] = useState(null)
    const [score, setScore] = useState(0)
    const [gameOver, setGameOver] = useState(false)

    const handleAnswers = (userAnswer) => {
        setUserAnswer(userAnswer)
        evaluateAnswers(userAnswer, questionList[index].correct_answer, score)
    }
    

    const evaluateAnswers = (userAnswer, correctAnswer) =>
    {userAnswer === correctAnswer ? (
        setAnswered("correct")
    ) : (
        setAnswered("incorrect")
        )}

    const handleNext = () => {
        setIndex(index+1)
        setAnswered(null)
    }        

    const handleEndGame = () => {
        setGameOver(true) 
    }
                    
    useEffect(() => {
        console.log(`url: ${categoryURL}`)
        axios
        .get(categoryURL)
        .then((res) => setQuestionList(res.data.results)
        )}, [])  
        
        
        return (
            <div>
                {/* <div>Total score: {score}</div> */}
            { gameOver === true ? (
                <GameOver setSelectedCat={setSelectedCat} score={score}/>
            ):  
                questionList.length>0 && 
                (<div>
                    <h1>Question {index +1} of 10</h1>
                <p>{questionList[index].question}</p>
                <div>
                    <AnswerDisplay questionList={questionList} index={index} handleAnswers={handleAnswers} />
                    {/* {randomAnswers.map((answer) =>
                    <button type="button" value={answer} onClick={(e)=>handleAnswers(e.target.value)}>{answer}</button>)} */}

                    {/* <button type="button" value={questionList[index].correct_answer} onClick={(e)=>handleAnswers(e.target.value)}>{questionList[index].correct_answer}</button>

                    {questionList[index].incorrect_answers.map((answer) =>
                    <button type="button" value={answer} onClick={(e)=>handleAnswers(e.target.value)}>{answer}</button>
                    )} */}

                </div>
                    {(answered === "correct") ? (
                        <>
                            <p>userAnswer: {userAnswer}</p>
                            <p>correctAnswer: {questionList[index].correct_answer}</p>
                            <Correct index={index} handleNext={handleNext} handleEndGame={handleEndGame} score={score} setScore={setScore}/>
                        </>   
                    ) : (answered === "incorrect") ? (
                        <>
                            <p>userAnswer: {userAnswer}</p>
                            <p>correctAnswer: {questionList[index].correct_answer}</p>
                            <Incorrect handleNext={handleNext} index={index} handleEndGame={handleEndGame} />
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

