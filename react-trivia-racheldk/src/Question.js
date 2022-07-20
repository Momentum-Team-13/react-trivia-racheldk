import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Question ({ categoryURL }) {
    const [questionList, setQuestionList] = useState([])
    // const [question, setQuestion] = useState()
    // const [index, setIndex] = useState(0)

//    useEffect(()=>{
//     setQuestion(questionList[index])
//    })

    useEffect(() => {
        console.log(`url: ${categoryURL}`)
        axios
        .get(categoryURL)
        .then((res) => setQuestionList(res.data.results)
        // question = value of question key in 1st object in the array of results from the API  
        // .then((res) => setQuestion(res.data.results[0].question)
        )}, [])
        // console.log('question: ' + questionList[0].question)   
        
        return (
            <div>
            <h1>Question</h1>
            {questionList.length>0 && 
            (<p>{questionList[0].question}</p>)
}
        </div>

)
}

export default Question 

