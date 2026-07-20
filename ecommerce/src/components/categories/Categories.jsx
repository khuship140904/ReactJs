import React from 'react'
import {categories} from './categories.js'
import './categories.css'

const Categories = () => {
  return (
    <div className='categories'>
        {categories.map((cati)=>{
            return (
                <div className='singleCati'>
                <img src={cati.icon} onClick={showCategory}/>
                <h2>{cati.label}</h2>
                </div>
            )
                
    
        })}
      
    </div>
  )
}

export default Categories
