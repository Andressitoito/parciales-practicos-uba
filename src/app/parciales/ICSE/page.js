"use client"
import ListaBotones from "@/components/listaBotones/listaBotones";
import ToggleButton from "@/components/toggleButton/toggleButton";
import Link from "next/link";

import { useRouter } from 'next/navigation';


const questionsData = [
	{
		year: 2023,
		name: "2023/1",
			text: "Texto 1 - Este es un texto grande...",
			questions: [
					{
							question: "Pregunta 1",
							answers: ["Respuesta 1", "Respuesta 2", "Respuesta 3"],
							correctAnswer: "Respuesta 1"
					},
					// Agrega más preguntas según sea necesario
			]
	},
	{
		year: 2023,
			name: "2023/2",
			text: "Texto 2 - Este es otro texto grande...",
			questions: [
					{
							question: "Pregunta 1",
							answers: ["Respuesta 1", "Respuesta 2", "Respuesta 3"],
							correctAnswer: "Respuesta 2"
					},
					// Agrega más preguntas según sea necesario
			]
	},
	// Agrega más objetos para los otros textos
];


export default function Parciales() {


	const router = useRouter();

	const handleButtonClick = (name) => {
		router.push(`/parciales/ICSE/segundo-cuatri`, { questionsData: questionsData.find(item => item.name === name) });
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
				{questionsData.map((item) => (
					<div key={item.name} className="mb-4">
						<button
							onClick={() => handleButtonClick(item.name)}
							className="cursor-pointer bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-lg transition duration-300 text-center"
						>
							{item.year} {item.name}
						</button>
					</div>
				))}
			</div>



			<ToggleButton />
		</>
	);
}
