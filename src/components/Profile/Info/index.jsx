import React from "react";
import profilePic from "../img/orcunProfilePic.png";
import "./index.css";
import EditInfoForm from "../EditInfoForm";
import { useTranslation } from "react-i18next";

export default function Info({ userInfo }) {
  const { t } = useTranslation();
  if (!userInfo) {
    return <h2>{t('profilePage.loading')}</h2>;
  } else {
    return (
      <>
      <div className="infoContainer">
        <img src={profilePic} className="profileImg" alt="profile" />
        <div className="userNameTxt">
          <h4 >{t('profilePage.basicInfo.name')}: {userInfo.name}</h4>
          <h4>{t('profilePage.basicInfo.surname')}: {userInfo.surname}</h4>
        </div>
        <div className="userJobCity">
          <h4>{t('profilePage.basicInfo.job')}: {userInfo.job}</h4>
          <h4>{t('profilePage.basicInfo.location')}: {userInfo.location}</h4>
        </div>
      </div>
      <EditInfoForm userInfoForEdit={userInfo} />
      </>
    );
  }
}
