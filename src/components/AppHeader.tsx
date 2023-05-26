import { Group, Header, Title } from "@mantine/core";
import Countdown from "./Countdown";

const AppHeader = (props: { testHasBegun: boolean }) => {
  return (
    <div className="sticky top-0 z-10 shadow-lg flex justify-between h-20 items-center border-solid border-b-2 border-x-0 border-t-0 border-b-slate-300 bg-baseWhite/80">
      <Title>Observation Level 1 Exam</Title>
      <Countdown
        timerStarted={props.testHasBegun}
        timerInSeconds={7200}
        onExpiry={() => {
          console.log("done");
        }}
      />
    </div>
  );
};

export default AppHeader;
