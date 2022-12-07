import React from 'react'
import { useGlobalContext } from '../context'
import '../App.css'
const SearchForm = () => {
  const {changeHandler}=useGlobalContext()
  return (
    <div className='search-box'>
      <input onChange={changeHandler} type='search' className='search-input' placeholder='Search' >

      </input>
    </div>
  )
}

export default SearchForm