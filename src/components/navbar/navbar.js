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
					<span className="text-white font-bold text-sm md:text-base">Home</span>
				</Link>
			</div>

			{/* Lado derecho del navbar con los datos de los exámenes */}
			<div className="flex items-center">
				<div className="mr-4">
					<span className="text-green-300 text-xs md:text-base">Aprobados: </span>
					<span className="text-green-500 text-xs md:text-base">{countersData?.ok}</span>
				</div>

				<div className="mr-4">
					<span className="text-red-300 text-xs md:text-base">Mal: </span>
					<span className="text-red-500 text-xs md:text-base">{countersData?.fail}</span>
				</div>

				<div className="flex items-center">
					<span className="text-blue-300 text-xs md:text-base">General: </span>
					<span className="text-blue-500 text-xs md:text-base"> {countersData?.count}</span>
				</div>
			</div>

		</nav>
	);
};

export default Navbar;
