import React, { useState } from 'react';
import { Check, X } from 'lucide-react';

const TypographyExercise = () => {
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const exercises = [
    { id: 1, text: "Design", font: "Times New Roman", correctAnswer: "Times New Roman" },
    { id: 2, text: "Créativité", font: "Arial", correctAnswer: "Arial" },
    { id: 3, text: "Typography", font: "Georgia", correctAnswer: "Garamond" },
    { id: 4, text: "Modernité", font: "sans-serif", correctAnswer: "Helvetica" }
  ];

  const fontOptions = ["Times New Roman", "Arial", "Garamond", "Helvetica", "Verdana", "Comic Sans MS"];

  const handleAnswerChange = (id, value) => {
    setAnswers({ ...answers, [id]: value });
  };

  const checkAnswers = () => {
    setShowResults(true);
  };

  const resetExercise = () => {
    setAnswers({});
    setShowResults(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">
            Exercice 1 : Identification de Typographies
          </h1>
          <p className="text-lg text-gray-600">
            Associez chaque mot affiché avec le nom de sa police
          </p>
        </div>

        {/* Main Exercise Grid */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {exercises.map((exercise) => (
              <div 
                key={exercise.id}
                className="border-2 border-gray-200 rounded-xl p-6 hover:border-indigo-300 transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-indigo-600 bg-indigo-100 px-3 py-1 rounded-full">
                    Mot {exercise.id}
                  </span>
                  {showResults && (
                    <span>
                      {answers[exercise.id] === exercise.correctAnswer ? (
                        <Check className="text-green-500 w-6 h-6" />
                      ) : (
                        <X className="text-red-500 w-6 h-6" />
                      )}
                    </span>
                  )}
                </div>

                {/* Word Display */}
                <div className="bg-gray-50 rounded-lg p-8 mb-6 text-center">
                  <p 
                    className="text-5xl font-normal"
                    style={{ fontFamily: exercise.font }}
                  >
                    {exercise.text}
                  </p>
                </div>

                {/* Dropdown Selection */}
                <select
                  value={answers[exercise.id] || ""}
                  onChange={(e) => handleAnswerChange(exercise.id, e.target.value)}
                  disabled={showResults}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 text-gray-700 bg-white disabled:bg-gray-100"
                >
                  <option value="">Sélectionnez une police...</option>
                  {fontOptions.map((font) => (
                    <option key={font} value={font}>
                      {font}
                    </option>
                  ))}
                </select>

                {showResults && answers[exercise.id] !== exercise.correctAnswer && (
                  <p className="mt-3 text-sm text-green-600 font-medium">
                    Correct : {exercise.correctAnswer}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center gap-4">
            {!showResults ? (
              <button
                onClick={checkAnswers}
                disabled={Object.keys(answers).length !== exercises.length}
                className="px-8 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed shadow-lg"
              >
                Vérifier mes réponses
              </button>
            ) : (
              <button
                onClick={resetExercise}
                className="px-8 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors shadow-lg"
              >
                Recommencer l'exercice
              </button>
            )}
          </div>

          {/* Results Summary */}
          {showResults && (
            <div className="mt-8 p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Résultat</h3>
              <p className="text-lg text-gray-700">
                Score : {Object.keys(answers).filter(id => answers[id] === exercises.find(e => e.id === parseInt(id)).correctAnswer).length} / {exercises.length}
              </p>
            </div>
          )}
        </div>

        {/* Reference Legend */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Liste des polices disponibles
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {fontOptions.map((font) => (
              <div key={font} className="p-3 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">{font}</p>
                <p className="text-xl" style={{ fontFamily: font }}>
                  Exemple
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypographyExercise;