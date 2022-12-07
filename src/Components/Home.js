import React from "react";
import SearchForm from "./SearchForm";
import WordList from "./WordList";
import WordInform from "./WordInform";
const Home = () => {
  return (
    <div className="img-container">
      <img src="./Kitob.png" />
      <SearchForm />
      <WordList />
      <WordInform />
    </div>
  );
};

export default Home;
