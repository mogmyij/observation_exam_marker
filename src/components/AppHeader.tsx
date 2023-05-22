import { Group, Header, Title } from "@mantine/core";
import Countdown from "./Countdown";

const AppHeader = (props: { testHasBegun: boolean }) => {
  return (
    <div>
      <Header height={70} my={30} display="flex">
        <Group position="left">
          <Title>Observation Level 1 Exam</Title>
        </Group>
        <Group position="right">
          <Countdown
            timerStarted={props.testHasBegun}
            timerInSeconds={5400}
            onExpiry={() => {
              console.log("done");
            }}
          />
        </Group>
      </Header>
    </div>
  );
};

export default AppHeader;
