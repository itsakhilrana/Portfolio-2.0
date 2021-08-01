import React, { Fragment } from "react";
import "./index.css"
// components
import Routes from "./pages/routes";

function App() {
  return (
    <div className="App w-screen">
      <Fragment>
        <Routes />
      </Fragment>
    </div>
  );
}

export default App;
