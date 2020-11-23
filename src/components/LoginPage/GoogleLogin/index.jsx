// 743068888490-2chsv38s7paclkbc1qjd2ktd3jjf2aqf.apps.googleusercontent.com
// lg85eby3A2b9TtGrOq4BSwao

import React from "react";
import { useGoogleLogin } from "react-google-login";
import { refreshTokenSetup } from "../utils/refreshToken";
import googleIcon from "./icons/google.svg";
import "./index.css";
import { useTranslation } from "react-i18next";

const clientId =
  "743068888490-2chsv38s7paclkbc1qjd2ktd3jjf2aqf.apps.googleusercontent.com";

function Login() {
  const { t } = useTranslation();
  const onSuccess = (res) => {
    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
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
