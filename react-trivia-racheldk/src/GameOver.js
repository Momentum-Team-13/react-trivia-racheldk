import React from 'react'

function GameOver ({setSelectedCat, score}) {
    return (
        <div className='card mt-6 has-text-centered'>
            <h1 className='is-size-4 pt-5'>Game Over</h1>
                <div className='pt-3 pb-6 is-size-2'>Total score: {score}</div>
            <div>
                <button type="button"  className='button is-info is-light mr-4 mb-3 is-outlined' onClick={()=>setSelectedCat(null)}>Start New Game</button>
            </div>
        </div>
    )
}

export default GameOver