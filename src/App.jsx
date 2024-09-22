import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import PasswordRecovery from './components/PasswordRecovery';
import PasswordReset from './components/PasswordReset';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import VocabularyLessonDetail from './components/VocabularyLessonDetail';
import VocabularyLessonContent from './components/VocabularyLessonContent';
import LessonCompletion from './components/LessonCompletion';
import './App.css'

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/forgot-password" element={<PasswordRecovery />} />
                <Route path="/reset-password" element={<PasswordReset />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/vocabulary-lesson-detail" element={<VocabularyLessonDetail />} />
                <Route path="/vocabulary-lesson-content" element={<VocabularyLessonContent />} />
                <Route path="/lesson-completion/:currentLessonIndex" element={<LessonCompletion />} />


            </Routes>
        </Router>
    );
};

export default App;
