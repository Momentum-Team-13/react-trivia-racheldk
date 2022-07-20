import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Question ({ categoryURL }) {
    // const [questionList, setQuestionList] = useState()
    const [question, setQuestion] = useState()
    // // const [index, setIndex] = useState(0)

   

    useEffect(() => {
        console.log(`url: ${categoryURL}`)
        axios
        .get(categoryURL)
        .then((res) => setQuestion(res.data.results[0].question)
        // .then((res) => setQuestion(res.data.results)
    )}, [])
    
    return (
        <div>
            <h1>Question</h1>
            <p>{question}</p>
            {/* <p>question: {question[0].question}</p> */}
        </div>

)
}

export default Question 

