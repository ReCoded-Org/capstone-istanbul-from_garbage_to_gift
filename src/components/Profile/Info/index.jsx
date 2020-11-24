import React from "react";
import profilePic from "../img/orcunProfilePic.png"
import "./index.css";


export default function Info({ userInfo }) {
  

  if (!userInfo) {
    return <h2>loading...</h2>;
  } else {
    return (
      <div className="infoContainer">
        <img src={profilePic} className="profileImg" alt="profile" />
        <div className="nameSurnameTxt">
          <h2 className="userNameTxt">{userInfo.name}</h2>
          <h2>{userInfo.surname}</h2>
        </div>
        <div className="userJobCity">
          <h2>{userInfo.job}</h2>
          <h2>{userInfo.location}</h2>
        </div>
      </div>
    );
  }
}
