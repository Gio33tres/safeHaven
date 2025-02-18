import React from 'react';

function FallingLeaves() {

  const numberOfLeaves = 20;
  const leavesArray = Array.from({ length: numberOfLeaves });

  const leaves = leavesArray.map((_, index) => {

    const left = Math.random() * 100;
    const delay = Math.random() * 5;
    const duration = 5 + Math.random() * 5;
    const size = 20 + Math.random() * 40;
    const horizontalShift = -40 + Math.random() * 90;

    return (
      <img
        key={index}
        src="./leaf.png"
        alt="Falling Leaf"
        style={{
          position: 'absolute',
          top: '-10%',
          left: `${left}%`,
          width: `${size}px`,
          height: `${size}px`,
          animation: `fallDiagonal ${duration}s linear infinite`,
          animationDelay: `${delay}s`,
          '--horizontalShift': `${horizontalShift}vw`,
        }}
      />
    );
  });

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 w-full h-full overflow-hidden"
      style={{ zIndex: 1 }}
    >
      {leaves}
      <style>{`
        @keyframes fallDiagonal {
          0% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(110vh) translateX(var(--horizontalShift)) rotate(360deg);
            opacity: 0.5;
          }
        }
      `}</style>
    </div>
  );
}

export default FallingLeaves;
