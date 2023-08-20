import React, { useState } from "react";
import MyContext from "./context";

const MyContextProvider = ({ children }) => {
  const [globalVariable, setGlobalVariable] = useState("user");

  return (
    <MyContext.Provider value={{ globalVariable, setGlobalVariable }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContextProvider;
