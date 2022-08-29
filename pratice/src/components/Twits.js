import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";

const Twits = ({ db, twit, isOwner }) => {
  const TwitTextRef = doc(db, "twits", twit.id);
  const [editMode, setEditMode] = useState(false);
  const [newTwit, setNewTwit] = useState(twit.text);
  const onDelete = () => {
    const ok = window.confirm("delete?");
    if (ok) {
      deleteDoc(TwitTextRef);
    }
  };
  const toggleEditMode = () => {
    setEditMode((prev) => !prev);
  };
  const onInput = (e) => {
    setNewTwit(e.target.value);
  };
  const onEdit = (e) => {
    e.preventDefault();
    updateDoc(TwitTextRef, {
      text: newTwit
    });
    toggleEditMode();
  }
  return (
    <>
      {editMode ? (
        <li>
          <form onSubmit={onEdit}>
            <input type="text" value={newTwit} onChange={onInput} />
          </form>
          <button onClick={toggleEditMode}>cancle</button>
        </li>
      ) : (
        <li>
          <span>{twit.text}</span>
          {isOwner ? (
            <>
              <button onClick={toggleEditMode}>Edit</button>
              <button onClick={onDelete}>Delete</button>
            </>
          ) : null}
        </li>
      )}
    </>
  );
};

export default Twits;
