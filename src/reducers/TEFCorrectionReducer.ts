import { TEFInitialValuesType } from "../objects/TargetEngagementFormObj";

export enum ActionEnum {
  updateState = "UPDATE STATE",
}

export type Action = {
  type: ActionEnum;
  name: string;
  payload: string | null;
};

export const TEFCorrectionReducer = (
  state: TEFInitialValuesType,
  action: Action
) => {
    switch (action.type) {
        case ("UPDATE STATE"):
            return {
                ...state,
                [action.name]: action.payload,
            };
    
        default:
            return state;
    }
};
