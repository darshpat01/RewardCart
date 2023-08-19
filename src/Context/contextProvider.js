import React, { useState } from "react";
import MyContext from "./context";

const MyContextProvider = ({ children }) => {
  const [globalVariable, setGlobalVariable] = useState("company");

  return (
    <MyContext.Provider value={{ globalVariable, setGlobalVariable }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContextProvider;
