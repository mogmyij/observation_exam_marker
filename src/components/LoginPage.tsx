import { useState } from "react";
import { user } from "../App";
import { useForm } from "@mantine/form";
import {
  Button,
  TextInput,
  Tooltip,
  Header,
  Title,
  Container,
  Paper,
} from "@mantine/core";
import ResultsDatabase from "../Services/ResultsDatabase";

//returns true if string is alphanumeric
function isAlphaNumeric(str: string): boolean {
  const AlphaNumericRegex = new RegExp("^[a-zA-Z0-9]*$");
  return AlphaNumericRegex.test(str);
}

function LoginPage(props: {
  user: user;
  setUser: React.Dispatch<React.SetStateAction<user>>;
}) {
  //initialie form object and types
  const form = useForm({
    initialValues: {
      name: "",
      id: "",
    },
    validate: {
      name: (value) =>
        isAlphaNumeric(value) ? null : "Please only use numbers and letters",
      id: (value) =>
        isAlphaNumeric(value) ? null : "Please only use numbers and letters",
    },
  });
  type formType = typeof form.values;
  type formErrorType = typeof form.errors;

  //state to check if textInput is open so that tool tip can be displayed
  const [opened, setOpened] = useState(false);

  //add cadet to the database and begin the test
  const handleSubmit = (values: formType) => {
    ResultsDatabase.addCadet(values);
  };

  //handle errors
  const handleErrors = (errors: formErrorType) => {
    console.log("failed to begin test: ", errors);
  };

  return (
    <div>
      <Header height={70} my={30}>
        <Title>Observation Level 1 assesment</Title>
      </Header>
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
              label={"Enter masked NRIC"}
              position="bottom-start"
              withArrow
              opened={opened}
              transitionProps={{ transition: "skew-up", duration: 250 }}
              color="grey"
            >
              <TextInput
                label="NRIC"
                placeholder=""
                {...form.getInputProps("id")}
                variant="filled"
                onFocus={() => setOpened(true)}
                onBlur={() => setOpened(false)}
                required
              ></TextInput>
            </Tooltip>
            <Button mt={50} type="submit">
              Begin test!
            </Button>
          </form>
        </Paper>
      </Container>
    </div>
  );
}

export default LoginPage;
