import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Correct ({handleNext}) {
    return (
        <div>
            <h1>Correct!</h1>
            <div>
                <button type="button" onClick={() =>{handleNext()}}
                >Next Question</button>
            </div>
        </div>
    )
}

export default Correct 