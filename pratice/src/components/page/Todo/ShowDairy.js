import React from "react";
import classes from "./ShowDairy.module.css";

const Back = (props) => (
  <div className={classes.back} onClick={props.onClick} />
);

const ShowDairy = ({ diary, onClose, onDelete, onEdit, user }) => {
  const { title, date, content } = diary;
  const onEditClick = () => {
    onEdit(diary);
  }
  const onClick = () => onClose();
  return (
    <>
      <Back onClick={onClick} />
      <div className={classes.popup}>
        <div className={classes.img}></div>
        <div className={classes.text}>
          <span>{date}</span>
          <h1>{title}</h1>
          <p>{content}</p>
        </div>
        {user && (
          <div className={`${classes.btn} ${classes.user_btn}`}>
            <button className={classes.edit} onClick={onEditClick}>
              <i className="fa-solid fa-pen"></i>
              <span>edit</span>
            </button>
            <button className={classes.delete} onClick={onDelete}>
              <i className="fa-solid fa-eraser"></i>
              <span>delete</span>
            </button>
          </div>
        )}
        <div className={classes.btn}>
          <button className={classes.close} onClick={onClick}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default ShowDairy;
