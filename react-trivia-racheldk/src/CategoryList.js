import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Question from './Question'

function CategoryList ({categories}) {
    const [selectedCat, setSelectedCat] = useState(null)
    const [categoryURL, setCategoryURL] = useState(`https://opentdb.com/api.php?amount=10&category=9&type=multiple`)
    const [questionList, setQuestionList] = useState()

    const handleSelectedCat = (cat) => {
        console.log(`seclected category: ${cat.name}, id: ${cat.id}`)
        setSelectedCat(cat)
        setCategoryURL(`https://opentdb.com/api.php?amount=10&category=${cat.id}&type=multiple`)
        console.log(`url: ${categoryURL}`)
    }

    useEffect(() => {
        axios
        .get(categoryURL)
        .then((res) => setQuestionList(res.data.results)
    )}, [])

    return (
        <div>
            {selectedCat ? (
                <Question questionList={questionList}/>
                ) : (
                categories.map((category) =>
                    <div>
                    <button onClick={()=>handleSelectedCat(category)}>{category.name}</button>
                    </div>
                  
                )
            )}

        </div>
    )
}

export default CategoryList





// console.log(`categories: ${categories}`)

// const [selectedCat, setSelectedCat] = useState(null)

