import React from 'react'
import { useGlobalContext } from '../context'
const WordItem = () => {
  const {data,findIndex,index}=useGlobalContext()
  

  return <>
        {
          data.map((item,indexItem)=>{
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