import React from "react";
import Editor from "./Editor/Editor";
import Preview from "./Preview/Preview";
import classes from './Quote.module.css'

const Quote = (props) => {
  const card = {
      id: 1,
      text: "text",
      author: "me",
      fileName: "fileName",
      fileUrl: null,
  };

  return (
    <>
      <h1>Quote</h1>
      <section className={classes.quote}>
        <Editor />
        <Preview card={card} />
      </section>
    </>
  );
};

export default Quote;
