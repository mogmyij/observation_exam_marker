import { Group, Radio, Select, TextInput, Text } from "@mantine/core";
import { Form, useForm } from "@mantine/form";
import { TEFInitialValues } from "../objects/TargetEngagementFormObj";
import TEFAdjustments from "./TEFAdjustments";
import { useReducer } from "react";
import {
  TEFCorrectionReducer,
  ActionEnum,
} from "../reducers/TEFCorrectionReducer";

const TargetEngagementForm = () => {
  //useReducer for TEF adjustments
  const [TEFAdjustmentState, TEFAdjustmentDispatcher] = useReducer(
    TEFCorrectionReducer,
    TEFInitialValues
  );
  //function that uses dispatcher function obtained from reducer to update the state
  //each time the input box is updated
  const onAdjustmentUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
    TEFAdjustmentDispatcher({
      type: ActionEnum.updateState,
      name: event.target.name,
      payload: event.target.value,
    });
  };

  //init form object
  const form = useForm({
    initialValues: {
      ...TEFInitialValues,
    },
  });

  return (
    <div>
      <h2 className="Text-center">Target Engagement Form</h2>
      <form>
        <div className="grid grid-cols-32 h-auto overflow-visible">
          {/*row 1 (OP LOCATION)*/}
          <div className="col-span-16 border-solid border h-auto">
            <Text className="inline-block">OP Location & Grid:</Text>
            <TextInput
              variant="unstyled"
              className="inline-block"
              {...form.getInputProps("OPLocation")}
            />
          </div>
          <div className="col-span-16 border-solid border h-auto">
            <Text className="inline-block">Target Code NO.:</Text>
            <TextInput variant="unstyled" className="inline-block" />
          </div>

          {/*row 2*/}
          <div className="col-span-16 border-solid border h-auto">
            <Text className="inline-block">OP HT:</Text>
            <TextInput
              variant="unstyled"
              className="inline-block"
              {...form.getInputProps("OPHeight")}
            />
          </div>
          <div className="col-span-16 border-solid border h-auto">
            <Text className="inline-block">OT Distance (KM):</Text>
            <TextInput
              variant="unstyled"
              className="inline-block"
              {...form.getInputProps("OTDistance")}
            />
          </div>

          {/*row 3 (INITIAL ORDERS)*/}
          <div className="col-span-full border-solid border h-auto bg-stone-400">
            <Text ta="center">INITIAL ORDERS</Text>
          </div>

          {/*row 4*/}
          <div className="col-span-13 border-solid border h-auto">
            <Text className="inline-block">Call Sign:</Text>
            <TextInput
              variant="unstyled"
              className="inline-block"
              {...form.getInputProps("CallSign")}
            />
          </div>
          <div className="col-span-19 border-solid border h-auto">
            <Text className="inline-block">Fire mission:</Text>
            <Select
              placeholder="Choose Type"
              data={[
                { value: "SINGLE GUN", label: "Single Gun" },
                { value: "SINGLE MORTAR", label: "Single Mortar" },
                { value: "Battery", label: "Battery" },
                { value: "Platoon", label: "Platoon" },
              ]}
              transitionProps={{
                transition: "pop-top-left",
                duration: 80,
                timingFunction: "ease",
              }}
              variant="unstyled"
              className="inline-block"
              clearable
              {...form.getInputProps("FireMission")}
            />
          </div>

          {/*row 5 (TARGET LOCATION)*/}
          <div className="col-span-full border-solid border h-auto bg-stone-400">
            <Text ta="center">TARGET LOCATION & DESCRIPTION</Text>
          </div>

          {/*row 6*/}
          <div className="col-span-13 border-solid border h-auto">
            <Text className="inline-block">Target Grid:</Text>
            <TextInput
              variant="unstyled"
              className="inline-block"
              {...form.getInputProps("TargetGrid")}
            />
          </div>
          <div className="col-span-19 border-solid border h-auto">
            <Text className="inline-block">Alt:</Text>
            <TextInput
              variant="unstyled"
              className="inline-block"
              {...form.getInputProps("TargetGrid")}
            />
          </div>

          {/*row 7*/}
          <div className="col-span-13 border-solid border h-auto">
            <Text className="inline-block">DIR:</Text>
            <TextInput
              variant="unstyled"
              className="inline-block w-1/5"
              {...form.getInputProps("TargetGrid")}
            />
            <Text className="inline-block">DIST:</Text>
            <TextInput
              variant="unstyled"
              className="inline-block w-1/5"
              {...form.getInputProps("TargetGrid")}
            />
            <Text className="inline-block">VA:</Text>
            <TextInput variant="unstyled" className="inline-block w-1/5" />
          </div>
          <div className="col-span-13 border-solid border h-auto">
            <Select
              placeholder="Left/Right"
              data={[
                { value: "LEFT", label: "Left" },
                { value: "RIGHT", label: "Right" },
              ]}
              transitionProps={{
                transition: "pop-top-left",
                duration: 80,
                timingFunction: "ease",
              }}
              variant="unstyled"
              className="inline-block w-1/3"
              clearable
              {...form.getInputProps("LRInitialAdjustment")}
            />
            <TextInput
              variant="default"
              className="inline-block w-1/3"
              {...form.getInputProps("LRInitialAdjustment")}
            />
          </div>
          <div className="col-span-6 border-solid border h-auto">
            <Select
              placeholder="ADD/DROP"
              data={[
                { value: "ADD", label: "Add" },
                { value: "DROP", label: "Drop" },
              ]}
              transitionProps={{
                transition: "pop-top-left",
                duration: 80,
                timingFunction: "ease",
              }}
              variant="unstyled"
              className="inline-block w-2/3"
              clearable
              {...form.getInputProps("ADInitialDirection")}
            />
            <TextInput
              variant="default"
              className="inline-block w-1/3"
              {...form.getInputProps("ADInitialAdjustment")}
            />
          </div>

          {/*row 8*/}
          <div className="col-span-13 border-solid border h-auto">
            <Text className="inline-block">AMMO:</Text>
            <Select
              placeholder="Select Ammo"
              data={[
                { value: "WP", label: "WP" },
                { value: "HE", label: "HE" },
              ]}
              transitionProps={{
                transition: "pop-top-left",
                duration: 80,
                timingFunction: "ease",
              }}
              variant="unstyled"
              className="inline-block w-1/3"
              clearable
              {...form.getInputProps("Ammo")}
            />
          </div>
          <div className="col-span-19 border-solid border h-auto">
            <Text className="inline-block">FUZE:</Text>
          </div>

          {/*row 9*/}
          <div className="col-span-13 border-solid border h-auto">
            <Text className="inline-block">MARK: LASER</Text>
          </div>
          <div className="col-span-19 border-solid border h-auto">
            <Text className="inline-block">BTY/ PL SALVO RANGING</Text>
          </div>

          {/*row 10 (TARGET DESCRIPTION)*/}
          <div className="col-span-26 border-solid border h-auto">
            <Text className="inline-block">TGT DESCRIPTION:</Text>
            <TextInput
              variant="unstyled"
              className="inline-block"
              {...form.getInputProps("TargetDescription")}
            />
          </div>
          <div className="col-span-6 border-solid border h-auto">
            <Text className="inline-block ">COVER:</Text>
            <Select
              placeholder="Choose"
              data={[
                { value: "OPEN", label: "Open" },
                { value: "SPARSE", label: "Sparse" },
                { value: "DENSE", label: "Dense" },
              ]}
              transitionProps={{
                transition: "pop-top-left",
                duration: 80,
                timingFunction: "ease",
              }}
              variant="unstyled"
              className="inline-block w-3/5"
              clearable
              {...form.getInputProps("Vegetation")}
            />
          </div>

          {/*row 11 (METHOD OF ENGAGEMENT)*/}
          <div className="col-span-full border-solid border h-auto">
            <div className="col-span-full border-solid border h-auto bg-stone-400">
              <Text ta="center">METHOD OF ENGAGEMENT</Text>
            </div>
          </div>

          {/*row 12*/}
          <div className="col-span-13 border-solid border h-auto">
            <Text className="inline-block ">NO. OF AMMO:</Text>
          </div>
          <div className="col-span-7 border-solid border h-auto">
            <Text className="inline-block ">POINT</Text>
          </div>
          <div className="col-span-6 border-solid border h-auto">
            <Text className="inline-block ">INTERVAL</Text>
          </div>
          <div className="col-span-6 border-solid border h-auto">
            <Text className="inline-block ">SHEAF:</Text>
          </div>

          {/*row 13*/}
          <div className="col-span-13 border-solid border h-auto">
            <Text className="inline-block ">
              TRAJECTORY: NOMINAL/VERTICAL/HIGH ANGLE
            </Text>
          </div>
          <div className="col-span-13 border-solid border h-auto">
            <Text className="inline-block ">TFB:</Text>
            <TextInput
              variant="unstyled"
              className="inline-block w-1/3"
              {...form.getInputProps("TargetFrontBearing")}
            />
            <Text className="inline-block ">TFL:</Text>
            <TextInput
              variant="unstyled"
              className="inline-block w-1/3"
              {...form.getInputProps("TargetFrontLength")}
            />
          </div>
          <div className="col-span-6 border-solid border h-auto">
            <Text className="inline-block ">WIND SPEED:</Text>
          </div>

          {/*row 14 (MISSION TYPE)*/}
          <div className="col-span-full border-solid border h-auto">
            <Radio.Group {...form.getInputProps("MissionType")}>
              <Group>
                <Radio value="PR" label="PRECISION REGISTRATION"></Radio>
                <Radio value="MPI" label="MPI REGISTRATION"></Radio>
                <Radio value="VR" label="VECTOR RANGING"></Radio>
                <Radio value="CTR" label="DANGERR CLOSE"></Radio>
                <Radio value="SMK" label="SMK TGT"></Radio>
              </Group>
            </Radio.Group>
          </div>

          {/*row 15 (CHECK)*/}
          <div className="col-span-26 border-solid border h-auto">
            <Text className="inline-block ">CHECK: </Text>
            <Text className="inline-block ">PE</Text>
            <TextInput
              variant="unstyled"
              className="inline-block w-1/12"
              {...form.getInputProps("CheckPE")}
            />
            <Text className="inline-block ">/ ANGLE T</Text>
            <TextInput
              variant="unstyled"
              className="inline-block w-1/12"
              {...form.getInputProps("CheckAngleT")}
            />
            <Text className="inline-block ">
              / TIME OF FLIGHT / SPLASH AND COUNTDOWN
            </Text>
          </div>
          <div className="col-span-6 border-solid border h-auto">
            <Text className="inline-block ">ADDN:</Text>
          </div>

          {/*row 16*/}
          <div className="col-span-full border-solid border h-auto">
            <div className="col-span-full border-solid border h-auto bg-stone-400">
              <Text ta="center">METHOD OF ENGAGEMENT</Text>
            </div>
          </div>

          {/*row 17(AMC/FIRE)*/}
          <div className="col-span-13 border-solid border h-auto">
            <Radio.Group {...form.getInputProps("MethodOfFireControl")}>
              <Group>
                <Radio size="xs" value="AMC" label="AT MY COMMAND"></Radio>
                <Radio size="xs" value="FIRE" label="FIRE"></Radio>
                <Radio size="xs" value="TOT" label="TIME ON TGT"></Radio>
              </Group>
            </Radio.Group>
          </div>
          <div className="col-span-10 border-solid border h-auto">
            <Text className="inline-block ">ADVISE WHEN READY</Text>
          </div>
          <div className="col-span-9 border-solid border h-auto">
            <Text className="inline-block ">ADDN:</Text>
          </div>

          {/*row 18 (Skip MPI DATA row) */}
          <div className="col-span-1 row-span-3 border-solid border h-auto bg-stone-400">
            <Text ta="center">RD</Text>
          </div>
          <div className="col-span-6 border-solid border h-auto bg-stone-400">
            <Text ta="center">MPI DATA</Text>
          </div>
          <div className="col-span-6 border-solid border h-auto bg-stone-400">
            <Text ta="center">VECTOR RANGING</Text>
          </div>
          <div className="col-span-19 border-solid border h-auto bg-stone-400">
            <Text ta="center">METHOD OF ENGAGEMENT</Text>
          </div>

          {/*row 19 (Skip U / D Column ) */}
          <div className="col-span-2  row-span-2 border-solid border h-auto">
            <Text ta="center">DIR</Text>
          </div>
          <div className="col-span-2  row-span-2 border-solid border h-auto">
            <Text ta="center">DIST</Text>
          </div>
          <div className="col-span-2  row-span-2 border-solid border h-auto">
            <Text ta="center">VA</Text>
          </div>
          <div className="col-span-2  row-span-2 border-solid border h-auto">
            <Text ta="center">DIR</Text>
          </div>
          <div className="col-span-2 row-span-2  border-solid border h-auto">
            <Text ta="center">DIST</Text>
          </div>
          <div className="col-span-2  row-span-2 border-solid border h-auto">
            <Text ta="center">VA</Text>
          </div>
          <div className="col-span-5 border-solid border h-auto">
            <Text ta="center">OBSERVATION</Text>
          </div>
          <div className="col-span-2 row-span-2 border-solid border h-auto">
            <Text ta="center">AMMO</Text>
          </div>
          <div className="col-span-2 row-span-2 border-solid border h-auto">
            <Text ta="center">FUZE</Text>
          </div>
          <div className="col-span-2 row-span-2 border-solid border h-auto">
            <Text ta="center">DIR</Text>
          </div>
          <div className="col-span-2 row-span-2 border-solid border h-auto">
            <Text ta="center">L / R</Text>
          </div>
          <div className="col-span-2 row-span-2 border-solid border h-auto">
            <Text ta="center">A / D</Text>
          </div>
          <div className="col-span-4 row-span-2 border-solid border h-auto">
            <Text ta="center">ADDN / FFE</Text>
          </div>

          {/*row 20 */}
          <div className="col-span-3 border-solid border h-auto">
            <Text ta="center">L / R</Text>
          </div>
          <div className="col-span-2 border-solid border h-auto">
            <Text ta="center">S / L</Text>
          </div>

          {/*row 21-34 PR has the most rows in ANS sheet (10 rows) 
          so we have 13 blank rows for users to fill */}
          <TEFAdjustments rowNumber={1} TEFAdjustmentState={TEFAdjustmentState} onAdjustmentUpdate={onAdjustmentUpdate}></TEFAdjustments>
          <TEFAdjustments rowNumber={2} TEFAdjustmentState={TEFAdjustmentState} onAdjustmentUpdate={onAdjustmentUpdate}></TEFAdjustments>
          <TEFAdjustments rowNumber={3} TEFAdjustmentState={TEFAdjustmentState} onAdjustmentUpdate={onAdjustmentUpdate}></TEFAdjustments>
          <TEFAdjustments rowNumber={4} TEFAdjustmentState={TEFAdjustmentState} onAdjustmentUpdate={onAdjustmentUpdate}></TEFAdjustments>
          <TEFAdjustments rowNumber={5} TEFAdjustmentState={TEFAdjustmentState} onAdjustmentUpdate={onAdjustmentUpdate}></TEFAdjustments>
          <TEFAdjustments rowNumber={6} TEFAdjustmentState={TEFAdjustmentState} onAdjustmentUpdate={onAdjustmentUpdate}></TEFAdjustments>
          <TEFAdjustments rowNumber={7} TEFAdjustmentState={TEFAdjustmentState} onAdjustmentUpdate={onAdjustmentUpdate}></TEFAdjustments>
          <TEFAdjustments rowNumber={8} TEFAdjustmentState={TEFAdjustmentState} onAdjustmentUpdate={onAdjustmentUpdate}></TEFAdjustments>
          <TEFAdjustments rowNumber={9} TEFAdjustmentState={TEFAdjustmentState} onAdjustmentUpdate={onAdjustmentUpdate}></TEFAdjustments>
          <TEFAdjustments rowNumber={10} TEFAdjustmentState={TEFAdjustmentState} onAdjustmentUpdate={onAdjustmentUpdate}></TEFAdjustments>
          <TEFAdjustments rowNumber={11} TEFAdjustmentState={TEFAdjustmentState} onAdjustmentUpdate={onAdjustmentUpdate}></TEFAdjustments>
          <TEFAdjustments rowNumber={12} TEFAdjustmentState={TEFAdjustmentState} onAdjustmentUpdate={onAdjustmentUpdate}></TEFAdjustments>
          <TEFAdjustments rowNumber={13} TEFAdjustmentState={TEFAdjustmentState} onAdjustmentUpdate={onAdjustmentUpdate}></TEFAdjustments>

          {/*row 35 PR Adjustments */}
          <div className="col-span-full border-solid border h-auto">
            <div className="col-span-full border-solid border h-auto bg-stone-400">
              <Text ta="center">
                PRECISION REGISTRATION REFINEMENT CORRECTIONS
              </Text>
            </div>
          </div>

          {/*row 36*/}
          <div className="col-span-20 row-span-6 border-solid border h-auto"></div>
          <div className="col-span-2 border-solid border h-auto bg-stone-400">
            <Text ta="center">S/N</Text>
          </div>
          <div className="col-span-3 border-solid border h-auto bg-stone-400">
            <Text ta="center">RD</Text>
          </div>
          <div className="col-span-4 border-solid border h-auto bg-stone-400">
            <Text ta="center">L/R (MILS)</Text>
          </div>
          <div className="col-span-3 border-solid border h-auto bg-stone-400">
            <Text ta="center">L/S </Text>
          </div>

          {/*row 37*/}
          <div className="col-span-2 border-solid border h-auto bg-stone-400">
            <Text ta="center">P1</Text>
          </div>
          <div className="col-span-3 border-solid border h-auto">
            <Text ta="center">1</Text>
          </div>
          <div className="col-span-2 border-solid border h-auto">
            <TextInput variant="unstyled" className="inline-block" />
          </div>
          <div className="col-span-2 border-solid border h-auto">
            <TextInput variant="unstyled" className="inline-block" />
          </div>
          <div className="col-span-3 border-solid border h-auto">
            <TextInput variant="unstyled" className="inline-block" />
          </div>

          {/*row 38*/}
          <div className="col-span-2 border-solid border h-auto bg-stone-400">
            <Text ta="center">P2</Text>
          </div>
          <div className="col-span-3 border-solid border h-auto">
            <Text ta="center">2</Text>
          </div>
          <div className="col-span-2 border-solid border h-auto">
            <TextInput variant="unstyled" className="inline-block" />
          </div>
          <div className="col-span-2 border-solid border h-auto">
            <TextInput variant="unstyled" className="inline-block" />
          </div>
          <div className="col-span-3 border-solid border h-auto">
            <TextInput variant="unstyled" className="inline-block" />
          </div>

          {/*row 39*/}
          <div className="col-span-2 border-solid border h-auto bg-stone-400">
            <Text ta="center">P3</Text>
          </div>
          <div className="col-span-3 border-solid border h-auto">
            <Text ta="center">3</Text>
          </div>
          <div className="col-span-2 border-solid border h-auto">
            <TextInput variant="unstyled" className="inline-block" />
          </div>
          <div className="col-span-2 border-solid border h-auto">
            <TextInput variant="unstyled" className="inline-block" />
          </div>
          <div className="col-span-3 border-solid border h-auto">
            <TextInput variant="unstyled" className="inline-block" />
          </div>

          {/*row 40*/}
          <div className="col-span-2 border-solid border h-auto bg-stone-400">
            <Text ta="center">P4</Text>
          </div>
          <div className="col-span-3 border-solid border h-auto">
            <Text ta="center">4</Text>
          </div>
          <div className="col-span-2 border-solid border h-auto">
            <TextInput variant="unstyled" className="inline-block" />
          </div>
          <div className="col-span-2 border-solid border h-auto">
            <TextInput variant="unstyled" className="inline-block" />
          </div>
          <div className="col-span-3 border-solid border h-auto">
            <TextInput variant="unstyled" className="inline-block" />
          </div>

          {/*row 41*/}
          <div className="col-span-2 border-solid border h-auto bg-stone-400">
            <Text ta="center">P5</Text>
          </div>
          <div className="col-span-3 Text-center border-solid border h-auto">
            <Text ta="center">TOTAL </Text>
          </div>
          <div className="col-span-4 border-solid border h-auto">
            <Text className="inline-block">LEFT: </Text>
            <TextInput variant="unstyled" className="inline-block w-1/2" />
          </div>
          <div className="col-span-3 row-span-5 border-solid border h-auto bg-gray-800"></div>

          {/*row 42*/}
          <div className="col-span-20 border-solid border h-auto bg-stone-400">
            <Text ta="center">HASTY FIREPLAN</Text>
          </div>
          <div className="col-span-2 border-solid border h-auto bg-stone-400"></div>
          <div className="col-span-3 border-solid border h-auto"></div>
          <div className="col-span-4 border-solid border h-auto">
            <Text className="inline-block">RIGHT: </Text>
            <TextInput variant="unstyled" className="inline-block w-1/2" />
          </div>

          {/*row 43*/}
          <div className="col-span-20 border-solid border h-auto">
            <Text className="inline-block">ON ACT. CODE </Text>
            <TextInput variant="unstyled" className="inline-block w-1/5" />
            <Text className="inline-block">, ESTAB NEUT ON TARGET</Text>
            <TextInput variant="unstyled" className="inline-block w-1/5" />
          </div>
          <div className="col-span-2 border-solid border h-auto bg-stone-400">
            <Text ta="center">P6</Text>
          </div>
          <div className="col-span-3 border-solid border h-auto">
            <Text ta="center" fz="xs">
              NO. OF ROUNDS
            </Text>
          </div>
          <div className="col-span-4 border-solid border h-auto">
            <TextInput variant="unstyled" className="inline-block" />
          </div>

          {/*row 44*/}
          <div className="col-span-20 border-solid border h-auto">
            <Text className="inline-block">ON ACT. CODE </Text>
            <TextInput variant="unstyled" className="inline-block w-1/12" />
            <Text className="inline-block">, ENGAGE TARGET</Text>
            <TextInput variant="unstyled" className="inline-block w-1/12" />
            <Text className="inline-block">WITH</Text>
            <TextInput variant="unstyled" className="inline-block w-1/12" />
            <Text className="inline-block">PART RENEWAL</Text>
          </div>
          <div className="col-span-2 border-solid border h-auto bg-stone-400">
            <Text ta="center">P7</Text>
          </div>
          <div className="col-span-3 border-solid border h-auto">
            <Text ta="center" fz="sm">
              MEAN
            </Text>
          </div>
          <div className="col-span-4 border-solid border h-auto">
            <Text className="inline-block">RIGHT: </Text>
            <TextInput variant="unstyled" className="inline-block w-1/2" />
          </div>

          {/*row 45*/}
          <div className="col-span-20 border-solid border h-auto">
            <Text className="inline-block">ON ACT. CODE </Text>
            <TextInput variant="unstyled" className="inline-block w-1/12" />
            <Text className="inline-block">, ENGAGE TARGET</Text>
            <TextInput variant="unstyled" className="inline-block w-1/12" />
            <Text className="inline-block">WITH</Text>
            <TextInput variant="unstyled" className="inline-block w-1/12" />
            <Text className="inline-block">RDS/BOMBS</Text>
          </div>
          <div className="col-span-2 border-solid border h-auto bg-stone-400">
            <Text ta="center">P8</Text>
          </div>
          <div className="col-span-3 border-solid border h-auto">
            <Text ta="center" fz="sm">
              OT FACTOR
            </Text>
          </div>
          <div className="col-span-4 border-solid border h-auto">
            <Text className="inline-block">RIGHT: </Text>
            <TextInput variant="unstyled" className="inline-block w-1/2" />
          </div>

          {/*row 46*/}
          <div className="col-span-20 border-solid border h-auto">
            <Text className="inline-block">ON ACT. CODE </Text>
            <TextInput variant="unstyled" className="inline-block w-1/12" />
            <Text className="inline-block">, HARASSING FIRES ON TGT</Text>
            <TextInput variant="unstyled" className="inline-block w-1/12" />
            <Text className="inline-block">FOR</Text>
            <TextInput variant="unstyled" className="inline-block w-1/12" />
            <Text className="inline-block">MINS</Text>
          </div>
          <div className="col-span-2 row-span-3 border-solid border h-auto bg-stone-400">
            <Text ta="center">P9</Text>
          </div>
          <div className="col-span-3 row-span-3 border-solid border h-auto">
            <Text ta="center" fz="sm">
              FINAL REFINEMENT ORDERS
            </Text>
          </div>
          <div className="col-span-4 border-solid border h-auto">
            <Text className="inline-block pl-2">L</Text>
            <TextInput variant="unstyled" className="inline-block w-2/3" />
          </div>
          <div className="col-span-3 border-solid border h-auto">
            <Text className="inline-block pl-2">R</Text>
            <TextInput variant="unstyled" className="inline-block w-2/3" />
          </div>

          {/*row 47*/}
          <div className="col-span-20 border-solid border h-auto">
            <Text className="inline-block">ON ACT. CODE </Text>
            <TextInput variant="unstyled" className="inline-block w-1/12" />
            <Text className="inline-block">RDS SMK TGT ON TGT</Text>
            <TextInput variant="unstyled" className="inline-block w-1/12" />
          </div>
          <div className="col-span-7 row-span-2 border-solid border h-auto">
            <Select
              placeholder="Add/Drop"
              data={[
                { value: "ADD", label: "Add" },
                { value: "DROP", label: "Drop" },
              ]}
              transitionProps={{
                transition: "pop-top-left",
                duration: 80,
                timingFunction: "ease",
              }}
              variant="unstyled"
              className="inline-block w-2/3"
              clearable
            />
            <Radio.Group>
              <Group>
                <Radio size="xs" value="10" label="10"></Radio>
                <Radio size="xs" value="20" label="20"></Radio>
                <Radio size="xs" value="40" label="40"></Radio>
              </Group>
            </Radio.Group>
          </div>

          {/*row 48*/}
          <div className="col-span-20 border-solid border h-auto">
            <Text className="inline-block">ON ACT. CODE </Text>
            <TextInput variant="unstyled" className="inline-block w-1/12" />
            <Text className="inline-block">SMK SCR ON TGT</Text>
            <TextInput variant="unstyled" className="inline-block w-1/12" />
            <Text className="inline-block">FOR</Text>
            <TextInput variant="unstyled" className="inline-block w-1/12" />
            <Text className="inline-block">MINS</Text>
          </div>

          {/*row 48*/}
          <div className="col-span-20 border-solid border h-auto">
            <Text className="inline-block">ON ACT. CODE </Text>
            <TextInput variant="unstyled" className="inline-block w-1/12" />
            <Text className="inline-block">MINS ILLUM ON TGT</Text>
          </div>
          <div className="col-span-2 border-solid border h-auto bg-stone-400">
            <Text ta="center">P10</Text>
          </div>
          <div className="col-span-10 border-solid border h-auto">
            <Text className="inline-block pl-2">RECORD AS PR PT: </Text>
            <TextInput variant="unstyled" className="inline-block w-1/3" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default TargetEngagementForm;
