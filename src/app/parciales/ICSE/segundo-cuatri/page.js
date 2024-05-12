"use client";

import ScrollToTopButton from "@/components/scrollToTop/scrollToTop";
import React, { useState, useEffect } from "react";
import useCounterStore from "../../../../../store/countersData.js";
import useStore from "../../../../../store/store";
import { allQuestionsData } from "../parciales.js";

const QuizComponent = () => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);

  const { setCountersData } = useCounterStore();
  const { questionsData, setQuestionsData } = useStore();

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

  if (!questionsData || !questionsData.questions) {
    // Check if questionsData is null, undefined, or questions is null
    const name = localStorage.getItem("name");
    if (name == null) {
      router.push("/");
      return;
    }
  
    const foundQuestionData = allQuestionsData.find((item) => item.name === name);
    if (foundQuestionData) {
      setQuestionsData(foundQuestionData);
      updateNavbarDataAsync();
    } else {
      console.error("Question data not found for the name:", name);
    }
  }
  
  async function updateNavbarDataAsync() {
    try {
      await updateNavbarData();
    } catch (error) {
      console.error("Error updating navbar data:", error);
    }
  }

  const shuffleArray = (array) => {
    // Fisher-Yates shuffle algorithm
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const calculateScore = () => {
    let newScore = 0;
    for (let i = 0; i < Object.keys(selectedAnswers).length; i++) {
      const correctAnswer = questionsData.questions[i].correctAnswer;
      if (selectedAnswers[i] === correctAnswer) {
        newScore++;
      }
    }
    return ((newScore / Object.keys(selectedAnswers).length) * 10).toFixed(2);
  };

  const handleAnswerClick = (questionIndex, answer) => {
    if (!submitted) {
      setSelectedAnswers((prevState) => ({
        ...prevState,
        [questionIndex]: answer,
      }));
    }
  };

  const updateCounterMongo = async () => {
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
      setScore(calculateScore());
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
      await updateCounterMongo();
      await updateNavbarData();
    }
  };

  const restartQuiz = () => {
    setSelectedAnswers({});
    setScore(0);
    setSubmitted(false);
    const shuffled = shuffleArray([...questionsData.questions]);
    shuffled.forEach(question => {
      question.answers = shuffleArray([...question.answers]);
    });
    setShuffledQuestions(shuffled);
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

  const allQuestionsAnswered = Object.keys(selectedAnswers).length === shuffledQuestions.length;


  const handleData = async () => {
    try {
      await updateCounterMongo()
      await updateNavbarData()
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
    }
  };


  return (
    <div className=" mx-auto py-8 pb-10 p-6 bg-gray-800 text-gray-400 rounded-md shadow-md lg:w-2/3 xl:w-2/3">
      <ScrollToTopButton />


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
                className={`${submitted && answer === question.correctAnswer
                  ? "text-green-500 italic"
                  : selectedAnswers[index] === answer
                    ? "text-blue-300 italic"
                    : "italic"
                  }`}
                onClick={() => handleAnswerClick(index, answer)}
                style={{ cursor: !submitted ? "pointer" : "default" }}
              >
                {answer}
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

