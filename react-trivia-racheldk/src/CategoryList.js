import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Question from './Question'

function CategoryList ({categories}) {
    const [selectedCat, setSelectedCat] = useState(null)
    const [categoryURL, setCategoryURL] = useState()


    const handleSelectedCat = (cat) => {
        console.log(`seclected category: ${cat.name}, id: ${cat.id}`)
        setSelectedCat(cat)
        makeURL(cat)
    }
    // console.log(`seletedCat: ${selectedCat}`)

    const makeURL = (selectedCat) => {
        setCategoryURL(`https://opentdb.com/api.php?amount=10&category=${selectedCat.id}&type=multiple`)
    }


    return (
        <div>
            {selectedCat ? (
                <Question categoryURL={categoryURL}/>
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

