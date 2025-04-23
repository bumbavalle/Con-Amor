import React from 'react';
import HeartAnimation from './components/HeartAnimation';
import MessageCard from './components/MessageCard';
import BackgroundParticles from './components/BackgroundParticles';

const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-pink-50 to-purple-50">
      <BackgroundParticles />
      <div className="relative z-10">
        <HeartAnimation />
        <MessageCard />
      </div>
      
      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(0) rotate(0deg);
          }
          100% {
            transform: translateY(-100vh) rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default App;