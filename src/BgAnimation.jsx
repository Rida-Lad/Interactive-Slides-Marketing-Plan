import React, { useEffect, useRef } from 'react';

const BgAnimation = () => {
  const snowRef = useRef(null);

  // Create gold snow effect
  useEffect(() => {
    const container = snowRef.current;
    if (!container) return;
    
    // Clear existing snow
    container.innerHTML = '';
    
    // Create 150 golden snowflakes with very small sizes
    for (let i = 0; i < 150; i++) {
      const flake = document.createElement('div');
      flake.className = 'snowflake';
      
      // Random properties - very small sizes
      const size = Math.random() * 3 + 1; // 1-4px
      const colors = ['#FFD700', '#FFA500', '#FF8C00', '#FFB300', '#FFC107'];
      const color = colors[Math.floor(Math.random() * colors.length)];
      const duration = Math.random() * 15 + 10;
      const delay = Math.random() * 10;
      const left = Math.random() * 100;
      const drift = Math.random() * 100 - 50;
      const opacity = Math.random() * 0.6 + 0.3;
      const animation = Math.random() > 0.5 ? 'fall' : 'fall2';
      
      flake.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        background: ${color};
        opacity: ${opacity};
        left: ${left}%;
        top: -20px;
        animation-duration: ${duration}s;
        animation-delay: ${delay}s;
        --drift: ${drift}px;
        animation-name: ${animation};
      `;
      
      container.appendChild(flake);
    }
  }, []);

  return (
    <div className="background-container">
      <style jsx="true">{`
        
        .background-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: -1;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .snow-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }
        
        .snowflake {
          position: absolute;
          border-radius: 50%;
          animation-iteration-count: infinite;
          animation-timing-function: linear;
          z-index: 1;
          box-shadow: 0 0 5px rgba(255, 215, 0, 0.5);
        }
        
        .glowing-circle {
          position: absolute;
          border-radius: 50%;
          filter: blur(25px);
          animation: glow 5s infinite alternate ease-in-out;
          z-index: 0;
          opacity: 0.3;
          transform-origin: center;
          background: radial-gradient(circle, rgba(255, 50, 0, 0.8) 0%, transparent 70%);
        }
        
        .center {
          width: 500px;
          height: 500px;
          opacity: 0.5;
          animation-duration: 7s;
        }
        
        .top-left {
          top: 10%;
          left: 10%;
          width: 250px;
          height: 250px;
          animation-delay: 0.5s;
        }
        
        .top-right {
          top: 10%;
          right: 10%;
          width: 300px;
          height: 300px;
          animation-delay: 1s;
        }
        
        .bottom-left {
          bottom: 10%;
          left: 10%;
          width: 220px;
          height: 220px;
          animation-delay: 1.5s;
        }
        
        .bottom-right {
          bottom: 10%;
          right: 10%;
          width: 280px;
          height: 280px;
          animation-delay: 2s;
        }
        
        .mid-top {
          top: 20%;
          left: 50%;
          transform: translateX(-50%);
          width: 180px;
          height: 180px;
          animation-delay: 0.8s;
        }
        
        .mid-bottom {
          bottom: 20%;
          left: 50%;
          transform: translateX(-50%);
          width: 200px;
          height: 200px;
          animation-delay: 1.2s;
        }
        
        .mid-left {
          top: 50%;
          left: 20%;
          transform: translateY(-50%);
          width: 150px;
          height: 150px;
          animation-delay: 0.3s;
        }
        
        .mid-right {
          top: 50%;
          right: 20%;
          transform: translateY(-50%);
          width: 170px;
          height: 170px;
          animation-delay: 1.7s;
        }
        
        @keyframes fall {
          0% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 0.8;
          }
          70% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(100vh) translateX(var(--drift)) rotate(360deg);
            opacity: 0;
          }
        }
        
        @keyframes fall2 {
          0% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 0.8;
          }
          50% {
            transform: translateX(calc(var(--drift) * 0.5)) rotate(180deg);
          }
          100% {
            transform: translateY(100vh) translateX(var(--drift)) rotate(360deg);
            opacity: 0;
          }
        }
        
        @keyframes glow {
          0% {
            opacity: 0.2;
            transform: scale(0.9);
          }
          50% {
            opacity: 0.4;
          }
          100% {
            opacity: 0.3;
            transform: scale(1.1);
          }
        }
      `}</style>

      <div className="snow-container" ref={snowRef}></div>
      
      {/* Central glowing circle */}
      <div className="glowing-circle center"></div>
      
      {/* Corner glowing circles */}
      <div className="glowing-circle top-left"></div>
      <div className="glowing-circle top-right"></div>
      <div className="glowing-circle bottom-left"></div>
      <div className="glowing-circle bottom-right"></div>
      
      {/* Additional glowing circles */}
      <div className="glowing-circle mid-top"></div>
      <div className="glowing-circle mid-bottom"></div>
      <div className="glowing-circle mid-left"></div>
      <div className="glowing-circle mid-right"></div>
      
    </div>
  );
};

export default BgAnimation;