import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <div className="avatar">
          <div className="w-24 rounded-full">
            <img src={user?.photoURL} alt="" />
          </div>
        </div>
        <p>{user?.displayName}</p>
        <p>{user?.email}</p>
        <button>Update Profile</button>
      </div>
    </div>
  );
};

export default Profile;
