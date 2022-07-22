import React, { useEffect, useState } from 'react'
import Confetti from 'react-confetti'

function Correct ({index, handleNext, handleEndGame, score, setScore}) {
    useEffect(() => {
        setScore(score+1)
    }, [])
    
    return (
        <div>
            <Confetti />
            <div className='has-text-centered'>You got it!</div>
            { index<9 ? (
                <div className='has-text-right'>
                    <button type="button" onClick={() =>handleNext()}
                    >Next Question</button>
                </div>
            ) : (
                <div className='has-text-right'>
                    <button type="button" onClick={() => handleEndGame()}>See Final Score</button>
                </div>
            )
            }


        </div>
    )
}

export default Correct 