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
                <div>
                    <Question categoryURL={categoryURL} setSelectedCat={setSelectedCat}/>
                </div>
                ) : (
                    <div>
                        <div>
                            <div className='mt-6 mb-3'>
                                <div className="is-size-2 has-text-weight-semibold">Trivia</div>
                                <div className='is-size-4 has-text-weight-light pt-4'>Pick a Category</div>
                            </div>
                            </div>
                        <div className='flex-box'>
                        {categories.map((category) =>
                        <div >
                            <div className='button is-info is-outlined m-2' onClick={()=>handleSelectedCat(category)}>{category.name}
                            </div>
                        </div>
                        )}
                        </div>
                    </div>   
            )}

        </div>
    )
}

export default CategoryList





// console.log(`categories: ${categories}`)

// const [selectedCat, setSelectedCat] = useState(null)

