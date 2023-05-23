import { MantineProvider } from "@mantine/core";
import { useState } from "react";
import LoginPage from "./components/LoginPage";
import AppHeader from "./components/AppHeader";
import { Route, Routes, Navigate } from "react-router-dom";
import QuestionOne from "./components/examPaper/QuestionOne";

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
      <div className="bg-baseWhite h-screen">
        <AppHeader testHasBegun={testHasBegun}></AppHeader>
        <Routes>
          <Route
            path="/"
            element={
              <div className="my-10">
                <LoginPage
                  user={currentUser}
                  setUser={setUser}
                  setTestHasBegun={setTestHasBegun}
                ></LoginPage>
              </div>
            }
          />
          <Route
            path="/q1"
            element={
              testHasBegun ? <QuestionOne /> : <Navigate replace to={"/"} />
            }
          />
        </Routes>
      </div>
    </MantineProvider>
  );
}

export default App;
