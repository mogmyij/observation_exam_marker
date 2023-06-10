import { QuestionOneObj } from "./QuestionOneObj";
import { QuestionTwoObj } from "./QuestionTwoObj";
import { TEFObjType } from "./TargetEngagementFormObj";

export interface UserObj {
	name: string;
	nric: string;
	id: number;
	questionOneObj: QuestionOneObj;
	questionOneTEF: TEFObjType;
	questionTwoObj: QuestionTwoObj;
	questionTwoTEF: TEFObjType;
}

export const cloneUserObj = (existingUserObj: UserObj): UserObj => {
	return JSON.parse(JSON.stringify(existingUserObj)) as UserObj;
};
