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
  //state to track and update seconds left
  const [secondsLeft, setSecondsLeft] = useState<number>(props.timerInSeconds);

  //used to display ammount of time left
  var percentOfSecondsLeft = Math.floor(
    (secondsLeft / props.timerInSeconds) * 100
  );

  //starts timer once component is loaded
  useEffect(() => {
    //checks if the test has begun so that timer starts only when user logs in
    if (!props.timerStarted) return;
    //runs callback when timer ends
    if (secondsLeft === 0) {
      props.onExpiry();
      return;
    }
    //decreases the timer every second using setInterval() function that runs function every x millisecond
    const interval = setInterval(() => {
      let nextTime = secondsLeft - 1;
      setSecondsLeft(nextTime);
    }, 1000);

    //clears previous setInterval() instance every time the timer counts down so that multiple instances do not start
    return () => clearInterval(interval);
  }, [secondsLeft, props.timerStarted]);

  return (
    <>
      {props.timerStarted && (
        <div className="flex items-center ">
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
