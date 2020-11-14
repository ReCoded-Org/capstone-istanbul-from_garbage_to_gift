import React from "react";
import Home from "./containers/Home";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Route } from "react-router-dom";

import SiteNavbar from "./components/Navbar";
function App() {
  return (
    <>
    <Router>
      <Route path="/" component={SiteNavbar} />
      <Route exact path="/" component={Home} />
    </Router>
    <Footer />
    </>
  );
}

export default App;
