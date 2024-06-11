import React from "react";
import { useParams } from "react-router-dom";

type Props = {};

const UserProfile = () => {
  const { userId } = useParams<{ userId: string }>();

  return (
    <div>
      <h1>User Profile</h1>
      <p>User ID: {userId}</p>
    </div>
  );
};

export default UserProfile;
