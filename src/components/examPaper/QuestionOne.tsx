import { useForm } from "@mantine/form";
import { List, TextInput, Text, Textarea, Button } from "@mantine/core";
import TargetEngagementForm from "../TargetEngagementForm";
import { QuestionOneObj, directionEnum } from "../../objects/QuestionOneObj";
import { UserObj, cloneUserObj } from "../../objects/UserObj";
import ResultsDatabase from "../../Services/ResultsDatabase";
import { useReducer } from "react";
import { TEFObjReducer } from "../../reducers/TEFCorrectionReducer";
import { useNavigate } from "react-router-dom";

const QuestionOne = (props: {
	user: UserObj;
	setUser: React.Dispatch<React.SetStateAction<UserObj>>;
}) => {
	//init navigator hoook
	const navigate = useNavigate();
	//init question one object
	let QuestionOneAns: QuestionOneObj = {
		...props.user.questionOneObj,
	};

	//TEF state that is passed to the TEF component to use
	const [QuestionOneTEFObjState, TEFObjDispatcher] = useReducer(
		TEFObjReducer,
		props.user.questionOneTEF
	);

	//init form
	const form = useForm({
		initialValues: {
			...QuestionOneAns,
		},
	});

	const onClick = (direction: directionEnum) => {
		//pass user object by value instead of reference by creating a deep copy
		//instead of a shallow one
		let updatedUser = cloneUserObj(props.user);
		//update new user with values from the form
		updatedUser.questionOneObj.a1 = form.values.a1;
		updatedUser.questionOneObj.a2 = form.values.a2;
		updatedUser.questionOneObj.a3 = form.values.a3;
		updatedUser.questionOneObj.c1 = form.values.c1;
		updatedUser.questionOneObj.c2 = form.values.c2;
		updatedUser.questionOneObj.c3 = form.values.c3;
		//update new user with values from the TEF
		updatedUser.questionOneTEF = QuestionOneTEFObjState;
		//set update backend and update user state
		ResultsDatabase.updateCadet(updatedUser.id, updatedUser).then((data) => {
			props.setUser(data);
			if (direction === directionEnum.next) {
				navigate("/q2");
			} else {
			}
		});
	};

	return (
		<div className="w-2/3 m-auto bg-white p-8">
			<div className="flex-col">
				<h2 className="border-solid border-b border-x-0 border-t-0">
					Question 1 (40 Marks):
				</h2>
				<form>
					<List type="ordered" listStyleType="lower-alpha">
						<List.Item>
							<Text>Fill in the Following Blanks.</Text>
						</List.Item>
						<List withPadding listStyleType="lower-roman">
							<List.Item>
								<TextInput
									{...form.getInputProps("a1")}
									className="inline-block"
									label="OT Strip:"
								/>
								<Text className="inline-block">( 1m )</Text>
							</List.Item>
							<List.Item>
								<TextInput
									{...form.getInputProps("a2")}
									className="inline-block"
									label="OT Distance:"
								/>
								<Text className="inline-block">( 1m )</Text>
							</List.Item>
							<List.Item>
								<TextInput
									{...form.getInputProps("a3")}
									className="inline-block"
									label="OT Factor:"
								/>
								<Text className="inline-block">( 1m )</Text>
							</List.Item>
						</List>
						<List.Item>
							<Text>
								Fill up your Initial Orders using the Target Engagement Form
								below.
							</Text>
						</List.Item>
						<List.Item>
							<Text>
								Write out the Voice Procedure for the initial orders, the way
								that you would call for fire below.
							</Text>
							<div className="flex py-4 w-full">
								<Text className="inline-block flex self-start">15:</Text>
								<Textarea
									{...form.getInputProps("c1")}
									className="inline-block w-full"
								></Textarea>
								<Text className="inline-block">(1m)</Text>
							</div>
							<Text>10: Authenticate Echo Five, over.</Text>
							<div className="flex py-4 w-full">
								<Text className="inline-block flex self-start">15:</Text>
								<Textarea
									{...form.getInputProps("c2")}
									className="inline-block w-full"
								></Textarea>
								<Text className="inline-block">(1m)</Text>
							</div>
							<Text>10: (Acknowledges order), out</Text>
							<div className="flex py-4 w-full">
								<Text className="inline-block flex self-start">15:</Text>
								<Textarea
									{...form.getInputProps("c3")}
									className="inline-block w-full"
								></Textarea>
								<Text className="inline-block">(5m)</Text>
							</div>
							<Text>10: (Acknowledges order), out</Text>
						</List.Item>
						<List.Item className="py-5">
							<Text>
								Using the rounds depicted in the question paper, fill up the{" "}
								<b>
									<u>observations</u>
								</b>{" "}
								and necessary{" "}
								<b>
									<u>corrections</u>
								</b>{" "}
								on the engagement form given below
							</Text>
						</List.Item>
					</List>
				</form>
				<TargetEngagementForm
					TEFObjState={QuestionOneTEFObjState}
					TEFObjDispatcher={TEFObjDispatcher}
				/>
				<Button className="my-8" onClick={() => onClick(directionEnum.next)}>
					Next question
				</Button>
			</div>
		</div>
	);
};

export default QuestionOne;
