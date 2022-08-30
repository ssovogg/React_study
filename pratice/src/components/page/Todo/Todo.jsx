import React from "react";
import { useState } from "react";
import DiaryForm from "./DiaryForm";
import classes from "./Todo.module.css";
import { addDoc, collection, getDocs, onSnapshot } from "firebase/firestore";
import { useEffect } from "react";
import DiaryList from "./DiaryList";

const Todo = ({ db, user }) => {
  const [editMode, setEditMode] = useState(false);
  const [diarys, setDiarys] = useState([]);
  const onAdd = async (input) => {
    await addDoc(collection(db, "diary"), {
      id: input.id,
      creatorId: user.uid,
      title: input.title,
      content: input.content,
      date: input.date,
    })
    const ok = window.confirm("게시하겠습니가?");
    if (ok) {
      toggleEditMode();
    }
  };
  const toggleEditMode = () => setEditMode((prev) => !prev);

  useEffect(() => {
    onSnapshot(collection(db, "diary"), (snapshot) => {
      const diaryList = snapshot.docs.map(doc => (
        {id: doc.id, ...doc.data()}
      ))
      setDiarys(diaryList);
      console.log(diarys);
    })
  }, [])
  
  return (
    <div className={classes.wrap}>
      <h1>Diary</h1>
      {editMode ? (
        <DiaryForm onAdd={onAdd} onToggle={toggleEditMode} />
      ) : (
        <div className={classes.diary}>
          <button onClick={toggleEditMode} className={classes.edit_btn}>
            Post a New Diary
          </button>
          <ul>
            {diarys.map(diary => (
              <DiaryList diary={diary} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Todo;
