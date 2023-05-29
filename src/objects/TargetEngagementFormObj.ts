const CorrectionRow = {
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

type CorrectionRowType = typeof CorrectionRow;

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
  //CorrectionList a list of each row on the Target engagement form
  CorrectionList: Array<CorrectionRowType> 
};
