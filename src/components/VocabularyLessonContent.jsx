import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'

const VocabularyLessonContent = () => {
    const navigate = useNavigate();
    const [currentPart, setCurrentPart] = useState(0);
    const lessonContent = [
        {
            title: "Introduction to Vocabulary",
            content: "Welcome to the vocabulary lesson. Here we will explore various words and their meanings.",
            image: "https://www.freshersnow.com/wp-content/uploads/2022/03/Hexaware-Interview-Experience.png", // Placeholder image
            audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", // No audio for this part
        },
        {
            title: "Common Vocabulary Words",
            content: "Here are some common vocabulary words you will encounter.",
            image: "https://img.etimg.com/thumb/width-1600,height-900,imgsize-64472,resizemode-75,msid-64064121/news/company/corporate-trends/no-hike-for-hexaware-ceo.jpg", // Placeholder image
            audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", // Example audio
        },
        {
            title: "Advanced Vocabulary Terms",
            content: "Let's dive into some advanced vocabulary terms and their usage.",
            image: "https://maatramfoundation.com/storage/2022/06/sathyabama_logo.png", // Placeholder image
            audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", // No audio for this part
        },
        // Add more parts as needed
    ];

    const handleNext = () => {
        if (currentPart < lessonContent.length - 1) {
            setCurrentPart(currentPart + 1);
        }
    };

    const handlePrevious = () => {
        if (currentPart > 0) {
            setCurrentPart(currentPart - 1);
        }
    };

    const handleComplete = () => {
        // Logic to mark lesson as complete
        alert('Lesson completed!');
        navigate(`/lesson-completion/${currentPart}`); // Pass the current lesson index
    };
    

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold mb-4 text-center text-blue-600">{lessonContent[currentPart].title}</h1>
            <p className="text-lg mb-2">{lessonContent[currentPart].content}</p>
            {lessonContent[currentPart].image && (
                <img src={lessonContent[currentPart].image} alt="Lesson Visual" className="mb-4 w-full rounded shadow-md" />
            )}
            {lessonContent[currentPart].audio && (
                <audio controls className="mb-4">
                    <source src={lessonContent[currentPart].audio} type="audio/mpeg" />
                    Your browser does not support the audio tag.
                </audio>
            )}

            <div className="flex justify-between mt-4">
                <button
                    onClick={handlePrevious}
                    className="bg-gray-500 text-white p-2 rounded hover:bg-gray-600 transition duration-300"
                    disabled={currentPart === 0}
                >
                    Previous
                </button>
                <button
                    onClick={handleNext}
                    className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-300"
                    disabled={currentPart === lessonContent.length - 1}
                >
                    Next
                </button>
            </div>

            <div className="mt-6">
                <button
                    onClick={handleComplete}
                    className="bg-green-500 text-white p-2 rounded hover:bg-green-600 transition duration-300"
                >
                    Complete Lesson
                </button>
            </div>
        </div>
    );
};

export default VocabularyLessonContent;
