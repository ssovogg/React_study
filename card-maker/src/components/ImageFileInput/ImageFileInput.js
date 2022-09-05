import React, { useRef } from "react";
import classes from "./ImageFileInput.module.css";

const ImageFileInput = ({ imageUploader, name, onFileChange }) => {
  const inputRef = useRef();
  const onClick = (e) => {
    e.preventDefault();
    inputRef.current.click();
  };
  const onChange = async (e) => {
    const uploaded = await imageUploader.upload(e.target.files[0]);
    // console.log(uploaded);
    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.url,
    })
  };

  return (
    <>
      <input
        className={classes.input}
        onChange={onChange}
        ref={inputRef}
        type="file"
        accept="image/*"
        name="file"
      />
      <button onClick={onClick} className={classes.button}>
        {name || "No file"}
      </button>
    </>
  );
};

export default ImageFileInput;
