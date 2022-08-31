import React from "react";
import { useState } from "react";
import DiaryForm from "./DiaryForm";
import classes from "./Todo.module.css";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import { useEffect } from "react";
import DiaryList from "./DiaryList";
import ShowDairy from "./ShowDairy";
import DiaryOption from "./DiaryOption";
import { v4 as uuidv4 } from "uuid";
import { ref, uploadString } from "firebase/storage";

const Todo = ({ db, user, storage }) => {
  const [editMode, setEditMode] = useState(false);
  const [diarys, setDiarys] = useState([]);
  const [diary, setDiary] = useState(null);
  const [popup, setPopup] = useState(false);
  const [editDiary, SetEditDiary] = useState(null);
  const [sortOption, SetSortOption] = useState("최신순");
  const onAdd = async (input) => {
    await addDoc(collection(db, "diary"), {
      id: input.id,
      creatorId: user.uid,
      title: input.title,
      content: input.content,
      date: input.date,
      img: input.img
    });
    const ok = window.confirm("게시하겠습니가?");
    if (ok) {
      toggleEditMode();
    }
  };
  const toggleEditMode = () => setEditMode((prev) => !prev);
  const showDiary = (diary) => {
    setPopup(true);
    setDiary(diary);
  };
  const onClose = () => setPopup(false);
  const onEdit = (diary) => {
    toggleEditMode();
    SetEditDiary(diary);
    setPopup(false);
  };
  const onUpdate = (date, title, content) => {
    updateDoc(doc(db, "diary", diary.did), {
      date: date,
      title: title,
      content: content,
    });
    const ok = window.confirm("수정하시겠습니까?");
    if (ok) {
      toggleEditMode();
    }
  };
  const onCancle = () => SetEditDiary(null);
  const onDelete = () => {
    const ok = window.confirm("삭제하시겠습니까?");
    if (ok) {
      deleteDoc(doc(db, "diary", diary.did));
      setPopup(false);
      SetEditDiary(null);
    }
  };

  const onSortbyDate = (option) => {
    SetSortOption(option);
    console.log(option);
  };

  useEffect(() => {
    onSnapshot(collection(db, "diary"), (snapshot) => {
      const diaryList = snapshot.docs.map((doc) => ({
        did: doc.id,
        ...doc.data(),
      }));
      setDiarys(diaryList);
    });
  }, []);

  return (
    <div className={classes.wrap}>
      {popup && (
        <ShowDairy
          diary={diary}
          onClose={onClose}
          onDelete={onDelete}
          onEdit={onEdit}
          user={user.uid === diary.creatorId}
        />
      )}
      <h1>Diary</h1>
      {editMode ? (
        <DiaryForm
          onAdd={onAdd}
          onToggle={toggleEditMode}
          editDiary={editDiary}
          onUpdate={onUpdate}
          onCancle={onCancle}
        />
      ) : (
        <div className={classes.diary}>
          <div className={classes.diary_option}>
            <DiaryOption onSortbyDate={onSortbyDate} />
            <button onClick={toggleEditMode} className={classes.edit_btn}>
              <i class="fa-solid fa-file-pen"></i>
              <span>일기 쓰기</span>
            </button>
          </div>
          <ul className={classes.dairy_list}>
            {diarys
              .filter((diary) => diary.creatorId === user.uid)
              .sort((a, b) => {
                if (sortOption === "최신순") {
                  return new Date(b.date) - new Date(a.date);
                } else if (sortOption === "오래된순") {
                  return new Date(a.date) - new Date(b.date);
                }
              })
              .map((diary) => (
                <DiaryList key={diary.id} diary={diary} onShow={showDiary} />
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Todo;
