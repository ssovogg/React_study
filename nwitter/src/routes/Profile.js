import { getAuth, signOut } from 'firebase/auth';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = (props) => {
  const auth = getAuth();
  const navigate = useNavigate();
  const onLogOut = () => {
    signOut(auth).then(navigate("/"));
  }
  return (
    <>
      <h1>profile</h1>
      <button onClick={onLogOut}>Logout</button>
    </>
  )};

export default Profile;