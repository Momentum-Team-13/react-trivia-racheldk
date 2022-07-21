import React from 'react'

function GameOver ({setSelectedCat, score}) {
    return (
        <div>
            <h1>Game Over</h1>
                <div>Total score: {score}</div>
            <div>
                <button type="button" onClick={()=>setSelectedCat(null)}>Start New Game</button>
            </div>
        </div>
    )
}

export default GameOver