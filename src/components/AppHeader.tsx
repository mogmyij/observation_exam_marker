import { Group, Header, Title } from "@mantine/core";
import Countdown from "./Countdown";

const AppHeader = (props: { testHasBegun: boolean }) => {
  return (
    <div className="flex justify-between h-20 items-center border-solid border-b border-x-0 border-t-0">
      <Title>Observation Level 1 Exam</Title>
      <Countdown
        timerStarted={props.testHasBegun}
        timerInSeconds={5400}
        onExpiry={() => {
          console.log("done");
        }}
      />
    </div>
  );
};

export default AppHeader;
