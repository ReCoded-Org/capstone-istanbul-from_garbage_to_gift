import React from "react";
import "./index.css";

export default function Biography({ userInfo }) {
  if (!userInfo) {
    return <h2>loading...</h2>;
  } else {
    return (
      <div className="biographyContainer">
        <h2 className="biographyTitle">Biography</h2>
        <div className="biographyContent">
          <p className="bioText">{userInfo.biography}</p>
        </div>
      </div>
    );
  }
}
