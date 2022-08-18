import React, { useRef } from "react";
import style from './SearchHeader.module.css';

function SearchHeader(props) {
  const formRef = useRef();
  const inputRef = useRef();
  const searchVideo = (e) => {
    e.preventDefault();
    props.onSearch(inputRef.current.value);
    formRef.current.reset();
  }

  return (
    <header className={style.header}>
      <img src="/images/logo.png"></img>
      <h1>YouTube</h1>
      <form onSubmit={searchVideo} ref={formRef}>
        <input ref={inputRef} type="search" placeholder="search..." />
        <button type="submit">
          <img src="/images/search.png"></img>
        </button>
      </form>
    </header>
  );
}

export default SearchHeader;
