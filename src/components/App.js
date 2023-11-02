import React, { useState } from "react";
import Header from "./Header";
import Profile from "./Profile";
import { UserProvider } from "../context/user"; // Import UserProvider
import defaultUser from "../data"; // Import defaultUser from your data file

function App() {
  const [theme, setTheme] = useState("dark");

  return (
    <main className={theme}>
      <UserProvider>
        <Header theme={theme} setTheme={setTheme} />
        <Profile theme={theme} />
      </UserProvider>
    </main>
  );
}

export default App;
