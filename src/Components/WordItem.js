import React from 'react'
import { useGlobalContext } from '../context'
const WordItem = () => {
  const {data,findIndex,index,capitalized}=useGlobalContext()
  
  const newItem=data.filter((item)=>item.name===capitalized)
  return <>
        {

         newItem.length===0? data.map((item,indexItem)=>{
            const {name}=item
            return(
              <h4 className={item.name===index?'show':''}  id={name} key={indexItem} onClick={findIndex} >
                {name}
              </h4>
            )
          }):newItem.map((item,indexItem)=>{
            const {name}=item
            return(
              <h4 className={item.name===index?'show':''}  id={name} key={indexItem} onClick={findIndex} >
                {name}
              </h4>
            )
          })

        }
  </>
}

export default WordItem