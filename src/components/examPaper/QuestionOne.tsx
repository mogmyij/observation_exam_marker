import { useForm } from "@mantine/form";
import { List, TextInput, Text } from "@mantine/core";
import TargetEngagementForm from "../TargetEngagementForm";

const QuestionOne = () => {
  //init form
  const form = useForm({
    initialValues: {},
  });

  return (
    <div className="w-2/3 m-auto bg-white p-8">
      <div className="flex-col">
        <h2 className="border-solid border-b border-x-0 border-t-0">
          Question 1 (40 Marks):
        </h2>
        <form>
          <List type="ordered" listStyleType="lower-alpha">
            <List.Item>
              <Text>Fill in the Following Blanks</Text>
            </List.Item>
            <List withPadding listStyleType="lower-roman">
              <List.Item>
                <TextInput label="OT Strip:" />
              </List.Item>
              <List.Item>
                <TextInput label="OT Distance:" />
              </List.Item>
              <List.Item>
                <TextInput label="OT Factor:" />
              </List.Item>
            </List>
          </List>
        </form>
        <TargetEngagementForm/>
      </div>
    </div>
  );
};

export default QuestionOne;
