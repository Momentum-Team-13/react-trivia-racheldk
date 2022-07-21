import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Correct ({index, stateChanger}) {
    return (
        <div>
            <h1>Correct!</h1>
            <div>
                <button type="button" onClick={() => {stateChanger(index+1)}}
                >Next Question</button>
            </div>
        </div>
    )
}

export default Correct 