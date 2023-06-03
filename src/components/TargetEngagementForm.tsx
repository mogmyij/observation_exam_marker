import { Group, Select, TextInput, Text, Checkbox } from "@mantine/core";
import { TEFInitialValues } from "../objects/TargetEngagementFormObj";
import TEFAdjustments from "./TEFAdjustments";
import { useReducer } from "react";
import { TEFCorrectionReducer,ActionEnum,} from "../reducers/TEFCorrectionReducer";

const TargetEngagementForm = () => {
	//useReducer for TEF adjustment rows
	const [TEFAdjustmentState, TEFAdjustmentDispatcher] = useReducer(
		TEFCorrectionReducer,
		TEFInitialValues
	);
	//function that uses dispatcher function obtained from reducer to update the state
	//each time the input box is updated
	const onFormUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
		TEFAdjustmentDispatcher({
			type: ActionEnum.updateState,
			name: event.target.name,
			payload: event.target.value,
		});
	};
	//same as above function just that for the select boxes because the onChange callback
	//is modified by mantine so it does not produce original behaviour
	const onSelectElementFormUpdate = (value: string | null, name: string) => {
		TEFAdjustmentDispatcher({
			type: ActionEnum.updateState,
			name: name,
			payload: value,
		});
	};
	//Same as other functions just that for checkbox they return a string array
	const onCheckboxElementFormUpdate = (
		valueArray: string[] | null,
		name: string
	) => {
		var value: string | null;
		if (valueArray?.length === 0) {
			value = null;
		}
		//use index 1 because index 0 will be the previous option and therefore
		//will not change the value if used
		else {
			value = valueArray![1];
		}
		TEFAdjustmentDispatcher({
			type: ActionEnum.updateState,
			name: name,
			payload: value,
		});
	};

	//init form object
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
							name="OPLocation"
							value={TEFAdjustmentState.OPLocation}
							onChange={(e) => onFormUpdate(e)}
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
							name="OPHeight"
							value={TEFAdjustmentState.OPHeight}
							onChange={(e) => onFormUpdate(e)}
						/>
					</div>
					<div className="col-span-16 border-solid border h-auto">
						<Text className="inline-block">OT Distance (KM):</Text>
						<TextInput
							variant="unstyled"
							className="inline-block"
							name="OTDistance"
							value={TEFAdjustmentState.OTDistance}
							onChange={(e) => onFormUpdate(e)}
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
							name="CallSign"
							value={TEFAdjustmentState.CallSign}
							onChange={(e) => onFormUpdate(e)}
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
							value={TEFAdjustmentState.FireMission}
							onChange={(e) => onSelectElementFormUpdate(e, "FireMission")}
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
							name="TargetGrid"
							value={TEFAdjustmentState.TargetGrid}
							onChange={(e) => onFormUpdate(e)}
						/>
					</div>
					<div className="col-span-19 border-solid border h-auto">
						<Text className="inline-block">Alt:</Text>
						<TextInput
							variant="unstyled"
							className="inline-block"
							name="Altitude"
							value={TEFAdjustmentState.Altitude}
							onChange={(e) => onFormUpdate(e)}
						/>
					</div>

					{/*row 7*/}
					<div className="col-span-13 border-solid border h-auto">
						<Text className="inline-block">DIR:</Text>
						<TextInput
							variant="unstyled"
							className="inline-block w-1/5"
							name="Direction"
							value={TEFAdjustmentState.Direction}
							onChange={(e) => onFormUpdate(e)}
						/>
						<Text className="inline-block">DIST:</Text>
						<TextInput variant="unstyled" className="inline-block w-1/5" />
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
							value={TEFAdjustmentState.LRInitialDirection}
							onChange={(e) =>
								onSelectElementFormUpdate(e, "LRInitialDirection")
							}
						/>
						<TextInput
							variant="default"
							className="inline-block w-1/3"
							name="LRInitialAdjustment"
							value={TEFAdjustmentState.LRInitialAdjustment}
							onChange={(e) => onFormUpdate(e)}
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
							value={TEFAdjustmentState.ADInitialDirection}
							onChange={(e) =>
								onSelectElementFormUpdate(e, "ADInitialDirection")
							}
						/>
						<TextInput
							variant="default"
							className="inline-block w-1/3"
							name="ADInitialAdjustment"
							value={TEFAdjustmentState.ADInitialAdjustment}
							onChange={(e) => onFormUpdate(e)}
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
							value={TEFAdjustmentState.Ammo}
							onChange={(e) => onSelectElementFormUpdate(e, "Ammo")}
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
							name="TargetDescription"
							value={TEFAdjustmentState.TargetDescription}
							onChange={(e) => onFormUpdate(e)}
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
							value={TEFAdjustmentState.Vegetation}
							onChange={(e) => onSelectElementFormUpdate(e, "Vegetation")}
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
							name="TargetFrontBearing"
							value={TEFAdjustmentState.TargetFrontBearing}
							onChange={(e) => onFormUpdate(e)}
						/>
						<Text className="inline-block ">TFL:</Text>
						<TextInput
							variant="unstyled"
							className="inline-block w-1/3"
							name="TargetFrontLength"
							value={TEFAdjustmentState.TargetFrontLength}
							onChange={(e) => onFormUpdate(e)}
						/>
					</div>
					<div className="col-span-6 border-solid border h-auto">
						<Text className="inline-block ">WIND SPEED:</Text>
					</div>

					{/*row 14 (MISSION TYPE)*/}
					<div className="col-span-full border-solid border h-auto">
						<Checkbox.Group
							value={[TEFAdjustmentState.MissionType]}
							onChange={(e) => onCheckboxElementFormUpdate(e, "MissionType")}
						>
							<Group>
								<Checkbox value="PR" label="PRECISION REGISTRATION"></Checkbox>
								<Checkbox value="MPI" label="MPI REGISTRATION"></Checkbox>
								<Checkbox value="VR" label="VECTOR RANGING"></Checkbox>
								<Checkbox value="CTR" label="DANGERR CLOSE"></Checkbox>
								<Checkbox value="SMK" label="SMK TGT"></Checkbox>
							</Group>
						</Checkbox.Group>
					</div>

					{/*row 15 (CHECK)*/}
					<div className="col-span-26 border-solid border h-auto">
						<Text className="inline-block ">CHECK: </Text>
						<Text className="inline-block ">PE</Text>
						<TextInput
							variant="unstyled"
							className="inline-block w-1/12"
							name="CheckPE"
							value={TEFAdjustmentState.CheckPE}
							onChange={(e) => onFormUpdate(e)}
						/>
						<Text className="inline-block ">/ ANGLE T</Text>
						<TextInput
							variant="unstyled"
							className="inline-block w-1/12"
							name="CheckAngleT"
							value={TEFAdjustmentState.CheckAngleT}
							onChange={(e) => onFormUpdate(e)}
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
						<Checkbox.Group
							value={[TEFAdjustmentState.MethodOfFireControl]}
							onChange={(e) =>
								onCheckboxElementFormUpdate(e, "MethodOfFireControl")
							}
						>
							<Group>
								<Checkbox
									size="xs"
									value="AMC"
									label="AT MY COMMAND"
								></Checkbox>
								<Checkbox size="xs" value="FIRE" label="FIRE"></Checkbox>
								<Checkbox size="xs" value="TOT" label="TIME ON TGT"></Checkbox>
							</Group>
						</Checkbox.Group>
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

					{/*row 21-34 PR has the most rows in answer sheet (10 rows) 
          			so we have 13 blank rows for users to fill */}
					<TEFAdjustments
						rowNumber={1}
						onSelectElementAdjustmentUpdate={onSelectElementFormUpdate}
						TEFAdjustmentState={TEFAdjustmentState}
						onAdjustmentUpdate={onFormUpdate}
					></TEFAdjustments>
					<TEFAdjustments
						rowNumber={2}
						onSelectElementAdjustmentUpdate={onSelectElementFormUpdate}
						TEFAdjustmentState={TEFAdjustmentState}
						onAdjustmentUpdate={onFormUpdate}
					></TEFAdjustments>
					<TEFAdjustments
						rowNumber={3}
						onSelectElementAdjustmentUpdate={onSelectElementFormUpdate}
						TEFAdjustmentState={TEFAdjustmentState}
						onAdjustmentUpdate={onFormUpdate}
					></TEFAdjustments>
					<TEFAdjustments
						rowNumber={4}
						onSelectElementAdjustmentUpdate={onSelectElementFormUpdate}
						TEFAdjustmentState={TEFAdjustmentState}
						onAdjustmentUpdate={onFormUpdate}
					></TEFAdjustments>
					<TEFAdjustments
						rowNumber={5}
						onSelectElementAdjustmentUpdate={onSelectElementFormUpdate}
						TEFAdjustmentState={TEFAdjustmentState}
						onAdjustmentUpdate={onFormUpdate}
					></TEFAdjustments>
					<TEFAdjustments
						rowNumber={6}
						onSelectElementAdjustmentUpdate={onSelectElementFormUpdate}
						TEFAdjustmentState={TEFAdjustmentState}
						onAdjustmentUpdate={onFormUpdate}
					></TEFAdjustments>
					<TEFAdjustments
						rowNumber={7}
						onSelectElementAdjustmentUpdate={onSelectElementFormUpdate}
						TEFAdjustmentState={TEFAdjustmentState}
						onAdjustmentUpdate={onFormUpdate}
					></TEFAdjustments>
					<TEFAdjustments
						rowNumber={8}
						onSelectElementAdjustmentUpdate={onSelectElementFormUpdate}
						TEFAdjustmentState={TEFAdjustmentState}
						onAdjustmentUpdate={onFormUpdate}
					></TEFAdjustments>
					<TEFAdjustments
						rowNumber={9}
						onSelectElementAdjustmentUpdate={onSelectElementFormUpdate}
						TEFAdjustmentState={TEFAdjustmentState}
						onAdjustmentUpdate={onFormUpdate}
					></TEFAdjustments>
					<TEFAdjustments
						rowNumber={10}
						onSelectElementAdjustmentUpdate={onSelectElementFormUpdate}
						TEFAdjustmentState={TEFAdjustmentState}
						onAdjustmentUpdate={onFormUpdate}
					></TEFAdjustments>
					<TEFAdjustments
						rowNumber={11}
						onSelectElementAdjustmentUpdate={onSelectElementFormUpdate}
						TEFAdjustmentState={TEFAdjustmentState}
						onAdjustmentUpdate={onFormUpdate}
					></TEFAdjustments>
					<TEFAdjustments
						rowNumber={12}
						onSelectElementAdjustmentUpdate={onSelectElementFormUpdate}
						TEFAdjustmentState={TEFAdjustmentState}
						onAdjustmentUpdate={onFormUpdate}
					></TEFAdjustments>
					<TEFAdjustments
						rowNumber={13}
						onSelectElementAdjustmentUpdate={onSelectElementFormUpdate}
						TEFAdjustmentState={TEFAdjustmentState}
						onAdjustmentUpdate={onFormUpdate}
					></TEFAdjustments>

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
						<TextInput
							variant="unstyled"
							className="inline-block"
							name="PRRound1Left"
							value={TEFAdjustmentState.PRRound1Left}
							onChange={(e) => onFormUpdate(e)}
						/>
					</div>
					<div className="col-span-2 border-solid border h-auto">
						<TextInput
							variant="unstyled"
							className="inline-block"
							name="PRRound1Right"
							value={TEFAdjustmentState.PRRound1Right}
							onChange={(e) => onFormUpdate(e)}
						/>
					</div>
					<div className="col-span-3 border-solid border h-auto">
						<TextInput
							variant="unstyled"
							className="inline-block"
							name="PRRound1LongShort"
							value={TEFAdjustmentState.PRRound1LongShort}
							onChange={(e) => onFormUpdate(e)}
						/>
					</div>

					{/*row 38*/}
					<div className="col-span-2 border-solid border h-auto bg-stone-400">
						<Text ta="center">P2</Text>
					</div>
					<div className="col-span-3 border-solid border h-auto">
						<Text ta="center">2</Text>
					</div>
					<div className="col-span-2 border-solid border h-auto">
						<TextInput
							variant="unstyled"
							className="inline-block"
							name="PRRound2Left"
							value={TEFAdjustmentState.PRRound2Left}
							onChange={(e) => onFormUpdate(e)}
						/>
					</div>
					<div className="col-span-2 border-solid border h-auto">
						<TextInput
							variant="unstyled"
							className="inline-block"
							name="PRRound2Right"
							value={TEFAdjustmentState.PRRound2Right}
							onChange={(e) => onFormUpdate(e)}
						/>
					</div>
					<div className="col-span-3 border-solid border h-auto">
						<TextInput
							variant="unstyled"
							className="inline-block"
							name="PRRound2LongShort"
							value={TEFAdjustmentState.PRRound2LongShort}
							onChange={(e) => onFormUpdate(e)}
						/>
					</div>

					{/*row 39*/}
					<div className="col-span-2 border-solid border h-auto bg-stone-400">
						<Text ta="center">P3</Text>
					</div>
					<div className="col-span-3 border-solid border h-auto">
						<Text ta="center">3</Text>
					</div>
					<div className="col-span-2 border-solid border h-auto">
						<TextInput
							variant="unstyled"
							className="inline-block"
							name="PRRound3Left"
							value={TEFAdjustmentState.PRRound3Left}
							onChange={(e) => onFormUpdate(e)}
						/>
					</div>
					<div className="col-span-2 border-solid border h-auto">
						<TextInput
							variant="unstyled"
							className="inline-block"
							name="PRRound3Right"
							value={TEFAdjustmentState.PRRound3Right}
							onChange={(e) => onFormUpdate(e)}
						/>
					</div>
					<div className="col-span-3 border-solid border h-auto">
						<TextInput
							variant="unstyled"
							className="inline-block"
							name="PRRound3LongShort"
							value={TEFAdjustmentState.PRRound3LongShort}
							onChange={(e) => onFormUpdate(e)}
						/>
					</div>

					{/*row 40*/}
					<div className="col-span-2 border-solid border h-auto bg-stone-400">
						<Text ta="center">P4</Text>
					</div>
					<div className="col-span-3 border-solid border h-auto">
						<Text ta="center">4</Text>
					</div>
					<div className="col-span-2 border-solid border h-auto">
						<TextInput
							variant="unstyled"
							className="inline-block"
							name="PRRound4Left"
							value={TEFAdjustmentState.PRRound4Left}
							onChange={(e) => onFormUpdate(e)}
						/>
					</div>
					<div className="col-span-2 border-solid border h-auto">
						<TextInput
							variant="unstyled"
							className="inline-block"
							name="PRRound4Right"
							value={TEFAdjustmentState.PRRound4Right}
							onChange={(e) => onFormUpdate(e)}
						/>
					</div>
					<div className="col-span-3 border-solid border h-auto">
						<TextInput
							variant="unstyled"
							className="inline-block"
							name="PRRound4LongShort"
							value={TEFAdjustmentState.PRRound4LongShort}
							onChange={(e) => onFormUpdate(e)}
						/>
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
						<TextInput
							variant="unstyled"
							className="inline-block w-1/2"
							name="PRTotalLeft"
							value={TEFAdjustmentState.PRTotalLeft}
							onChange={(e) => onFormUpdate(e)}
						/>
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
						<TextInput
							variant="unstyled"
							className="inline-block w-1/2"
							name="PRTotalRight"
							value={TEFAdjustmentState.PRTotalRight}
							onChange={(e) => onFormUpdate(e)}
						/>
					</div>

					{/*row 43*/}
					<div className="col-span-20 border-solid border h-auto">
						<Text className="inline-block">ON ACT. CODE </Text>
						<TextInput
							variant="unstyled"
							className="inline-block w-1/5"
							name="ActivationCodeword"
							value={TEFAdjustmentState.ActivationCodeword}
							onChange={(e) => onFormUpdate(e)}
						/>
						<Text className="inline-block">, ESTAB NEUT ON TARGET</Text>
						<TextInput
							variant="unstyled"
							className="inline-block w-1/5"
							name="TargetCodeword"
							value={TEFAdjustmentState.TargetCodeword}
							onChange={(e) => onFormUpdate(e)}
						/>
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
						<TextInput
							variant="unstyled"
							className="inline-block"
							name="PRNumberOfRounds"
							value={TEFAdjustmentState.PRNumberOfRounds}
							onChange={(e) => onFormUpdate(e)}
						/>
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
						<TextInput
							variant="unstyled"
							className="inline-block w-1/2"
							name="PRMean"
							value={TEFAdjustmentState.PRMean}
							onChange={(e) => onFormUpdate(e)}
						/>
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
						<TextInput
							variant="unstyled"
							className="inline-block w-1/2"
							name="PROTFactor"
							value={TEFAdjustmentState.PROTFactor}
							onChange={(e) => onFormUpdate(e)}
						/>
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
						<TextInput
							variant="unstyled"
							className="inline-block w-2/3"
							name="PRFinalOrdersLeft"
							value={TEFAdjustmentState.PRFinalOrdersLeft}
							onChange={(e) => onFormUpdate(e)}
						/>
					</div>
					<div className="col-span-3 border-solid border h-auto">
						<Text className="inline-block pl-2">R</Text>
						<TextInput
							variant="unstyled"
							className="inline-block w-2/3"
							name="PRFinalOrdersRight"
							value={TEFAdjustmentState.PRFinalOrdersRight}
							onChange={(e) => onFormUpdate(e)}
						/>
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
							value={TEFAdjustmentState.PRFinalOrdersAddDrop}
							onChange={(e) =>
								onSelectElementFormUpdate(e, "PRFinalOrdersAddDrop")
							}
						/>
						<Checkbox.Group
							value={[TEFAdjustmentState.PRFinalOrdersAddDropAmmount]}
							onChange={(e) =>
								onCheckboxElementFormUpdate(e, "PRFinalOrdersAddDropAmmount")
							}
						>
							<Group>
								<Checkbox size="xs" value="10" label="10"></Checkbox>
								<Checkbox size="xs" value="20" label="20"></Checkbox>
								<Checkbox size="xs" value="40" label="40"></Checkbox>
							</Group>
						</Checkbox.Group>
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
						<TextInput
							variant="unstyled"
							className="inline-block w-1/3"
							name="PRRecordAsPoint"
							value={TEFAdjustmentState.PRRecordAsPoint}
							onChange={(e) => onFormUpdate(e)}
						/>
					</div>
				</div>
			</form>
		</div>
	);
};

export default TargetEngagementForm;
