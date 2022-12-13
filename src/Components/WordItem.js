import React from 'react'
import { useGlobalContext } from '../context'
const WordItem = () => {
  const {data,findIndex,index,capitalized,latter}=useGlobalContext()
  const newItem=data.filter((item)=>item.name===capitalized)
  const dataLatter=data.filter((item)=>
   latter==='all'? data: item.type===latter

  )
  return <>
        {

dataLatter.length===0? (newItem.length===0? data.map((item,indexItem)=>{
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
          })):(newItem.length===0? dataLatter.map((item,indexItem)=>{
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
          }))

        }
  </>
}

export default WordItem