import React from 'react'

function GameOver ({setSelectedCat}) {
    return (
        <div>
            <h1>Game Over</h1>
            <div>
                <button type="button" onClick={()=>setSelectedCat(null)}>Start New Game</button>
            </div>
        </div>
    )
}

export default GameOver