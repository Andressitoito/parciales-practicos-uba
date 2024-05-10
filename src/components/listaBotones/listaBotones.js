import React from "react";

const ListaBotones = ({ dataArray }) => {


  const questionsData = [
    { id: 1, title: "Pregunta 1", url: "/pregunta1" },
    { id: 2, title: "Pregunta 2", url: "/pregunta2" },
    // Agrega más objetos según sea necesario
  ];
 
  return (
    <div>
      {questionsData.map((item, index) => (
        <div key={index} className="mb-4">
          <button
            className="cursor-pointer bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-lg transition duration-300 text-center"
            onClick={() => handleClick(item)}
          >
            {item.buttonLabel}
          </button>
        </div>
      ))}
    </div>
  );
};

const handleClick = (item) => {
  // Perform any action you need when a button is clicked, using data from the corresponding object
  // For example, you can navigate to a page with data from the clicked item
  // You can use React Router for navigation or any other navigation method you prefer
  // Example: history.push(`/parciales/${item.curso}/${item.cuatri}`);
};

export default ListaBotones;

