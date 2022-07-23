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

    function decodeHtml(html) {
        let txt = document.createElement("textarea");
        txt.innerHTML = html;
        return txt.value;
    }

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
                (<div className="question card">
                    <div>
                        <div className="has-text-centered has-text-weight-semibold is-size-3 pt-5">{decodeHtml(questionList[index].question)}</div>
                        <div className="has-text-centered"><AnswerDisplay questionList={questionList} index={index} handleAnswers={handleAnswers} decodeHtml={decodeHtml} /></div>
                            {(answered === "correct") ? (
                                <>
                                    {/* <p>userAnswer: {userAnswer}</p>
                                    <p>correctAnswer: {questionList[index].correct_answer}</p> */}
                                    <Correct index={index} handleNext={handleNext} handleEndGame={handleEndGame} score={score} setScore={setScore}/>
                                </>   
                            ) : (answered === "incorrect") ? (
                                <>
                                    {/* <p>userAnswer: {userAnswer}</p>
                                    <p>correctAnswer: {questionList[index].correct_answer}</p> */}
                                    <Incorrect handleNext={handleNext} index={index} handleEndGame={handleEndGame} correctAnswer={questionList[index].correct_answer} decodeHtml={decodeHtml}/>
                                </> 
                            ) : (
                                ''
                                )}
                                <div className='card-footer has-text-weight-light mt-5'>
                                    <div className='card-footer-item'>Question {index +1} of 10</div>
                                    <div className='card-footer-item'>{questionList[index].category}</div>
                                    <div className='card-footer-item'>Current Score: {score}</div>
                                </div>
                    </div>
                </div>  
                )
                }
            </div>

)
}

export default Question 

