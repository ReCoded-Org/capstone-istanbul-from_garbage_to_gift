import React from "react";
import Home from "./containers/Home";

import { BrowserRouter as Router, Route } from "react-router-dom";

import SiteNavbar from "./components/Navbar";
function App() {
  return (
    <Router>
      <Route path="/" component={SiteNavbar} />
      <Route exact path="/" component={Home} />
      {/* <Route path="/Posts" component={Posts} />
      <Route path="/Donate" component={Donate} />
      <Route path="/Aboutus" component={Aboutus} />
      <Route path="/Contactus" component={Contactus} /> */}
    </Router>
  );
}

export default App;
