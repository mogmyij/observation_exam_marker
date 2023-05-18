import { useState } from "react";
import { user } from "../App";
import { useForm } from "@mantine/form";
import {
  Box,
  Button,
  TextInput,
  Tooltip,
  Header,
  Title,
  Center,
  Container,
  Paper,
} from "@mantine/core";

function isAlphaNumeric(str: string): boolean {
  const AlphaNumericRegex = new RegExp("/^[a-z0-9]+$/gi");
  return AlphaNumericRegex.test(str);
}

function LoginPage(props: {
  user: user;
  setUser: React.Dispatch<React.SetStateAction<user>>;
}) {
  const form = useForm();
  type FormValues = typeof form.values;

  const [opened, setOpened] = useState(false);
  //error states 0:no error, 1:missing name, 2:missing ID, 3:non-alphanumeric
  const [error, setError] = useState(0);

  //function that displays error message
  function displayError(error: Number): JSX.Element {
    var errorMessage;
    switch (error) {
      case 1:
        errorMessage = "Please Enter your Rank and Name";
        break;
      case 2:
        errorMessage = "Please Enter your Masked NRIC";
        break;
      case 3:
        errorMessage = "Please only use alpha-numeric characters";
        break;
    }

    return <div className="errorMessage">error: {errorMessage}</div>;
  }

  //add cadet to the database and begin the test
  const addCadet = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    //get the loginInfo from the submitted form
    var data = new FormData(event.target as HTMLFormElement);
    var name = data.get("name");
    var id = data.get("id") !== null ? data.get("id") : "";
    console.log(name, id);

    if (data.get("name") == "") {
      setError(1);
      return;
    }
    if (data.get("id") == "") {
      setError(2);
      return;
    }
    setError(0);
  };

  return (
    <div>
      <Header height={56} mb={50}>
        <Title>Observation Level 1 assesment</Title>
      </Header>
      <Container size={420}>
        <Title>Enter Details to begin.</Title>
        <Paper withBorder shadow="md" p={30} mt={30} radius={'md'}>
          <TextInput label="Rank and Name" required></TextInput>
          <Tooltip
            label={"Enter masked NRIC"}
            position="bottom-start"
            withArrow
            opened={opened}
            transitionProps={{transition:"skew-up", duration:250}}
            color="grey"
          >
            <TextInput
              label="NRIC"
              placeholder=""
              onFocus={() => setOpened(true)}
              onBlur={() => setOpened(false)}
              required
            ></TextInput>
          </Tooltip>
          <Button mt={50}>Begin test!</Button>
        </Paper>
      </Container>
    </div>
  );
}

export default LoginPage;
