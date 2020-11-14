import React from "react";
import Home from "./containers/Home";

import { BrowserRouter as Router, Route } from "react-router-dom";

import SiteNavbar from "./components/Navbar";
function App() {
  return (
    <Router>
      <Route path="/" component={SiteNavbar} />
      <Route exact path="/" component={Home} />
      {/* <Route path="/posts" component={Posts} />
      <Route path="/donate" component={Donate} />
      <Route path="/about" component={Aboutus} />
      <Route path="/contact" component={Contactus} /> */}
    </Router>
  );
}

export default App;
