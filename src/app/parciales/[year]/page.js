"use client";
import { useState } from 'react';

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
  }




  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswerClick = (answer) => {
    if (!selectedAnswer) {
      setSelectedAnswer(answer);
      const isCorrect = answer === questionsData.questions[currentQuestionIndex].correctAnswer;
      if (isCorrect) {
        setScore(score + 1);
      }
      // Delay to show correctness of the answer before moving to the next question
      setTimeout(() => {
        setSelectedAnswer(null);
        if (currentQuestionIndex + 1 < questionsData.questions.length) {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
          setQuizCompleted(true);
        }
      }, 1000);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setQuizCompleted(false);
  };

  if (quizCompleted) {
    return (
      <div className="max-w-md mx-auto my-8 p-6 bg-white rounded-md shadow-md text-center">
        <h2 className="text-lg font-semibold mb-4">Quiz completed!</h2>
        <p className="mb-4">Your score: {score}/{questionsData.questions.length}</p>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md focus:outline-none" onClick={restartQuiz}>
          Restart Quiz
        </button>
      </div>
    );
  }

  const currentQuestion = questionsData.questions[currentQuestionIndex];

  return (
    <div className="max-w-md mx-auto my-8 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-lg font-semibold mb-4">Question {currentQuestionIndex + 1}</h2>
      <h3 className="mb-4">{currentQuestion.question}</h3>
      <div className="space-y-2">
        {currentQuestion.answers.map((answer, index) => (
          <button
            key={index}
            className={`block w-full px-4 py-2 text-white rounded-md focus:outline-none ${selectedAnswer === answer ? 'bg-blue-500' : 'bg-gray-300 hover:bg-gray-400'}`}
            onClick={() => handleAnswerClick(answer)}
            disabled={selectedAnswer !== null}
          >
            {answer}
          </button>
        ))}
      </div>
      <p className="mt-4">{selectedAnswer && (selectedAnswer === currentQuestion.correctAnswer ? 'Correct!' : 'Incorrect')}</p>
    </div>
  );
};

export default QuizComponent;



