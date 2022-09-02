import { signOut } from "firebase/auth";
import { addDoc, collection, doc, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import Twits from "../components/Twits";

const Home = ({ auth, db, user }) => {
  const [texts, setTexts] = useState('')
  const [twits, setTwits] = useState([]);
  const onLogout = () => {
    signOut(auth);
  }
  const onSubmit = (e) => {
    e.preventDefault();
    addDoc(collection(db, "twits"), {
      text: texts,
      createdAt: Date.now(),
      creatorId: user.uid,
    })
    setTexts('');
  }
  const onChange = e => {
    setTexts(e.target.value);
  }

  useEffect(()=>{
    // 실시간 트윗 문서에 id 부여 후 불러오기 (id가 있어야 삭제 가능)
    onSnapshot(collection(db, "twits"), snapshot => {
      const realTimeTwits = snapshot.docs.map(doc => (
        {id:doc.id, ...doc.data(),}
      ))
      setTwits(realTimeTwits);
    })
  },[])

  return(
  <>
    <h1>Home</h1>
    <button onClick={onLogout}>Logout</button>
    <form onSubmit={onSubmit}>
      <input type="text" required value={texts} onChange={onChange}/>
      {/* <input type="file" /> */}
      <button type="submit">twit</button>
    </form>
    <div>
      {twits.map(item => (
        <ul>
          <Twits key={item.id} db={db} twit={item} isOwner={user.uid === item.creatorId}/>
        </ul>
      ))}
    </div>
  </>
)}

export default Home;
