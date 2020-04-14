import React from "react";
import "./Profile.css";

const Profile = ({ profile }) => {
  /*if(auth0Client.isAuthenticated()){
    this.history.push(["/lo"])
  }*/
  return (
    <div className="profile">
      <h2>My Profile</h2>
      <form className="" onSubmit={null}>
        <div className="formGroup">
          <label>Email: </label>
          <input name="email" type="text" value={profile.name} />
        </div>
        <div className="formGroup">
          <label>FistName: </label>
          <input name="firstName" type="text" value={profile.firstName} />
        </div>

        <div className="formGroup">
          <label>LastName: </label>
          <input name="lastName" type="text" value={profile.lastName} />
        </div>
      </form>
    </div>
  );
};

export default Profile;
