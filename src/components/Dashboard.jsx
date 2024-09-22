import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '../App.css'

const Dashboard = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [difficulty, setDifficulty] = useState({
        beginner: false,
        intermediate: false,
        advanced: false,
    });

    const lessons = [
        { title: 'Lesson 1', description: 'Intro to Vocabulary', difficulty: 'Beginner' },
        { title: 'Lesson 2', description: 'Intermediate Vocabulary', difficulty: 'Intermediate' },
        { title: 'Lesson 3', description: 'Advanced Vocabulary', difficulty: 'Advanced' },
        // Add more lessons as needed
    ];

    const filteredLessons = lessons.filter((lesson) => {
        const matchesSearch = lesson.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesDifficulty =
            (difficulty.beginner && lesson.difficulty === 'Beginner') ||
            (difficulty.intermediate && lesson.difficulty === 'Intermediate') ||
            (difficulty.advanced && lesson.difficulty === 'Advanced') ||
            (!difficulty.beginner && !difficulty.intermediate && !difficulty.advanced);
        return matchesSearch && matchesDifficulty;
    });

    const handleDifficultyChange = (level) => {
        setDifficulty((prev) => ({ ...prev, [level]: !prev[level] }));
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Vocabulary Lessons</h1>

            <div className="mb-6">
                <input
                    type="text"
                    placeholder="Search lessons..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="border border-gray-300 p-3 rounded w-full focus:outline-none focus:ring focus:ring-blue-300"
                />
            </div>

            <div className="mb-6">
                <h2 className="font-semibold mb-2">Filter by Difficulty:</h2>
                <div className="flex space-x-4">
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            checked={difficulty.beginner}
                            onChange={() => handleDifficultyChange('beginner')}
                            className="mr-2"
                        />
                        <span className="text-gray-700">Beginner</span>
                    </label>
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            checked={difficulty.intermediate}
                            onChange={() => handleDifficultyChange('intermediate')}
                            className="mr-2"
                        />
                        <span className="text-gray-700">Intermediate</span>
                    </label>
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            checked={difficulty.advanced}
                            onChange={() => handleDifficultyChange('advanced')}
                            className="mr-2"
                        />
                        <span className="text-gray-700">Advanced</span>
                    </label>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredLessons.length > 0 ? (
                    filteredLessons.map((lesson, index) => (
                        <div key={index} className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
                            <h3 className="font-bold text-xl mb-2 text-blue-500">{lesson.title}</h3>
                            <p className="text-gray-700 mb-2">{lesson.description}</p>
                            <p className="text-sm text-gray-500 mb-4">Difficulty: {lesson.difficulty}</p>
                            <Link to={{
                                pathname: "/vocabulary-lesson-detail",
                                state: { title: lesson.title, description: lesson.description, difficulty: lesson.difficulty }
                            }}>
                                <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-300">
                                    Start Lesson
                                </button>
                            </Link>
                        </div>
                    ))
                ) : (
                    <p className="col-span-1 md:col-span-2 text-center text-gray-500">No lessons found.</p>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
