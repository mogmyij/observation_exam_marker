import { useForm } from "@mantine/form";
import { List, Text, Textarea, Button } from "@mantine/core";
import TargetEngagementForm from "../TargetEngagementForm";
import { directionEnum } from "../../objects/QuestionOneObj";
import { UserObj, cloneUserObj } from "../../objects/UserObj";
import ResultsDatabase from "../../Services/ResultsDatabase";
import { useReducer } from "react";
import { TEFObjReducer } from "../../reducers/TEFCorrectionReducer";
import { useNavigate } from "react-router-dom";
import { QuestionFourObj } from "../../objects/QuestionFourObj";

const QuestionFour = (props: {
	user: UserObj;
	setUser: React.Dispatch<React.SetStateAction<UserObj>>;
}) => {
	//init navigator hoook
	const navigate = useNavigate();
	//init question one object
	let QuestionFourAns: QuestionFourObj = {
		...props.user.questionFourObj,
	};

	//TEF state that is passed to the TEF component to use
	const [QuestionFourTEFObjState, TEFObjDispatcher] = useReducer(
		TEFObjReducer,
		props.user.questionFourTEF
	);

	//init form
	const form = useForm({
		initialValues: {
			...QuestionFourAns,
		},
	});

	const onClick = (direction: directionEnum) => {
		//pass user object by value instead of reference by creating a deep copy
		//instead of a shallow one
		let updatedUser = cloneUserObj(props.user);
		//update new user with values from the form
		updatedUser.questionFourObj.b1 = form.values.b1;
		updatedUser.questionFourObj.c1 = form.values.c1;
		//update new user with values from the TEF
		updatedUser.questionFourTEF = QuestionFourTEFObjState;
		//set update backend and update user state
		ResultsDatabase.updateCadet(updatedUser.id, updatedUser).then((data) => {
			props.setUser(data);
			if (direction === directionEnum.next) {
				navigate("/q5");
			} else {
				navigate("/q3");
			}
		});
	};

	return (
		<div className="w-3/4 m-auto bg-white p-8">
			<div className="flex-col">
				<h2 className="border-solid border-b border-x-0 border-t-0">
					Question 4 (20 Marks):
				</h2>
				<form>
					<List type="ordered" listStyleType="lower-alpha">
						<List.Item>
							<Text>
								Fill up your initial order, observations, and necessary
								corrections in the engagement form given below.
							</Text>
						</List.Item>
						<List.Item>
							<Text>
								After observing the orientating round, what would be your{" "}
								<b>
									<u>next order</u>
								</b>{" "}
								to the CP
							</Text>
							<div className="flex py-4 w-full">
								<Text className="inline-block flex self-start">15:</Text>
								<Textarea
									{...form.getInputProps("b1")}
									className="inline-block w-full"
								></Textarea>
								<Text className="inline-block">(2m)</Text>
							</div>
						</List.Item>
						<List.Item>
							<Text>
								After observing the 3 rounds as shown in the question paper,
								what would your{" "}
								<u>
									<b>final order</b>
								</u>{" "}
								be to the CP?
							</Text>
							<div className="flex py-4 w-full">
								<Text className="inline-block flex self-start">
                                    15: 
								</Text>
								<Textarea
									{...form.getInputProps("c1")}
									className="inline-block w-full"
								></Textarea>
								<Text className="inline-block">(1m)</Text>
							</div>
						</List.Item>
					</List>
				</form>
				<TargetEngagementForm
					TEFObjState={QuestionFourTEFObjState}
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

export default QuestionFour;
