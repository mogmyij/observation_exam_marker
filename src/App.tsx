import { MantineProvider } from "@mantine/core";
import "./App.css";
import { useState } from "react";
import LoginPage from "./components/LoginPage";
import AppHeader from "./components/AppHeader";
import { Route, Routes } from "react-router-dom";

export class user {
  name: string;
  id: string;

  constructor(name: string, id: string) {
    this.name = name;
    this.id = id;
  }
}

function App() {
  const [currentUser, setUser] = useState<user>(new user("", ""));
  const [testHasBegun, setTestHasBegun] = useState<boolean>(false);

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{ colorScheme: "light" }}
    >
      <AppHeader testHasBegun={testHasBegun}></AppHeader>
      <Routes>
        <Route
          path="/"
          element={
            <LoginPage
              user={currentUser}
              setUser={setUser}
              setTestHasBegun={setTestHasBegun}
            ></LoginPage>
          }
        />
      </Routes>
    </MantineProvider>
  );
}

export default App;
