import { QuestionOneObj } from "./QuestionOneObj";

export interface UserObj {
	name: string;
	nric: string;
	id: number;
	questionOneObj: QuestionOneObj;
}

export const cloneUserObj = (existingUserObj: UserObj): UserObj => {
	return JSON.parse(JSON.stringify(existingUserObj)) as UserObj;
};
