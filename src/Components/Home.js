import React from "react";
import SearchForm from "./SearchForm";
import WordList from "./WordList";
import WordInform from "./WordInform";
import WordItem from "./WordItem";
import "../App.css";
import { useGlobalContext } from "../context";

const Home = () => {
  const { setLatter, show, findIndex } = useGlobalContext();

  const latterF = (e) => {
    setLatter(e.target.id);
    const harf = document.querySelectorAll(".latter");
    harf.forEach((item) => {
      item.classList.remove("lattershow");
    });
    e.target.classList.add("lattershow");
  };

  return (
    <>
      <div className="img-container">
        <div className="relative-box">
          <img src="./Kitob.png" alt={"rasm"} />
          <div onClick={latterF} id="all" className="latter latterall">
            ^
          </div>
          <div onClick={latterF} id="a" className="latter lattera">
            A
          </div>
          <div onClick={latterF} id="b" className="latter latterb">
            B
          </div>
          <div onClick={latterF} id="d" className="latter latterd">
            D
          </div>
          <div onClick={latterF} id="e" className="latter lattere">
            E
          </div>
          <div onClick={latterF} id="f" className="latter latterf">
            F
          </div>
          <div onClick={latterF} id="g" className="latter latterg">
            G
          </div>
          <div onClick={latterF} id="h" className="latter latterh">
            H
          </div>
          <div onClick={latterF} id="i" className="latter latteri">
            I
          </div>
          <div onClick={latterF} id="j" className="latter latterj">
            J
          </div>
          <div onClick={latterF} id="k" className="latter latterk">
            K
          </div>
          <div onClick={latterF} id="l" className="latter latterl">
            L
          </div>
          <div onClick={latterF} id="m" className="latter latterm">
            M
          </div>
          <div onClick={latterF} id="n" className="latter lattern">
            N
          </div>
          <div onClick={latterF} id="o" className="latter lattero">
            O
          </div>
          <div onClick={latterF} id="p" className="latter latterp">
            P
          </div>
          <div onClick={latterF} id="q" className="latter latterq">
            Q
          </div>
          <div onClick={latterF} id="r" className="latter latterr">
            R
          </div>
          <div onClick={latterF} id="s" className="latter latters">
            S
          </div>
          <div onClick={latterF} id="t" className="latter lattert">
            T
          </div>
          <div onClick={latterF} id="u" className="latter latteru">
            U
          </div>
          <div onClick={latterF} id="v" className="latter latterv">
            V
          </div>
          <div onClick={latterF} id="x" className="latter latterx">
            X
          </div>
          <div onClick={latterF} id="y" className="latter lattery">
            Y
          </div>
          <div onClick={latterF} id="z" className="latter latterz">
            Z
          </div>
          <SearchForm />
          <WordList />
          <WordInform />
        </div>
      </div>

      <div className="wrapper">
        <div className="word-container">
          <SearchForm />
          {/* <div className="select">
            <select onChange={selectL} name="latter" id="latter">
              <option id="all">
                all
              </option>
              <option id="a" >
                a
              </option>
              <option id="b" >
                b
              </option>
              <option id="d" >
                d
              </option>
              <option id="e" >
                e
              </option>
              <option id="f" >
                f
              </option>
              <option id="g" >
                g
              </option>
              <option id="h" >
                h
              </option>
              <option id="i" >
                i
              </option>
              <option id="j" >
                j
              </option>
              <option id="k" >
                k
              </option>
              <option id="l" >
                l
              </option>
              <option id="m" >
                m
              </option>
              <option id="n" >
                n
              </option>
              <option id="o" >
                o
              </option>
              <option id="p" >
                p
              </option>
              <option id="q" >
                q
              </option>
              <option id="r" >
                r
              </option>
              <option id="s" >
                s
              </option>
              <option id="t" >
                t
              </option>
              <option id="u" >
                u
              </option>
              <option id="v" >
                v
              </option>
              <option id="x" >
                x
              </option>
              <option id="y" >
                y
              </option>
              <option id="z" >
                z
              </option>
            </select>
          </div> */}
          <div className="latterList" >
          <div onClick={latterF} id="all" className="latter latterall">
            ^
          </div>
          <div onClick={latterF} id="a" className="latter lattera">
            A
          </div>
          <div onClick={latterF} id="b" className="latter latterb">
            B
          </div>
          <div onClick={latterF} id="d" className="latter latterd">
            D
          </div>
          <div onClick={latterF} id="e" className="latter lattere">
            E
          </div>
          <div onClick={latterF} id="f" className="latter latterf">
            F
          </div>
          <div onClick={latterF} id="g" className="latter latterg">
            G
          </div>
          <div onClick={latterF} id="h" className="latter latterh">
            H
          </div>
          <div onClick={latterF} id="i" className="latter latteri">
            I
          </div>
          <div onClick={latterF} id="j" className="latter latterj">
            J
          </div>
          <div onClick={latterF} id="k" className="latter latterk">
            K
          </div>
          <div onClick={latterF} id="l" className="latter latterl">
            L
          </div>
          <div onClick={latterF} id="m" className="latter latterm">
            M
          </div>
          <div onClick={latterF} id="n" className="latter lattern">
            N
          </div>
          <div onClick={latterF} id="o" className="latter lattero">
            O
          </div>
          <div onClick={latterF} id="p" className="latter latterp">
            P
          </div>
          <div onClick={latterF} id="q" className="latter latterq">
            Q
          </div>
          <div onClick={latterF} id="r" className="latter latterr">
            R
          </div>
          <div onClick={latterF} id="s" className="latter latters">
            S
          </div>
          <div onClick={latterF} id="t" className="latter lattert">
            T
          </div>
          <div onClick={latterF} id="u" className="latter latteru">
            U
          </div>
          <div onClick={latterF} id="v" className="latter latterv">
            V
          </div>
          <div onClick={latterF} id="x" className="latter latterx">
            X
          </div>
          <div onClick={latterF} id="y" className="latter lattery">
            Y
          </div>
          <div onClick={latterF} id="z" className="latter latterz">
            Z
          </div>

             </div>
          <div className="word-box">
            <WordItem />
          </div>
        </div>
        <div className={show ? "inform-container show" : "inform-container"}>
          <WordInform />
          <div className="backButton">
            <button onClick={findIndex}>Orqaga</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
