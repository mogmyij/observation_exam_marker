const AdjustmentRow: { [key: string]: any } = {
	Round: "",
	VRDirection: "",
	VRDistance: "",
	VRVerticalAngle: "",
	LRObservation: "",
	SLObservation: "",
	AmmoCorrection: "",
	LRCorrection: "",
	ADCorrection: "",
	AdditionalCorrection: "",
};

const PRCorrection = {
	PRRound1Left: "",
	PRRound1Right: "",
	PRRound1LongShort: "",
	PRRound2Left: "",
	PRRound2Right: "",
	PRRound2LongShort: "",
	PRRound3Left: "",
	PRRound3Right: "",
	PRRound3LongShort: "",
	PRRound4Left: "",
	PRRound4Right: "",
	PRRound4LongShort: "",
	PRTotalLeft: "",
	PRTotalRight: "",
	PRNumberOfRounds: "",
	PRMean: "",
	PROTFactor: "",
	PRFinalOrdersLeft: "",
	PRFinalOrdersRight: "",
	PRFinalOrdersAddDrop: "",
	PRFinalOrdersAddDropAmmount: "",
	PRRecordAsPoint: "",
};

export const TEFInitialValues: { [key: string]: any } = {
	//initial orders
	OPLocation: "",
	OPHeight: "",
	OTDistance: "",
	CallSign: "",
	FireMission: "",
	TargetGrid: "",
	Altitude: "",
	Direction: "",
	LRInitialDirection: "",
	LRInitialAdjustment: "",
	ADInitialDirection: "",
	ADInitialAdjustment: "",
	Ammo: "",
	TargetDescription: "",
	Vegetation: "",
	TargetFrontBearing: "",
	TargetFrontLength: "",
	MissionType: "",
	CheckPE: "",
	CheckAngleT: "",
	MethodOfFireControl: "",
	//values of each correction (all 13 rows)
	Round1: "",
	VRDirection1: "",
	VRDistance1: "",
	VRVerticalAngle1: "",
	LRObservation1: "",
	SLObservation1: "",
	AmmoCorrection1: "",
	LRCorrection1: "",
	ADCorrection1: "",
	AdditionalCorrection1: "",
	Round2: "",
	VRDirection2: "",
	VRDistance2: "",
	VRVerticalAngle2: "",
	LRObservation2: "",
	SLObservation2: "",
	AmmoCorrection2: "",
	LRCorrection2: "",
	ADCorrection2: "",
	AdditionalCorrection2: "",
	Round3: "",
	VRDirection3: "",
	VRDistance3: "",
	VRVerticalAngle3: "",
	LRObservation3: "",
	SLObservation3: "",
	AmmoCorrection3: "",
	LRCorrection3: "",
	ADCorrection3: "",
	AdditionalCorrection3: "",
	Round4: "",
	VRDirection4: "",
	VRDistance4: "",
	VRVerticalAngle4: "",
	LRObservation4: "",
	SLObservation4: "",
	AmmoCorrection4: "",
	LRCorrection4: "",
	ADCorrection4: "",
	AdditionalCorrection4: "",
	Round5: "",
	VRDirection5: "",
	VRDistance5: "",
	VRVerticalAngle5: "",
	LRObservation5: "",
	SLObservation5: "",
	AmmoCorrection5: "",
	LRCorrection5: "",
	ADCorrection5: "",
	AdditionalCorrection5: "",
	Round6: "",
	VRDirection6: "",
	VRDistance6: "",
	VRVerticalAngle6: "",
	LRObservation6: "",
	SLObservation6: "",
	AmmoCorrection6: "",
	LRCorrection6: "",
	ADCorrection6: "",
	AdditionalCorrection6: "",
	Round7: "",
	VRDirection7: "",
	VRDistance7: "",
	VRVerticalAngle7: "",
	LRObservation7: "",
	SLObservation7: "",
	AmmoCorrection7: "",
	LRCorrection7: "",
	ADCorrection7: "",
	AdditionalCorrection7: "",
	Round8: "",
	VRDirection8: "",
	VRDistance8: "",
	VRVerticalAngle8: "",
	LRObservation8: "",
	SLObservation8: "",
	AmmoCorrection8: "",
	LRCorrection8: "",
	ADCorrection8: "",
	AdditionalCorrection8: "",
	Round9: "",
	VRDirection9: "",
	VRDistance9: "",
	VRVerticalAngle9: "",
	LRObservation9: "",
	SLObservation9: "",
	AmmoCorrection9: "",
	LRCorrection9: "",
	ADCorrection9: "",
	AdditionalCorrection9: "",
	Round10: "",
	VRDirection10: "",
	VRDistance10: "",
	VRVerticalAngle10: "",
	LRObservation10: "",
	SLObservation10: "",
	AmmoCorrection10: "",
	LRCorrection10: "",
	ADCorrection10: "",
	AdditionalCorrection10: "",
	Round11: "",
	VRDirection11: "",
	VRDistance11: "",
	VRVerticalAngle11: "",
	LRObservation11: "",
	SLObservation11: "",
	AmmoCorrection11: "",
	LRCorrection11: "",
	ADCorrection11: "",
	AdditionalCorrection11: "",
	Round12: "",
	VRDirection12: "",
	VRDistance12: "",
	VRVerticalAngle12: "",
	LRObservation12: "",
	SLObservation12: "",
	AmmoCorrection12: "",
	LRCorrection12: "",
	ADCorrection12: "",
	AdditionalCorrection12: "",
	Round13: "",
	VRDirection13: "",
	VRDistance13: "",
	VRVerticalAngle13: "",
	LRObservation13: "",
	SLObservation13: "",
	AmmoCorrection13: "",
	LRCorrection13: "",
	ADCorrection13: "",
	AdditionalCorrection13: "",
	//Hasty Fire plan
	ActivationCodeword: "",
	TargetCodeword: "",
	//Precision reg
	PRRound1Left: "",
	PRRound1Right: "",
	PRRound1LongShort: "",
	PRRound2Left: "",
	PRRound2Right: "",
	PRRound2LongShort: "",
	PRRound3Left: "",
	PRRound3Right: "",
	PRRound3LongShort: "",
	PRRound4Left: "",
	PRRound4Right: "",
	PRRound4LongShort: "",
	PRTotalLeft: "",
	PRTotalRight: "",
	PRNumberOfRounds: "",
	PRMean: "",
	PROTFactor: "",
	PRFinalOrdersLeft: "",
	PRFinalOrdersRight: "",
	PRFinalOrdersAddDrop: "",
	PRFinalOrdersAddDropAmmount: "",
	PRRecordAsPoint: "",
};

//object that will be populated with values from the form
export const TEFObj = {
	//initial orders
	OPLocation: "",
	OPHeight: "",
	OTDistance: "",
	CallSign: "",
	FireMission: "",
	TargetGrid: "",
	Altitude: "",
	Direction: "",
	LRInitialDirection: "",
	LRInitialAdjustment: "",
	ADInitialDirection: "",
	ADInitialAdjustment: "",
	Ammo: "",
	TargetDescription: "",
	Vegetation: "",
	TargetFrontBearing: "",
	TargetFrontLength: "",
	MissionType: "",
	CheckPE: "",
	CheckAngleT: "",
	MethodOfFireControl: "",
	//list containing each row of correction
	AdjustmentRowList: Array<AdjustmentRowType>,
	//PR values
	...PRCorrection,
};

export type TEFInitialValuesType = typeof TEFInitialValues;
export type AdjustmentRowType = typeof AdjustmentRow;