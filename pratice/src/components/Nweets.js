import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";

const Nweets = ({ db, nweet, userObj, isOwner }) => {
  const NweetTextRef = doc(db, "nweets", nweet.id);
  const [editMod, setEditMoe] = useState(false);
  const [newNweet, setNewNweet] = useState(userObj.text);
  const onDelete = async (event) => {
    const ok = window.confirm("삭제하시겠습니까?");
    if (ok) {
      await deleteDoc(NweetTextRef);
      console.log(nweet.id);
    }
  };

  const onEditMode = () => setEditMoe(true);
  const onCancle = () => setEditMoe(false);
  const onChangeNweet = (event) => {
    setNewNweet(event.target.value);
  };
  const editNweet = async (event) => {
    event.preventDefault();
    await updateDoc(NweetTextRef, {
      text: newNweet,
    });
    setEditMoe(false);
  }
  return (
    <div>
      {editMod ? (
        <>
        <form onSubmit={editNweet}>
          <input onChange={onChangeNweet} type="text" value={newNweet} />
          <input type="submit" value="edit" />
        </form>
        <button onClick={onCancle}>cancle</button>
        </>
      ) : (
        <>
          <h4>{nweet.text}</h4>
          {isOwner && (
            <>
              <button onClick={onDelete}>Delete</button>
              <button onClick={onEditMode}>Edit</button>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Nweets;
