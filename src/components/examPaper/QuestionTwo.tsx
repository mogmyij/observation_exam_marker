import { useForm } from "@mantine/form";
import { List, Text, Textarea, Button } from "@mantine/core";
import TargetEngagementForm from "../TargetEngagementForm";
import { QuestionTwoObj } from "../../objects/QuestionTwoObj";
import { UserObj, cloneUserObj } from "../../objects/UserObj";
import ResultsDatabase from "../../Services/ResultsDatabase";
import { useReducer } from "react";
import { TEFObjReducer } from "../../reducers/TEFCorrectionReducer";
import { useNavigate } from "react-router-dom";
import { directionEnum } from "../../objects/QuestionOneObj";

const QuestionTwo = (props: {
	user: UserObj;
	setUser: React.Dispatch<React.SetStateAction<UserObj>>;
}) => {
	const navigate = useNavigate();
	//init QuestionTwoObj
	let QuestionTwoObj: QuestionTwoObj = {
		...props.user.questionTwoObj,
	};

	//init QuestionTwo TEF State
	const [QuestionTwoTEFObjState, TEFObjDispatcher] = useReducer(
		TEFObjReducer,
		props.user.questionTwoTEF
	);

	//init form
	const form = useForm({
		initialValues: {
			...QuestionTwoObj,
		},
	});

	const onClick = (direction: directionEnum) => {
		//pass user object by value instead of reference by creating a deep copy
		//instead of a shallow one
		let updatedUser = cloneUserObj(props.user);
		//update new user with values from the form
		updatedUser.questionTwoObj.b1 = form.values.b1;
		updatedUser.questionTwoObj.b2 = form.values.b2;
		updatedUser.questionTwoObj.b3 = form.values.b3;
		updatedUser.questionTwoObj.b4 = form.values.b4;
		updatedUser.questionTwoObj.b5 = form.values.b5;
		updatedUser.questionTwoObj.b6 = form.values.b6;
		updatedUser.questionTwoObj.b7 = form.values.b7;
		updatedUser.questionTwoObj.b8 = form.values.b8;
		//update new user with values from the TEF
		updatedUser.questionTwoTEF = QuestionTwoTEFObjState;
		//set update backend and update user state
		ResultsDatabase.updateCadet(updatedUser.id, updatedUser).then((data) => {
			props.setUser(data);
			if (direction === directionEnum.next) {
				navigate("/q3");
			} else {
				navigate("/q1");
			}
		});
	};

	return (
		<div className="w-2/3 m-auto bg-white p-8">
			<div className="flex-col">
				<h2 className="border-solid border-b border-x-0 border-t-0">
					Question 2 (40 Marks):
				</h2>
				<form>
					<List type="ordered" listStyleType="lower-alpha">
						<List.Item>
							<Text>
								Using the Target Engagement Form below & information provided:
							</Text>
						</List.Item>
						<List withPadding listStyleType="lower-roman">
							<List.Item>
								<Text>
									Fill up the{" "}
									<b>
										<u>Initial Orders.</u>
									</b>
								</Text>
							</List.Item>
							<List.Item>
								<Text>
									Fill up the{" "}
									<b>
										<u>observations</u>
									</b>{" "}
									& necessary{" "}
									<b>
										<u>corrections</u>
									</b>{" "}
									for the ranging mission and record it as a target. (The
									positions where the rounds landed are depicted in the question
									paper)
								</Text>
							</List.Item>
							<List.Item>
								<Text>
									Create a{" "}
									<b>
										<u>Hasty Fire Plan</u>
									</b>{" "}
									and include it in your engagement form.
								</Text>
							</List.Item>
							<br />
						</List>
						<List.Item>
							<Text>
								Using the Hasty Fire Plan created, you are now to fill in the
								blanks on the voice procudure
							</Text>
							<div className="flex py-4 w-full">
								<Text className="inline-block flex self-start">15:</Text>
								<Textarea
									{...form.getInputProps("b1")}
									className="inline-block w-full"
								></Textarea>
								<Text className="inline-block">(1m)</Text>
							</div>
							<Text>10: (Acknowledges the order), out.</Text>
							<div className="flex py-4 w-full">
								<Text className="inline-block flex self-start">15:</Text>
								<Textarea
									{...form.getInputProps("b2")}
									className="inline-block w-full"
								></Textarea>
								<Text className="inline-block">(1m)</Text>
							</div>
							<Text>10: (Acknowledges order), out</Text>
							<div className="flex py-4 w-full">
								<Text className="inline-block flex self-start">15:</Text>
								<Textarea
									{...form.getInputProps("b3")}
									className="inline-block w-full"
								></Textarea>
								<Text className="inline-block">(1m)</Text>
							</div>
							<Text>10: Authenticate Bravo Nine, over.</Text>
							<div className="flex py-4 w-full">
								<Text className="inline-block flex self-start">15:</Text>
								<Textarea
									{...form.getInputProps("b4")}
									className="inline-block w-full"
								></Textarea>
								<Text className="inline-block">(1m)</Text>
							</div>
							<Text>10: Not ready with IRON, over.</Text>
							<Text>10: Ready with IRON, over.</Text>
							<div className="flex py-4 w-full">
								<Text className="inline-block flex self-start">15:</Text>
								<Textarea
									{...form.getInputProps("b5")}
									className="inline-block w-full"
								></Textarea>
								<Text className="inline-block">(1m)</Text>
							</div>
							<Text>10: Authenticate Bravo Five, over</Text>
							<div className="flex py-4 w-full">
								<Text className="inline-block flex self-start">15:</Text>
								<Textarea
									{...form.getInputProps("b6")}
									className="inline-block w-full"
								></Textarea>
								<Text className="inline-block">(1m)</Text>
							</div>
							<Text>10: (Acknowledges the order), out.</Text>
							<Text>10: IRON first shot, out</Text>
							<Text>10: Iron all last shot, over</Text>
							<div className="flex py-4 w-full">
								<Text className="inline-block flex self-start">15:</Text>
								<Textarea
									{...form.getInputProps("b7")}
									className="inline-block w-full"
								></Textarea>
								<Text className="inline-block">(1m)</Text>
							</div>
						</List.Item>
						<List.Item className="py-5">
							<Text>
								Should the following be transmitted to 10 after activating IRON?
								why?
							</Text>
						</List.Item>
						<Text>15 to 10: Very good shooting, end of mission, over.</Text>
						<div className="flex py-4 w-full">
							<Text className="inline-block flex self-start">15:</Text>
							<Textarea
								{...form.getInputProps("b8")}
								className="inline-block w-full"
							></Textarea>
							<Text className="inline-block">(1m)</Text>
						</div>
					</List>
				</form>
				<TargetEngagementForm
					TEFObjState={QuestionTwoTEFObjState}
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

export default QuestionTwo;
