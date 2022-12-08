import React  from "react";
import WordItem from "./WordItem";
import "../App.css";
const WordList = () => {
  return (
    <div className="word-box">
      <div className="relative-word">
        <div  className="finish-box">
          <WordItem />
        </div>
      </div>
    </div>
  );
};

export default WordList;
