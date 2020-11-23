// 743068888490-2chsv38s7paclkbc1qjd2ktd3jjf2aqf.apps.googleusercontent.com
// lg85eby3A2b9TtGrOq4BSwao

import React from "react";
import googleIcon from "./icons/google.svg";
import "./index.css";
import { useTranslation } from "react-i18next";
import firebase from "firebase/app";
import "firebase/auth";

const auth = firebase.auth();

const signInWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider);
};

function Login() {
  const { t } = useTranslation();

  return (
    <button onClick={signInWithGoogle} className="buttonGoogle">
      <div>
        <img
          src={googleIcon}
          alt="google login"
          className="googleIcon"
          width="40em"
        />
      </div>
      <div>
        <span className="buttonText">{t("loginPages.login.logInGoogle")}</span>
      </div>
    </button>
  );
}

export default Login;
