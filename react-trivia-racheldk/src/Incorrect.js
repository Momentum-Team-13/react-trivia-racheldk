import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Incorrect ({index, handleNext, handleEndGame, correctAnswer}) {
    return (
        <div>
            <div className='has-text-centered'>Nope, the answer is {correctAnswer}</div>
            { index<9 ? (
                <div className='has-text-right'>
                    <button type="button" className='button is-justify-self-flex-end' onClick={() =>{handleNext()}}
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

export default Incorrect