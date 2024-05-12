import React, { useState } from "react";

const ToggleButton = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const questionsData = [
    { id: 1, title: "Pregunta 1", url: "/pregunta1" },
    { id: 2, title: "Pregunta 2", url: "/pregunta2" },
    // Agrega más objetos según sea necesario
  ];

  return (
    <div>
      <div className="mb-4">
        <div
          className={`cursor-pointer ${
            isActive ? "bg-gray-700" : "bg-gray-800"
          } hover:bg-gray-700 text-white py-2 px-4 rounded-lg transition duration-300 text-center`}
          onClick={handleClick}
        >
          Toggle Button
        </div>
      </div>
      {isActive && (
        <div className="flex">
          {questionsData.map((question) => (
            <div key={question.id} className="w-48 mb-4">
              <a href={question.url}>
                <div className="cursor-pointer bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-lg transition duration-300 text-center">
                  {question.title}
                </div>
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ToggleButton;
