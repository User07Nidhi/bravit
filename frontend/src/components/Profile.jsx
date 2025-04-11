// src/pages/Profile.js
import React from 'react';
import { useParams } from 'react-router-dom';

const profile = () => {
  const { userId } = useParams(); // Retrieve the dynamic parameter
  return <div>Profile of User {userId}</div>;
};

export default profile;
