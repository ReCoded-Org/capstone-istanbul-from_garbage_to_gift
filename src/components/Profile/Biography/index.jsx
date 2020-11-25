import React from "react";
import "./index.css";
import { useTranslation } from "react-i18next";


export default function Biography({ userInfo }) {

  const { t } = useTranslation();

  if (!userInfo) {
    return <h2>{t('profilePage.loading')}</h2>;
  } else {
    return (
      <div className="biographyContainer">
        <h2 className="biographyTitle">{t('profilePage.biography')}</h2>
        <div className="biographyContent">
          <p className="bioText">{userInfo.biography}</p>
        </div>
      </div>
    );
  }
}
