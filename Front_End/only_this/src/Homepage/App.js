import React from "react";
import Log_in from "../Log_in_Sign_in/Log_in/Log_in";
import { Route, Routes } from "react-router-dom";
import Types_of_views from "../Types_of_Views/Types_of_views";


function App() {
  return (
    <>
    <Routes>
        <Route exact path="/" component={Types_of_views}></Route>
        <Route exact path="/New_Account" ></Route>
    </Routes>
     <Log_in></Log_in>
    </>
  );
}

export default App;
