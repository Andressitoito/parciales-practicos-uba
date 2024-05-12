"use client";
import Link from "next/link";
import { allQuestionsData } from "./parciales";
import useStore from "../../../../store/store";
import { useState } from "react";

export default function Parciales() {
	const setQuestionsData = useStore((state) => state.setQuestionsData);

	const handleButtonClick = (name) => {
		const questionData = allQuestionsData.find((item) => item.name === name);
		setQuestionsData(questionData);
	};

	const [openIndex, setOpenIndex] = useState(null);

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

					{openIndex === 1 && <div className="p-4 mt-2">proximamente...</div>}
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
				<div className="w-48 mb-4" onClick={() => toggleDiv(3)}>
					<div className="cursor-pointer bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-lg transition duration-300 text-center disabled:opacity-50 cursor-not-allowed">
						Final
					</div>

					{openIndex === 3 && (
						<div className="p-4 mt-2">Todavia falta para el final...</div>
					)}
				</div>
			</div>
			{/* ///////////////////////////////////////////*/}
			{/* FINAL FIN */}
		</>
	);
}
