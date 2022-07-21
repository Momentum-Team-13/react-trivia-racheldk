import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Incorrect ({handleNext}) {
    return (
        <div>
            <h1>Incorrect!</h1>
            <div>
                <button type="button" onClick={() => {handleNext()}}
                >Next Question</button>
            </div>
        </div>
    )
}

export default Incorrect