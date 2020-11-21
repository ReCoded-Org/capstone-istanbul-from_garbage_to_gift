import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Signup from "./components/LoginPage/Signup";
import { AuthProvider } from "./components/contexts/AuthContext";
import LoginContainer from "./containers/Login";
import ForgotPassword from "./components/LoginPage/ForgotPassword";
import Home from "./containers/Home";
import Contact from "./containers/Contact";
import About from "./containers/About";
import Footer from "./components/Footer";
import NewPostForm from "./containers/NewPostForm";
import PostPageVolunteer from "./containers/PostPageVolunteer";
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
          <Route exact path="/contact" component={Contact} />
          <Route path="/Volunteers" component={PostPageVolunteer} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route path="/" component={Footer} />
        </Router>
      </AuthProvider>
    </>
  );
}
export default App;
