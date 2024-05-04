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
      }
    ],
  };

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [shuffledAnswers, setShuffledAnswers] = useState([]);
  const [answeredQuestions, setAnsweredQuestions] = useState(0); // Estado para contar las preguntas respondidas

  useEffect(() => {
    // Shuffle answers for each question when component mounts
    const shuffled = questionsData.questions.map(question => ({
      ...question,
      answers: question.answers.sort(() => Math.random() - 0.5)
    }));
    setShuffledAnswers(shuffled);
  }, []);

  useEffect(() => {
    // Actualizar el contador de preguntas respondidas
    const answered = Object.values(selectedAnswers).filter(answer => answer !== undefined && answer !== null && answer !== '').length;
    setAnsweredQuestions(answered);
  }, [selectedAnswers]);

  const calculateScore = () => {
    let newScore = 0;
    for (let i = 0; i < shuffledAnswers.length; i++) {
      const correctAnswer = shuffledAnswers[i].correctAnswer;
      if (selectedAnswers[i] === correctAnswer) {
        newScore++;
      }
    }
    return (newScore / shuffledAnswers.length * 10).toFixed(2); // Calcular puntaje en formato de nota con 2 decimales
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
    if (!submitted && answeredQuestions === shuffledAnswers.length) { // Solo se permite el envío si todas las preguntas han sido respondidas
      setScore(calculateScore());
      setSubmitted(true);
    }
  };

  const restartQuiz = () => {
    setSelectedAnswers({});
    setScore(0);
    setSubmitted(false);
    setAnsweredQuestions(0);
    // Reshuffle answers for each question
    const shuffled = questionsData.questions.map(question => ({
      ...question,
      answers: question.answers.sort(() => Math.random() - 0.5)
    }));
    setShuffledAnswers(shuffled);
  };

  return (
    <div className="max-w-md mx-auto my-8 p-6 bg-gray-800 text-gray-400 rounded-md shadow-md">
      {shuffledAnswers.map((question, index) => (
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
          <p className="text-lg font-semibold mb-2">Calificacion: {score}/10.00</p>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md focus:outline-none" onClick={restartQuiz}>
            Reiniciar Examen
          </button>
        </div>
      )}
      {!submitted && (
        <div className="mt-6">
          <button className={`px-4 py-2 bg-blue-500 text-white rounded-md focus:outline-none ${answeredQuestions !== shuffledAnswers.length && 'opacity-50 cursor-not-allowed'}`} onClick={handleSubmit} disabled={answeredQuestions !== shuffledAnswers.length}>
            Terminar Examen
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizComponent;
