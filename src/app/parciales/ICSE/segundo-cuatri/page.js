"use client";

import ScrollToTopButton from "@/components/scrollToTop/scrollToTop";
import React, { useState, useEffect } from "react";
import useCounterStore from "../../../../../store/countersData.js";
import useStore from "../../../../../store/store";
import { allQuestionsData } from "../parciales.js";
import { useRouter } from "next/navigation.js";

const QuizComponent = () => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);

  const { setCountersData } = useCounterStore();
  const { questionsData, setQuestionsData } = useStore();

  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  const router = useRouter();

  const updateNavbarData = async () => {
    try {
      const response = await fetch("/api/database/get_database_data");
      if (response.ok) {
        const data = await response.json();
        setCountersData(data.documents);
      } else {
        console.error("Error al obtener datos:", response.statusText);
      }
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
    }
  };

  const updateNavbarDataAsync = async () => {
    try {
      await updateNavbarData();
    } catch (error) {
      console.error("Error updating navbar data:", error);
    }
  };

  const shuffleArray = (array) => {
    // Fisher-Yates shuffle algorithm
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };


  useEffect(() => {
    if (questionsData && questionsData.questions) {
      const shuffled = shuffleArray([...questionsData.questions]);
      shuffled.forEach(question => {
        question.answers = shuffleArray([...question.answers]);
      });
      setShuffledQuestions(shuffled);
    }
  }, [questionsData]);

  const calculateScore = (selectedAnswers) => {
    let newScore = 0;

    // Obtener el nombre de la materia del almacenamiento local
    const name = localStorage.getItem("name");

    // Encontrar el conjunto de preguntas y respuestas correctas del usuario
    const questionsData = allQuestionsData.find(item => item.name === name);

    if (questionsData) {
      // Iterar sobre las preguntas del usuario y comparar con las preguntas y respuestas correctas
      Object.keys(selectedAnswers).forEach(question => {
        const userAnswer = selectedAnswers[question];
        const correctAnswer = questionsData.questions.find(q => q.question === question).correctAnswer;
        if (userAnswer === correctAnswer) {
          newScore++; // Incrementar el puntaje si la respuesta es correcta
        }
      });
    } else {
      console.error("No se encontraron datos de preguntas para el nombre:", name);
    }

    // Calcular el puntaje final
    return ((newScore / Object.keys(selectedAnswers).length) * 10).toFixed(2);
  };


  const handleAnswerClick = (question, answer) => {
    if (!submitted) {
      setSelectedAnswers((prevState) => {
        const updatedAnswers = {
          ...prevState,
          [question.question]: answer,
        };
        return updatedAnswers;
      });
    }
  };



  const updateCounterMongo = async (score) => {
    try {
      const data = {
        score,
        materia: "ICSE"
      };

      const response = await fetch("/api/database/actualizar_data_materia", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const responseData = await response.json();
        console.log("Examenes totales:", responseData);
      } else {
        console.error("Error al obtener datos:", response.statusText);
      }
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
    }
  };

  const handleSubmit = async () => {
    if (!submitted) {
      setIsRunning(false)
      setScore(calculateScore(selectedAnswers));
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
      const mongoScore = calculateScore(selectedAnswers)

      await updateCounterMongo(mongoScore);
      await updateNavbarData();
    }
  };

  const restartQuiz = () => {
    setSelectedAnswers({});
    setScore(0);
    setTime(0)
    setSubmitted(false);
    setIsRunning(true)
    const shuffled = shuffleArray([...questionsData.questions]);
    shuffled.forEach(question => {
      question.answers = shuffleArray([...question.answers]);
    });
    setShuffledQuestions(shuffled);
  };

  useEffect(() => {
    const fetchData = async () => {
      const name = localStorage.getItem("name");
      if (!questionsData || !questionsData.questions) {
        if (name == null) {
          router.push("/");
          return; // Return to prevent further execution
        }

        const foundQuestionData = allQuestionsData.find((item) => item.name === name);
        if (foundQuestionData) {
          setQuestionsData(foundQuestionData);
          await updateNavbarDataAsync();
        } else {
          console.error("Question data not found for the name:", name);
        }
      }
    };

    fetchData(); // Call fetchData directly in useEffect

    // Ensure dependencies are included
  }, [questionsData, setQuestionsData, router, updateNavbarDataAsync, setCountersData]);

  useEffect(() => {
    if (questionsData && questionsData.questions) {
      const shuffled = shuffleArray([...questionsData.questions]);
      shuffled.forEach(question => {
        question.answers = shuffleArray([...question.answers]);
      });
      setShuffledQuestions(shuffled);
    }
  }, [questionsData]);

  const allQuestionsAnswered = Object.keys(selectedAnswers).length === shuffledQuestions.length;


  const answeredQuestionsCount = Object.keys(selectedAnswers).length;
  const totalQuestionsCount = shuffledQuestions.length;


  const handleData = async () => {
    try {
      await updateCounterMongo()
      await updateNavbarData()
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
    }
  };

  /////////////////////////////////////
  // TIMER
  /////////////////////////////////////


  // Función para iniciar el temporizador cuando el componente se monta
  useEffect(() => {
    const timer = setInterval(() => {
      if (isRunning) {
        setTime(prevTime => prevTime + 1); // Incrementa el tiempo cada segundo
      }
    }, 1000);

    return () => clearInterval(timer); // Detiene el temporizador cuando el componente se desmonta
  }, [isRunning]);

  // Función para detener el temporizador cuando se hace submit
  useEffect(() => {
    if (!isRunning) {
      clearInterval();
    }
  }, [isRunning]);

  // Función para formatear el tiempo en minutos y segundos
  const formatTime = () => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
  };


  return (
    <div className=" mx-auto py-8 pb-10 p-6 bg-gray-800 text-gray-400 rounded-md shadow-md lg:w-2/3 xl:w-2/3 relative">
      <ScrollToTopButton />

      <div className="fixed top-12 left-0 right-0 mx-auto w-24 h-7 bg-gray-600 rounded-lg">
        <div
          className={`h-full rounded-lg ${answeredQuestionsCount === totalQuestionsCount ? 'bg-green-600' : 'bg-blue-800'}`}
          style={{ width: `${(answeredQuestionsCount / totalQuestionsCount) * 100}%`, outline: '2px solid gray' }}
        ></div>
        <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-around items-center text-white text-sm">
           {`${((answeredQuestionsCount / totalQuestionsCount) * 100).toFixed(0)}%`} {formatTime()}
        </div>
      </div>


      {/* <div className="mt-6 text-center">
    <p
     className={`text-5xl font-bold mb-10 ${score > 4 ? "text-green-500" : "text-red-500"
      }`}
    >
     mostrar datos
    </p>
    <button
     className="px-4 py-2 bg-blue-500 text-white rounded-md focus:outline-none mb-10"
     onClick={handleData}
    >
     Mostrar datos
    </button>
   </div>
 */}

      {submitted && (
        <div className="mt-6 text-center">
          <p
            className={`text-5xl font-bold mb-10 ${score > 4 ? "text-green-500" : "text-red-500"
              }`}
          >
            {score}/10.00
          </p>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md focus:outline-none mb-10"
            onClick={restartQuiz}
          >
            Reiniciar Examen
          </button>
        </div>
      )}


      {shuffledQuestions.map((question, index) => (
        <div key={index} className="mb-6">
          <h2 className="text-lg font-bold mb-2 text-blue-500 px-2 rounded-md">
            {question.question}
          </h2>
          <ul className="list-disc ml-6 space-y-1">
            {question.answers.map((answer, answerIndex) => (
              <li
                key={answerIndex}
                className={`${submitted
                  ? answer === question.correctAnswer
                    ? "px-1 rounded text-green-600 font-bold"
                    : selectedAnswers[question.question] === answer
                      ? "px-1 rounded text-red-700 font-bold"
                      : "font-normal"
                  : selectedAnswers[question.question] === answer
                    ? "text-blue-300 italic font-bold"
                    : "italic"
                  }`}
                onClick={() => handleAnswerClick(question, answer)}
                style={{ cursor: !submitted ? "pointer" : "default" }}
              >
                {submitted && answer === question.correctAnswer && selectedAnswers[question.question] === answer && (
                  <span className="text-sm text-red-500 pr-1">&#128077; </span>
                )}
                {answer}
                {submitted && answer === question.correctAnswer && selectedAnswers[question.question] === answer && (
                  <span className="text-sm text-red-500"> &#128077;</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}


      {!submitted && (
        <div className="mt-6 text-center">
          <button
            className={`px-4 py-2 text-white rounded-md focus:outline-none ${!allQuestionsAnswered ? "bg-gray-500" : "bg-green-500"
              }`}
            onClick={handleSubmit}
            disabled={!allQuestionsAnswered}
          >
            Terminar Examen
          </button>
        </div>
      )}
      <div style={{ marginBottom: "50px" }}></div>
    </div>
  );
};

export default QuizComponent;

