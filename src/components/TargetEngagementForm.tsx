import {
	TEFObjType,
	cloneTEFObj,
} from "../objects/TargetEngagementFormObj";
import TEFAdjustments from "./TEFAdjustments";
import { useEffect, useReducer } from "react";
import { Action, TEFObjReducer } from "../reducers/TEFCorrectionReducer";
import TEFInitialOrders from "./TEFInitialOrders";
import TEFPRCorrections from "./TEFPRCorrections";

const TargetEngagementForm = (props: { TEFObjState: TEFObjType, TEFObjDispatcher :React.Dispatch<Action> }) => {
	
	return (
		<div>
			<h2 className="Text-center">Target Engagement Form</h2>
			<form>
				<div className="grid grid-cols-32 h-auto overflow-visible">
					<TEFInitialOrders
						InitialOrders={props.TEFObjState.InitialOrders}
						TEFObjDispatcher={props.TEFObjDispatcher}
					/>

					{/*row 21-34 PR has the most rows in answer sheet (10 rows) 
          			so we have 13 blank rows for users to fill */}
					<TEFAdjustments
						rowNumber={0}
						AdjustmentRow={props.TEFObjState.AdjustmentRowList[0]}
						TEFObjDispatcher={props.TEFObjDispatcher}
					></TEFAdjustments>
					<TEFAdjustments
						rowNumber={1}
						AdjustmentRow={props.TEFObjState.AdjustmentRowList[1]}
						TEFObjDispatcher={props.TEFObjDispatcher}
					></TEFAdjustments>
					<TEFAdjustments
						rowNumber={2}
						AdjustmentRow={props.TEFObjState.AdjustmentRowList[2]}
						TEFObjDispatcher={props.TEFObjDispatcher}
					></TEFAdjustments>
					<TEFAdjustments
						rowNumber={3}
						AdjustmentRow={props.TEFObjState.AdjustmentRowList[3]}
						TEFObjDispatcher={props.TEFObjDispatcher}
					></TEFAdjustments>
					<TEFAdjustments
						rowNumber={4}
						AdjustmentRow={props.TEFObjState.AdjustmentRowList[4]}
						TEFObjDispatcher={props.TEFObjDispatcher}
					></TEFAdjustments>
					<TEFAdjustments
						rowNumber={5}
						AdjustmentRow={props.TEFObjState.AdjustmentRowList[5]}
						TEFObjDispatcher={props.TEFObjDispatcher}
					></TEFAdjustments>
					<TEFAdjustments
						rowNumber={6}
						AdjustmentRow={props.TEFObjState.AdjustmentRowList[6]}
						TEFObjDispatcher={props.TEFObjDispatcher}
					></TEFAdjustments>
					<TEFAdjustments
						rowNumber={7}
						AdjustmentRow={props.TEFObjState.AdjustmentRowList[7]}
						TEFObjDispatcher={props.TEFObjDispatcher}
					></TEFAdjustments>
					<TEFAdjustments
						rowNumber={8}
						AdjustmentRow={props.TEFObjState.AdjustmentRowList[8]}
						TEFObjDispatcher={props.TEFObjDispatcher}
					></TEFAdjustments>
					<TEFAdjustments
						rowNumber={9}
						AdjustmentRow={props.TEFObjState.AdjustmentRowList[9]}
						TEFObjDispatcher={props.TEFObjDispatcher}
					></TEFAdjustments>
					<TEFAdjustments
						rowNumber={10}
						AdjustmentRow={props.TEFObjState.AdjustmentRowList[10]}
						TEFObjDispatcher={props.TEFObjDispatcher}
					></TEFAdjustments>
					<TEFAdjustments
						rowNumber={11}
						AdjustmentRow={props.TEFObjState.AdjustmentRowList[11]}
						TEFObjDispatcher={props.TEFObjDispatcher}
					></TEFAdjustments>
					<TEFAdjustments
						rowNumber={12}
						AdjustmentRow={props.TEFObjState.AdjustmentRowList[12]}
						TEFObjDispatcher={props.TEFObjDispatcher}
					></TEFAdjustments>

					<TEFPRCorrections
						PRCorrections={props.TEFObjState.PRCorrections}
						TEFObjDispatcher={props.TEFObjDispatcher}
					/>
				</div>
			</form>
		</div>
	);
};

export default TargetEngagementForm;