"use client";
import ToggleButton from "@/components/toggleButton/toggleButton";
import Link from "next/link";
import { allQuestionsData } from "./parciales";
import useStore from "../../../../store/store";

export default function Parciales() {
	const setQuestionsData = useStore((state) => state.setQuestionsData);

	const handleButtonClick = (name) => {
		const questionData = allQuestionsData.find((item) => item.name === name);
		setQuestionsData(questionData);
	};

	return (
		<>
			<h2 className="text-white text-3xl mb-4 text-center mt-20">Parciales</h2>

			<div className="flex flex-col items-center">
				<div className="w-48 mb-4">
					<Link href="">
						<div className="cursor-pointer bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-lg transition duration-300 text-center disabled:opacity-50 cursor-not-allowed">
							1er cuatri
						</div>
					</Link>
				</div>
				<div className="w-48 mb-4">
					<Link href="/parciales/ICSE/segundo-cuatri">
						<div className="cursor-pointer bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-lg transition duration-300 text-center">
							2do cuatri
						</div>
					</Link>
				</div>
				<div className="w-48 mb-4">
					<Link href="">
						<div
							disabled
							className="cursor-pointer bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-lg transition duration-300 text-center disabled:opacity-50 cursor-not-allowed"
						>
							Final
						</div>
					</Link>
				</div>
			</div>

			<div>
				{allQuestionsData.map((item) => (
					<div key={item.name} className="mb-4">
						<Link
							className="cursor-pointer bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-lg transition duration-300 text-center"
							href={
								{
									pathname: '/parciales/ICSE/segundo-cuatri',
								}
							}
							onClick={() => handleButtonClick(item.name)}
						>
							{item.name}
						</Link>
					</div>
				))}
			</div>

			<ToggleButton />
		</>
	);
}
