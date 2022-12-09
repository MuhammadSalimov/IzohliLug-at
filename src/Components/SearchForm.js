import React, { useRef } from 'react'
import { useGlobalContext } from '../context'
import '../App.css'
const SearchForm = () => {
  const {setTitle}=useGlobalContext()
  const qiymat = useRef()

  const SearchForma = (e) => {
    e.preventDefault()
    setTitle(qiymat.current.value)
  }
  return (
    <div className='search-box'>
      <form onSubmit={SearchForma}>
      <input ref={qiymat} onChange={SearchForma}  type='search' className='search-input' placeholder='Qidiruv'/>
      </form>
    </div>
  )
}

export default SearchForm