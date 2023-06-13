import { MantineProvider } from "@mantine/core";
import { useState } from "react";
import LoginPage from "./components/LoginPage";
import AppHeader from "./components/AppHeader";
import { Route, Routes, Navigate } from "react-router-dom";
import QuestionOne from "./components/examPaper/QuestionOne";
import { UserObj } from "./objects/UserObj";
import { QuestionOneObj } from "./objects/QuestionOneObj";
import QuestionTwo from "./components/examPaper/QuestionTwo";
import { QuestionTwoObj } from "./objects/QuestionTwoObj";
import { cloneTEFObj } from "./objects/TargetEngagementFormObj";
import ScrollToTop from "./components/ScrollToTop";
import { QuestionThreeObj } from "./objects/QuestionThreeObj";
import QuestionThree from "./components/examPaper/QuestionThree";

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
	};
	let QuestionTwoAns: QuestionTwoObj = {
		b1: "",
		b2: "",
		b3: "",
		b4: "",
		b5: "",
		b6: "",
		b7: "",
		b8: "",
	};
	let QuestionThreeAns: QuestionThreeObj = {
		c1: "",
		c2: "",
		c3: "",
		c4: "",
	};
	const initialUser: UserObj = {
		name: "",
		nric: "",
		id: 0,
		questionOneObj: QuestionOneAns,
		questionOneTEF: cloneTEFObj(),
		questionTwoObj: QuestionTwoAns,
		questionTwoTEF: cloneTEFObj(),
		questionThreeObj: QuestionThreeAns,
		questionThreeTEF: cloneTEFObj(),
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
				<ScrollToTop />
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
					<Route
						path="/q2"
						element={
							testHasBegun ? (
								<QuestionTwo user={currentUser} setUser={setUser} />
							) : (
								<Navigate replace to={"/"} />
							)
						}
					/>
					<Route
						path="/q3"
						element={
							testHasBegun ? (
								<QuestionThree user={currentUser} setUser={setUser} />
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
