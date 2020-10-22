import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import db from "../../firebaseConfig";

export default function HowItWorks() {
  return (
    <div>
      <h1>This is HowItWorks Component!</h1>
    </div>
  );
}
