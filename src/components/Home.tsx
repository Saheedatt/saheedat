import { useState, useEffect } from "react";
import Navigation from "./Navbar";

const Home = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Hi there! My name is Saheedat.";

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="home flex flex-col items-center justify-center min-h-screen p-4 text-center">
      <div className="absolute top-0 left-0 right-0 flex justify-center">
        <Navigation />
      </div>
      <img
        src="/flork.png"
        alt="Profile Picture"
        className="w-64 h-64 mb-6 hover:scale-105 transition-transform duration-300"
      />

      <h1 className="text-4xl md:text-6xl font-bold mb-6 text-rose">
        {displayText}
        <span className="animate-pulse">|</span>
      </h1>
      <div className="w-64 h-0.5 bg-gray-500 mb-8"></div>
      <div className="flex gap-6">
        <a
          href="/cv.pdf"
          target="_blank"
          rel="noreferrer"
          className="text-gray-700 hover:text-pinkish"
        >
          CV
        </a>
        <a
          href="https://www.linkedin.com/in/saheedat-afolabi-1a91b5221/"
          target="_blank"
          rel="noreferrer"
          className="text-gray-700 hover:text-pinkish"
        >
          LinkedIn
        </a>
        <a
          href="https://x.com/idontseemyselff"
          target="_blank"
          rel="noreferrer"
          className="text-gray-700 hover:text-pinkish"
        >
          X(fka Twitter)
        </a>
        <a
          href="https://github.com/Saheedatt/Saheedatt"
          target="_blank"
          rel="noreferrer"
          className="text-gray-700 hover:text-pinkish"
        >
          Github
        </a>
      </div>
    </div>
  );
};

export default Home;
