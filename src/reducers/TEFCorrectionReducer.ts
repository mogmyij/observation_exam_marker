import { TEFObjType } from "../objects/TargetEngagementFormObj";

export enum ActionEnum {
	updateInitialOrdersState = "UPDATE INITIAL ORDERS STATE",
	updateAdjustmentRowState = "UPDATE ADJUSTMENT ROW STATE",
	updatePRCorrectionState = "UPDATE PR CORRECTION STATE",
}

export type Action = {
	type: ActionEnum;
	name: string;
	payload: string | null;
	rowNumber: number | null;
};

export const TEFObjReducer = (state: TEFObjType, action: Action) => {
	let newState = {...state};
	switch (action.type) {
		case ActionEnum.updateInitialOrdersState:
			newState.InitialOrders[action.name] = action.payload;
      console.log("reducer active",newState);
			return newState;
		case ActionEnum.updateAdjustmentRowState:
			newState.AdjustmentRowList[action.rowNumber!][action.name] = action.payload;
			return newState;
		case ActionEnum.updatePRCorrectionState:
			newState.PRCorrections[action.name] = action.payload;
			return newState;
		default:
			return state;
	}
};
