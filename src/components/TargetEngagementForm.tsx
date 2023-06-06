import { Group, Select, TextInput, Text, Checkbox } from "@mantine/core";
import {
	AdjustmentRowType,
	TEFObjType,
	TEFObj,
} from "../objects/TargetEngagementFormObj";
import TEFAdjustments from "./TEFAdjustments";
import { useEffect, useReducer } from "react";
import { TEFObjReducer, ActionEnum } from "../reducers/TEFCorrectionReducer";
import TEFInitialOrders from "./TEFInitialOrders";

const TargetEngagementForm = (props: { TEFObj: TEFObjType }) => {
	//useReducer for TEF adjustment rows
	const [TEFObjState, TEFObjDispatcher] = useReducer(TEFObjReducer, TEFObj);
	//function that uses dispatcher function obtained from reducer to update the state
	//each time the input box is updated
	//const onFormUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
	//	TEFObjDispatcher({
	//		type: ActionEnum.updateAdjustmentRowState,
	//		name: event.target.name,
	//		payload: event.target.value,
	//		rowNumber: null,
	//	});
	//};
	////same as above function just that for the select boxes because the onChange callback
	////is modified by mantine so it does not produce original behaviour
	//const onSelectElementFormUpdate = (value: string | null, name: string) => {
	//	TEFObjDispatcher({
	//		type: ActionEnum.updateAdjustmentRowState,
	//		name: name,
	//		payload: value,
	//		rowNumber: null,
	//	});
	//};
	////Same as other functions just that for checkbox they return a string array
	//const onCheckboxElementFormUpdate = (
	//	valueArray: string[] | null,
	//	name: string
	//) => {
	//	var value: string | null;
	//	if (valueArray?.length === 0) {
	//		value = null;
	//	}
	//	//use index 1 because index 0 will be the previous option and therefore
	//	//will not change the value if used
	//	else {
	//		value = valueArray![1];
	//	}
	//	TEFObjDispatcher({
	//		type: ActionEnum.updateAdjustmentRowState,
	//		name: name,
	//		payload: value,
	//		rowNumber: null,
	//	});
	//};

	//useEffect to update the TEF Object each time the TEF is edited
	//useEffect(() => {
	//	//loop through each key value pair in TEFAdjustmentState and add it to TEFObj
	//	for (const key in TEFObjState) {
	//		if (Object.hasOwn(props.TEFObj, key)) {
	//			props.TEFObj[key] = TEFObjState[key];
	//		}
	//	}
	//	var TEFAdjustmentArray = Object.values(TEFObjState);
	//	var TEFAdjustmentRowArray: AdjustmentRowType[] = [];
	//	//add each row to TEFAdjustmentRowArray (13 times)
	//	//add each key to adjustmentRow object (rounds, LRAdjustments, etc...)
	//	for (let index = 21; index < 151; index += 10) {
	//		var newAdjustmentRow: AdjustmentRowType = {};
	//		newAdjustmentRow.Round = TEFAdjustmentArray[index];
	//		newAdjustmentRow.VRDirection = TEFAdjustmentArray[index + 1];
	//		newAdjustmentRow.VRDistance = TEFAdjustmentArray[index + 2];
	//		newAdjustmentRow.VRVerticalAngle = TEFAdjustmentArray[index + 3];
	//		newAdjustmentRow.LRObservation = TEFAdjustmentArray[index + 4];
	//		newAdjustmentRow.SLObservation = TEFAdjustmentArray[index + 5];
	//		newAdjustmentRow.AmmoCorrection = TEFAdjustmentArray[index + 6];
	//		newAdjustmentRow.LRCorrection = TEFAdjustmentArray[index + 7];
	//		newAdjustmentRow.ADCorrection = TEFAdjustmentArray[index + 8];
	//		newAdjustmentRow.AdditionalCorrection = TEFAdjustmentArray[index + 9];
	//		TEFAdjustmentRowArray.push(newAdjustmentRow);
	//	}
	//	props.TEFObj.AdjustmentRowList = TEFAdjustmentRowArray;
	//}, [TEFObjState]);

	//init form object
	return (
		<div>
			<h2 className="Text-center">Target Engagement Form</h2>
			<form>
				<div className="grid grid-cols-32 h-auto overflow-visible">
					<TEFInitialOrders
						InitialOrders={TEFObjState.InitialOrders}
						TEFObjDispatcher={TEFObjDispatcher}
					/>
					
				</div>
			</form>
		</div>
	);
};

export default TargetEngagementForm;
