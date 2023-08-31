import React, { useState } from "react";
import shortid from "shortid";
import Todo from "./components/Todo/Todo";

import './App.css'
export const App = () => {
  
  return (
    <div className="App">
      <Todo/>
    </div>
  );
};
