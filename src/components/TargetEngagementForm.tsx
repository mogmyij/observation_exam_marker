import { Group, Radio, Select, TextInput } from "@mantine/core";
import { Form, useForm } from "@mantine/form";

const TargetEngagementForm = () => {
  //init form object
  const form = useForm();

  return (
    <div>
      <h2 className="text-center">Target Engagement Form</h2>
      <form>
        <div className="grid grid-cols-32 h-auto overflow-visible">
          {/*row 1 (OP LOCATION)*/}
          <div className="col-span-16 border-solid border h-auto">
            <text className="inline-block">OP Location & Grid:</text>
            <TextInput variant="unstyled" className="inline-block" />
          </div>
          <div className="col-span-16 border-solid border h-auto">
            <text className="inline-block">Target Code NO.:</text>
            <TextInput variant="unstyled" className="inline-block" />
          </div>

          {/*row 2*/}
          <div className="col-span-16 border-solid border h-auto">
            <text className="inline-block">OP HT:</text>
            <TextInput variant="unstyled" className="inline-block" />
          </div>
          <div className="col-span-16 border-solid border h-auto">
            <text className="inline-block">OT Distance (KM):</text>
            <TextInput variant="unstyled" className="inline-block" />
          </div>

          {/*row 3 (INITIAL ORDERS)*/}
          <div className="col-span-full border-solid border h-auto bg-stone-400">
            <text className="text-center block">INITIAL ORDERS</text>
          </div>

          {/*row 4*/}
          <div className="col-span-13 border-solid border h-auto">
            <text className="inline-block">Call Sign:</text>
            <TextInput variant="unstyled" className="inline-block" />
          </div>
          <div className="col-span-19 border-solid border h-auto">
            <text className="inline-block">Fire mission:</text>
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
            />
          </div>

          {/*row 5 (TARGET LOCATION)*/}
          <div className="col-span-full border-solid border h-auto bg-stone-400">
            <text className="text-center block">
              TARGET LOCATION & DESCRIPTION
            </text>
          </div>

          {/*row 6*/}
          <div className="col-span-13 border-solid border h-auto">
            <text className="inline-block">Target Grid:</text>
            <TextInput variant="unstyled" className="inline-block" />
          </div>
          <div className="col-span-19 border-solid border h-auto">
            <text className="inline-block">Alt:</text>
            <TextInput variant="unstyled" className="inline-block" />
          </div>

          {/*row 7*/}
          <div className="col-span-13 border-solid border h-auto">
            <text className="inline-block">DIR:</text>
            <TextInput variant="unstyled" className="inline-block w-1/5" />
            <text className="inline-block">DIST:</text>
            <TextInput variant="unstyled" className="inline-block w-1/5" />
            <text className="inline-block">VA:</text>
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
            />
            <TextInput variant="default" className="inline-block w-1/3" />
          </div>
          <div className="col-span-6 border-solid border h-auto">
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
            <TextInput variant="default" className="inline-block w-1/3" />
          </div>

          {/*row 8*/}
          <div className="col-span-13 border-solid border h-auto">
            <text className="inline-block">AMMO:</text>
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
            />
          </div>
          <div className="col-span-19 border-solid border h-auto">
            <text className="inline-block">FUZE:</text>
          </div>

          {/*row 9*/}
          <div className="col-span-13 border-solid border h-auto">
            <text className="inline-block">MARK: LASER</text>
          </div>
          <div className="col-span-19 border-solid border h-auto">
            <text className="inline-block">BTY/ PL SALVO RANGING</text>
          </div>

          {/*row 10 (TARGET DESCRIPTION)*/}
          <div className="col-span-26 border-solid border h-auto">
            <text className="inline-block">TGT DESCRIPTION:</text>
            <TextInput variant="unstyled" className="inline-block" />
          </div>
          <div className="col-span-6 border-solid border h-auto">
            <text className="inline-block ">COVER:</text>
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
            />
          </div>

          {/*row 11 (METHOD OF ENGAGEMENT)*/}
          <div className="col-span-full border-solid border h-auto">
            <div className="col-span-full border-solid border h-auto bg-stone-400">
              <text className="text-center block">METHOD OF ENGAGEMENT</text>
            </div>
          </div>

          {/*row 12*/}
          <div className="col-span-13 border-solid border h-auto">
            <text className="inline-block ">NO. OF AMMO:</text>
          </div>
          <div className="col-span-7 border-solid border h-auto">
            <text className="inline-block ">POINT</text>
          </div>
          <div className="col-span-6 border-solid border h-auto">
            <text className="inline-block ">INTERVAL</text>
          </div>
          <div className="col-span-6 border-solid border h-auto">
            <text className="inline-block ">SHEAF:</text>
          </div>

          {/*row 13*/}
          <div className="col-span-13 border-solid border h-auto">
            <text className="inline-block ">
              TRAJECTORY: NOMINAL/VERTICAL/HIGH ANGLE
            </text>
          </div>
          <div className="col-span-13 border-solid border h-auto">
            <text className="inline-block ">TFB:</text>
            <TextInput variant="unstyled" className="inline-block w-1/3" />
            <text className="inline-block ">TFL:</text>
            <TextInput variant="unstyled" className="inline-block w-1/3" />
          </div>
          <div className="col-span-6 border-solid border h-auto">
            <text className="inline-block ">WIND SPEED:</text>
          </div>

          {/*row 14 (MISSION TYPE)*/}
          <div className="col-span-full border-solid border h-auto">
            <Radio.Group>
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
            <text className="inline-block ">CHECK: </text>
            <text className="inline-block ">PE</text>
            <TextInput variant="unstyled" className="inline-block w-1/12" />
            <text className="inline-block ">/ ANGLE T</text>
            <TextInput variant="unstyled" className="inline-block w-1/12" />
            <text className="inline-block ">
              / TIME OF FLIGHT / SPLASH AND COUNTDOWN
            </text>
          </div>
          <div className="col-span-6 border-solid border h-auto">
            <text className="inline-block ">ADDN:</text>
          </div>

          {/*row 16*/}
          <div className="col-span-full border-solid border h-auto">
            <div className="col-span-full border-solid border h-auto bg-stone-400">
              <text className="text-center block">METHOD OF ENGAGEMENT</text>
            </div>
          </div>

          {/*row 17(AMC/FIRE)*/}
          <div className="col-span-13 border-solid border h-auto">
            <Radio.Group>
              <Group>
                <Radio size="xs" value="AMC" label="AT MY COMMAND"></Radio>
                <Radio size="xs" value="FIRE" label="FIRE"></Radio>
                <Radio size="xs" value="TOT" label="TIME ON TGT"></Radio>
              </Group>
            </Radio.Group>
          </div>
          <div className="col-span-10 border-solid border h-auto">
            <text className="inline-block ">ADVISE WHEN READY</text>
          </div>
          <div className="col-span-9 border-solid border h-auto">
            <text className="inline-block ">ADDN:</text>
          </div>

          {/*row 18 (Skip MPI DATA row) */}
          <div className="col-span-1 row-span-3 border-solid border h-auto bg-stone-400">
            <text className="text-center block">RD</text>
          </div>
          <div className="col-span-6 border-solid border h-auto bg-stone-400">
            <text className="text-center block">MPI DATA</text>
          </div>
          <div className="col-span-6 border-solid border h-auto bg-stone-400">
            <text className="text-center block">VECTOR RANGING</text>
          </div>
          <div className="col-span-19 border-solid border h-auto bg-stone-400">
            <text className="text-center block">METHOD OF ENGAGEMENT</text>
          </div>

          {/*row 19 (Skip U / D Column ) */}
          <div className="col-span-2  row-span-2 border-solid border h-auto">
            <text className="text-center block ">DIR</text>
          </div>
          <div className="col-span-2  row-span-2 border-solid border h-auto">
            <text className="text-center block ">DIST</text>
          </div>
          <div className="col-span-2  row-span-2 border-solid border h-auto">
            <text className="text-center block ">VA</text>
          </div>
          <div className="col-span-2  row-span-2 border-solid border h-auto">
            <text className="text-center block ">DIR</text>
          </div>
          <div className="col-span-2 row-span-2  border-solid border h-auto">
            <text className="text-center block ">DIST</text>
          </div>
          <div className="col-span-2  row-span-2 border-solid border h-auto">
            <text className="text-center block ">VA</text>
          </div>
          <div className="col-span-5 border-solid border h-auto">
            <text className="text-center block ">OBSERVATION</text>
          </div>
          <div className="col-span-2 row-span-2 border-solid border h-auto">
            <text className="text-center block ">AMMO</text>
          </div>
          <div className="col-span-2 row-span-2 border-solid border h-auto">
            <text className="text-center block ">FUZE</text>
          </div>
          <div className="col-span-2 row-span-2 border-solid border h-auto">
            <text className="text-center block ">DIR</text>
          </div>
          <div className="col-span-2 row-span-2 border-solid border h-auto">
            <text className="text-center block ">L / R</text>
          </div>
          <div className="col-span-2 row-span-2 border-solid border h-auto">
            <text className="text-center block ">A / D</text>
          </div>
          <div className="col-span-4 row-span-2 border-solid border h-auto">
            <text className="text-center block ">ADDN / FFE</text>
          </div>

          {/*row 20 */}
          <div className="col-span-3 border-solid border h-auto">
            <text className="text-center block ">L / R</text>
          </div>
          <div className="col-span-2 border-solid border h-auto">
            <text className="text-center block ">S / L</text>
          </div>

          {/*row 21-34 PR has the most rows in ANS sheet (10 rows) 
          so we have 13 blank rows for users to fill */}
          <>
            <div className="col-span-1  border-solid border h-auto">
              <TextInput variant="unstyled" className="inline-block w-full" />
            </div>
            <div className="col-span-2  border-solid border h-auto"></div>
            <div className="col-span-2  border-solid border h-auto"></div>
            <div className="col-span-2  border-solid border h-auto"></div>
            <div className="col-span-2  border-solid border h-auto">
              <TextInput variant="unstyled" className="inline-block w-full" />
            </div>
            <div className="col-span-2  border-solid border h-auto">
              <TextInput variant="unstyled" className="inline-block w-full" />
            </div>
            <div className="col-span-2  border-solid border h-auto">
              <TextInput variant="unstyled" className="inline-block w-full" />
            </div>
            <div className="col-span-3 border-solid border h-auto">
              <TextInput variant="unstyled" className="inline-block w-full" />
            </div>
            <div className="col-span-2 border-solid border h-auto">
              <TextInput variant="unstyled" className="inline-block w-full" />
            </div>
            <div className="col-span-2 border-solid border h-auto">
              <Select
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
                className="inline-block"
                clearable
              />
            </div>
            <div className="col-span-2 border-solid border h-auto"></div>
            <div className="col-span-2 border-solid border h-auto"></div>
            <div className="col-span-2 border-solid border h-auto">
              <TextInput variant="unstyled" className="inline-block w-full" />
            </div>
            <div className="col-span-2  border-solid border h-auto">
              <TextInput variant="unstyled" className="inline-block w-full" />
            </div>
            <div className="col-span-4  border-solid border h-auto">
              <Select
                placeholder=""
                data={[
                  { value: "EN", label: "ESTAB NEUT" },
                  { value: "REPEAT", label: "REPEAT" },
                  { value: "OBS", label: "ABLE TO OBS" },
                  { value: "3RGF", label: "3RGF, 30s" },
                  { value: "2RGF", label: "2RGF, 30s" },
                  { value: "1RGF", label: "1RGF" },
                  { value: "PRP", label: "REC AS PR PT" },
                  { value: "RAT", label: "REC AS TARGET" },
                  { value: "EOM", label: "VGS, EOM" },
                  { value: "EOVR", label: "EOVR" },
                  { value: "EOPR", label: "EOPR" },
                ]}
                transitionProps={{
                  transition: "pop-top-left",
                  duration: 80,
                  timingFunction: "ease",
                }}
                variant="unstyled"
                className="inline-block"
                clearable
              />
            </div>
            <div className="col-span-1  border-solid border h-auto">
              <TextInput variant="unstyled" className="inline-block w-full" />
            </div>
            <div className="col-span-2  border-solid border h-auto"></div>
            <div className="col-span-2  border-solid border h-auto"></div>
            <div className="col-span-2  border-solid border h-auto"></div>
            <div className="col-span-2  border-solid border h-auto">
              <TextInput variant="unstyled" className="inline-block w-full" />
            </div>
            <div className="col-span-2  border-solid border h-auto">
              <TextInput variant="unstyled" className="inline-block w-full" />
            </div>
            <div className="col-span-2  border-solid border h-auto">
              <TextInput variant="unstyled" className="inline-block w-full" />
            </div>
            <div className="col-span-3 border-solid border h-auto">
              <TextInput variant="unstyled" className="inline-block w-full" />
            </div>
            <div className="col-span-2 border-solid border h-auto">
              <TextInput variant="unstyled" className="inline-block w-full" />
            </div>
            <div className="col-span-2 border-solid border h-auto">
              <Select
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
                className="inline-block"
                clearable
              />
            </div>
            <div className="col-span-2 border-solid border h-auto"></div>
            <div className="col-span-2 border-solid border h-auto"></div>
            <div className="col-span-2 border-solid border h-auto">
              <TextInput variant="unstyled" className="inline-block w-full" />
            </div>
            <div className="col-span-2  border-solid border h-auto">
              <TextInput variant="unstyled" className="inline-block w-full" />
            </div>
            <div className="col-span-4  border-solid border h-auto">
              <Select
                placeholder=""
                data={[
                  { value: "EN", label: "ESTAB NEUT" },
                  { value: "REPEAT", label: "REPEAT" },
                  { value: "OBS", label: "ABLE TO OBS" },
                  { value: "3RGF", label: "3RGF, 30s" },
                  { value: "2RGF", label: "2RGF, 30s" },
                  { value: "1RGF", label: "1RGF" },
                  { value: "PRP", label: "REC AS PR PT" },
                  { value: "RAT", label: "REC AS TARGET" },
                  { value: "EOM", label: "VGS, EOM" },
                  { value: "EOVR", label: "EOVR" },
                  { value: "EOPR", label: "EOPR" },
                ]}
                transitionProps={{
                  transition: "pop-top-left",
                  duration: 80,
                  timingFunction: "ease",
                }}
                variant="unstyled"
                className="inline-block"
                clearable
              />
            </div>
            <div className="col-span-1  border-solid border h-auto">
              <TextInput variant="unstyled" className="inline-block w-full" />
            </div>
            <div className="col-span-2  border-solid border h-auto"></div>
            <div className="col-span-2  border-solid border h-auto"></div>
            <div className="col-span-2  border-solid border h-auto"></div>
            <div className="col-span-2  border-solid border h-auto">
              <TextInput variant="unstyled" className="inline-block w-full" />
            </div>
            <div className="col-span-2  border-solid border h-auto">
              <TextInput variant="unstyled" className="inline-block w-full" />
            </div>
            <div className="col-span-2  border-solid border h-auto">
              <TextInput variant="unstyled" className="inline-block w-full" />
            </div>
            <div className="col-span-3 border-solid border h-auto">
              <TextInput variant="unstyled" className="inline-block w-full" />
            </div>
            <div className="col-span-2 border-solid border h-auto">
              <TextInput variant="unstyled" className="inline-block w-full" />
            </div>
            <div className="col-span-2 border-solid border h-auto">
              <Select
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
                className="inline-block"
                clearable
              />
            </div>
            <div className="col-span-2 border-solid border h-auto"></div>
            <div className="col-span-2 border-solid border h-auto"></div>
            <div className="col-span-2 border-solid border h-auto">
              <TextInput variant="unstyled" className="inline-block w-full" />
            </div>
            <div className="col-span-2  border-solid border h-auto">
              <TextInput variant="unstyled" className="inline-block w-full" />
            </div>
            <div className="col-span-4  border-solid border h-auto">
              <Select
                placeholder=""
                data={[
                  { value: "EN", label: "ESTAB NEUT" },
                  { value: "REPEAT", label: "REPEAT" },
                  { value: "OBS", label: "ABLE TO OBS" },
                  { value: "3RGF", label: "3RGF, 30s" },
                  { value: "2RGF", label: "2RGF, 30s" },
                  { value: "1RGF", label: "1RGF" },
                  { value: "PRP", label: "REC AS PR PT" },
                  { value: "RAT", label: "REC AS TARGET" },
                  { value: "EOM", label: "VGS, EOM" },
                  { value: "EOVR", label: "EOVR" },
                  { value: "EOPR", label: "EOPR" },
                ]}
                transitionProps={{
                  transition: "pop-top-left",
                  duration: 80,
                  timingFunction: "ease",
                }}
                variant="unstyled"
                className="inline-block"
                clearable
              />
            </div>
            <div className="col-span-1  border-solid border h-auto">
              <TextInput variant="unstyled" className="inline-block w-full" />
            </div>
            <div className="col-span-2  border-solid border h-auto"></div>
            <div className="col-span-2  border-solid border h-auto"></div>
            <div className="col-span-2  border-solid border h-auto"></div>
            <div className="col-span-2  border-solid border h-auto">
              <TextInput variant="unstyled" className="inline-block w-full" />
            </div>
            <div className="col-span-2  border-solid border h-auto">
              <TextInput variant="unstyled" className="inline-block w-full" />
            </div>
            <div className="col-span-2  border-solid border h-auto">
              <TextInput variant="unstyled" className="inline-block w-full" />
            </div>
            <div className="col-span-3 border-solid border h-auto">
              <TextInput variant="unstyled" className="inline-block w-full" />
            </div>
            <div className="col-span-2 border-solid border h-auto">
              <TextInput variant="unstyled" className="inline-block w-full" />
            </div>
            <div className="col-span-2 border-solid border h-auto">
              <Select
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
                className="inline-block"
                clearable
              />
            </div>
            <div className="col-span-2 border-solid border h-auto"></div>
            <div className="col-span-2 border-solid border h-auto"></div>
            <div className="col-span-2 border-solid border h-auto">
              <TextInput variant="unstyled" className="inline-block w-full" />
            </div>
            <div className="col-span-2  border-solid border h-auto">
              <TextInput variant="unstyled" className="inline-block w-full" />
            </div>
            <div className="col-span-4  border-solid border h-auto">
              <Select
                placeholder=""
                data={[
                  { value: "EN", label: "ESTAB NEUT" },
                  { value: "REPEAT", label: "REPEAT" },
                  { value: "OBS", label: "ABLE TO OBS" },
                  { value: "3RGF", label: "3RGF, 30s" },
                  { value: "2RGF", label: "2RGF, 30s" },
                  { value: "1RGF", label: "1RGF" },
                  { value: "PRP", label: "REC AS PR PT" },
                  { value: "RAT", label: "REC AS TARGET" },
                  { value: "EOM", label: "VGS, EOM" },
                  { value: "EOVR", label: "EOVR" },
                  { value: "EOPR", label: "EOPR" },
                ]}
                transitionProps={{
                  transition: "pop-top-left",
                  duration: 80,
                  timingFunction: "ease",
                }}
                variant="unstyled"
                className="inline-block"
                clearable
              />
            </div>
            <div className="col-span-1  border-solid border h-auto">
              <TextInput variant="unstyled" className="inline-block w-full" />
            </div>
            <div className="col-span-2  border-solid border h-auto"></div>
            <div className="col-span-2  border-solid border h-auto"></div>
            <div className="col-span-2  border-solid border h-auto"></div>
            <div className="col-span-2  border-solid border h-auto">
              <TextInput variant="unstyled" className="inline-block w-full" />
            </div>
            <div className="col-span-2  border-solid border h-auto">
              <TextInput variant="unstyled" className="inline-block w-full" />
            </div>
            <div className="col-span-2  border-solid border h-auto">
              <TextInput variant="unstyled" className="inline-block w-full" />
            </div>
            <div className="col-span-3 border-solid border h-auto">
              <TextInput variant="unstyled" className="inline-block w-full" />
            </div>
            <div className="col-span-2 border-solid border h-auto">
              <TextInput variant="unstyled" className="inline-block w-full" />
            </div>
            <div className="col-span-2 border-solid border h-auto">
              <Select
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
                className="inline-block"
                clearable
              />
            </div>
            <div className="col-span-2 border-solid border h-auto"></div>
            <div className="col-span-2 border-solid border h-auto"></div>
            <div className="col-span-2 border-solid border h-auto">
              <TextInput variant="unstyled" className="inline-block w-full" />
            </div>
            <div className="col-span-2  border-solid border h-auto">
              <TextInput variant="unstyled" className="inline-block w-full" />
            </div>
            <div className="col-span-4  border-solid border h-auto">
              <Select
                placeholder=""
                data={[
                  { value: "EN", label: "ESTAB NEUT" },
                  { value: "REPEAT", label: "REPEAT" },
                  { value: "OBS", label: "ABLE TO OBS" },
                  { value: "3RGF", label: "3RGF, 30s" },
                  { value: "2RGF", label: "2RGF, 30s" },
                  { value: "1RGF", label: "1RGF" },
                  { value: "PRP", label: "REC AS PR PT" },
                  { value: "RAT", label: "REC AS TARGET" },
                  { value: "EOM", label: "VGS, EOM" },
                  { value: "EOVR", label: "EOVR" },
                  { value: "EOPR", label: "EOPR" },
                ]}
                transitionProps={{
                  transition: "pop-top-left",
                  duration: 80,
                  timingFunction: "ease",
                }}
                variant="unstyled"
                className="inline-block"
                clearable
              />
            </div>
            <div className="col-span-1  border-solid border h-auto">
              <TextInput variant="unstyled" className="inline-block w-full" />
            </div>
            <div className="col-span-2  border-solid border h-auto"></div>
            <div className="col-span-2  border-solid border h-auto"></div>
            <div className="col-span-2  border-solid border h-auto"></div>
            <div className="col-span-2  border-solid border h-auto">
              <TextInput variant="unstyled" className="inline-block w-full" />
            </div>
            <div className="col-span-2  border-solid border h-auto">
              <TextInput variant="unstyled" className="inline-block w-full" />
            </div>
            <div className="col-span-2  border-solid border h-auto">
              <TextInput variant="unstyled" className="inline-block w-full" />
            </div>
            <div className="col-span-3 border-solid border h-auto">
              <TextInput variant="unstyled" className="inline-block w-full" />
            </div>
            <div className="col-span-2 border-solid border h-auto">
              <TextInput variant="unstyled" className="inline-block w-full" />
            </div>
            <div className="col-span-2 border-solid border h-auto">
              <Select
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
                className="inline-block"
                clearable
              />
            </div>
            <div className="col-span-2 border-solid border h-auto"></div>
            <div className="col-span-2 border-solid border h-auto"></div>
            <div className="col-span-2 border-solid border h-auto">
              <TextInput variant="unstyled" className="inline-block w-full" />
            </div>
            <div className="col-span-2  border-solid border h-auto">
              <TextInput variant="unstyled" className="inline-block w-full" />
            </div>
            <div className="col-span-4  border-solid border h-auto">
              <Select
                placeholder=""
                data={[
                  { value: "EN", label: "ESTAB NEUT" },
                  { value: "REPEAT", label: "REPEAT" },
                  { value: "OBS", label: "ABLE TO OBS" },
                  { value: "3RGF", label: "3RGF, 30s" },
                  { value: "2RGF", label: "2RGF, 30s" },
                  { value: "1RGF", label: "1RGF" },
                  { value: "PRP", label: "REC AS PR PT" },
                  { value: "RAT", label: "REC AS TARGET" },
                  { value: "EOM", label: "VGS, EOM" },
                  { value: "EOVR", label: "EOVR" },
                  { value: "EOPR", label: "EOPR" },
                ]}
                transitionProps={{
                  transition: "pop-top-left",
                  duration: 80,
                  timingFunction: "ease",
                }}
                variant="unstyled"
                className="inline-block"
                clearable
              />
            </div>
            <div className="col-span-1  border-solid border h-auto">
              <TextInput variant="unstyled" className="inline-block w-full" />
            </div>
            <div className="col-span-2  border-solid border h-auto"></div>
            <div className="col-span-2  border-solid border h-auto"></div>
            <div className="col-span-2  border-solid border h-auto"></div>
            <div className="col-span-2  border-solid border h-auto">
              <TextInput variant="unstyled" className="inline-block w-full" />
            </div>
            <div className="col-span-2  border-solid border h-auto">
              <TextInput variant="unstyled" className="inline-block w-full" />
            </div>
            <div className="col-span-2  border-solid border h-auto">
              <TextInput variant="unstyled" className="inline-block w-full" />
            </div>
            <div className="col-span-3 border-solid border h-auto">
              <TextInput variant="unstyled" className="inline-block w-full" />
            </div>
            <div className="col-span-2 border-solid border h-auto">
              <TextInput variant="unstyled" className="inline-block w-full" />
            </div>
            <div className="col-span-2 border-solid border h-auto">
              <Select
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
                className="inline-block"
                clearable
              />
            </div>
            <div className="col-span-2 border-solid border h-auto"></div>
            <div className="col-span-2 border-solid border h-auto"></div>
            <div className="col-span-2 border-solid border h-auto">
              <TextInput variant="unstyled" className="inline-block w-full" />
            </div>
            <div className="col-span-2  border-solid border h-auto">
              <TextInput variant="unstyled" className="inline-block w-full" />
            </div>
            <div className="col-span-4  border-solid border h-auto">
              <Select
                placeholder=""
                data={[
                  { value: "EN", label: "ESTAB NEUT" },
                  { value: "REPEAT", label: "REPEAT" },
                  { value: "OBS", label: "ABLE TO OBS" },
                  { value: "3RGF", label: "3RGF, 30s" },
                  { value: "2RGF", label: "2RGF, 30s" },
                  { value: "1RGF", label: "1RGF" },
                  { value: "PRP", label: "REC AS PR PT" },
                  { value: "RAT", label: "REC AS TARGET" },
                  { value: "EOM", label: "VGS, EOM" },
                  { value: "EOVR", label: "EOVR" },
                  { value: "EOPR", label: "EOPR" },
                ]}
                transitionProps={{
                  transition: "pop-top-left",
                  duration: 80,
                  timingFunction: "ease",
                }}
                variant="unstyled"
                className="inline-block"
                clearable
              />
            </div>
            <div className="col-span-1  border-solid border h-auto">
              <TextInput variant="unstyled" className="inline-block w-full" />
            </div>
            <div className="col-span-2  border-solid border h-auto"></div>
            <div className="col-span-2  border-solid border h-auto"></div>
            <div className="col-span-2  border-solid border h-auto"></div>
            <div className="col-span-2  border-solid border h-auto">
              <TextInput variant="unstyled" className="inline-block w-full" />
            </div>
            <div className="col-span-2  border-solid border h-auto">
              <TextInput variant="unstyled" className="inline-block w-full" />
            </div>
            <div className="col-span-2  border-solid border h-auto">
              <TextInput variant="unstyled" className="inline-block w-full" />
            </div>
            <div className="col-span-3 border-solid border h-auto">
              <TextInput variant="unstyled" className="inline-block w-full" />
            </div>
            <div className="col-span-2 border-solid border h-auto">
              <TextInput variant="unstyled" className="inline-block w-full" />
            </div>
            <div className="col-span-2 border-solid border h-auto">
              <Select
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
                className="inline-block"
                clearable
              />
            </div>
            <div className="col-span-2 border-solid border h-auto"></div>
            <div className="col-span-2 border-solid border h-auto"></div>
            <div className="col-span-2 border-solid border h-auto">
              <TextInput variant="unstyled" className="inline-block w-full" />
            </div>
            <div className="col-span-2  border-solid border h-auto">
              <TextInput variant="unstyled" className="inline-block w-full" />
            </div>
            <div className="col-span-4  border-solid border h-auto">
              <Select
                placeholder=""
                data={[
                  { value: "EN", label: "ESTAB NEUT" },
                  { value: "REPEAT", label: "REPEAT" },
                  { value: "OBS", label: "ABLE TO OBS" },
                  { value: "3RGF", label: "3RGF, 30s" },
                  { value: "2RGF", label: "2RGF, 30s" },
                  { value: "1RGF", label: "1RGF" },
                  { value: "PRP", label: "REC AS PR PT" },
                  { value: "RAT", label: "REC AS TARGET" },
                  { value: "EOM", label: "VGS, EOM" },
                  { value: "EOVR", label: "EOVR" },
                  { value: "EOPR", label: "EOPR" },
                ]}
                transitionProps={{
                  transition: "pop-top-left",
                  duration: 80,
                  timingFunction: "ease",
                }}
                variant="unstyled"
                className="inline-block"
                clearable
              />
            </div>
            <div className="col-span-1  border-solid border h-auto">
              <TextInput variant="unstyled" className="inline-block w-full" />
            </div>
            <div className="col-span-2  border-solid border h-auto"></div>
            <div className="col-span-2  border-solid border h-auto"></div>
            <div className="col-span-2  border-solid border h-auto"></div>
            <div className="col-span-2  border-solid border h-auto">
              <TextInput variant="unstyled" className="inline-block w-full" />
            </div>
            <div className="col-span-2  border-solid border h-auto">
              <TextInput variant="unstyled" className="inline-block w-full" />
            </div>
            <div className="col-span-2  border-solid border h-auto">
              <TextInput variant="unstyled" className="inline-block w-full" />
            </div>
            <div className="col-span-3 border-solid border h-auto">
              <TextInput variant="unstyled" className="inline-block w-full" />
            </div>
            <div className="col-span-2 border-solid border h-auto">
              <TextInput variant="unstyled" className="inline-block w-full" />
            </div>
            <div className="col-span-2 border-solid border h-auto">
              <Select
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
                className="inline-block"
                clearable
              />
            </div>
            <div className="col-span-2 border-solid border h-auto"></div>
            <div className="col-span-2 border-solid border h-auto"></div>
            <div className="col-span-2 border-solid border h-auto">
              <TextInput variant="unstyled" className="inline-block w-full" />
            </div>
            <div className="col-span-2  border-solid border h-auto">
              <TextInput variant="unstyled" className="inline-block w-full" />
            </div>
            <div className="col-span-4  border-solid border h-auto">
              <Select
                placeholder=""
                data={[
                  { value: "EN", label: "ESTAB NEUT" },
                  { value: "REPEAT", label: "REPEAT" },
                  { value: "OBS", label: "ABLE TO OBS" },
                  { value: "3RGF", label: "3RGF, 30s" },
                  { value: "2RGF", label: "2RGF, 30s" },
                  { value: "1RGF", label: "1RGF" },
                  { value: "PRP", label: "REC AS PR PT" },
                  { value: "RAT", label: "REC AS TARGET" },
                  { value: "EOM", label: "VGS, EOM" },
                  { value: "EOVR", label: "EOVR" },
                  { value: "EOPR", label: "EOPR" },
                ]}
                transitionProps={{
                  transition: "pop-top-left",
                  duration: 80,
                  timingFunction: "ease",
                }}
                variant="unstyled"
                className="inline-block"
                clearable
              />
            </div>
            <div className="col-span-1  border-solid border h-auto">
              <TextInput variant="unstyled" className="inline-block w-full" />
            </div>
            <div className="col-span-2  border-solid border h-auto"></div>
            <div className="col-span-2  border-solid border h-auto"></div>
            <div className="col-span-2  border-solid border h-auto"></div>
            <div className="col-span-2  border-solid border h-auto">
              <TextInput variant="unstyled" className="inline-block w-full" />
            </div>
            <div className="col-span-2  border-solid border h-auto">
              <TextInput variant="unstyled" className="inline-block w-full" />
            </div>
            <div className="col-span-2  border-solid border h-auto">
              <TextInput variant="unstyled" className="inline-block w-full" />
            </div>
            <div className="col-span-3 border-solid border h-auto">
              <TextInput variant="unstyled" className="inline-block w-full" />
            </div>
            <div className="col-span-2 border-solid border h-auto">
              <TextInput variant="unstyled" className="inline-block w-full" />
            </div>
            <div className="col-span-2 border-solid border h-auto">
              <Select
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
                className="inline-block"
                clearable
              />
            </div>
            <div className="col-span-2 border-solid border h-auto"></div>
            <div className="col-span-2 border-solid border h-auto"></div>
            <div className="col-span-2 border-solid border h-auto">
              <TextInput variant="unstyled" className="inline-block w-full" />
            </div>
            <div className="col-span-2  border-solid border h-auto">
              <TextInput variant="unstyled" className="inline-block w-full" />
            </div>
            <div className="col-span-4  border-solid border h-auto">
              <Select
                placeholder=""
                data={[
                  { value: "EN", label: "ESTAB NEUT" },
                  { value: "REPEAT", label: "REPEAT" },
                  { value: "OBS", label: "ABLE TO OBS" },
                  { value: "3RGF", label: "3RGF, 30s" },
                  { value: "2RGF", label: "2RGF, 30s" },
                  { value: "1RGF", label: "1RGF" },
                  { value: "PRP", label: "REC AS PR PT" },
                  { value: "RAT", label: "REC AS TARGET" },
                  { value: "EOM", label: "VGS, EOM" },
                  { value: "EOVR", label: "EOVR" },
                  { value: "EOPR", label: "EOPR" },
                ]}
                transitionProps={{
                  transition: "pop-top-left",
                  duration: 80,
                  timingFunction: "ease",
                }}
                variant="unstyled"
                className="inline-block"
                clearable
              />
            </div>
            <div className="col-span-1  border-solid border h-auto">
              <TextInput variant="unstyled" className="inline-block w-full" />
            </div>
            <div className="col-span-2  border-solid border h-auto"></div>
            <div className="col-span-2  border-solid border h-auto"></div>
            <div className="col-span-2  border-solid border h-auto"></div>
            <div className="col-span-2  border-solid border h-auto">
              <TextInput variant="unstyled" className="inline-block w-full" />
            </div>
            <div className="col-span-2  border-solid border h-auto">
              <TextInput variant="unstyled" className="inline-block w-full" />
            </div>
            <div className="col-span-2  border-solid border h-auto">
              <TextInput variant="unstyled" className="inline-block w-full" />
            </div>
            <div className="col-span-3 border-solid border h-auto">
              <TextInput variant="unstyled" className="inline-block w-full" />
            </div>
            <div className="col-span-2 border-solid border h-auto">
              <TextInput variant="unstyled" className="inline-block w-full" />
            </div>
            <div className="col-span-2 border-solid border h-auto">
              <Select
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
                className="inline-block"
                clearable
              />
            </div>
            <div className="col-span-2 border-solid border h-auto"></div>
            <div className="col-span-2 border-solid border h-auto"></div>
            <div className="col-span-2 border-solid border h-auto">
              <TextInput variant="unstyled" className="inline-block w-full" />
            </div>
            <div className="col-span-2  border-solid border h-auto">
              <TextInput variant="unstyled" className="inline-block w-full" />
            </div>
            <div className="col-span-4  border-solid border h-auto">
              <Select
                placeholder=""
                data={[
                  { value: "EN", label: "ESTAB NEUT" },
                  { value: "REPEAT", label: "REPEAT" },
                  { value: "OBS", label: "ABLE TO OBS" },
                  { value: "3RGF", label: "3RGF, 30s" },
                  { value: "2RGF", label: "2RGF, 30s" },
                  { value: "1RGF", label: "1RGF" },
                  { value: "PRP", label: "REC AS PR PT" },
                  { value: "RAT", label: "REC AS TARGET" },
                  { value: "EOM", label: "VGS, EOM" },
                  { value: "EOVR", label: "EOVR" },
                  { value: "EOPR", label: "EOPR" },
                ]}
                transitionProps={{
                  transition: "pop-top-left",
                  duration: 80,
                  timingFunction: "ease",
                }}
                variant="unstyled"
                className="inline-block"
                clearable
              />
            </div>
            <div className="col-span-1  border-solid border h-auto">
              <TextInput variant="unstyled" className="inline-block w-full" />
            </div>
            <div className="col-span-2  border-solid border h-auto"></div>
            <div className="col-span-2  border-solid border h-auto"></div>
            <div className="col-span-2  border-solid border h-auto"></div>
            <div className="col-span-2  border-solid border h-auto">
              <TextInput variant="unstyled" className="inline-block w-full" />
            </div>
            <div className="col-span-2  border-solid border h-auto">
              <TextInput variant="unstyled" className="inline-block w-full" />
            </div>
            <div className="col-span-2  border-solid border h-auto">
              <TextInput variant="unstyled" className="inline-block w-full" />
            </div>
            <div className="col-span-3 border-solid border h-auto">
              <TextInput variant="unstyled" className="inline-block w-full" />
            </div>
            <div className="col-span-2 border-solid border h-auto">
              <TextInput variant="unstyled" className="inline-block w-full" />
            </div>
            <div className="col-span-2 border-solid border h-auto">
              <Select
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
                className="inline-block"
                clearable
              />
            </div>
            <div className="col-span-2 border-solid border h-auto"></div>
            <div className="col-span-2 border-solid border h-auto"></div>
            <div className="col-span-2 border-solid border h-auto">
              <TextInput variant="unstyled" className="inline-block w-full" />
            </div>
            <div className="col-span-2  border-solid border h-auto">
              <TextInput variant="unstyled" className="inline-block w-full" />
            </div>
            <div className="col-span-4  border-solid border h-auto">
              <Select
                placeholder=""
                data={[
                  { value: "EN", label: "ESTAB NEUT" },
                  { value: "REPEAT", label: "REPEAT" },
                  { value: "OBS", label: "ABLE TO OBS" },
                  { value: "3RGF", label: "3RGF, 30s" },
                  { value: "2RGF", label: "2RGF, 30s" },
                  { value: "1RGF", label: "1RGF" },
                  { value: "PRP", label: "REC AS PR PT" },
                  { value: "RAT", label: "REC AS TARGET" },
                  { value: "EOM", label: "VGS, EOM" },
                  { value: "EOVR", label: "EOVR" },
                  { value: "EOPR", label: "EOPR" },
                ]}
                transitionProps={{
                  transition: "pop-top-left",
                  duration: 80,
                  timingFunction: "ease",
                }}
                variant="unstyled"
                className="inline-block"
                clearable
              />
            </div>
            <div className="col-span-1  border-solid border h-auto">
              <TextInput variant="unstyled" className="inline-block w-full" />
            </div>
            <div className="col-span-2  border-solid border h-auto"></div>
            <div className="col-span-2  border-solid border h-auto"></div>
            <div className="col-span-2  border-solid border h-auto"></div>
            <div className="col-span-2  border-solid border h-auto">
              <TextInput variant="unstyled" className="inline-block w-full" />
            </div>
            <div className="col-span-2  border-solid border h-auto">
              <TextInput variant="unstyled" className="inline-block w-full" />
            </div>
            <div className="col-span-2  border-solid border h-auto">
              <TextInput variant="unstyled" className="inline-block w-full" />
            </div>
            <div className="col-span-3 border-solid border h-auto">
              <TextInput variant="unstyled" className="inline-block w-full" />
            </div>
            <div className="col-span-2 border-solid border h-auto">
              <TextInput variant="unstyled" className="inline-block w-full" />
            </div>
            <div className="col-span-2 border-solid border h-auto">
              <Select
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
                className="inline-block"
                clearable
              />
            </div>
            <div className="col-span-2 border-solid border h-auto"></div>
            <div className="col-span-2 border-solid border h-auto"></div>
            <div className="col-span-2 border-solid border h-auto">
              <TextInput variant="unstyled" className="inline-block w-full" />
            </div>
            <div className="col-span-2  border-solid border h-auto">
              <TextInput variant="unstyled" className="inline-block w-full" />
            </div>
            <div className="col-span-4  border-solid border h-auto">
              <Select
                placeholder=""
                data={[
                  { value: "EN", label: "ESTAB NEUT" },
                  { value: "REPEAT", label: "REPEAT" },
                  { value: "OBS", label: "ABLE TO OBS" },
                  { value: "3RGF", label: "3RGF, 30s" },
                  { value: "2RGF", label: "2RGF, 30s" },
                  { value: "1RGF", label: "1RGF" },
                  { value: "PRP", label: "REC AS PR PT" },
                  { value: "RAT", label: "REC AS TARGET" },
                  { value: "EOM", label: "VGS, EOM" },
                  { value: "EOVR", label: "EOVR" },
                  { value: "EOPR", label: "EOPR" },
                ]}
                transitionProps={{
                  transition: "pop-top-left",
                  duration: 80,
                  timingFunction: "ease",
                }}
                variant="unstyled"
                className="inline-block"
                clearable
              />
            </div>
          </>

          {/*row 35 PR Adjustments */}
          <div className="col-span-full border-solid border h-auto">
            <div className="col-span-full border-solid border h-auto bg-stone-400">
              <text className="text-center block">
                PRECISION REGISTRATION REFINEMENT CORRECTIONS
              </text>
            </div>
          </div>

          {/*row 36*/}
          <div className="col-span-20 row-span-6 border-solid border h-auto"></div>
          <div className="col-span-2 border-solid border h-auto bg-stone-400">
            <text className="text-center block ">S/N</text>
          </div>
          <div className="col-span-3 border-solid border h-auto bg-stone-400">
            <text className="text-center block ">RD</text>
          </div>
          <div className="col-span-4 border-solid border h-auto bg-stone-400">
            <text className="text-center block ">L/R (MILS)</text>
          </div>
          <div className="col-span-3 border-solid border h-auto bg-stone-400">
            <text className="text-center block">L/S </text>
          </div>

          {/*row 37*/}
          <div className="col-span-2 border-solid border h-auto bg-stone-400">
            <text className="text-center block ">P1</text>
          </div>
          <div className="col-span-3 border-solid border h-auto">
            <text className="text-center block ">1</text>
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
            <text className="text-center block ">P2</text>
          </div>
          <div className="col-span-3 border-solid border h-auto">
            <text className="text-center block ">2</text>
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
            <text className="text-center block ">P3</text>
          </div>
          <div className="col-span-3 border-solid border h-auto">
            <text className="text-center block ">3</text>
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
            <text className="text-center block ">P4</text>
          </div>
          <div className="col-span-3 border-solid border h-auto">
            <text className="text-center block ">4</text>
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
            <text className="text-center block ">P5</text>
          </div>
          <div className="col-span-3 text-center border-solid border h-auto">
            <text className="inline-block">TOTAL </text>
          </div>
          <div className="col-span-4 border-solid border h-auto">
            <text className="inline-block">LEFT: </text>
            <TextInput variant="unstyled" className="inline-block w-1/2" />
          </div>
          <div className="col-span-3 row-span-5 border-solid border h-auto bg-gray-800"></div>

          {/*row 42*/}
          <div className="col-span-20 border-solid border h-auto bg-stone-400">
            <text className="text-center block">HASTY FIREPLAN</text>
          </div>
          <div className="col-span-2 border-solid border h-auto bg-stone-400"></div>
          <div className="col-span-3 border-solid border h-auto"></div>
          <div className="col-span-4 border-solid border h-auto">
            <text className="inline-block">RIGHT: </text>
            <TextInput variant="unstyled" className="inline-block w-1/2" />
          </div>

          {/*row 43*/}
          <div className="col-span-20 border-solid border h-auto">
            <text className="inline-block">ON ACT. CODE </text>
            <TextInput variant="unstyled" className="inline-block w-1/5" />
            <text className="inline-block">, ESTAB NEUT ON TARGET</text>
            <TextInput variant="unstyled" className="inline-block w-1/5" />
          </div>
          <div className="col-span-2 border-solid border h-auto bg-stone-400">
            <text className="text-center block">P6</text>
          </div>
          <div className="col-span-3 border-solid border h-auto">
            <text className="text-center block text-xs">NO. OF ROUNDS</text>
          </div>
          <div className="col-span-4 border-solid border h-auto">
            <TextInput variant="unstyled" className="inline-block" />
          </div>

          {/*row 44*/}
          <div className="col-span-20 border-solid border h-auto">
            <text className="inline-block">ON ACT. CODE </text>
            <TextInput variant="unstyled" className="inline-block w-1/12" />
            <text className="inline-block">, ENGAGE TARGET</text>
            <TextInput variant="unstyled" className="inline-block w-1/12" />
            <text className="inline-block">WITH</text>
            <TextInput variant="unstyled" className="inline-block w-1/12" />
            <text className="inline-block">PART RENEWAL</text>
          </div>
          <div className="col-span-2 border-solid border h-auto bg-stone-400">
            <text className="text-center block">P7</text>
          </div>
          <div className="col-span-3 border-solid border h-auto">
            <text className="text-center block text-xs">MEAN</text>
          </div>
          <div className="col-span-4 border-solid border h-auto">
            <text className="inline-block">RIGHT: </text>
            <TextInput variant="unstyled" className="inline-block w-1/2" />
          </div>

          {/*row 45*/}
          <div className="col-span-20 border-solid border h-auto">
            <text className="inline-block">ON ACT. CODE </text>
            <TextInput variant="unstyled" className="inline-block w-1/12" />
            <text className="inline-block">, ENGAGE TARGET</text>
            <TextInput variant="unstyled" className="inline-block w-1/12" />
            <text className="inline-block">WITH</text>
            <TextInput variant="unstyled" className="inline-block w-1/12" />
            <text className="inline-block">RDS/BOMBS</text>
          </div>
          <div className="col-span-2 border-solid border h-auto bg-stone-400">
            <text className="text-center block">P8</text>
          </div>
          <div className="col-span-3 border-solid border h-auto">
            <text className="text-center block text-xs">OT FACTOR</text>
          </div>
          <div className="col-span-4 border-solid border h-auto">
            <text className="inline-block">RIGHT: </text>
            <TextInput variant="unstyled" className="inline-block w-1/2" />
          </div>

          {/*row 46*/}
          <div className="col-span-20 border-solid border h-auto">
            <text className="inline-block">ON ACT. CODE </text>
            <TextInput variant="unstyled" className="inline-block w-1/12" />
            <text className="inline-block">, HARASSING FIRES ON TGT</text>
            <TextInput variant="unstyled" className="inline-block w-1/12" />
            <text className="inline-block">FOR</text>
            <TextInput variant="unstyled" className="inline-block w-1/12" />
            <text className="inline-block">MINS</text>
          </div>
          <div className="col-span-2 row-span-3 border-solid border h-auto bg-stone-400">
            <text className="text-center block">P9</text>
          </div>
          <div className="col-span-3 row-span-3 border-solid border h-auto">
            <text className="text-center block text-xs">FINAL REFINEMENT ORDERS</text>
          </div>
          <div className="col-span-4 border-solid border h-auto">
            <text className="inline-block pl-2">L</text>
            <TextInput variant="unstyled" className="inline-block w-2/3" />
          </div>
          <div className="col-span-3 border-solid border h-auto">
            <text className="inline-block pl-2">R</text>
            <TextInput variant="unstyled" className="inline-block w-2/3" />
          </div>

          {/*row 47*/}
          <div className="col-span-20 border-solid border h-auto">
            <text className="inline-block">ON ACT. CODE </text>
            <TextInput variant="unstyled" className="inline-block w-1/12" />
            <text className="inline-block">RDS SMK TGT ON TGT</text>
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
            <text className="inline-block">ON ACT. CODE </text>
            <TextInput variant="unstyled" className="inline-block w-1/12" />
            <text className="inline-block">SMK SCR ON TGT</text>
            <TextInput variant="unstyled" className="inline-block w-1/12" />
            <text className="inline-block">FOR</text>
            <TextInput variant="unstyled" className="inline-block w-1/12" />
            <text className="inline-block">MINS</text>
          </div>

          {/*row 48*/}
          <div className="col-span-20 border-solid border h-auto">
            <text className="inline-block">ON ACT. CODE </text>
            <TextInput variant="unstyled" className="inline-block w-1/12" />
            <text className="inline-block">MINS ILLUM ON TGT</text>
          </div>
          <div className="col-span-2 row-span-3 border-solid border h-auto bg-stone-400">
            <text className="text-center block">P10</text>
          </div>
          <div className="col-span-10 border-solid border h-auto">
            <text className="inline-block pl-2">RECORD AS PR PT: </text>
            <TextInput variant="unstyled" className="inline-block w-1/3" />
          </div>
          
        </div>
      </form>
    </div>
  );
};

export default TargetEngagementForm;
