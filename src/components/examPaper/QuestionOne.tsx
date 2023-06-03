import { useForm } from "@mantine/form";
import { List, TextInput, Text, Textarea, Button } from "@mantine/core";
import TargetEngagementForm from "../TargetEngagementForm";
import { QuestionOneObj } from "../../objects/QuestionOneObj";
import { TEFObj, TEFObjType } from "../../objects/TargetEngagementFormObj";
import { log } from "console";

const QuestionOne = () => {
	//init question one object
	let QuestionOneAns: QuestionOneObj = {
		a1: "",
		a2: "",
		a3: "",
		c1: "",
		c2: "",
		c3: "",
		TEF: TEFObj,
	};
	//init form
	const form = useForm({
		initialValues: {
			...QuestionOneAns,
		},
	});
	type formValuesType = typeof form.values;

	const onSubmit = (values: formValuesType) => {
		console.log(values);
	};

	return (
		<div className="w-2/3 m-auto bg-white p-8">
			<div className="flex-col">
				<h2 className="border-solid border-b border-x-0 border-t-0">
					Question 1 (40 Marks):
				</h2>
				<form id="questionOneForm" onSubmit={form.onSubmit((values) => onSubmit(values))}>
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
				<TargetEngagementForm />
        <Button className="my-8" type="submit" form="questionOneForm">Next question</Button>
			</div>
		</div>
	);
};

export default QuestionOne;
