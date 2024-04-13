import React, { useState } from 'react';
import HtmlQuiz from '../container/HtmlQuiz';
import CssQuiz from '../container/CssQuiz';
import JsQuiz from '../container/JsQuiz';
import PythonQuiz from '../container/PyhtonQuiz';
import JavaQuiz from '../container/JavaQuiz';
import CplusQuiz from '../container/CplusQuiz';
import ReactQuiz from '../container/ReactQuiz';
import PhpQuiz from '../container/PhpQuiz';
import SqlQuiz from '../container/SqlQuiz';

function Home() {
  const [currentQuiz, setCurrentQuiz] = useState(null);

  const handleStartQuiz = (quizType) => {
    setCurrentQuiz(quizType);
  };

  switch (currentQuiz) {
    case 'HTML':
      return <HtmlQuiz />;
    case 'CSS':
      return <CssQuiz />;
    case 'JavaScript':
      return <JsQuiz />;
      case 'Python' :
        return <PythonQuiz/>
      case 'Java' :
        return <JavaQuiz/>
      case 'C ++' : 
        return <CplusQuiz/>
      case 'React' : 
        return <ReactQuiz/>
      case 'PHP' : 
        return <PhpQuiz/>
      case 'SQL' : 
        return <SqlQuiz/>
    default:
      const cardData = [
        { title: "HTML", description: "Foundation of web design, markup language for structuring web pages.", imageSrc: require("../images/html-logo.png") },
        { title: "CSS", description: "Styles web content, enhances HTML presentation, defining layout, colors, fonts, and more.", imageSrc: require("../images/css-logo.png") },
        { title: "JavaScript", description: "Adds interactivity, dynamic behavior to web pages, crucial for front-end development.", imageSrc: require("../images/javascript-logo.png") },
        { title: "Python", description: "Versatile, high-level language, used for web development, data analysis, AI, and automation.", imageSrc: require("../images/python.png") },
        { title: "Java", description: "Powerful, object-oriented language for building scalable, cross-platform applications.", imageSrc: require("../images/java.png") },
        { title: "C ++", description: "Efficient, versatile language for system software, game development, and performance-critical applications.", imageSrc: require("../images/c.png") },
        { title: "React", description: "JavaScript library for building user interfaces, facilitates building interactive components.", imageSrc: require("../images/react.png") },
        { title: "PHP", description: "Server-side scripting language, widely used for web development, dynamic content generation.", imageSrc: require("../images/php.png") },
        { title: "SQL", description: "Standard language for managing relational databases, retrieving, updating, and manipulating data efficiently.", imageSrc: require("../images/mysql.png") }

      ];

      return (
        <div className="container mx-auto px-4" style={{ marginTop: "30px" }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {cardData.map((card, index) => (
              <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg flex flex-col" style={{ margin: "20px" }}>
                <img className="w-full h-auto" src={card.imageSrc} alt={card.title} />
                <div className="px-6 py-4 flex-grow">
                  <div className="font-bold text-xl mb-2">{card.title}</div>
                  <p className="text-gray-700 text-base">{card.description}</p>
                </div>
                <div className="flex justify-center pb-4">
                  <button onClick={() => handleStartQuiz(card.title)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    Start
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
  }
}

export default Home;
