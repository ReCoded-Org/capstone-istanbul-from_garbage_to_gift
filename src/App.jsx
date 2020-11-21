import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Signup from "./components/LoginPage/Signup";
import { AuthProvider } from "./components/contexts/AuthContext";
import LoginContainer from "./containers/Login";
import ForgotPassword from "./components/LoginPage/ForgotPassword";
import Home from "./containers/Home";
import About from "./containers/About";
import Footer from "./components/Footer";
import NewPostForm from "./containers/NewPostForm";

import SiteNavbar from "./components/Navbar";
function App() {
  return (
    <>
      <AuthProvider>
        <Router className="appStyle">
          <Route path="/" component={SiteNavbar} />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={LoginContainer} />
          <Route exact path="/donate" component={NewPostForm} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route path="/" component={Footer} />
          {/* <Route path="/posts" component={Posts} />
      <Route path="/donate" component={Donate} />
      <Route path="/contact" component={Contactus} /> */}
        </Router>
      </AuthProvider>
    </>
  );
}
export default App;
