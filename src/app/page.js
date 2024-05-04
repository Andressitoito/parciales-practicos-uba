import React from 'react';
import Link from 'next/link';

export default function Parciales() {

 const years = [2024]
 return (
  <>
   <div className="flex flex-col items-center justify-center h-screen">
    <h2 className="text-white text-5xl mb-8 font-bold">Practica Examenes ICSE</h2>
    {years.map(year => (
     <div className="w-48 mb-4">
      <Link href={`/parciales/${year}`}>
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