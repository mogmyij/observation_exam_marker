import { MantineProvider } from "@mantine/core";
import { useState } from "react";
import LoginPage from "./components/LoginPage";
import AppHeader from "./components/AppHeader";
import { Route, Routes, Navigate } from "react-router-dom";
import QuestionOne from "./components/examPaper/QuestionOne";
import { UserObj } from "./objects/UserObj";
import { QuestionOneObj } from "./objects/QuestionOneObj";
import { TEFObj } from "./objects/TargetEngagementFormObj";

export class user {
	name: string;
	id: string;

	constructor(name: string, id: string) {
		this.name = name;
		this.id = id;
	}
}

function App() {
	//states that store logged in user data und the test has started
	let QuestionOneAns: QuestionOneObj = {
		a1: "",
		a2: "",
		a3: "",
		c1: "",
		c2: "",
		c3: "",
		TEF: TEFObj,
	};
	const initialUser: UserObj = {
		name: "",
		nric: "",
    id: 0,
		questionOneObj: QuestionOneAns,
	};
	const [currentUser, setUser] = useState<UserObj>(initialUser);
	const [testHasBegun, setTestHasBegun] = useState<boolean>(false);

	return (
		<MantineProvider
			withGlobalStyles
			withNormalizeCSS
			theme={{ colorScheme: "light" }}
		>
			<div className="bg-baseWhite min-h-screen flex-grow pb-8">
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
							testHasBegun ? (
								<QuestionOne user={currentUser} setUser={setUser} />
							) : (
								<Navigate replace to={"/"} />
							)
						}
					/>
				</Routes>
			</div>
		</MantineProvider>
	);
}

export default App;
