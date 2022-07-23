import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Incorrect ({index, handleNext, handleEndGame, correctAnswer, decodeHtml}) {
    return (
        <div>
            <div className='has-text-centered has-text-weight-normal is-size-5'>Nope, the answer is {decodeHtml(correctAnswer)}</div>
            { index<9 ? (
                <div className='has-text-right'>
                    <button type="button" className='button is-info is-light mr-4 mb-3 is-outlined' onClick={() =>{handleNext()}}
                    >Next Question</button>
                </div>
            ) : (
                <div className='has-text-right'>
                    <button type="button" className='button is-info is-light mr-4 mb-3' onClick={() => handleEndGame()}>See Final Score</button>
                </div>
            )
            }
        </div>
    )
}

export default Incorrect