import React, { useEffect, useState } from "react";
import { collection, addDoc, onSnapshot } from "firebase/firestore";
import Nweets from "../components/Nweets";

const Home = ({ db, userObj }) => {
  const [nweet, setNweet] = useState(""); // add
  const [nweets, setNweets] = useState([]); // read

  // addDoc : db에 document 추가
  const onSubmit = async (event) => {
    event.preventDefault();
    await addDoc(collection(db, "nweets"), {
      text: nweet,
      createAt: Date.now(),
      creatorId: userObj.uid,
    });
    setNweet("");
  };

  const onChange = (event) => {
    setNweet(event.target.value);
  };

  // getDocs : db에 추가된 document 읽어서 화면에 보여주기
  // 실시간으로 보여주려면 onSanpshot() 활용

  useEffect(() => {
    onSnapshot(collection(db, "nweets"), (snapshot) => {
      const nweetArray = snapshot.docs.map(doc => (
        {id:doc.id, ...doc.data()}
      ))
      setNweets(nweetArray);
    })
    }, []);

    return (
    <div>
      <h1>Home</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={nweet}
          type="text"
          placeholder="write a message"
          maxLength={120}
        />
        <input type="submit" value="tweet" />
      </form>
      <div>
        {nweets.map(nweet => (
          <Nweets 
            db={db} 
            key={nweet.id} 
            nweet={nweet} 
            userObj={userObj}
            isOwner={nweet.creatorId === userObj.uid}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
