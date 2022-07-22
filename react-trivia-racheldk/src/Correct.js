import React, { useEffect, useState } from 'react'

function Correct ({index, handleNext, handleEndGame, score, setScore}) {
    useEffect(() => {
        setScore(score+1)
    }, [])
    
    return (
        <div>
            <h1>Correct!</h1>
            {/* <div>Score: {score}</div> */}
            { index<9 ? (
                <div>
                    <button type="button" onClick={() =>handleNext()}
                    >Next Question</button>
                </div>
            ) : (
                <div>
                    <button type="button" onClick={() => handleEndGame()}>See Final Score</button>
                </div>
            )
            }


        </div>
    )
}

export default Correct 