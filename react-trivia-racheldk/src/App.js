import './App.css';
import React, { useEffect, useState } from 'react'
import CategoryList from './CategoryList';
import axios from 'axios'
import 'bulma/css/bulma.min.css';



function App() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    axios
    .get('https://opentdb.com/api_category.php')
    .then((res) => setCategories(res.data.trivia_categories))
}, []) 

  return (
      <div className='chunk'>
        <CategoryList categories={categories}/>
      </div>
  );
}

export default App;




