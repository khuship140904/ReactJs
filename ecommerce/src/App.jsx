import React, { useEffect, useState } from 'react'
import Categories from './components/categories/Categories.jsx'
import Cards from './components/cards/Cards.jsx'
import { fetchRecords } from './App.js'

const App = () => {
   let [recs,setRecs] = useState([]);

   useEffect(()=>{
    fetchRecords(setRecs);
   },[]);

  return (
    <div>
      <Categories />
      <Records recs={recs} />
    
    </div>
  )
}

export default App
