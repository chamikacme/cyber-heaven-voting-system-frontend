import React, { useState } from "react";
import "./App.css";

import MyRouter from "./components/Router/MyRouter";
import AuthProvider from "./Providers/AuthProvider";

const App = () => {
  return (
    <AuthProvider>
      <div>
        <MyRouter />
      </div>
    </AuthProvider>
  );
};

export default App;
