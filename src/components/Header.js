import React, { useContext } from "react";
import ThemedButton from "./ThemedButton";
import DarkModeToggle from "./DarkModeToggle";
import { UserContext } from "../context/user";
import defaultUser from "../data"; // Import defaultUser from your data file

function Header({ theme, setTheme }) {
  const { user, handleLogin } = useContext(UserContext);

  return (
    <header>
      <h1>React Context</h1>
      <nav>
        <ThemedButton onClick={handleLogin} theme={theme}>
          {user ? "Logout" : "Login"}
        </ThemedButton>
        <DarkModeToggle theme={theme} setTheme={setTheme} />
      </nav>
    </header>
  );
}

export default Header;
