import { QuestionFourObj } from "./QuestionFourObj";
import { QuestionOneObj } from "./QuestionOneObj";
import { QuestionThreeObj } from "./QuestionThreeObj";
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
	questionThreeObj: QuestionThreeObj;
	questionThreeTEF: TEFObjType;
	questionFourObj: QuestionFourObj;
	questionFourTEF: TEFObjType;
	questionFiveTEF: TEFObjType;
}

export const cloneUserObj = (existingUserObj: UserObj): UserObj => {
	return JSON.parse(JSON.stringify(existingUserObj)) as UserObj;
};
