import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Incorrect ({index, stateChanger}) {
    return (
        <div>
            <h1>Incorrect!</h1>
            <div>
                <button type="button" onClick={() => {stateChanger(index+1)}}
                >Next Question</button>
            </div>
        </div>
    )
}

export default Incorrect