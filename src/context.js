import React, { useState, useContext } from "react";
import Data from "./Components/Data";
// make sure to use https
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [data, setData] = useState(Data);
  const changeHandler = (e) => {};
  const findIndex = (e) => {
    setIndex(e.target.id);
    setShow(!show)
  };
  const [show,setShow]=useState(false)
  const [newData, setNewData] = useState([]);
  const [index, setIndex] = useState("Abbat");
  const [title, setTitle] = useState("");
  const capitalized = title.charAt(0).toUpperCase() + title.slice(1);
  const [latter,setLatter]=useState('')
  return (
    <AppContext.Provider
      value={{
        findIndex,
        data,
        setIndex,
        index,
        newData,
        changeHandler,
        title,
        setTitle,
        capitalized,
        setLatter,
        latter,
        setData,
        setNewData,
        show
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
