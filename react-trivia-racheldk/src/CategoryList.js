import React, { useEffect, useState } from 'react'
import axios from 'axios'

function CategoryList ({categories}) {
    // const [categories, setCategories] = useState([])


    return (
        <div>
            <h1>Category List</h1>
            {categories.map((category) =>
            <div>
                <button>{category.name}</button>
            </div>
            )}

        </div>
    )
}

export default CategoryList





// console.log(`categories: ${categories}`)

// const [selectedCat, setSelectedCat] = useState(null)


// const handleSelectedCat = (cat) => {
//     console.log(`seclected category: ${cat}`)
//     setSelectedCat(cat)
// }