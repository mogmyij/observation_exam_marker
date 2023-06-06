import { InitialOrdersType } from "../objects/TargetEngagementFormObj";
import { Text, TextInput, Select, Checkbox, Group } from "@mantine/core";
import { Action,ActionEnum } from "../reducers/TEFCorrectionReducer";

const TEFInitialOrders = (props: { InitialOrders: InitialOrdersType, TEFObjDispatcher: React.Dispatch<Action> }) => {
	//function that uses dispatcher function obtained from reducer to update the state
	//each time the input box is updated
	const onFormUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log("\nform updated",event);
        console.log("init orders",props.InitialOrders.OPLocation);
        
		props.TEFObjDispatcher({
			type: ActionEnum.updateInitialOrdersState,
			name: event.target.name,
			payload: event.target.value,
			rowNumber: null
		});
	};
	//same as above function just that for the select boxes because the onChange callback
	//is modified by mantine so it does not produce original behaviour
	const onSelectElementFormUpdate = (value: string | null, name: string) => {
		props.TEFObjDispatcher({
			type: ActionEnum.updateInitialOrdersState,
			name: name,
			payload: value,
			rowNumber: null
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
		props.TEFObjDispatcher({
			type: ActionEnum.updateInitialOrdersState,
			name: name,
			payload: value,
			rowNumber: null
		});
	};

    return (
		<>
			{/*row 1 (OP LOCATION)*/}
			<div className="col-span-16 border-solid border h-auto">
				<Text className="inline-block">OP Location & Grid:</Text>
				<TextInput
					variant="unstyled"
					className="inline-block"
					name="OPLocation"
					value={props.InitialOrders.OPLocation}
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
					value={props.InitialOrders.OPHeight}
					onChange={(e) => onFormUpdate(e)}
				/>
			</div>
			<div className="col-span-16 border-solid border h-auto">
				<Text className="inline-block">OT Distance (KM):</Text>
				<TextInput
					variant="unstyled"
					className="inline-block"
					name="OTDistance"
					value={props.InitialOrders.OTDistance}
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
					value={props.InitialOrders.CallSign}
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
					value={props.InitialOrders.FireMission}
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
					value={props.InitialOrders.TargetGrid}
					onChange={(e) => onFormUpdate(e)}
				/>
			</div>
			<div className="col-span-19 border-solid border h-auto">
				<Text className="inline-block">Alt:</Text>
				<TextInput
					variant="unstyled"
					className="inline-block"
					name="Altitude"
					value={props.InitialOrders.Altitude}
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
					value={props.InitialOrders.Direction}
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
					value={props.InitialOrders.LRInitialDirection}
					onChange={(e) => onSelectElementFormUpdate(e, "LRInitialDirection")}
				/>
				<TextInput
					variant="default"
					className="inline-block w-1/3"
					name="LRInitialAdjustment"
					value={props.InitialOrders.LRInitialAdjustment}
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
					value={props.InitialOrders.ADInitialDirection}
					onChange={(e) => onSelectElementFormUpdate(e, "ADInitialDirection")}
				/>
				<TextInput
					variant="default"
					className="inline-block w-1/3"
					name="ADInitialAdjustment"
					value={props.InitialOrders.ADInitialAdjustment}
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
					value={props.InitialOrders.Ammo}
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
					value={props.InitialOrders.TargetDescription}
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
					value={props.InitialOrders.Vegetation}
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
					value={props.InitialOrders.TargetFrontBearing}
					onChange={(e) => onFormUpdate(e)}
				/>
				<Text className="inline-block ">TFL:</Text>
				<TextInput
					variant="unstyled"
					className="inline-block w-1/3"
					name="TargetFrontLength"
					value={props.InitialOrders.TargetFrontLength}
					onChange={(e) => onFormUpdate(e)}
				/>
			</div>
			<div className="col-span-6 border-solid border h-auto">
				<Text className="inline-block ">WIND SPEED:</Text>
			</div>

			{/*row 14 (MISSION TYPE)*/}
			<div className="col-span-full border-solid border h-auto">
				<Checkbox.Group
					value={[props.InitialOrders.MissionType]}
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
					value={props.InitialOrders.CheckPE}
					onChange={(e) => onFormUpdate(e)}
				/>
				<Text className="inline-block ">/ ANGLE T</Text>
				<TextInput
					variant="unstyled"
					className="inline-block w-1/12"
					name="CheckAngleT"
					value={props.InitialOrders.CheckAngleT}
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
					value={[props.InitialOrders.MethodOfFireControl]}
					onChange={(e) =>
						onCheckboxElementFormUpdate(e, "MethodOfFireControl")
					}
				>
					<Group>
						<Checkbox size="xs" value="AMC" label="AT MY COMMAND"></Checkbox>
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
		</>
	);
};

export default TEFInitialOrders