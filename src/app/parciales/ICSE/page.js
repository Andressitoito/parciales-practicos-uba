import Link from "next/link";

export default function Parciales({ params }) {
	const years = [2022, 2023, 2024];

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
		</>
	);
}
