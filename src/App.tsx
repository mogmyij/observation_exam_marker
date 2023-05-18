import { MantineProvider, Text } from "@mantine/core";
import "./App.css";
import { useState } from "react";
import LoginPage from "./components/LoginPage";

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

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <LoginPage user={currentUser} setUser={setUser}></LoginPage>
    </MantineProvider>
  );
}

export default App;
