import React from 'react'
import './Card.css'
import {Cards} from './components/cards/Cards.jsx'

function Records({recs})  {
    
  return (
    <div>
        {recs.map((rec)=>
        <Cards />
        )}
      </div>
  )
}

export default Cards
