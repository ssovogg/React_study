import React from "react";
import { useState } from "react";
import DiaryForm from "./DiaryForm";
import classes from "./Todo.module.css";
import { addDoc, collection, getDocs, onSnapshot } from "firebase/firestore";
import { useEffect } from "react";
import DiaryList from "./DiaryList";
import ShowDairy from "./ShowDairy";

const Todo = ({ db, user }) => {
  const [editMode, setEditMode] = useState(false);
  const [diarys, setDiarys] = useState([]);
  const [diary, setDiary] = useState(null);
  const [popup, setPopup] = useState(false);
  const onAdd = async (input) => {
    await addDoc(collection(db, "diary"), {
      id: input.id,
      creatorId: user.uid,
      title: input.title,
      content: input.content,
      date: input.date,
    });
    const ok = window.confirm("게시하겠습니가?");
    if (ok) {
      toggleEditMode();
    }
  };
  const toggleEditMode = () => setEditMode((prev) => !prev);
  const showDiary = (diary) => {
    console.log(diary);
    setPopup(true);
    setDiary(diary);
  };
  const onClose = () => setPopup(false);

  useEffect(() => {
    onSnapshot(collection(db, "diary"), (snapshot) => {
      const diaryList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setDiarys(diaryList);
      console.log(diarys);
    });
  }, []);

  return (
    <div className={classes.wrap}>
      {popup && <ShowDairy diary={diary} onClose={onClose} />}
      <h1>Diary</h1>
      {editMode ? (
        <DiaryForm onAdd={onAdd} onToggle={toggleEditMode} />
      ) : (
        <div className={classes.diary}>
          <button onClick={toggleEditMode} className={classes.edit_btn}>
            일기 쓰기
          </button>
          <ul>
            {diarys.map((diary) => (
              <DiaryList diary={diary} onShow={showDiary} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Todo;
