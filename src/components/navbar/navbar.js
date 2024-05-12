import Link from "next/link";

const Navbar = ({ countersData }) => {
  console.log("countersData ", countersData);

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
          <span className="text-green-500">{countersData?.ok}</span> aprobados
        </div>
        <div className="text-red-300">
          <span className="text-red-500">{countersData?.fail}</span> desaprobados
        </div>
        <div className="ml-4 text-blue-300">
          <span className="text-blue-500">{countersData?.count}</span> totales
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

export async function getServerSideProps(context) {
  try {
   console.log("tryrrr to get data")
    const res = await fetch("/api/database/get_database_data");
    const data = await res.json();

    console.log("data ", data)
    return {
      props: {
        countersData: data.documents,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        countersData: null,
      },
    };
  }
}
