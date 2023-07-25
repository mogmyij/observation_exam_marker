import React, { Dispatch } from "react";
import { Action } from "../reducers/TEFCorrectionReducer";
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
	var point1 = { x: Number(props.PRCorrections["PRRound1GraphLeftRight"]), y: Number(props.PRCorrections["PRRound1GraphLongShort"]) };
	var point2 = { x: Number(props.PRCorrections["PRRound2GraphLeftRight"]), y: Number(props.PRCorrections["PRRound2GraphLongShort"]) };
	var point3 = { x: Number(props.PRCorrections["PRRound3GraphLeftRight"]), y: Number(props.PRCorrections["PRRound3GraphLongShort"]) };
	var point4 = { x: Number(props.PRCorrections["PRRound4GraphLeftRight"]), y: Number(props.PRCorrections["PRRound4GraphLongShort"]) };
	

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
				round: 0,
				showTooltip: true, // show the tooltip while dragging [default = true]
				onDragStart: function (e: any, element: any) {
					/*
				  // e = event, element = datapoint that was dragged
				  // you may use this callback to prohibit dragging certain datapoints
				  // by returning false in this callback
				  if (element.datasetIndex === 0 && element.index === 0) {
					// this would prohibit dragging the first datapoint in the first
					// dataset entirely
					return false
				  }
				  */
				},
				onDrag: function (e: any, datasetIndex: any, index: any, value: any) {
					/*     
				  // you may control the range in which datapoints are allowed to be
				  // dragged by returning `false` in this callback
				  if (value < 0) return false // this only allows positive values
				  if (datasetIndex === 0 && index === 0 && value > 20) return false 
				  */
				},
				onDragEnd: function (
					e: any,
					datasetIndex: any,
					index: any,
					value: any
				) {
					// you may use this callback to store the final datapoint value
					// (after dragging) in a database, or update other UI elements that
					// dependent on it
					console.log(PRGraphData.datasets[0].data[0]);
					console.log(PRGraphData.datasets[0].data[1]);
					console.log(PRGraphData.datasets[0].data[2]);
					console.log(PRGraphData.datasets[0].data[3]);
					console.log("test");
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
