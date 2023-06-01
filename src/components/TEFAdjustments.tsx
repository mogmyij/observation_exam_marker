import { TextInput, Select } from "@mantine/core";
import {
	TEFInitialValuesType,
	AdjustmentRowType,
} from "../objects/TargetEngagementFormObj";

const TEFAdjustments = (props: {
	onAdjustmentUpdate: Function;
	TEFAdjustmentState: TEFInitialValuesType;
	onSelectElementAdjustmentUpdate: Function;
	rowNumber: number;
}) => {
	const rowNumberString = props.rowNumber.toString();
	//get a subset of the TEFAdjustmentState based on row number
	const AdjustmentRow: AdjustmentRowType = {
		Round: props.TEFAdjustmentState["Round" + rowNumberString],
		VRDirection: props.TEFAdjustmentState["VRDirection" + rowNumberString],
		VRDistance: props.TEFAdjustmentState["VRDistance" + rowNumberString],
		VRVerticalAngle:
			props.TEFAdjustmentState["VRVerticalAngle" + rowNumberString],
		LRObservation: props.TEFAdjustmentState["LRObservation" + rowNumberString],
		SLObservation: props.TEFAdjustmentState["SLObservation" + rowNumberString],
		AmmoCorrection:
			props.TEFAdjustmentState["AmmoCorrection" + rowNumberString],
		LRCorrection: props.TEFAdjustmentState["LRCorrection" + rowNumberString],
		ADCorrection: props.TEFAdjustmentState["ADCorrection" + rowNumberString],
		AdditionalCorrection:
			props.TEFAdjustmentState["AdditionalCorrection" + rowNumberString],
	};

	return (
		<>
			<div className="col-span-1  border-solid border h-auto">
				<TextInput
					onChange={(event) => props.onAdjustmentUpdate(event)}
					value={AdjustmentRow.Round}
					name={"Round" + rowNumberString}
					variant="unstyled"
					className="inline-block w-full"
				/>
			</div>
			<div className="col-span-2  border-solid border h-auto"></div>
			<div className="col-span-2  border-solid border h-auto"></div>
			<div className="col-span-2  border-solid border h-auto"></div>
			<div className="col-span-2  border-solid border h-auto">
				<TextInput
					onChange={(event) => props.onAdjustmentUpdate(event)}
					value={AdjustmentRow.VRDirection}
					name={"VRDirection" + rowNumberString}
					variant="unstyled"
					className="inline-block w-full"
				/>
			</div>
			<div className="col-span-2  border-solid border h-auto">
				<TextInput
					onChange={(event) => props.onAdjustmentUpdate(event)}
					value={AdjustmentRow.VRDistance}
					name={"VRDistance" + rowNumberString}
					variant="unstyled"
					className="inline-block w-full"
				/>
			</div>
			<div className="col-span-2  border-solid border h-auto">
				<TextInput
					onChange={(event) => props.onAdjustmentUpdate(event)}
					value={AdjustmentRow.VRVerticalAngle}
					name={"VRVerticalAngle" + rowNumberString}
					variant="unstyled"
					className="inline-block w-full"
				/>
			</div>
			<div className="col-span-3 border-solid border h-auto">
				<TextInput
					onChange={(event) => props.onAdjustmentUpdate(event)}
					value={AdjustmentRow.LRObservation}
					name={"LRObservation" + rowNumberString}
					variant="unstyled"
					className="inline-block w-full"
				/>
			</div>
			<div className="col-span-2 border-solid border h-auto">
				<TextInput
					onChange={(event) => props.onAdjustmentUpdate(event)}
					value={AdjustmentRow.SLObservation}
					name={"SLObservation" + rowNumberString}
					variant="unstyled"
					className="inline-block w-full"
				/>
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
					onChange={e=>props.onSelectElementAdjustmentUpdate(e,"AmmoCorrection" + rowNumberString)}
					value={AdjustmentRow.AmmoCorrection}
				/>
			</div>
			<div className="col-span-2 border-solid border h-auto"></div>
			<div className="col-span-2 border-solid border h-auto"></div>
			<div className="col-span-2 border-solid border h-auto">
				<TextInput
					onChange={(event) => props.onAdjustmentUpdate(event)}
					value={AdjustmentRow.LRCorrection}
					name={"LRCorrection" + rowNumberString}
					variant="unstyled"
					className="inline-block w-full"
				/>
			</div>
			<div className="col-span-2  border-solid border h-auto">
				<TextInput
					onChange={(event) => props.onAdjustmentUpdate(event)}
					value={AdjustmentRow.ADCorrection}
					name={"ADCorrection" + rowNumberString}
					variant="unstyled"
					className="inline-block w-full"
				/>
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
					onChange={e=>props.onSelectElementAdjustmentUpdate(e,"AdditionalCorrection" + rowNumberString)}
					value={AdjustmentRow.AdditionalCorrection}
				/>
			</div>
		</>
	);
};

export default TEFAdjustments;
