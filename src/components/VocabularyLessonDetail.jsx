import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const VocabularyLessonDetail = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { title, description, difficulty } = location.state || {};

    const handleStartLesson = () => {
        // Redirect to the Vocabulary Lesson Content Screen
        navigate('/vocabulary-lesson-content'); // Make sure to create this route
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold mb-4 text-center text-blue-600">Intro to Vocabulary{title}</h1>
            <p className="text-lg mb-2"><strong>Difficulty Level:</strong> Beginner{difficulty}</p>
            <p className="text-gray-700 mb-4">A strong vocabulary is the foundation of effective communication. It allows you to express your thoughts and ideas clearly, comprehend information more deeply, and engage in meaningful conversations. By expanding your vocabulary, you open doors to new knowledge, experiences, and opportunities. Whether you're a student, a professional, or simply someone looking to improve your language skills, investing time in vocabulary development is a worthwhile endeavor.








ṣ{description}</p>

            <div className="mt-6">
                <button
                    onClick={handleStartLesson}
                    className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-300"
                >
                    Start Lesson
                </button>
            </div>
        </div>
    );
};

export default VocabularyLessonDetail;
