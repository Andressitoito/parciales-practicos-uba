"use client";

import Link from "next/link";
import useCounterStore from "../../../store/countersData.js";

const Navbar = () => {
	const { countersData } = useCounterStore();

	return (
		<nav className="flex items-center justify-between bg-gray-800 p-3 px-6">
			{/* Lado izquierdo del navbar */}
			<div className="ml-5">
				<Link href="/">
					<span className="text-white font-bold">Home</span>
				</Link>
			</div>

			{/* Lado derecho del navbar con los datos de los exámenes */}
			<div className="flex items-center">
				<div className="mr-4 text-green-300">
					<span className="text-green-500">{countersData?.ok}</span> Aprobados
				</div>
				<div className="text-red-300">
					<span className="text-red-500">{countersData?.fail}</span> Desaprobados
				</div>
				<div className="ml-4 text-blue-300">
					<span className="text-blue-500">{countersData?.count}</span> Totales
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
