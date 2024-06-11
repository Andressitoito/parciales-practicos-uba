"use client";
import Link from "next/link";
import { allQuestionsData } from "./segundo-cuatri/parciales.js";
import { final_data } from "./final/final_data.js";
import useStore from "../../../../store/store";
import { useEffect, useState } from "react";
import useCounterStore from "../../../../store/countersData.js";

export default function Parciales() {
	const setQuestionsData = useStore((state) => state.setQuestionsData);
	const { countersData, setCountersData } = useCounterStore();
	const [openIndex, setOpenIndex] = useState(null);
	const [fetchedData, setFetchedData] = useState(false);

	const handleButtonClick = (name) => {
		const questionData = allQuestionsData.find((item) => item.name === name);
		setQuestionsData(questionData);
		localStorage.setItem("name", name);
	};

	const handleButtonFinal = (name) => {
		const questionData = final_data.find((item) => item.name === name);
		setQuestionsData(questionData);
		localStorage.setItem("name", name);
	};

	const fetchData = async () => {
		try {
			const res = await fetch("/api/database/get_database_data");
			const data = await res.json();
			setCountersData(data.documents);
			setFetchedData(true);
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	};

	useEffect(() => {
		if (!fetchedData) {
			fetchData();
		}
	}, [fetchedData]);

	useEffect(() => {
		if (!countersData) {
			fetchData();
		}
	}, [countersData]);

	const toggleDiv = (index) => {
		if (openIndex === index) {
			setOpenIndex(null);
		} else {
			setOpenIndex(index);
		}
	};

	return (
		<>
			<h2 className="text-white text-3xl mb-4 text-center mt-20">Parciales</h2>

			<div className="flex flex-col items-center">
				{/* PRIMER CUATRIMESTRE INICIO */}
				{/* ///////////////////////////////////////////*/}
				<div className="w-48 mb-4" onClick={() => toggleDiv(1)}>
					<div className="cursor-pointer bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-lg transition duration-300 text-center disabled:opacity-50 cursor-not-allowed">
						1er cuatri
					</div>

					{openIndex === 1 && <div className="p-4 mt-2">...</div>}
				</div>
				{/* ///////////////////////////////////////////*/}
				{/* PRIMER CUATRIMESTRE FIN */}

				{/* ///////////////////////////////////////////*/}
				{/* SEGUNDO CUATRIMESTRE INICIO */}
				<div
					className="w-48 mb-2 flex flex-col items-center"
					onClick={() => toggleDiv(2)}
				>
					<div className="w-full cursor-pointer bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 mb-3 rounded-lg transition duration-300 text-center disabled:opacity-50 cursor-not-allowed text-center">
						2do cuatri
					</div>

					{openIndex === 2 && (
						<div>
							{allQuestionsData.map((item) => (
								<div key={item.name} className="mb-4">
									<Link
										className="cursor-pointer bg-gray-700 hover:bg-gray-500 text-white py-2 px-4 rounded-lg transition duration-300 text-center"
										href={{
											pathname: "/parciales/ICSE/segundo-cuatri",
										}}
										onClick={() => handleButtonClick(item.name)}
									>
										{item.name}
									</Link>
								</div>
							))}
						</div>
					)}
				</div>
				{/* ///////////////////////////////////////////*/}
				{/* SEGUNDO CUATRIMESTRE FIN */}

				{/* FINAL INICIO */}
				{/* ///////////////////////////////////////////*/}
				<div
					className="w-48 mb-2 flex flex-col items-center"
					onClick={() => toggleDiv(3)}
				>
					<div className="w-full cursor-pointer bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 mb-3 rounded-lg transition duration-300 text-center disabled:opacity-50 cursor-not-allowed text-center">
						Final
					</div>

					{openIndex === 3 && (
						<div>
							{final_data.map((item) => (
								<div key={item.name} className="mb-4">
									<Link
										className="cursor-pointer bg-gray-700 hover:bg-gray-500 text-white py-2 px-4 rounded-lg transition duration-300 text-center"
										href={{
											pathname: "/parciales/ICSE/final",
										}}
										onClick={() => handleButtonFinal(item.name)}
									>
										{item.name}
									</Link>
								</div>
							))}
						</div>
					)}
				</div>
			</div>
			{/* ///////////////////////////////////////////*/}
			{/* FINAL FIN */}
		</>
	);
}
