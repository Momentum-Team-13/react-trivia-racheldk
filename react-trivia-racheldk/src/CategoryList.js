import React, { useEffect } from 'react'
import axios from 'axios'

function CategoryList () {
    useEffect(() => {
        axios
            .get('https://opentdb.com/api_category.php')
            .then((response) => console.log(`${response}`))
    }, [])
    
    return (
        <div>
            <h1>Category List</h1>
            
        </div>
    )
}

export default CategoryList