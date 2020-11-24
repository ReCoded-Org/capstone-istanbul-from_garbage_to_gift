// 743068888490-2chsv38s7paclkbc1qjd2ktd3jjf2aqf.apps.googleusercontent.com
// lg85eby3A2b9TtGrOq4BSwao

import React from "react";
import { useGoogleLogin } from "react-google-login";
import googleIcon from "./icons/google.svg";
import "./index.css";
import { useTranslation } from "react-i18next";
import "firebase/auth";
import { refreshTokenSetup } from "../utils/refreshToken";

function Login() {
  const { t } = useTranslation();

  const clientId =
    "743068888490-2chsv38s7paclkbc1qjd2ktd3jjf2aqf.apps.googleusercontent.com";
  const onSuccess = (res) => {
    refreshTokenSetup(res);
  };

  const onFailure = (res, e) => {
    e.preventDefault();
    alert(t("loginPages.login.alertFailLogin"));
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: "offline",
  });

  return (
    <button onClick={signIn} className="buttonGoogle">
      <div>
        <img
          src={googleIcon}
          alt="google login"
          className="googleIcon"
          width="40em"
        />
      </div>
      <div className="lgnGoogleText">
        <span className="buttonText">{t("loginPages.login.logInGoogle")}</span>
      </div>
    </button>
  );
}

export default Login;
