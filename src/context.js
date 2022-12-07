import React, { useState, useContext, useEffect } from "react";
import Data from "./Components/Data";
// make sure to use https
const AppContext = React.createContext();


const AppProvider = ({ children }) => {
  const [data,setData]=useState(Data)
const changeHandler =(e)=>{
}
  const findIndex= (e)=>{
    
    setIndex(e.target.id)
  }
  const [newData,setNewData]=useState([])
  const [index,setIndex]=useState('Abbat')
  return (
    <AppContext.Provider  value={{
      findIndex,
      data,
      setIndex,
      index,
      newData,
      changeHandler
      }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };