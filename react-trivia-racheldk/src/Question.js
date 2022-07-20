import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Question ({ questionList }) {
    // const [question, setQuestion] = useState(questionList[0])
    // const [index, setIndex] = useState(0)

    // useEffect(() => {
    //     setQuestion(questionList[index])
    // }, [questionList, index])

    
    return (
        <div>
            <h1>Question</h1>
            <p>{questionList[0].category}</p>
            <p>question: {questionList[0].question}</p>
        </div>

)
}

export default Question 


// useEffect(() => {
//     axios
//     .get('https://opentdb.com/api.php?amount=10&category=9')
//     .then((res) => setQuestion(res.data.results)
// )}, [])