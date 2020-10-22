import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import HowItWorks from "../../components/HowItWorks";
import db from "../../firebaseConfig";

export default function Home() {
  return (
    <div>
      <h1>This is Home Page!</h1>
      <HowItWorks />
    </div>
  );
}
