import React, { useEffect, useState } from 'react'
import axios from 'axios'

function CategoryList ({categories}) {
console.log(categories)

    return (
        <div>
            <h1>Category List</h1>
            {categories.map((category) =>
            <div>{category}</div>
            )}
        </div>
    )
}

export default CategoryList