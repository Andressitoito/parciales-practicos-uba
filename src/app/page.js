// pages/parciales/index.js
"use client";

import Link from "next/link";
import useCounterStore from "../../store/countersData.js";
import { useEffect, useState } from "react";

export default function Parciales() {
	const { countersData, setCountersData } = useCounterStore();
	const [fetchedData, setFetchedData] = useState(false); // Track whether data has been fetched

	const fetchData = async () => {
		try {
			const res = await fetch("/api/database/get_database_data");
			const data = await res.json();
			setCountersData(data.documents);
			setFetchedData(true); // Set fetchedData to true after data is fetched
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	};

	useEffect(() => {
		if (!fetchedData) {
			fetchData();
		}
	}, [fetchedData]); // Only re-run effect if fetchedData changes

	console.log("countersData ", countersData);

	const years = [2024];
	return (
		<>
			<div className="flex flex-col items-center justify-center h-screen">
				<h2 className="text-white text-5xl mb-8 font-bold">
					Practica Examenes ICSE
				</h2>
				{years.map((year) => (
					<div key={year + 1} className="w-48 mb-4">
						<Link href={`/parciales/ICSE`}>
							<div className="cursor-pointer bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-lg transition duration-300 text-center">
								{year}
							</div>
						</Link>
					</div>
				))}
			</div>
		</>
	);
}
