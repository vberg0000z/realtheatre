"use client";
import { useEffect, useState } from 'react';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Theatrical curtain reveal animation */}
      <div className={`fixed inset-0 z-50 flex transition-all duration-3000 ${mounted ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <div className="w-1/2 bg-red-900 transform transition-transform duration-3000" style={{transform: mounted ? 'translateX(-100%)' : 'translateX(0)'}}></div>
        <div className="w-1/2 bg-red-900 transform transition-transform duration-3000" style={{transform: mounted ? 'translateX(100%)' : 'translateX(0)'}}></div>
      </div>
      
      {/* Animated stage lights */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-400 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-red-500 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="text-center max-w-6xl mx-auto">
          {/* Floating 3D masks */}
          <div className="absolute -top-20 -left-20 text-[200px] opacity-10 animate-spin" style={{animationDuration: '20s'}}>🎭</div>
          <div className="absolute -bottom-20 -right-20 text-[200px] opacity-10 animate-spin" style={{animationDuration: '25s', animationDirection: 'reverse'}}>🎭</div>
          
          {/* Main title with staggered letter animation */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 tracking-tighter">
            <span className="inline-block">
              {'REAL THEATRE'.split('').map((letter, i) => (
                <span
                  key={i}
                  className="inline-block transform hover:scale-125 transition-transform cursor-default"
                  style={{
                    animation: `dropIn 0.5s ${i * 0.1}s both`,
                    background: `linear-gradient(${45 + i * 15}deg, #FFD700, #FF1744, #9C27B0)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textShadow: '0 0 40px rgba(255, 215, 0, 0.5)'
                  }}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </span>
              ))}
            </span>
          </h1>
          
          {/* Typewriter effect tagline */}
          <p className="text-2xl md:text-4xl mb-12 font-light">
            <span className="text-yellow-400">Destroying the middleman</span>
            <span className="inline-block w-1 h-8 bg-white ml-2 animate-pulse"></span>
          </p>
          
          {/* Feature cards with hover effects */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="group relative p-6 bg-gradient-to-br from-purple-900/50 to-transparent border border-purple-500/30 rounded-2xl transform transition-all hover:scale-105 hover:border-purple-400">
              <div className="absolute inset-0 bg-purple-600/20 rounded-2xl filter blur-xl group-hover:blur-2xl transition-all"></div>
              <div className="relative">
                <div className="text-5xl mb-4">💰</div>
                <h3 className="text-xl font-bold mb-2">100% EARNINGS</h3>
                <p className="text-gray-300">No agent fees. Ever.</p>
              </div>
            </div>
            
            <div className="group relative p-6 bg-gradient-to-br from-red-900/50 to-transparent border border-red-500/30 rounded-2xl transform transition-all hover:scale-105 hover:border-red-400">
              <div className="absolute inset-0 bg-red-600/20 rounded-2xl filter blur-xl group-hover:blur-2xl transition-all"></div>
              <div className="relative">
                <div className="text-5xl mb-4">⚡</div>
                <h3 className="text-xl font-bold mb-2">INSTANT CASTING</h3>
                <p className="text-gray-300">Minutes, not months.</p>
              </div>
            </div>
            
            <div className="group relative p-6 bg-gradient-to-br from-yellow-900/50 to-transparent border border-yellow-500/30 rounded-2xl transform transition-all hover:scale-105 hover:border-yellow-400">
              <div className="absolute inset-0 bg-yellow-600/20 rounded-2xl filter blur-xl group-hover:blur-2xl transition-all"></div>
              <div className="relative">
                <div className="text-5xl mb-4">��</div>
                <h3 className="text-xl font-bold mb-2">UNION STRONG</h3>
                <p className="text-gray-300">Built for artists, by artists.</p>
              </div>
            </div>
          </div>
          
          {/* CTA with ripple effect */}
          <div className="relative inline-block group mb-12">
            <button className="relative px-12 py-6 text-2xl font-bold bg-gradient-to-r from-yellow-400 via-red-500 to-purple-600 rounded-full transform transition-all hover:scale-110 active:scale-95">
              <span className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity"></span>
              <span className="relative">BE THE REVOLUTION</span>
            </button>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 via-red-500 to-purple-600 filter blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
          </div>
          
          {/* Cities with staggered reveal */}
          <div className="flex justify-center gap-8 text-xl font-light mb-8">
            {['NYC', 'LA', 'CHICAGO'].map((city, i) => (
              <span
                key={city}
                className="opacity-0 animate-fadeInUp"
                style={{animationDelay: `${3 + i * 0.2}s`, animationFillMode: 'forwards'}}
              >
                {city}
              </span>
            ))}
          </div>
          
          <p className="text-gray-400">The future isn't coming. It's here.</p>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes dropIn {
          from {
            opacity: 0;
            transform: translateY(-100px) rotate(-10deg);
          }
          to {
            opacity: 1;
            transform: translateY(0) rotate(0);
          }
        }
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
          from {
            opacity: 0;
            transform: translateY(20px);
          }
        }
      `}</style>
    </main>
  );
}
