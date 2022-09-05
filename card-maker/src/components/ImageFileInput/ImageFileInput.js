import React, { useRef, useState } from "react";
import classes from "./ImageFileInput.module.css";

const ImageFileInput = ({ imageUploader, name, onFileChange }) => {
  const [loading, setLoading] = useState(false);
  const inputRef = useRef();
  const onClick = (e) => {
    e.preventDefault();
    inputRef.current.click();
  };
  const onChange = async (e) => {
    setLoading(true);
    const uploaded = await imageUploader.upload(e.target.files[0]);
    setLoading(false);
    // console.log(uploaded);
    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.url,
    })
  };

  return (
    <div className={classes.wrap}>
      <input
        className={classes.input}
        onChange={onChange}
        ref={inputRef}
        type="file"
        accept="image/*"
        name="file"
      />
      {!loading && <button onClick={onClick} className={`${classes.button} ${name && classes.pink}`}>
        {name || "No file"}
      </button>}
      {loading && <div className={classes.loading}>
        <div></div>
        </div>}
    </div>
  );
};

export default ImageFileInput;
