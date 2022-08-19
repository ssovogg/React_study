import React, { useRef } from "react";
import style from "./SearchHeader.module.css";

function SearchHeader(props) {
  const formRef = useRef();
  const inputRef = useRef();
  const searchVideo = (e) => {
    e.preventDefault();
    props.onSearch(inputRef.current.value);
    formRef.current.reset();
  };

  return (
    <header className={style.header}>
      <div className={style.logo}>
        <img src="/images/logo.png" alt="logo"></img>
        <h1>YouTube</h1>
      </div>
      <form onSubmit={searchVideo} ref={formRef}>
        <input
          className={style.input}
          ref={inputRef}
          type="search"
          placeholder="search..."
        />
        <button className={style.button} type="submit">
          <img src="/images/search.png"></img>
        </button>
      </form>
    </header>
  );
}

export default SearchHeader;
