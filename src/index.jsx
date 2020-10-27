import React from "react";
import ReactDOM from "react-dom";
<<<<<<< HEAD:src/index.jsx
=======
import "bootstrap/dist/css/bootstrap.css";
>>>>>>> 95bff16b315f600f66aae5570327f251c1a7b3ff:src/index.js
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
