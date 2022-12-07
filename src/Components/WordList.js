import React, { useState } from "react";
import WordItem from "./WordItem";
import { useGlobalContext } from "../context";
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
