"use client"

import { questionsData } from './preguntas';
import React, { useState, useEffect } from 'react';

const QuizComponent = () => {

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [shuffledQuestions, setShuffledQuestions] = useState([]); // Estado para almacenar preguntas en orden aleatorio

  useEffect(() => {
    // Barajar preguntas y respuestas cuando el componente se monta
    const shuffled = shuffleArray(questionsData.questions.map(question => ({
      ...question,
      answers: shuffleArray(question.answers)
    })));
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
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const restartQuiz = () => {
    setSelectedAnswers({});
    setScore(0);
    setSubmitted(false);
    // Barajar preguntas y respuestas nuevamente
    const shuffled = shuffleArray(questionsData.questions.map(question => ({
      ...question,
      answers: shuffleArray(question.answers)
    })));
    setShuffledQuestions(shuffled);
  };

  const allQuestionsAnswered = Object.keys(selectedAnswers).length === shuffledQuestions.length;

  return (
    <div className=" mx-auto my-8 p-6 bg-gray-800 text-gray-400 rounded-md shadow-md md:w-3/4 lg:w-2/3 xl:w-2/3">
      {submitted && (
        <div className="mt-6 text-center">
          <p className={`text-5xl font-bold mb-10 ${score > 4 ? 'text-green-500' : 'text-red-500'}`}>{score}/10.00</p>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md focus:outline-none mb-10" onClick={restartQuiz}>
            Reiniciar Examen
          </button>
        </div>
      )}
      {shuffledQuestions.map((question, index) => (
        <div key={index} className="mb-6">
          <h2 className="text-lg font-bold mb-2 text-blue-500 px-2 rounded-md">{question.question}</h2>
          <ul className="list-disc ml-6 space-y-1">
            {question.answers.map((answer, answerIndex) => (
              <li
                key={answerIndex}
                className={`${submitted && answer === question.correctAnswer ? 'text-green-500 italic' : selectedAnswers[index] === answer ? 'text-blue-300 italic' : 'italic'}`}
                onClick={() => handleAnswerClick(index, answer)}
                style={{ cursor: !submitted ? 'pointer' : 'default' }}
              >
                {answer}
              </li>
            ))}
          </ul>
        </div>
      ))}
      {!submitted && (
        <div className="mt-6">
          <button className={`px-4 py-2 text-white rounded-md focus:outline-none ${!allQuestionsAnswered ? "bg-gray-500" : "bg-green-500"}`} onClick={handleSubmit} disabled={!allQuestionsAnswered}>
            Terminar Examen
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizComponent;
