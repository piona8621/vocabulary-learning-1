





import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import vocabularyData from "../Data/japanese_vocabularies_extended (1).json";
import { Helmet } from "react-helmet-async";

const Lesson = () => {
  const { lesson_no } = useParams();
  const navigate = useNavigate();
  const [selectedWord, setSelectedWord] = useState(null);

  // Filter vocabulary based on the lesson number
  const filteredVocabularies = vocabularyData.filter(
    (vocab) => vocab.lesson_no === parseInt(lesson_no)
  );

  // Handle the case where no vocabularies are found for this lesson
  if (filteredVocabularies.length === 0) {
    return <h2>No vocabularies found for Lesson {lesson_no}</h2>;
  }

  // Function to determine card color based on difficulty
  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "easy":
        return "bg-green-200";
      case "medium":
        return "bg-yellow-200";
      case "difficult":
        return "bg-red-200";
      default:
        return "bg-gray-200";
    }
  };

  // Function to handle pronunciation
  const pronounceWord = (word) => {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = "ja-JP"; // Japanese pronunciation
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <Helmet>
        <title>Lingo Bingo | Lesson {lesson_no}</title>
      </Helmet>
      {/* Page Title */}
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10">Lesson {lesson_no}</h1>

      {/* Vocabulary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-10">
        {filteredVocabularies.map((vocab) => (
          <div
            key={vocab.id}
            className={`p-4 rounded-lg shadow-lg ${getDifficultyColor(vocab.difficulty)} cursor-pointer`}
            onClick={() => pronounceWord(vocab.word)} // Trigger pronunciation when card is clicked
          >
            <h2 className="text-lg sm:text-xl font-semibold">{vocab.word}</h2>
            <p><strong>Meaning:</strong> {vocab.meaning}</p>
            <p><strong>Pronunciation:</strong> {vocab.pronunciation}</p>
            <p><strong>Part of Speech:</strong> {vocab.part_of_speech}</p>
            <button
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg w-full sm:w-auto"
              onClick={(e) => {
                e.stopPropagation(); // Prevent card click event
                setSelectedWord(vocab);
              }}
              aria-label={`More information about ${vocab.word}`}
            >
              When to Say
            </button>
          </div>
        ))}
      </div>

      {/* Back to Lessons Button */}
      <div className="mt-10 flex justify-center">
        <button
          onClick={() => navigate("/learning")}
          className="px-6 py-3 bg-gray-800 text-white rounded-lg"
          aria-label="Go back to the lessons page"
        >
          Back to Lessons
        </button>
      </div>

      {/* Modal for When to Say */}
      {selectedWord && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          role="dialog"
          aria-labelledby="modal-title"
          aria-hidden={selectedWord === null}
        >
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
            <h2 id="modal-title" className="text-2xl font-bold mb-4">{selectedWord.word}</h2>
            <p><strong>Meaning:</strong> {selectedWord.meaning}</p>
            <p><strong>When to Say:</strong> {selectedWord.when_to_say}</p>
            <p><strong>Example:</strong> {selectedWord.example}</p>
            <button
              className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg"
              onClick={() => setSelectedWord(null)}
              aria-label="Close modal"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Lesson;

