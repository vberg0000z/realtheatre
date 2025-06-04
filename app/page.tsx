"use client";
import { useEffect, useState } from 'react';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-red-950 via-red-900 to-black">
      {/* Velvet curtain texture background */}
      <div className="absolute inset-0 opacity-30" 
        style={{
          backgroundImage: `repeating-linear-gradient(90deg, #7f1d1d 0px, #991b1b 2px, #7f1d1d 4px)`,
          backgroundSize: '4px 100%'
        }}
      />
      
      {/* Dramatic spotlight from above */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-yellow-200 rounded-full filter blur-[200px] opacity-30 animate-pulse" />
      
      {/* Giant pulsating comedy/tragedy masks behind everything */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[600px] opacity-10 animate-pulse">
        <span style={{
          filter: 'drop-shadow(0 0 50px rgba(255, 215, 0, 0.5))',
          animation: 'float 6s ease-in-out infinite'
        }}>🎭</span>
      </div>
      
      <div className="relative z-10 min-h-screen flex flex-col justify-between">
        {/* Top section with title in lights */}
        <div className="flex-1 flex items-center justify-center px-4 pt-20">
          <div className="text-center">
            {/* Title in Broadway lights style */}
            <h1 className="relative mb-8">
              <span className="text-5xl md:text-7xl lg:text-8xl font-black tracking-wider"
                style={{
                  textShadow: `
                    0 0 10px #fff,
                    0 0 20px #fff,
                    0 0 30px #ff0,
                    0 0 40px #ff0,
                    0 0 50px #ff0,
                    0 0 60px #ff0,
                    0 0 70px #ff0
                  `,
                  color: '#fff',
                  animation: 'flicker 2s infinite alternate'
                }}>
                REALTHEATRE.ART
              </span>
              {/* Light bulbs around text */}
              <div className="absolute -top-4 -left-4 w-3 h-3 bg-yellow-300 rounded-full animate-pulse shadow-lg shadow-yellow-400/50" />
              <div className="absolute -top-4 -right-4 w-3 h-3 bg-yellow-300 rounded-full animate-pulse shadow-lg shadow-yellow-400/50" style={{animationDelay: '0.5s'}} />
              <div className="absolute -bottom-4 -left-4 w-3 h-3 bg-yellow-300 rounded-full animate-pulse shadow-lg shadow-yellow-400/50" style={{animationDelay: '1s'}} />
              <div className="absolute -bottom-4 -right-4 w-3 h-3 bg-yellow-300 rounded-full animate-pulse shadow-lg shadow-yellow-400/50" style={{animationDelay: '1.5s'}} />
            </h1>
            
            {/* Artistic tagline */}
            <p className="text-2xl md:text-3xl text-yellow-100 mb-12 font-serif italic opacity-80">
              "Where Artists Own the Stage"
            </p>
            
            {/* Feature bubbles floating */}
            <div className="flex flex-wrap justify-center gap-6 mb-12 max-w-4xl mx-auto">
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full filter blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                <div className="relative bg-black/50 backdrop-blur-sm border border-purple-400/30 rounded-full px-8 py-4 transform transition-all hover:scale-110">
                  <p className="text-lg font-bold text-purple-300">100% Your Money</p>
                </div>
              </div>
              
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-orange-600 rounded-full filter blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                <div className="relative bg-black/50 backdrop-blur-sm border border-red-400/30 rounded-full px-8 py-4 transform transition-all hover:scale-110">
                  <p className="text-lg font-bold text-red-300">No Middlemen</p>
                </div>
              </div>
              
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-600 to-green-600 rounded-full filter blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                <div className="relative bg-black/50 backdrop-blur-sm border border-yellow-400/30 rounded-full px-8 py-4 transform transition-all hover:scale-110">
                  <p className="text-lg font-bold text-yellow-300">Union Strong</p>
                </div>
              </div>
            </div>
            
            {/* CTA that looks like a theatre ticket */}
            <div className="inline-block transform hover:rotate-3 transition-transform">
              <button className="relative bg-gradient-to-br from-yellow-100 to-yellow-300 text-black px-12 py-6 font-bold text-xl rounded-lg shadow-2xl hover:shadow-yellow-400/50 transition-all">
                <span className="absolute top-0 left-0 right-0 h-1 bg-black/10" style={{background: 'repeating-linear-gradient(90deg, transparent 0, transparent 4px, rgba(0,0,0,0.1) 4px, rgba(0,0,0,0.1) 8px)'}} />
                <span className="block">CLAIM YOUR STAGE</span>
                <span className="text-sm opacity-70">Opening 2025</span>
              </button>
            </div>
            
            {/* Floating quotes */}
            <div className="mt-12 text-yellow-200/60 text-lg font-serif italic">
              <p>"First Month Free • NYC • LA • Chicago"</p>
            </div>
          </div>
        </div>
        
        {/* Stage at the bottom */}
        <div className="relative">
          {/* Stage floor */}
          <div className="h-32 bg-gradient-to-b from-yellow-900 via-yellow-800 to-yellow-900 relative">
            {/* Wood texture */}
            <div className="absolute inset-0 opacity-30" 
              style={{
                backgroundImage: 'repeating-linear-gradient(0deg, #654321 0px, #8B4513 2px, #654321 4px)',
                backgroundSize: '100% 4px'
              }}
            />
            {/* Stage lights from below */}
            <div className="absolute -top-20 left-0 right-0 h-20 bg-gradient-to-t from-yellow-400/20 to-transparent" />
            {/* Footlights */}
            <div className="absolute -top-4 left-0 right-0 flex justify-around">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="w-8 h-8 bg-yellow-300 rounded-full shadow-lg shadow-yellow-400/50 animate-pulse" 
                  style={{animationDelay: `${i * 0.2}s`}} />
              ))}
            </div>
          </div>
          
          {/* Stage front */}
          <div className="h-8 bg-gradient-to-b from-yellow-950 to-black" />
        </div>
      </div>
      
      <style jsx>{`
        @keyframes flicker {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </main>
  );
}
EOFgit add . && git commit -m "🎭 ARTISTIC theatre stage landing - pure Broadway magic!" && git push
git add . && git commit -m "🎭 ARTISTIC theatre stage landing - pure Broadway magic!" && git push
cat > app/page.tsx << 'EOF'
"use client";
import { useEffect, useState } from 'react';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-red-950 via-red-900 to-black">
      {/* Velvet curtain texture background */}
      <div className="absolute inset-0 opacity-30" 
        style={{
          backgroundImage: `repeating-linear-gradient(90deg, #7f1d1d 0px, #991b1b 2px, #7f1d1d 4px)`,
          backgroundSize: '4px 100%'
        }}
      />
      
      {/* Dramatic spotlight from above */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-yellow-200 rounded-full filter blur-[200px] opacity-30 animate-pulse" />
      
      {/* Giant pulsating comedy/tragedy masks behind everything */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[600px] opacity-10 animate-pulse">
        <span style={{
          filter: 'drop-shadow(0 0 50px rgba(255, 215, 0, 0.5))',
          animation: 'float 6s ease-in-out infinite'
        }}>🎭</span>
      </div>
      
      <div className="relative z-10 min-h-screen flex flex-col justify-between">
        {/* Top section with title in lights */}
        <div className="flex-1 flex items-center justify-center px-4 pt-20">
          <div className="text-center">
            {/* Title in Broadway lights style */}
            <h1 className="relative mb-8">
              <span className="text-5xl md:text-7xl lg:text-8xl font-black tracking-wider"
                style={{
                  textShadow: `
                    0 0 10px #fff,
                    0 0 20px #fff,
                    0 0 30px #ff0,
                    0 0 40px #ff0,
                    0 0 50px #ff0,
                    0 0 60px #ff0,
                    0 0 70px #ff0
                  `,
                  color: '#fff',
                  animation: 'flicker 2s infinite alternate'
                }}>
                REALTHEATRE.ART
              </span>
              {/* Light bulbs around text */}
              <div className="absolute -top-4 -left-4 w-3 h-3 bg-yellow-300 rounded-full animate-pulse shadow-lg shadow-yellow-400/50" />
              <div className="absolute -top-4 -right-4 w-3 h-3 bg-yellow-300 rounded-full animate-pulse shadow-lg shadow-yellow-400/50" style={{animationDelay: '0.5s'}} />
              <div className="absolute -bottom-4 -left-4 w-3 h-3 bg-yellow-300 rounded-full animate-pulse shadow-lg shadow-yellow-400/50" style={{animationDelay: '1s'}} />
              <div className="absolute -bottom-4 -right-4 w-3 h-3 bg-yellow-300 rounded-full animate-pulse shadow-lg shadow-yellow-400/50" style={{animationDelay: '1.5s'}} />
            </h1>
            
            {/* Artistic tagline */}
            <p className="text-2xl md:text-3xl text-yellow-100 mb-12 font-serif italic opacity-80">
              "Where Artists Own the Stage"
            </p>
            
            {/* Feature bubbles floating */}
            <div className="flex flex-wrap justify-center gap-6 mb-12 max-w-4xl mx-auto">
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full filter blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                <div className="relative bg-black/50 backdrop-blur-sm border border-purple-400/30 rounded-full px-8 py-4 transform transition-all hover:scale-110">
                  <p className="text-lg font-bold text-purple-300">100% Your Money</p>
                </div>
              </div>
              
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-orange-600 rounded-full filter blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                <div className="relative bg-black/50 backdrop-blur-sm border border-red-400/30 rounded-full px-8 py-4 transform transition-all hover:scale-110">
                  <p className="text-lg font-bold text-red-300">No Middlemen</p>
                </div>
              </div>
              
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-600 to-green-600 rounded-full filter blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                <div className="relative bg-black/50 backdrop-blur-sm border border-yellow-400/30 rounded-full px-8 py-4 transform transition-all hover:scale-110">
                  <p className="text-lg font-bold text-yellow-300">Union Strong</p>
                </div>
              </div>
            </div>
            
            {/* CTA that looks like a theatre ticket */}
            <div className="inline-block transform hover:rotate-3 transition-transform">
              <button className="relative bg-gradient-to-br from-yellow-100 to-yellow-300 text-black px-12 py-6 font-bold text-xl rounded-lg shadow-2xl hover:shadow-yellow-400/50 transition-all">
                <span className="absolute top-0 left-0 right-0 h-1 bg-black/10" style={{background: 'repeating-linear-gradient(90deg, transparent 0, transparent 4px, rgba(0,0,0,0.1) 4px, rgba(0,0,0,0.1) 8px)'}} />
                <span className="block">CLAIM YOUR STAGE</span>
                <span className="text-sm opacity-70">Opening 2025</span>
              </button>
            </div>
            
            {/* Floating quotes */}
            <div className="mt-12 text-yellow-200/60 text-lg font-serif italic">
              <p>"First Month Free • NYC • LA • Chicago"</p>
            </div>
          </div>
        </div>
        
        {/* Stage at the bottom */}
        <div className="relative">
          {/* Stage floor */}
          <div className="h-32 bg-gradient-to-b from-yellow-900 via-yellow-800 to-yellow-900 relative">
            {/* Wood texture */}
            <div className="absolute inset-0 opacity-30" 
              style={{
                backgroundImage: 'repeating-linear-gradient(0deg, #654321 0px, #8B4513 2px, #654321 4px)',
                backgroundSize: '100% 4px'
              }}
            />
            {/* Stage lights from below */}
            <div className="absolute -top-20 left-0 right-0 h-20 bg-gradient-to-t from-yellow-400/20 to-transparent" />
            {/* Footlights */}
            <div className="absolute -top-4 left-0 right-0 flex justify-around">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="w-8 h-8 bg-yellow-300 rounded-full shadow-lg shadow-yellow-400/50 animate-pulse" 
                  style={{animationDelay: `${i * 0.2}s`}} />
              ))}
            </div>
          </div>
          
          {/* Stage front */}
          <div className="h-8 bg-gradient-to-b from-yellow-950 to-black" />
        </div>
      </div>
      
      <style jsx>{`
        @keyframes flicker {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </main>
  );
}
