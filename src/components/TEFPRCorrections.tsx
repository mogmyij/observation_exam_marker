import { Text, TextInput, Select, Checkbox, Group } from "@mantine/core";
import { Action, ActionEnum } from "../reducers/TEFCorrectionReducer";
import { PRCorrectionsType } from "../objects/TargetEngagementFormObj";
import { memo } from "react";
import equal from "fast-deep-equal";

const TEFPRCorrections = (props: {
	PRCorrections: PRCorrectionsType;
	TEFObjDispatcher: React.Dispatch<Action>;
}) => {
	//function that uses dispatcher function obtained from reducer to update the state
	//each time the input box is updated
	const onFormUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
		props.TEFObjDispatcher({
			type: ActionEnum.updatePRCorrectionState,
			name: event.target.name,
			payload: event.target.value,
			rowNumber: null,
		});
	};
	//same as above function just that for the select boxes because the onChange callback
	//is modified by mantine so it does not produce original behaviour
	const onSelectElementFormUpdate = (value: string | null, name: string) => {
		props.TEFObjDispatcher({
			type: ActionEnum.updatePRCorrectionState,
			name: name,
			payload: value,
			rowNumber: null,
		});
	};
	//Same as other functions just that for checkbox they return a string array
	const onCheckboxElementFormUpdate = (
		valueArray: string[] | null,
		name: string
	) => {
		var value: string | null;
		if (valueArray?.length === 0) {
			value = null;
		}
		//use index 1 because index 0 will be the previous option and therefore
		//will not change the value if used
		else {
			value = valueArray![1];
		}
		props.TEFObjDispatcher({
			type: ActionEnum.updatePRCorrectionState,
			name: name,
			payload: value,
			rowNumber: null,
		});
	};

	return (
		<>
			{/*row 35 PR Adjustments */}
			<div className="col-span-full border-solid border h-auto">
				<div className="col-span-full border-solid border h-auto bg-stone-400">
					<Text ta="center">PRECISION REGISTRATION REFINEMENT CORRECTIONS</Text>
				</div>
			</div>

			{/*row 36*/}
			<div className="col-span-20 row-span-6 border-solid border h-auto"></div>
			<div className="col-span-2 border-solid border h-auto bg-stone-400">
				<Text ta="center">S/N</Text>
			</div>
			<div className="col-span-3 border-solid border h-auto bg-stone-400">
				<Text ta="center">RD</Text>
			</div>
			<div className="col-span-4 border-solid border h-auto bg-stone-400">
				<Text ta="center">L/R (MILS)</Text>
			</div>
			<div className="col-span-3 border-solid border h-auto bg-stone-400">
				<Text ta="center">L/S </Text>
			</div>

			{/*row 37*/}
			<div className="col-span-2 border-solid border h-auto bg-stone-400">
				<Text ta="center">P1</Text>
			</div>
			<div className="col-span-3 border-solid border h-auto">
				<Text ta="center">1</Text>
			</div>
			<div className="col-span-2 border-solid border h-auto">
				<TextInput
					variant="unstyled"
					className="inline-block"
					name="PRRound1Left"
					value={props.PRCorrections.PRRound1Left}
					onChange={(e) => onFormUpdate(e)}
				/>
			</div>
			<div className="col-span-2 border-solid border h-auto">
				<TextInput
					variant="unstyled"
					className="inline-block"
					name="PRRound1Right"
					value={props.PRCorrections.PRRound1Right}
					onChange={(e) => onFormUpdate(e)}
				/>
			</div>
			<div className="col-span-3 border-solid border h-auto">
				<TextInput
					variant="unstyled"
					className="inline-block"
					name="PRRound1LongShort"
					value={props.PRCorrections.PRRound1LongShort}
					onChange={(e) => onFormUpdate(e)}
				/>
			</div>

			{/*row 38*/}
			<div className="col-span-2 border-solid border h-auto bg-stone-400">
				<Text ta="center">P2</Text>
			</div>
			<div className="col-span-3 border-solid border h-auto">
				<Text ta="center">2</Text>
			</div>
			<div className="col-span-2 border-solid border h-auto">
				<TextInput
					variant="unstyled"
					className="inline-block"
					name="PRRound2Left"
					value={props.PRCorrections.PRRound2Left}
					onChange={(e) => onFormUpdate(e)}
				/>
			</div>
			<div className="col-span-2 border-solid border h-auto">
				<TextInput
					variant="unstyled"
					className="inline-block"
					name="PRRound2Right"
					value={props.PRCorrections.PRRound2Right}
					onChange={(e) => onFormUpdate(e)}
				/>
			</div>
			<div className="col-span-3 border-solid border h-auto">
				<TextInput
					variant="unstyled"
					className="inline-block"
					name="PRRound2LongShort"
					value={props.PRCorrections.PRRound2LongShort}
					onChange={(e) => onFormUpdate(e)}
				/>
			</div>

			{/*row 39*/}
			<div className="col-span-2 border-solid border h-auto bg-stone-400">
				<Text ta="center">P3</Text>
			</div>
			<div className="col-span-3 border-solid border h-auto">
				<Text ta="center">3</Text>
			</div>
			<div className="col-span-2 border-solid border h-auto">
				<TextInput
					variant="unstyled"
					className="inline-block"
					name="PRRound3Left"
					value={props.PRCorrections.PRRound3Left}
					onChange={(e) => onFormUpdate(e)}
				/>
			</div>
			<div className="col-span-2 border-solid border h-auto">
				<TextInput
					variant="unstyled"
					className="inline-block"
					name="PRRound3Right"
					value={props.PRCorrections.PRRound3Right}
					onChange={(e) => onFormUpdate(e)}
				/>
			</div>
			<div className="col-span-3 border-solid border h-auto">
				<TextInput
					variant="unstyled"
					className="inline-block"
					name="PRRound3LongShort"
					value={props.PRCorrections.PRRound3LongShort}
					onChange={(e) => onFormUpdate(e)}
				/>
			</div>

			{/*row 40*/}
			<div className="col-span-2 border-solid border h-auto bg-stone-400">
				<Text ta="center">P4</Text>
			</div>
			<div className="col-span-3 border-solid border h-auto">
				<Text ta="center">4</Text>
			</div>
			<div className="col-span-2 border-solid border h-auto">
				<TextInput
					variant="unstyled"
					className="inline-block"
					name="PRRound4Left"
					value={props.PRCorrections.PRRound4Left}
					onChange={(e) => onFormUpdate(e)}
				/>
			</div>
			<div className="col-span-2 border-solid border h-auto">
				<TextInput
					variant="unstyled"
					className="inline-block"
					name="PRRound4Right"
					value={props.PRCorrections.PRRound4Right}
					onChange={(e) => onFormUpdate(e)}
				/>
			</div>
			<div className="col-span-3 border-solid border h-auto">
				<TextInput
					variant="unstyled"
					className="inline-block"
					name="PRRound4LongShort"
					value={props.PRCorrections.PRRound4LongShort}
					onChange={(e) => onFormUpdate(e)}
				/>
			</div>

			{/*row 41*/}
			<div className="col-span-2 border-solid border h-auto bg-stone-400">
				<Text ta="center">P5</Text>
			</div>
			<div className="col-span-3 Text-center border-solid border h-auto">
				<Text ta="center">TOTAL </Text>
			</div>
			<div className="col-span-4 border-solid border h-auto">
				<Text className="inline-block">LEFT: </Text>
				<TextInput
					variant="unstyled"
					className="inline-block w-1/2"
					name="PRTotalLeft"
					value={props.PRCorrections.PRTotalLeft}
					onChange={(e) => onFormUpdate(e)}
				/>
			</div>
			<div className="col-span-3 row-span-5 border-solid border h-auto bg-gray-800"></div>

			{/*row 42*/}
			<div className="col-span-20 border-solid border h-auto bg-stone-400">
				<Text ta="center">HASTY FIREPLAN</Text>
			</div>
			<div className="col-span-2 border-solid border h-auto bg-stone-400"></div>
			<div className="col-span-3 border-solid border h-auto"></div>
			<div className="col-span-4 border-solid border h-auto">
				<Text className="inline-block">RIGHT: </Text>
				<TextInput
					variant="unstyled"
					className="inline-block w-1/2"
					name="PRTotalRight"
					value={props.PRCorrections.PRTotalRight}
					onChange={(e) => onFormUpdate(e)}
				/>
			</div>

			{/*row 43*/}
			<div className="col-span-20 border-solid border h-auto">
				<Text className="inline-block">ON ACT. CODE </Text>
				<TextInput
					variant="unstyled"
					className="inline-block w-1/5"
					name="ActivationCodeword"
					value={props.PRCorrections.ActivationCodeword}
					onChange={(e) => onFormUpdate(e)}
				/>
				<Text className="inline-block">, ESTAB NEUT ON TARGET</Text>
				<TextInput
					variant="unstyled"
					className="inline-block w-1/5"
					name="TargetCodeword"
					value={props.PRCorrections.TargetCodeword}
					onChange={(e) => onFormUpdate(e)}
				/>
			</div>
			<div className="col-span-2 border-solid border h-auto bg-stone-400">
				<Text ta="center">P6</Text>
			</div>
			<div className="col-span-3 border-solid border h-auto">
				<Text ta="center" fz="xs">
					NO. OF ROUNDS
				</Text>
			</div>
			<div className="col-span-4 border-solid border h-auto">
				<TextInput
					variant="unstyled"
					className="inline-block"
					name="PRNumberOfRounds"
					value={props.PRCorrections.PRNumberOfRounds}
					onChange={(e) => onFormUpdate(e)}
				/>
			</div>

			{/*row 44*/}
			<div className="col-span-20 border-solid border h-auto">
				<Text className="inline-block">ON ACT. CODE </Text>
				<TextInput variant="unstyled" className="inline-block w-1/12" />
				<Text className="inline-block">, ENGAGE TARGET</Text>
				<TextInput variant="unstyled" className="inline-block w-1/12" />
				<Text className="inline-block">WITH</Text>
				<TextInput variant="unstyled" className="inline-block w-1/12" />
				<Text className="inline-block">PART RENEWAL</Text>
			</div>
			<div className="col-span-2 border-solid border h-auto bg-stone-400">
				<Text ta="center">P7</Text>
			</div>
			<div className="col-span-3 border-solid border h-auto">
				<Text ta="center" fz="sm">
					MEAN
				</Text>
			</div>
			<div className="col-span-4 border-solid border h-auto">
				<TextInput
					variant="unstyled"
					className="inline-block w-1/2"
					name="PRMean"
					value={props.PRCorrections.PRMean}
					onChange={(e) => onFormUpdate(e)}
				/>
			</div>

			{/*row 45*/}
			<div className="col-span-20 border-solid border h-auto">
				<Text className="inline-block">ON ACT. CODE </Text>
				<TextInput variant="unstyled" className="inline-block w-1/12" />
				<Text className="inline-block">, ENGAGE TARGET</Text>
				<TextInput variant="unstyled" className="inline-block w-1/12" />
				<Text className="inline-block">WITH</Text>
				<TextInput variant="unstyled" className="inline-block w-1/12" />
				<Text className="inline-block">RDS/BOMBS</Text>
			</div>
			<div className="col-span-2 border-solid border h-auto bg-stone-400">
				<Text ta="center">P8</Text>
			</div>
			<div className="col-span-3 border-solid border h-auto">
				<Text ta="center" fz="sm">
					OT FACTOR
				</Text>
			</div>
			<div className="col-span-4 border-solid border h-auto">
				<TextInput
					variant="unstyled"
					className="inline-block w-1/2"
					name="PROTFactor"
					value={props.PRCorrections.PROTFactor}
					onChange={(e) => onFormUpdate(e)}
				/>
			</div>

			{/*row 46*/}
			<div className="col-span-20 border-solid border h-auto">
				<Text className="inline-block">ON ACT. CODE </Text>
				<TextInput variant="unstyled" className="inline-block w-1/12" />
				<Text className="inline-block">, HARASSING FIRES ON TGT</Text>
				<TextInput variant="unstyled" className="inline-block w-1/12" />
				<Text className="inline-block">FOR</Text>
				<TextInput variant="unstyled" className="inline-block w-1/12" />
				<Text className="inline-block">MINS</Text>
			</div>
			<div className="col-span-2 row-span-3 border-solid border h-auto bg-stone-400">
				<Text ta="center">P9</Text>
			</div>
			<div className="col-span-3 row-span-3 border-solid border h-auto">
				<Text ta="center" fz="sm">
					FINAL REFINEMENT ORDERS
				</Text>
			</div>
			<div className="col-span-4 border-solid border h-auto">
				<Text className="inline-block pl-2">L</Text>
				<TextInput
					variant="unstyled"
					className="inline-block w-2/3"
					name="PRFinalOrdersLeft"
					value={props.PRCorrections.PRFinalOrdersLeft}
					onChange={(e) => onFormUpdate(e)}
				/>
			</div>
			<div className="col-span-3 border-solid border h-auto">
				<Text className="inline-block pl-2">R</Text>
				<TextInput
					variant="unstyled"
					className="inline-block w-2/3"
					name="PRFinalOrdersRight"
					value={props.PRCorrections.PRFinalOrdersRight}
					onChange={(e) => onFormUpdate(e)}
				/>
			</div>

			{/*row 47*/}
			<div className="col-span-20 border-solid border h-auto">
				<Text className="inline-block">ON ACT. CODE </Text>
				<TextInput variant="unstyled" className="inline-block w-1/12" />
				<Text className="inline-block">RDS SMK TGT ON TGT</Text>
				<TextInput variant="unstyled" className="inline-block w-1/12" />
			</div>
			<div className="col-span-7 row-span-2 border-solid border h-auto">
				<Select
					placeholder="Add/Drop"
					data={[
						{ value: "ADD", label: "Add" },
						{ value: "DROP", label: "Drop" },
					]}
					transitionProps={{
						transition: "pop-top-left",
						duration: 80,
						timingFunction: "ease",
					}}
					variant="unstyled"
					className="inline-block w-2/3"
					clearable
					value={props.PRCorrections.PRFinalOrdersAddDrop}
					onChange={(e) => onSelectElementFormUpdate(e, "PRFinalOrdersAddDrop")}
				/>
				<Checkbox.Group
					value={[props.PRCorrections.PRFinalOrdersAddDropAmmount]}
					onChange={(e) =>
						onCheckboxElementFormUpdate(e, "PRFinalOrdersAddDropAmmount")
					}
				>
					<Group>
						<Checkbox size="xs" value="10" label="10"></Checkbox>
						<Checkbox size="xs" value="20" label="20"></Checkbox>
						<Checkbox size="xs" value="40" label="40"></Checkbox>
					</Group>
				</Checkbox.Group>
			</div>

			{/*row 48*/}
			<div className="col-span-20 border-solid border h-auto">
				<Text className="inline-block">ON ACT. CODE </Text>
				<TextInput variant="unstyled" className="inline-block w-1/12" />
				<Text className="inline-block">SMK SCR ON TGT</Text>
				<TextInput variant="unstyled" className="inline-block w-1/12" />
				<Text className="inline-block">FOR</Text>
				<TextInput variant="unstyled" className="inline-block w-1/12" />
				<Text className="inline-block">MINS</Text>
			</div>

			{/*row 48*/}
			<div className="col-span-20 border-solid border h-auto">
				<Text className="inline-block">ON ACT. CODE </Text>
				<TextInput variant="unstyled" className="inline-block w-1/12" />
				<Text className="inline-block">MINS ILLUM ON TGT</Text>
			</div>
			<div className="col-span-2 border-solid border h-auto bg-stone-400">
				<Text ta="center">P10</Text>
			</div>
			<div className="col-span-10 border-solid border h-auto">
				<Text className="inline-block pl-2">RECORD AS PR PT: </Text>
				<TextInput
					variant="unstyled"
					className="inline-block w-1/3"
					name="PRRecordAsPoint"
					value={props.PRCorrections.PRRecordAsPoint}
					onChange={(e) => onFormUpdate(e)}
				/>
			</div>
		</>
	);
};

export default memo(TEFPRCorrections, (oldProps, newProps) =>
	equal(oldProps.PRCorrections, newProps.PRCorrections)
);
