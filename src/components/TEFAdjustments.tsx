import { TextInput, Select } from "@mantine/core";
import { AdjustmentRowType } from "../objects/TargetEngagementFormObj";
import { Action, ActionEnum } from "../reducers/TEFCorrectionReducer";
import { memo } from "react";
import equal from "fast-deep-equal";

const TEFAdjustments = (props: {
	AdjustmentRow: AdjustmentRowType;
	rowNumber: number;
	TEFObjDispatcher: React.Dispatch<Action>;
}) => {
	//function that uses dispatcher function obtained from reducer to update the state
	//each time the input box is updated
	const onFormUpdate = (
		event: React.ChangeEvent<HTMLInputElement>,
		rowNumber: number
	) => {
		props.TEFObjDispatcher({
			type: ActionEnum.updateAdjustmentRowState,
			name: event.target.name,
			payload: event.target.value,
			rowNumber: rowNumber,
		});
	};
	//same as above function just that for the select boxes because the onChange callback
	//is modified by mantine so it does not produce original behaviour
	const onSelectElementFormUpdate = (
		value: string | null,
		name: string,
		rowNumber: number
	) => {
		props.TEFObjDispatcher({
			type: ActionEnum.updateAdjustmentRowState,
			name: name,
			payload: value,
			rowNumber: rowNumber,
		});
	};

	return (
		<>
			<div className="col-span-1  border-solid border h-auto">
				<TextInput
					onChange={(event) => onFormUpdate(event, props.rowNumber)}
					value={props.AdjustmentRow.Round}
					name={"Round"}
					variant="unstyled"
					className="inline-block w-full"
				/>
			</div>
			<div className="col-span-2  border-solid border h-auto"></div>
			<div className="col-span-2  border-solid border h-auto"></div>
			<div className="col-span-2  border-solid border h-auto"></div>
			<div className="col-span-2  border-solid border h-auto">
				<TextInput
					onChange={(event) => onFormUpdate(event, props.rowNumber)}
					value={props.AdjustmentRow.VRDirection}
					name={"VRDirection"}
					variant="unstyled"
					className="inline-block w-full"
				/>
			</div>
			<div className="col-span-2  border-solid border h-auto">
				<TextInput
					onChange={(event) => onFormUpdate(event, props.rowNumber)}
					value={props.AdjustmentRow.VRDistance}
					name={"VRDistance"}
					variant="unstyled"
					className="inline-block w-full"
				/>
			</div>
			<div className="col-span-2  border-solid border h-auto">
				<TextInput
					onChange={(event) => onFormUpdate(event, props.rowNumber)}
					value={props.AdjustmentRow.VRVerticalAngle}
					name={"VRVerticalAngle"}
					variant="unstyled"
					className="inline-block w-full"
				/>
			</div>
			<div className="col-span-3 border-solid border h-auto">
				<TextInput
					onChange={(event) => onFormUpdate(event, props.rowNumber)}
					value={props.AdjustmentRow.LRObservation}
					name={"LRObservation"}
					variant="unstyled"
					className="inline-block w-full"
				/>
			</div>
			<div className="col-span-2 border-solid border h-auto">
				<TextInput
					onChange={(event) => onFormUpdate(event, props.rowNumber)}
					value={props.AdjustmentRow.SLObservation}
					name={"SLObservation"}
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
					onChange={(e) =>
						onSelectElementFormUpdate(e, "AmmoCorrection", props.rowNumber)
					}
					value={props.AdjustmentRow.AmmoCorrection}
				/>
			</div>
			<div className="col-span-2 border-solid border h-auto"></div>
			<div className="col-span-2 border-solid border h-auto"></div>
			<div className="col-span-2 border-solid border h-auto">
				<TextInput
					onChange={(event) => onFormUpdate(event, props.rowNumber)}
					value={props.AdjustmentRow.LRCorrection}
					name={"LRCorrection"}
					variant="unstyled"
					className="inline-block w-full"
				/>
			</div>
			<div className="col-span-2  border-solid border h-auto">
				<TextInput
					onChange={(event) => onFormUpdate(event, props.rowNumber)}
					value={props.AdjustmentRow.ADCorrection}
					name={"ADCorrection"}
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
					onChange={(e) =>
						onSelectElementFormUpdate(
							e,
							"AdditionalCorrection",
							props.rowNumber
						)
					}
					value={props.AdjustmentRow.AdditionalCorrection}
				/>
			</div>
		</>
	);
};

export default memo(TEFAdjustments, (oldProps, newProps) =>
	equal(oldProps.AdjustmentRow, newProps.AdjustmentRow)
);