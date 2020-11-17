import React from "react";
import Home from "./containers/Home";
import About from "./containers/About";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Route } from "react-router-dom";

import SiteNavbar from "./components/Navbar";
function App() {
  return (
    <Router className="appStyle">
      <Route path="/" component={SiteNavbar} />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/" component={Footer} />
      {/* <Route path="/posts" component={Posts} />
      <Route path="/donate" component={Donate} />
      <Route path="/contact" component={Contactus} /> */}
    </Router>
  );
}
export default App;
