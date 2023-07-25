import { useForm } from "@mantine/form";
import { List, Text, Textarea, Button } from "@mantine/core";
import TargetEngagementForm from "../TargetEngagementForm";
import { directionEnum } from "../../objects/QuestionOneObj";
import { UserObj, cloneUserObj } from "../../objects/UserObj";
import ResultsDatabase from "../../Services/ResultsDatabase";
import { useReducer } from "react";
import { TEFObjReducer } from "../../reducers/TEFCorrectionReducer";
import { useNavigate } from "react-router-dom";
import { QuestionThreeObj } from "../../objects/QuestionThreeObj";

const QuestionThree = (props: {
	user: UserObj;
	setUser: React.Dispatch<React.SetStateAction<UserObj>>;
}) => {
	//init navigator hoook
	const navigate = useNavigate();
	//init question one object
	let QuestionThreeAns: QuestionThreeObj = {
		...props.user.questionThreeObj,
	};

	//TEF state that is passed to the TEF component to use
	const [QuestionThreeTEFObjState, TEFObjDispatcher] = useReducer(
		TEFObjReducer,
		props.user.questionThreeTEF
	);

	//init form
	const form = useForm({
		initialValues: {
			...QuestionThreeAns,
		},
	});

	const onClick = (direction: directionEnum) => {
		//pass user object by value instead of reference by creating a deep copy
		//instead of a shallow one
		let updatedUser = cloneUserObj(props.user);
		//update new user with values from the form
		updatedUser.questionThreeObj.c1 = form.values.c1;
		updatedUser.questionThreeObj.c2 = form.values.c2;
		updatedUser.questionThreeObj.c3 = form.values.c3;
		updatedUser.questionThreeObj.c4 = form.values.c4;
		//update new user with values from the TEF
		updatedUser.questionThreeTEF = QuestionThreeTEFObjState;
		//set update backend and update user state
		ResultsDatabase.updateCadet(updatedUser.id, updatedUser).then((data) => {
			props.setUser(data);
			if (direction === directionEnum.next) {
				navigate("/q4");
			} else {
				navigate("/q2");
			}
		});
	};

	return (
		<div className="w-3/4 m-auto bg-white p-8">
			<div className="flex-col">
				<h2 className="border-solid border-b border-x-0 border-t-0">
					Question 3 (40 Marks):
				</h2>
				<form>
					<List type="ordered" listStyleType="lower-alpha">
						<List.Item>
							<Text>
								Fill up the{" "}
								<b>
									<u>Initial Orders</u>
								</b>{" "}
								in the engagement form given below.
							</Text>
						</List.Item>
						<List.Item>
							<Text>
								With reference to the diagrams found within the question paper,
								fill in the{" "}
								<b>
									<u>observations</u>
								</b>{" "}
								and necessary{" "}
								<b>
									<u>corrections</u>
								</b>{" "}
								on the engagement form given below.
							</Text>
						</List.Item>
						<List.Item>
							<Text>
                                Fill in the safety distance in the following blanks.
							</Text>
							<div className="flex py-4 w-full">
								<Text className="inline-block flex self-start">Open, before ranging:</Text>
								<Textarea
									{...form.getInputProps("c1")}
									className="inline-block w-full"
								></Textarea>
								<Text className="inline-block">(2m)</Text>
							</div>
							<div className="flex py-4 w-full">
								<Text className="inline-block flex self-start">Open, after ranging</Text>
								<Textarea
									{...form.getInputProps("c2")}
									className="inline-block w-full"
								></Textarea>
								<Text className="inline-block">(2m)</Text>
							</div>
							<div className="flex py-4 w-full">
								<Text className="inline-block flex self-start">Entrenched, before ranging</Text>
								<Textarea
									{...form.getInputProps("c3")}
									className="inline-block w-full"
								></Textarea>
								<Text className="inline-block">(2m)</Text>
							</div>
							<div className="flex py-4 w-full">
								<Text className="inline-block flex self-start">Entrenched, after ranging</Text>
								<Textarea
									{...form.getInputProps("c4")}
									className="inline-block w-full"
								></Textarea>
								<Text className="inline-block">(2m)</Text>
							</div>
						</List.Item>
					</List>
				</form>
				<TargetEngagementForm
					TEFObjState={QuestionThreeTEFObjState}
					TEFObjDispatcher={TEFObjDispatcher}
				/>
				<div className="flex justify-between">
					<Button className="my-8" onClick={() => onClick(directionEnum.back)}>
						Previous Question
					</Button>
					<Button className="my-8" onClick={() => onClick(directionEnum.next)}>
						Next question
					</Button>
				</div>
			</div>
		</div>
	);
};

export default QuestionThree;
