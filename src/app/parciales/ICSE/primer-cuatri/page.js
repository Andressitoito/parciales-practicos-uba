"use client"

import React, { useState, useEffect } from 'react';

const QuizComponent = () => {
  const questionsData = {
    questions: [
      {
        question: "¿Qué es una criptomoneda?",
        answers: [
          "Una moneda digital descentralizada.",
          "Un tipo de moneda virtual.",
          "Una forma de inversión en línea.",
          "Un sistema de pago electrónico"
        ],
        correctAnswer: "Una moneda digital descentralizada."
      },
      {
        question: "¿Cuál es el nombre del primer exchange de criptomonedas descentralizado?",
        answers: [
          "Binance",
          "Coinbase",
          "Uniswap",
          "Kraken"
        ],
        correctAnswer: "Uniswap"
      },
      // Agregar más preguntas aquí
    ],
  };

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [shuffledQuestions, setShuffledQuestions] = useState([]); // Estado para almacenar preguntas en orden aleatorio

  useEffect(() => {
    // Barajar preguntas cuando el componente se monta
    const shuffled = shuffleArray(questionsData.questions);
    setShuffledQuestions(shuffled);
  }, []);

  const shuffleArray = array => {
    // Algoritmo de Fisher-Yates para barajar el array
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const calculateScore = () => {
    let newScore = 0;
    for (let i = 0; i < shuffledQuestions.length; i++) {
      const correctAnswer = shuffledQuestions[i].correctAnswer;
      if (selectedAnswers[i] === correctAnswer) {
        newScore++;
      }
    }
    return (newScore / shuffledQuestions.length * 10).toFixed(2); // Calcular puntaje en formato de nota con 2 decimales
  };

  const handleAnswerClick = (questionIndex, answer) => {
    if (!submitted) {
      setSelectedAnswers(prevState => ({
        ...prevState,
        [questionIndex]: answer
      }));
    }
  };

  const handleSubmit = () => {
    if (!submitted) {
      setScore(calculateScore());
      setSubmitted(true);
    }
  };

  const restartQuiz = () => {
    setSelectedAnswers({});
    setScore(0);
    setSubmitted(false);
    // Barajar preguntas nuevamente
    const shuffled = shuffleArray(questionsData.questions);
    setShuffledQuestions(shuffled);
  };

  return (
    <div className="max-w-md mx-auto my-8 p-6 bg-gray-800 text-gray-400 rounded-md shadow-md">
      {shuffledQuestions.map((question, index) => (
        <div key={index} className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Pregunta {index + 1}</h2>
          <h3 className="mb-2">{question.question}</h3>
          <ul className="list-disc ml-6 space-y-1">
            {question.answers.map((answer, answerIndex) => (
              <li
                key={answerIndex}
                className={`${submitted && answer === question.correctAnswer ? 'text-green-500' : selectedAnswers[index] === answer ? 'text-blue-500' : ''}`}
                onClick={() => handleAnswerClick(index, answer)}
                style={{ cursor: !submitted ? 'pointer' : 'default' }}
              >
                {answer}
              </li>
            ))}
          </ul>
        </div>
      ))}
      {submitted && (
        <div className="mt-6">
          <p className="text-lg font-semibold mb-2">Tu puntaje: {score}</p>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md focus:outline-none" onClick={restartQuiz}>
            Reiniciar Examen
          </button>
        </div>
      )}
      {!submitted && (
        <div className="mt-6">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md focus:outline-none" onClick={handleSubmit}>
            Terminar Examen
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizComponent;
