import React from 'react';
import { useNavigate } from 'react-router-dom';

const LessonCompletion = ({ currentLessonIndex, totalLessons }) => {
    const navigate = useNavigate();

    const handleReview = () => {
        navigate(`/vocabulary-lesson-detail/${currentLessonIndex}`); // Adjust based on your routing
    };

    const handleNextLesson = () => {
        if (currentLessonIndex < totalLessons - 1) {
            navigate(`/vocabulary-lesson-detail/${currentLessonIndex + 1}`); // Adjust for next lesson
        } else {
            navigate('/dashboard'); // Redirect to dashboard if no more lessons
        }
    };

    const handleReturnToLessons = () => {
        navigate('/dashboard');
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold mb-4 text-center text-green-600">Congratulations!</h1>
            <p className="text-lg mb-6 text-center">You have successfully completed the lesson!</p>
            
            <div className="flex space-x-4">
                <button
                    onClick={handleReview}
                    className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-300"
                >
                    Review Lesson
                </button>
                <button
                    onClick={handleNextLesson}
                    className="bg-green-500 text-white p-2 rounded hover:bg-green-600 transition duration-300"
                >
                    Next Lesson
                </button>
                <button
                    onClick={handleReturnToLessons}
                    className="bg-gray-500 text-white p-2 rounded hover:bg-gray-600 transition duration-300"
                >
                    Return to Lessons
                </button>
            </div>
        </div>
    );
};

export default LessonCompletion;
