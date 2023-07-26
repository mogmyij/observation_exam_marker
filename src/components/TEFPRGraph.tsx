import React, { Dispatch } from "react";
import { ActionEnum, Action } from "../reducers/TEFCorrectionReducer";
import { PRCorrectionsType } from "../objects/TargetEngagementFormObj";
import {
	Chart as ChartJS,
	LinearScale,
	PointElement,
	LineElement,
	Tooltip,
	Legend,
} from "chart.js";
import { Scatter } from "react-chartjs-2";
import "chartjs-plugin-dragdata";
import { Text } from "@mantine/core";

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

const TEFPRGraph = (props: {
	PRCorrections: PRCorrectionsType;
	TEFObjDispatcher: React.Dispatch<Action>;
}) => {
	//load PR round image
	//point 1
	var pointStyleImage1 = new Image(30, 60);
	pointStyleImage1.src = "PR_Round_1.png";
	//point 2
	var pointStyleImage2 = new Image(30, 60);
	pointStyleImage2.src = "PR_Round_2.png";
	//point 3
	var pointStyleImage3 = new Image(30, 60);
	pointStyleImage3.src = "PR_Round_3.png";
	//point 4
	var pointStyleImage4 = new Image(30, 60);
	pointStyleImage4.src = "PR_Round_4.png";
	//initialise PR point data using values from the PR corrections
	var point1 = {
		x: Number(props.PRCorrections["PRRound1GraphLeftRight"]),
		y: Number(props.PRCorrections["PRRound1GraphLongShort"]),
	};
	var point2 = {
		x: Number(props.PRCorrections["PRRound2GraphLeftRight"]),
		y: Number(props.PRCorrections["PRRound2GraphLongShort"]),
	};
	var point3 = {
		x: Number(props.PRCorrections["PRRound3GraphLeftRight"]),
		y: Number(props.PRCorrections["PRRound3GraphLongShort"]),
	};
	var point4 = {
		x: Number(props.PRCorrections["PRRound4GraphLeftRight"]),
		y: Number(props.PRCorrections["PRRound4GraphLongShort"]),
	};

	//Graph data contains 4 points and their icons
	const PRGraphData = {
		datasets: [
			{
				label: "PR Observation",
				data: [point1, point2, point3, point4],
				pointStyle: [
					pointStyleImage1,
					pointStyleImage2,
					pointStyleImage3,
					pointStyleImage4,
				],
				pointHitRadius: 25,
			},
		],
	};

	//configure the options of the Graph
	//creates a cartesian graph with axis aligned to 0 on both x and y
	const PRGraphOptions: object = {
		layout: {
			padding: {
				bottom: 40,
				left: 10,
				right: 10,
			},
		},
		scales: {
			x: {
				type: "linear",
				min: -40,
				max: 40,
				position: "center",
				grid: {
					drawOnChartArea: false,
				},
				ticks: {
					stepSize: 5,
				},
			},
			y: {
				type: "linear",
				min: -30,
				max: 30,
				position: "center",
				ticks: {
					stepSize: 5,
				},
				grid: {
					drawOnChartArea: false,
				},
			},
		},

		plugins: {
			legend: false,
			tooltip: {
				displayColors: false,
			},
			dragData: {
				dragX: true,
				round: 0, //prevents any decimal places.
				showTooltip: true, // show the tooltip while dragging [default = true]
				
				//snap the value to the nearest value of 5
				magnet: {
					to: (value: any) => {
						let newX=Math.round(value.x/5)*5;
						let newY=Math.round(value.y/5)*5;
						value.x=newX;
						value.y=newY;
						//prevent the value from being 30 because if its 30
						//the icon cannot be seen and might leave users confused.
						if (value.y>25) {
							value.y=25
						}
						return value;
					},
				},
				
				//update the state of the TEF when the user finishes dragging the icon
				onDragEnd: function (
					e: any,
					datasetIndex: number,
					index: number,
					value: any
				) {
					//create the key used to edit the long short and left right
					//adjustments on the graph
					let PRRoundLeftRight = `PRRound${index + 1}GraphLeftRight`;
					let PRRoundLongShort = `PRRound${index + 1}GraphLongShort`;

					//update the values of the PR using dispatcher
					//value is an object with x and y keys
					props.TEFObjDispatcher({
						type: ActionEnum.updatePRCorrectionState,
						name: PRRoundLeftRight,
						payload: String(value.x),
						rowNumber: null,
					});
					props.TEFObjDispatcher({
						type: ActionEnum.updatePRCorrectionState,
						name: PRRoundLongShort,
						payload: String(value.y),
						rowNumber: null,
					});
				},
			},
		},
	};

	return (
		<div className="relative flex-1 grow">
			<div className="flex-1"></div>
			<div className="absolute bottom-0 left-0 flex">
				<Text c="red" fw={700}>
					Drag The points to adjust their values.
				</Text>
			</div>
			<div>
				<Scatter data={PRGraphData} options={PRGraphOptions} />
			</div>
		</div>
	);
};

export default TEFPRGraph;
