import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

const Charts = ({ connectedWallet }) => {
	console.log(connectedWallet);

	const [state, setState] = useState({
		otherChart: {
			series: [0],
			options: {
				chart: {
					height: 350,
					type: "radialBar",
				},
				plotOptions: {
					radialBar: {
						startAngle: -135,
						endAngle: 135,

						hollow: {
							margin: 20,
							size: "70%",
							background: "#fff",

							image: undefined,
							imageOffsetX: 0,
							imageOffsetY: 0,
							position: "front",
							dropShadow: {
								enabled: true,
								top: 3,
								left: 0,
								blur: 4,
								opacity: 0.24,
							},
						},
						track: {
							background: "#fff",
							strokeWidth: "100%",
							margin: 0, // margin is in pixels
							dropShadow: {
								enabled: true,
								top: -3,
								left: 0,
								blur: 4,
								opacity: 0.35,
							},
						},

						dataLabels: {
							showOn: "always",
							name: {
								offsetY: 20,
								show: true,
								color: "#888",
								fontSize: "13px",
							},
							value: {
								formatter: function (val) {
									return "Empty";
								},
								offsetY: -10,
								color: "#111",
								fontSize: "15px",
								show: true,
							},
						},
					},
				},
				fill: {
					type: "image",

					image: {
						src: [
							"https://res.cloudinary.com/dltzp2gwx/image/upload/v1675954961/Screenshot_20230209_203229_scvyen.png",
						],
					},
				},
				stroke: {
					lineCap: "round",
				},
				labels: [""],
			},
		},
	});

	useEffect(() => {
		if (connectedWallet.name !== "") {
			const { score, name } = connectedWallet;
			setState({
				otherChart: {
					series: [score / 10],
					options: {
						chart: {
							height: 350,
							type: "radialBar",
						},
						plotOptions: {
							radialBar: {
								startAngle: -135,
								endAngle: 135,

								hollow: {
									margin: 20,
									size: "70%",
									background: "#fff",

									image: undefined,
									imageOffsetX: 0,
									imageOffsetY: 0,
									position: "front",
									dropShadow: {
										enabled: true,
										top: 3,
										left: 0,
										blur: 4,
										opacity: 0.24,
									},
								},
								track: {
									background: "#fff",
									strokeWidth: "100%",
									margin: 0, // margin is in pixels
									dropShadow: {
										enabled: true,
										top: -3,
										left: 0,
										blur: 4,
										opacity: 0.35,
									},
								},

								dataLabels: {
									showOn: "always",
									name: {
										offsetY: 20,
										show: true,
										color: "#888",
										fontSize: "13px",
									},
									value: {
										formatter: function (val) {
											return name;
										},
										offsetY: -10,
										color: "#111",
										fontSize: "15px",
										show: true,
									},
								},
							},
						},
						fill: {
							type: "image",

							image: {
								src: [
									"https://res.cloudinary.com/dltzp2gwx/image/upload/v1675954961/Screenshot_20230209_203229_scvyen.png",
								],
							},
						},
						stroke: {
							lineCap: "round",
						},
						labels: [" "],
					},
				},
			});
		}
	}, [connectedWallet]);

	return (
		<div>
			<Chart
				options={state?.otherChart?.options}
				series={state?.otherChart?.series}
				type="radialBar"
				width="280"
			/>
		</div>
	);
};

export default Charts;
