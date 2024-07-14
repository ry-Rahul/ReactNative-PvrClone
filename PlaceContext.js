import React, { createContext, useState } from "react";

const PlaceContext = createContext();
const PlaceProvider = ({ children }) => {
  const [selectedCity, setSelectedCity] = useState("Delhi-NCR");
  return (
    <PlaceContext.Provider
      value={{
        selectedCity,
        setSelectedCity,
      }}
    >
      {children}
    </PlaceContext.Provider>
  );
};

export { PlaceProvider, PlaceContext };
