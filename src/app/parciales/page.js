import Link from 'next/link';

export default function Parciales() {
  return (
    <>
      <h2 className="text-white text-3xl mb-4">Parciales</h2>
      <div className="flex flex-col items-center">
        <div className="w-48 mb-4">
          <Link href="/parciales/2022">
            <div className="cursor-pointer bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-lg transition duration-300 text-center">
              2022
            </div>
          </Link>
        </div>
        <div className="w-48 mb-4">
          <Link href="/parciales/2023">
            <div className="cursor-pointer bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-lg transition duration-300 text-center">
              2023
            </div>
          </Link>
        </div>
        <div className="w-48 mb-4">
          <Link href="/parciales/2024">
            <div className="cursor-pointer bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-lg transition duration-300 text-center">
              2024
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
