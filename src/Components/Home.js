import React from "react";
import SearchForm from "./SearchForm";
import WordList from "./WordList";
import WordInform from "./WordInform";
import { useGlobalContext } from "../context";
const Home = () => {
  const {setLatter}=useGlobalContext()
  const latter = (e) => {
    setLatter(e.target.id)
  };
  return (
    <div className="img-container">
      <div className="relative-box">
        <img src="./Kitob.png" />
        <div onClick={latter} id="a" className="latter lattera">
          A
        </div>
        <div onClick={latter} id="b" className="latter latterb">
          B
        </div>
        <div onClick={latter} id="d" className="latter latterd">
          D
        </div>
        <div onClick={latter} id="e" className="latter lattere">
          E
        </div>
        <div onClick={latter} id="f" className="latter latterf">
          F
        </div>
        <div onClick={latter} id="g" className="latter latterg">
          G
        </div>
        <div onClick={latter} id="h" className="latter latterh">
          H
        </div>
        <div onClick={latter} id="i" className="latter latteri">
          I
        </div>
        <div onClick={latter} id="j" className="latter latterj">
          J
        </div>
        <div onClick={latter} id="k" className="latter latterk">
          K
        </div>
        <div onClick={latter} id="l" className="latter latterl">
          L
        </div>
        <div onClick={latter} id="m" className="latter latterm">
          M
        </div>
        <div onClick={latter} id="n" className="latter lattern">
          N
        </div>
        <div onClick={latter} id="o" className="latter lattero">
          O
        </div>
        <div onClick={latter} id="p" className="latter latterp">
          P
        </div>
        <div onClick={latter} id="q" className="latter latterq">
          Q
        </div>
        <div onClick={latter} id="r" className="latter latterr">
          R
        </div>
        <div onClick={latter} id="s" className="latter latters">
          S
        </div>
        <div onClick={latter} id="t" className="latter lattert">
          T
        </div>
        <div onClick={latter} id="u" className="latter latteru">
          U
        </div>
        <div onClick={latter} id="v" className="latter latterv">
          V
        </div>
        <div onClick={latter} id="x" className="latter latterx">
          X
        </div>
        <div onClick={latter} id="y" className="latter lattery">
          Y
        </div>
        <div onClick={latter} id="z" className="latter latterz">
          Z
        </div>
        <SearchForm />
        <WordList />
        <WordInform />
      </div>
    </div>
  );
};

export default Home;
