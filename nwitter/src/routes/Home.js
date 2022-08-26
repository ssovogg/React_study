import { addDoc, collection, getDocs, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";

const Home = ({ db }) => {
  const [tweet, setTweet] = useState("");
  const [tweets, setTweets] = useState([]);
  const onChange = (event) => setTweet(event.target.value);
  const onSubmit = async (event) => {
    event.preventDefault();
    await addDoc(collection(db, "tweets"), {
      text: tweet,
      createAt: Date.now(),
    })
    setTweet("");
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
      <input type="submit" vlaue="Tweet" />
    </form>
    <div>
      {tweets.map(tweet => (
        <div key={tweet.id}>
          <h4>{tweet.text}</h4>
        </div>
      ))}
    </div>
  </>
)};

export default Home;
