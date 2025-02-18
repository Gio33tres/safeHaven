import React, { useState, useRef, useEffect } from 'react';
import { FaChevronDown, FaMusic, FaFileAlt } from 'react-icons/fa';
import FallingLeaves from './FallingLeaves';

const leavesCount = 10;

function App() {
  const [navOpen, setNavOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef(null);

  const toggleNav = () => setNavOpen(!navOpen);
  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(!isMuted);

      audioRef.current.play().catch(err => {
        console.log('Could not play:', err);
      });
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch(err => {
        console.error('Autoplay failed:', err);
      });
    }
  }, []); 

  return (
    <div className="relative min-h-screen bg-gray-100 overflow-hidden flex flex-col">
      <FallingLeaves />
      {/* Background audio */}
      <audio 
        ref={audioRef} 
        src="/creative-technology-showreel-241274.mp3" 
        loop
        autoPlay
        muted
      />

      {/* HEADER */}
      <header className="w-full p-4 flex flex-col bg-transparent z-10">
        <h1 className="text-3xl text-gray-800 mb-2">
          The Jr. Dev Temple
        </h1>

        <div className="flex justify-end w-full mt-2">
          <button
            onClick={toggleNav}
            className="text-gray-600 hover:text-gray-900 focus:outline-none text-2xl"
            title="Open menu"
          >
            <FaChevronDown />
          </button>
        </div>
      </header>

      <nav
        className={`fixed top-16 right-4 bg-white shadow-lg rounded-md mt-10 p-4 flex flex-col gap-2 transition-transform duration-300 ${
          navOpen ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0 pointer-events-none'
        }`}
      >
        <a
          href="https://youtu.be/PkZNo7MFNFg?si=KzDdV7hJcinkEqtV" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-gray-900"
        >
          JavaScript
        </a>
        <a
          href="https://www.youtube.com/watch?v=9Fd9hw329fY&list=PLWKjhJtqVAbmqFs83T4W-FZQ9kK983tZC" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-gray-900"
        >
          Game Programming
        </a>
        <a
          href="https://www.youtube.com/watch?v=KJgsSFOSQv0&list=PLWKjhJtqVAbmUE5IqyfGYEYjrZBYzaT4m" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-gray-900"
        >
          C++ / C#
        </a>
        <a
          href="https://youtu.be/yIr_1CasXkM?si=8PTsdR2UWTh979rM" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-gray-900"
        >
          React
        </a>
        <a
          href="https://youtu.be/rfscVS0vtbw?si=x1IkSOj5Wb-b_QRD" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-gray-900"
        >
          Python
        </a>
        <a
          href="https://youtu.be/1hpc70_OoAg?si=dRHPA7nQ0BOn-CIg" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-gray-900"
        >
          Node.js
        </a>

        <button
          onClick={toggleMute}
          className="flex items-center gap-1 text-gray-700 hover:text-gray-900 mt-2"
        >
          <FaMusic />
          {isMuted ? 'Unmute' : 'Mute'}
        </button>
      </nav>

      {/* Main */}
      <main className="flex-grow flex flex-col items-center justify-center">
        <div className="w-201h-201 bg-white rounded-full flex items-center justify-center shadow-inner">
          <img
            src="./pexels-aratuc-nash-802127.jpg"
            alt="Tree"
            className="h-120 w-120 rounded-full"
          />
        </div>

        <section className="w-full max-w-2xl bg-white shadow-md rounded-md mt-10 p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Basic Resources for the new Dev</h2>

          <article className="mb-6">
            <h3 className="text-xl font-semibold text-gray-700">Recommended Channels</h3>
            <p className="text-gray-600 mt-2" style={{ textAlign: 'justify' }}>
              For any aspiring developer, choosing the right learning resources is crucial.
              Some of the most beginner-friendly and comprehensive channels include
              <strong> freeCodeCamp</strong> (offering full courses on web development, data
              structures, and algorithms), <strong>Fazt Code</strong> (specializing in
              practical project-based tutorials), and <strong>HolaMundo</strong> (covering 
              everything from front-end frameworks like React and Vue to backend topics like 
              Firebase and Node.js). By following these channels consistently, you can pick up 
              best practices, develop a strong foundation in coding, and stay current on 
              industry trends.
            </p>
          </article>

          <article>
            <h3 className="text-xl font-semibold text-gray-700">Recommended Books</h3>
            <p className="text-gray-600 mt-2" style={{ textAlign: 'justify' }}>
              While video tutorials and online platforms are excellent, books offer
              in-depth, structured insights. <strong>Clean Code</strong> by Robert C. Martin
              emphasizes readable and maintainable code, while Kyle Simpson’s 
              <strong> You Don’t Know JS</strong> series tackles JavaScript nuances in
              detail. Additionally, <strong>The Pragmatic Programmer</strong> by Andrew Hunt 
              and David Thomas covers essential practices for coding efficiency and
              professional development. Studying these resources not only fortifies
              your technical skills but also nurtures problem-solving and critical-thinking 
              abilities essential for any developer.
            </p>
          </article>
        </section>
      </main>

      {/* Footer */}
      <footer className="p-4 flex justify-end items-center bg-transparent z-10">
        <span className="mr-2 text-gray-700">Héctor Giovanny Benítez Ramos - ADSO</span>
        <a
          href="https://drive.google.com/file/d/1uY7Or38SxTu2PcUk9kwDqUOPIEvDfZvk/view"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-900"
          title="View CV"
        >
          <FaFileAlt size={24} />
        </a>
      </footer>
    </div>
  );
}

export default App;
