import React, { useEffect } from 'react';

const BackgroundParticles = () => {
  useEffect(() => {
    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'absolute rounded-full bg-pink-200/30';
      const size = Math.random() * 10 + 5;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${Math.random() * 100}vw`;
      particle.style.top = `${Math.random() * 100}vh`;
      particle.style.opacity = Math.random() * 0.5 + 0.1;
      
      const animationDuration = Math.random() * 20 + 10;
      particle.style.animation = `float ${animationDuration}s linear infinite`;
      
      document.getElementById('particles-container').appendChild(particle);
    };

    for (let i = 0; i < 30; i++) {
      createParticle();
    }
  }, []);

  return <div id="particles-container" className="fixed inset-0 overflow-hidden pointer-events-none"></div>;
};

export default BackgroundParticles;