import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div>
      <div className="avatar">
        <div className="w-24 rounded">
          <img src={user?.photoURL} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
