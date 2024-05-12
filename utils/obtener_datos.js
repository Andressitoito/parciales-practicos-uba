export async function obtener_datos() {
	try {
		const res = await fetch("/api/database/get_database_data");
		const data = await res.json();

		return data;
	} catch (error) {
		console.error("Error fetching data:", error);
	}
}
