import "chart.js/auto";
import {
	Chart as ChartJS,
	LinearScale,
	PointElement,
	LineElement,
	Tooltip,
	ChartOptions,
} from "chart.js";
import { Scatter } from "react-chartjs-2";
import { Text } from "@mantine/core";

const TEFPRGraph = () => {
	ChartJS.register(LinearScale, PointElement, LineElement);
	var pointStyleImage = new Image(30, 60);
	pointStyleImage.src = "PR_Round_1.png";
	console.log(pointStyleImage);

	const PRGraphData = {
		datasets: [
			{
				label:"PR Observation",
				data: [{ x: 10, y: 0 }],
			},
		],
	};

	const PRGraphOptions: object = {
		pointStyle: pointStyleImage,
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
				min: -40,
				max: 40,
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
		},
	};

	return (
		<div className="relative flex-1 grow">
			<div className="flex-1"></div>
			<div className="absolute bottom-0 left-0">
				<Text>Round:1</Text>
			</div>
			<div>
				<Scatter data={PRGraphData} options={PRGraphOptions} />
			</div>
		</div>
	);
};

export default TEFPRGraph;
