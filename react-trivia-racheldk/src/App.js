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
    <div className=''>
      {/* <div className='section is-small'>
        <div className="title">Trivia</div>
        <div className='subtitle'>Pick a Category</div>
      </div> */}
      <div className='chunk'>
        <CategoryList categories={categories}/>
      </div>
    </div>
  );
}

export default App;




