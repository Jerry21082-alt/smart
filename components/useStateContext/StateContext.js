"use client";

import { useContext, createContext } from "react";
import { useState } from "react";

const Context = createContext();

const StateContext = ({ children }) => {
  const [openNavItem, setOpenNavItem] = useState(false);
  const [collapse, setCollapse] = useState(null);

  const handleCollapse = (index) => {
    setCollapse((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <Context.Provider
      value={{
        openNavItem,
        setOpenNavItem,
        collapse,
        handleCollapse
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default StateContext;
export const makeContext = () => useContext(Context);
