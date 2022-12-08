import React from "react";
import { useGlobalContext } from "../context";
import "../App.css";
const WordInform = () => {
  const { index, data } = useGlobalContext();
  const newData = data.filter((elem) => elem.name === index);
  return (
    <>
      {newData.map((item) => {
        return (
          <div key={item.name} className="wordabout-box">
            <div className="aboutrelative">
              <div className="finish-about">
                <p className="nick-name1"> ~~{item.type}~~ </p>
                <p className="nick-name">{item.name}</p>
                <p>
                  <span className="info-name" > {item.name}- </span>
                  <span>{item.info}</span>
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default WordInform;
