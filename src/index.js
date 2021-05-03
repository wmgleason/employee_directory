import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
// https://stackoverflow.com/questions/53737280/how-to-add-service-worker-in-react-project

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
