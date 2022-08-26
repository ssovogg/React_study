import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";

const Tweets = ({ db, tweet, isOwner }) => {
  const TweetTextRef = doc(db, "tweets", tweet.id);
  const [editMode, setEditMode] = useState(false);
  const [newTweet, setNewTweet] = useState(tweet.text);

  const onDelete = async () => {
    const ok = window.confirm("삭제하시겠습니가?");
    if (ok) {
      await deleteDoc(TweetTextRef);
    }
  };

  const toggleEditMode = () => setEditMode((prev) => !prev);
  const onChange = (event) => {
    setNewTweet(event.target.value);
  }
  const onSubmit = (event) => {
    event.preventDefault();
    updateDoc(TweetTextRef, {
      text: newTweet,
    })
    setEditMode(false);
  }
  return (
    <>
      {editMode ? (
        <>
          <form onSubmit={onSubmit}>
            <input type="text" value={newTweet} onChange={onChange}/>
            <input type="submit" value="edit" />
          </form>
          <button onClick={toggleEditMode}>cancle</button>
        </>
      ) : (
        <>
          <h4>{tweet.text}</h4>
          {isOwner && (
            <>
              <button onClick={onDelete}>delete</button>
              <button onClick={toggleEditMode}>update</button>
            </>
          )}
        </>
      )}
    </>
  );
};

export default Tweets;
