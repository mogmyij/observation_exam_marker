import { useForm } from "@mantine/form";
import { List, Text, Textarea, Button } from "@mantine/core";
import TargetEngagementForm from "../TargetEngagementForm";
import { directionEnum } from "../../objects/QuestionOneObj";
import { UserObj, cloneUserObj } from "../../objects/UserObj";
import ResultsDatabase from "../../Services/ResultsDatabase";
import { useReducer } from "react";
import { TEFObjReducer } from "../../reducers/TEFCorrectionReducer";
import { useNavigate } from "react-router-dom";

const QuestionFive = (props: {
	user: UserObj;
	setUser: React.Dispatch<React.SetStateAction<UserObj>>;
}) => {
	//init navigator hoook
	const navigate = useNavigate();

	//TEF state that is passed to the TEF component to use
	const [QuestionFiveTEFObjState, TEFObjDispatcher] = useReducer(
		TEFObjReducer,
		props.user.questionFiveTEF
	);

	const onClick = (direction: directionEnum) => {
		//pass user object by value instead of reference by creating a deep copy
		//instead of a shallow one
		let updatedUser = cloneUserObj(props.user);
		//update new user with values from the TEF
		updatedUser.questionFiveTEF = QuestionFiveTEFObjState;
		//set update backend and update user state
		ResultsDatabase.updateCadet(updatedUser.id, updatedUser).then((data) => {
			props.setUser(data);
			if (direction === directionEnum.next) {
			} else {
				navigate("/q4");
			}
		});
	};

	return (
		<div className="w-2/3 m-auto bg-white p-8">
			<div className="flex-col">
				<h2 className="border-solid border-b border-x-0 border-t-0">
					Question 5 (30 Marks):
				</h2>
				<form>
					<List type="ordered" listStyleType="lower-alpha">
						<List.Item>
							<Text>
								Fill up your{" "}
								<b>
									<u>inital orders</u>
								</b>{" "}
								and{" "}
								<b>
									<u>necessary corrections</u>
								</b>{" "}
								in the target engagement form given below using the rounds
								observed on the question paper.
							</Text>
						</List.Item>
					</List>
				</form>
				<TargetEngagementForm
					TEFObjState={QuestionFiveTEFObjState}
					TEFObjDispatcher={TEFObjDispatcher}
				/>
				<div className="flex justify-between">
					<Button className="my-8" onClick={() => onClick(directionEnum.back)}>
						Previous Question
					</Button>
					<Button
						className="my-8"
						onClick={() => onClick(directionEnum.next)}
						variant="gradient"
						gradient={{ from: "orange", to: "red" }}
					>
						Submit Test
					</Button>
				</div>
			</div>
		</div>
	);
};

export default QuestionFive;
