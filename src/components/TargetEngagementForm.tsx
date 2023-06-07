import { Group, Select, TextInput, Text, Checkbox } from "@mantine/core";
import {
	AdjustmentRowType,
	TEFObjType,
	cloneTEFObj,
} from "../objects/TargetEngagementFormObj";
import TEFAdjustments from "./TEFAdjustments";
import { useEffect, useReducer } from "react";
import { TEFObjReducer, ActionEnum } from "../reducers/TEFCorrectionReducer";
import TEFInitialOrders from "./TEFInitialOrders";
import TEFPRCorrections from "./TEFPRCorrections";

const TargetEngagementForm = (props: { TEFObj: TEFObjType }) => {
	//useReducer for TEF adjustment rows
	const [TEFObjState, TEFObjDispatcher] = useReducer(
		TEFObjReducer,
		cloneTEFObj()
	);

	return (
		<div>
			<h2 className="Text-center">Target Engagement Form</h2>
			<form>
				<div className="grid grid-cols-32 h-auto overflow-visible">
					<TEFInitialOrders
						InitialOrders={TEFObjState.InitialOrders}
						TEFObjDispatcher={TEFObjDispatcher}
					/>

					{/*row 21-34 PR has the most rows in answer sheet (10 rows) 
          			so we have 13 blank rows for users to fill */}
					<TEFAdjustments
						rowNumber={0}
						AdjustmentRow={TEFObjState.AdjustmentRowList[0]}
						TEFObjDispatcher={TEFObjDispatcher}
					></TEFAdjustments>
					<TEFAdjustments
						rowNumber={1}
						AdjustmentRow={TEFObjState.AdjustmentRowList[1]}
						TEFObjDispatcher={TEFObjDispatcher}
					></TEFAdjustments>
					<TEFAdjustments
						rowNumber={2}
						AdjustmentRow={TEFObjState.AdjustmentRowList[2]}
						TEFObjDispatcher={TEFObjDispatcher}
					></TEFAdjustments>
					<TEFAdjustments
						rowNumber={3}
						AdjustmentRow={TEFObjState.AdjustmentRowList[3]}
						TEFObjDispatcher={TEFObjDispatcher}
					></TEFAdjustments>
					<TEFAdjustments
						rowNumber={4}
						AdjustmentRow={TEFObjState.AdjustmentRowList[4]}
						TEFObjDispatcher={TEFObjDispatcher}
					></TEFAdjustments>
					<TEFAdjustments
						rowNumber={5}
						AdjustmentRow={TEFObjState.AdjustmentRowList[5]}
						TEFObjDispatcher={TEFObjDispatcher}
					></TEFAdjustments>
					<TEFAdjustments
						rowNumber={6}
						AdjustmentRow={TEFObjState.AdjustmentRowList[6]}
						TEFObjDispatcher={TEFObjDispatcher}
					></TEFAdjustments>
					<TEFAdjustments
						rowNumber={7}
						AdjustmentRow={TEFObjState.AdjustmentRowList[7]}
						TEFObjDispatcher={TEFObjDispatcher}
					></TEFAdjustments>
					<TEFAdjustments
						rowNumber={8}
						AdjustmentRow={TEFObjState.AdjustmentRowList[8]}
						TEFObjDispatcher={TEFObjDispatcher}
					></TEFAdjustments>
					<TEFAdjustments
						rowNumber={9}
						AdjustmentRow={TEFObjState.AdjustmentRowList[9]}
						TEFObjDispatcher={TEFObjDispatcher}
					></TEFAdjustments>
					<TEFAdjustments
						rowNumber={10}
						AdjustmentRow={TEFObjState.AdjustmentRowList[10]}
						TEFObjDispatcher={TEFObjDispatcher}
					></TEFAdjustments>
					<TEFAdjustments
						rowNumber={11}
						AdjustmentRow={TEFObjState.AdjustmentRowList[11]}
						TEFObjDispatcher={TEFObjDispatcher}
					></TEFAdjustments>
					<TEFAdjustments
						rowNumber={12}
						AdjustmentRow={TEFObjState.AdjustmentRowList[12]}
						TEFObjDispatcher={TEFObjDispatcher}
					></TEFAdjustments>

					<TEFPRCorrections
						PRCorrections={TEFObjState.PRCorrections}
						TEFObjDispatcher={TEFObjDispatcher}
					/>
				</div>
			</form>
		</div>
	);
};

export default TargetEngagementForm;
