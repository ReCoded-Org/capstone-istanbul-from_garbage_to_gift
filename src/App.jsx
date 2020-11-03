import React from "react";
import Home from "./containers/Home";
import Footer from "./components/Footer";
import i18n from "./i18n";
import {I18nextProvider} from "react-i18next";

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Home />
      <Footer />
    </I18nextProvider>
  );
}

export default App;
