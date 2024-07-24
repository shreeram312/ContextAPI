import React, { useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);
  console.log(user);

  if (!user) return <div>Please Login</div>;
  return (
    <div>
      <h1>Welcomee {user.username}</h1>
    </div>
  );
};

export default Profile;
