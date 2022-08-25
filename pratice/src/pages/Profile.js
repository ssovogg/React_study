import { getAuth, signOut } from 'firebase/auth';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = ({ auth }) => {
  const userAuth = getAuth();
  const navigate = useNavigate();
  const onLogout = (event) => {
    signOut(userAuth)
    .then(navigate('/'))
    .catch(error => console.log(error.message))
  }
  return (
  <>
  <h1>Profile</h1>
  <button onClick={onLogout}>logout</button>
  </>
  )};

export default Profile;