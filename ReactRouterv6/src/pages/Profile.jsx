import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/auth";

const Profile = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    auth.logout();
    navigate("/");
  };
  const auth = useAuth();
  return (
    <>
      <div>Welcome {auth.user}</div>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};

export default Profile;
