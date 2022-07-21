import React, { useEffect, useState } from 'react'
import axios from 'axios'
import GameOver from './GameOver'

function Correct ({index, handleNext, handleEndGame}) {
    return (
        <div>
            <h1>Correct!</h1>
            { index<9 ? (
                <div>
                    <button type="button" onClick={() =>{handleNext()}}
                    >Next Question</button>
                </div>
            ) : (
                <div>
                    <button type="button" onClick={() => handleEndGame}>See Final Score</button>
                </div>
            )
            }


        </div>
    )
}

export default Correct 