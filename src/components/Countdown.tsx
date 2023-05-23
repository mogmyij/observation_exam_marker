import { Alert, Paper, RingProgress, Text } from "@mantine/core";
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
        <div className="bg-cyan-200 rounded-lg flex items-center mx-3 px-3">
          <div>
            <h3 className="m-0">Time Left:</h3>
            <Text>{secondsToHMS(secondsLeft)}</Text>
          </div>
          <RingProgress
            sections={[{ value: percentOfSecondsLeft, color: "#273043" }]}
            label={
              <Text color="#273043" weight={600} align="center" size="xs">
                {percentOfSecondsLeft}%
              </Text>
            }
            size={80}
            className="inline-block"
          />
        </div>
      )}
    </>
  );
};

export default Countdown;
