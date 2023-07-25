const InitialOrders: { [key: string]: any } = {
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
};

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

const PRCorrections: { [key: string]: any } = {
	PRRound1GraphLeftRight:"-10",
	PRRound1GraphLongShort:"10",
	PRRound2GraphLeftRight:"10",
	PRRound2GraphLongShort:"10",
	PRRound3GraphLeftRight:"-10",
	PRRound3GraphLongShort:"-10",
	PRRound4GraphLeftRight:"10",
	PRRound4GraphLongShort:"-10",
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
	ActivationCodeword: "",
	TargetCodeword: "",
};

//object that will be populated with values from the form
export const TEFObj: { [key: string]: any } = {
	//initial orders
	InitialOrders: InitialOrders,
	//list containing each row of correction
	AdjustmentRowList: [
		AdjustmentRow,
		AdjustmentRow,
		AdjustmentRow,
		AdjustmentRow,
		AdjustmentRow,
		AdjustmentRow,
		AdjustmentRow,
		AdjustmentRow,
		AdjustmentRow,
		AdjustmentRow,
		AdjustmentRow,
		AdjustmentRow,
		AdjustmentRow,
	],
	//PR values
	PRCorrections: PRCorrections,
};

export type InitialOrdersType = typeof InitialOrders;
export type AdjustmentRowType = typeof AdjustmentRow;
export type PRCorrectionsType = typeof PRCorrections;
export type TEFObjType = typeof TEFObj;

export const cloneTEFObj=(existingTEFObj?:TEFObjType):TEFObjType=>{
	if (existingTEFObj!==undefined) {
		return JSON.parse(JSON.stringify(existingTEFObj)) as TEFObjType
	}
	return JSON.parse(JSON.stringify(TEFObj)) as TEFObjType
}