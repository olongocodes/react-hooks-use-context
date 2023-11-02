// src/context/user.js
import React, { createContext, useState } from "react";

const UserContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  const defaultUser = {
    name: "John Doe",
    interests: ["Reading", "Cooking", "Hiking"],
  };
  

  const handleLogin = () => {
    if (user) {
      setUser(null);
    } else {
      setUser(defaultUser); // Make sure to import defaultUser from your data file
    }
  };

  return (
    <UserContext.Provider value={{ user, handleLogin }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };
