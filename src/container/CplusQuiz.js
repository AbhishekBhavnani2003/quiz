import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import End from '../components/End';

export default function Example() {
    const [questions, setQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [answeredCorrectly, setAnsweredCorrectly] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [score, setScore] = useState(0); // New state for score
    const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);
    const [quizCompleted, setQuizCompleted] = useState(false); // State to track if quiz is completed



    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/question/givecplusquestion');
                setQuestions(response.data);
                setLoading(false);
            } catch (error) {
                setError('Error fetching questions');
                setLoading(false);
                console.error('Error fetching questions:', error);
            }
        };
        fetchQuestions();
    }, []);

    const handleAnswerSubmit = (selectedOption, index) => {
        const correctOption = questions[currentIndex].correctAnswer;
        if (selectedOption === correctOption) {
            setScore(score + 1); // Increment score
            setAnsweredCorrectly(true);
        } else {
            setAnsweredCorrectly(false);
        }
        setSelectedOptionIndex(index);
        setTimeout(() => {
            if (currentIndex + 1 < questions.length) {
                setCurrentIndex(currentIndex + 1);
            } else {
                setQuizCompleted(true); // Mark quiz as completed
            }
            setAnsweredCorrectly(null);
            setSelectedOptionIndex(null);
        }, 2000);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (quizCompleted) {
        return <End score={score} />;
    }

    return (
        <div className="bg-white py-24 sm:py-12">
            <div className="mt-10 mr-10 float-right">
                <p className="text-blue-900 text-lg">Your Score: <span className="font-bold">{score}</span></p>
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8 my-10">
                {currentIndex < questions.length && (
                    <div>
                        <div className="mx-auto max-w-2xl lg:text-center" style={{ marginTop: '30px' }}>
                            <h2 className="text-base font-semibold leading-7 text-indigo-600">Question {currentIndex + 1}</h2>
                            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl p-5">
                                {questions[currentIndex].question}
                            </p>
                        </div>
                        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl" style={{ marginTop: "30px" }}>
                            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                                {questions[currentIndex].options.map((option, index) => (
                                    <button key={index} className='mybutton2' onClick={() => handleAnswerSubmit(option, index)} disabled={answeredCorrectly !== null}>
                                        <div className="relative pl-16 mystyles">
                                            <dt className="text-base font-semibold leading-7 text-gray-900">
                                                <div className={`absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg ${selectedOptionIndex === index ? 'bg-green-200' : 'bg-gray-200'}`}>
                                                    <CheckCircleIcon className={`block h-6 w-6 ${selectedOptionIndex === index ? 'text-green-600' : 'text-gray-600'}`} aria-hidden="true" />
                                                </div>
                                            </dt>
                                            <dd className="mt-1 text-base leading-7 text-gray-600 mydesc" style={{ fontWeight: 'bold' }}>{option}</dd>
                                        </div>
                                    </button>
                                ))}
                            </dl>
                        </div>
                    </div>
                )}
                {answeredCorrectly !== null && (
                    <div style={{ marginTop: '20px' }}>
                        {answeredCorrectly ? (
                            <p>Your answer is correct! Loading next question...</p>
                        ) : (
                            <p>Sorry, your answer is incorrect. The correct answer is: {questions[currentIndex].correctAnswer}. Moving to the next question...</p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
