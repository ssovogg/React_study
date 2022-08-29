import { addDoc, collection, getDocs, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import Tweets from "../components/Tweets";

const Home = ({ db, userInfo }) => {
  const [tweet, setTweet] = useState("");
  const [tweets, setTweets] = useState([]);
  const [file, setFile] = useState(null);

  const onChange = (event) => setTweet(event.target.value);

  const onSubmit = async (event) => {
    event.preventDefault();
    await addDoc(collection(db, "tweets"), {
      text: tweet,
      createAt: Date.now(),
      creatorId: userInfo.uid
    })
    setTweet("");
  }

  const onFileChange = (event) => {
    const theFile = event.target.files[0];
    const reader = new FileReader();
    console.log(reader.readAsDataURL(theFile));
    const fileUrl = URL.createObjectURL(event.target.files[0]);
    console.log(fileUrl);
  }

  useEffect(() => {
    onSnapshot(collection(db, "tweets"), (snapshot) => {
      const tweetArray = snapshot.docs.map(doc => (
        {id: doc.id, ...doc.data()}
      ))
      setTweets(tweetArray);
    })
  }, [])

  return (
  <>
    <h1>home</h1>
    <form onSubmit={onSubmit}>
      <input type="text" onChange={onChange} value={tweet} placeholder="Let's Tweet" />
      <input type="file" accept="image/*" onChange={onFileChange}/>
      <input type="submit" value="Tweet" />
    </form>
    <div>
      {tweets.map(tweet => (
        <Tweets key={tweet.id}db={db} tweet={tweet} isOwner={userInfo.uid === tweet.creatorId}/>
      ))}
    </div>
  </>
)};

export default Home;
