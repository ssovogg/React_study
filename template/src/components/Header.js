import React, { useRef } from "react";
import style from './Header.module.css';

function Header(props) {
  const formRef = useRef();
  const inputRef = useRef();
  const searchVideo = (e) => {
    e.preventDefault();
    props.onSearch(inputRef.current.value);
    console.log(inputRef.current.value);
    formRef.current.reset();
  }

  return (
    <header className={style.header}>
      <h1>YouTube</h1>
      <form onSubmit={searchVideo} ref={formRef}>
        <input ref={inputRef} type="text" placeholder="search..." />
        <button>검색</button>
      </form>
    </header>
  );
}

export default Header;
