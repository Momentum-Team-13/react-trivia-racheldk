import './App.css';
import React, { useEffect, useState } from 'react'
import CategoryList from './CategoryList';
import axios from 'axios'


function App() {
  const [categories, setCategories] = useState([])

  const handleResponse = (response) => {
    for (let object of response) {
      // console.log(object.name)
      categories.push(object.name)
    }
    // console.log(`categories: ${categories} type: ${typeof(categories)}`)
  }
  
  useEffect(() => {
      axios
          .get('https://opentdb.com/api_category.php')
          .then((response) => handleResponse(response.data.trivia_categories))
  }, [])

  

  return (
    <div>
      <CategoryList categories={categories}/>
    </div>
  );
}

export default App;




