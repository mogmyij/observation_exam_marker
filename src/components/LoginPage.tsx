import { useState } from "react";
import { useForm } from "@mantine/form";
import {
	Button,
	TextInput,
	Tooltip,
	Title,
	Container,
	Paper,
} from "@mantine/core";
import { useNavigate } from "react-router-dom";
import ResultsDatabase from "../Services/ResultsDatabase";
import { UserObj } from "../objects/UserObj";

//returns true if string is alphanumeric
function isAlphaNumeric(str: string): boolean {
	const AlphaNumericRegex = new RegExp("[a-zA-Z0-9 ]");
	return AlphaNumericRegex.test(str);
}

function LoginPage(props: {
	user: UserObj;
	setUser: React.Dispatch<React.SetStateAction<UserObj>>;
	setTestHasBegun: React.Dispatch<React.SetStateAction<boolean>>;
}) {
	//initialie form object and types
	const form = useForm({
		initialValues: {
			name: "",
			nric: "",
		},
		//ensure alphaNumeric values
		validate: {
			name: (value) =>
				isAlphaNumeric(value) ? null : "Please only use numbers and letters",
			nric: (value) =>
				isAlphaNumeric(value) ? null : "Please only use numbers and letters",
		},
	});
	//form type declaration
	type formType = typeof form.values;
	type formErrorType = typeof form.errors;

	//setup Navigation hook
	const navigate = useNavigate();

	//state to check if textInput is open so that tool tip can be displayed
	const [opened, setOpened] = useState(false);

	//add cadet to the database and begin the test
	const handleSubmit = (values: formType) => {
		//ensure consistancy in results by changing both name and nric to uppercaes
		let newUser: UserObj = { ...props.user };
		newUser.name = values.name.toUpperCase();
		newUser.nric = values.nric.toUpperCase();
		ResultsDatabase.addCadet(newUser).then((data) => {
			newUser.id=data.id
			props.setUser(newUser);
			props.setTestHasBegun(true);
			navigate("/q1");
		});
	};

	//handle errors
	const handleErrors = (errors: formErrorType) => {
		console.log("failed to begin test: ", errors);
	};

	return (
		<div>
			<Container size={420}>
				<Title>Enter Details to begin.</Title>
				<Paper withBorder shadow="md" p={30} mt={30} radius={"md"}>
					<form onSubmit={form.onSubmit(handleSubmit, handleErrors)}>
						<TextInput
							label="Rank and Name"
							{...form.getInputProps("name")}
							variant="filled"
							required
						></TextInput>
						<Tooltip
							label={"Enter masked NRIC in (e.g. TXXXX000K) format"}
							position="bottom-start"
							withArrow
							opened={opened}
							transitionProps={{ transition: "skew-up", duration: 250 }}
							color="grey"
						>
							<TextInput
								label="NRIC"
								placeholder=""
								{...form.getInputProps("nric")}
								variant="filled"
								onFocus={() => setOpened(true)}
								onBlur={() => setOpened(false)}
								required
							></TextInput>
						</Tooltip>
						<Button
							mt={50}
							type="submit"
							variant="gradient"
							gradient={{ from: "teal", to: "indigo" }}
						>
							Begin test!
						</Button>
					</form>
				</Paper>
			</Container>
		</div>
	);
}

export default LoginPage;
