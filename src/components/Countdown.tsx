import { Alert, RingProgress, Text } from "@mantine/core";
import { useState, useEffect } from "react";

const secondsToHMS = (seconds: number): string => {
  var hours = Math.floor(seconds / 3600);
  var minutes = Math.floor(seconds / 60) % 60;
  var seconds = seconds % 60;

  return hours + ":" + minutes + ":" + seconds;
};

const Countdown = (props: {
  timerStarted: boolean;
  timerInSeconds: number;
  onExpiry: Function;
}) => {
  const [secondsLeft, setSecondsLeft] = useState<number>(props.timerInSeconds);
  var percentOfSecondsLeft = Math.floor(
    (secondsLeft / props.timerInSeconds) * 100
  );

  useEffect(() => {
    if (!props.timerStarted) return;
    if (secondsLeft === 0) {
      props.onExpiry();
      return;
    }
    const interval = setInterval(() => {
      let nextTime = secondsLeft - 1;
      setSecondsLeft(nextTime);
    }, 1000);

    return () => clearInterval(interval);
  }, [secondsLeft, props.timerStarted]);

  return (
    <>
      {props.timerStarted && (
        <Alert title="Time Left:" radius="md" variant="light">
          {secondsToHMS(secondsLeft)}
          <RingProgress
            sections={[{ value: percentOfSecondsLeft, color: "blue" }]}
            label={
              <Text color="blue" weight={700} align="center" size="xl">
                {percentOfSecondsLeft}%
              </Text>
            }
          />
        </Alert>
      )}
    </>
  );
};

export default Countdown;
