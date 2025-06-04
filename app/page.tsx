export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          <span className="text-6xl">🎭</span> Real Theatre
        </h1>
        
        <p className="text-2xl text-center max-w-2xl">
          The world's first direct-connection platform between actors and venues
        </p>
        
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8 max-w-4xl">
          <div className="flex flex-col gap-4 rounded-xl bg-white/10 p-6 backdrop-blur">
            <h3 className="text-2xl font-bold">For Actors</h3>
            <ul className="text-lg space-y-2">
              <li>✓ Keep 100% of your earnings</li>
              <li>✓ No agent fees or middlemen</li>
              <li>✓ Get cast in minutes, not months</li>
              <li>✓ Union-friendly platform</li>
            </ul>
          </div>
          
          <div className="flex flex-col gap-4 rounded-xl bg-white/10 p-6 backdrop-blur">
            <h3 className="text-2xl font-bold">For Venues</h3>
            <ul className="text-lg space-y-2">
              <li>✓ Direct access to talent</li>
              <li>✓ No casting director fees</li>
              <li>✓ Fill roles instantly</li>
              <li>✓ Built-in union compliance</li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col items-center gap-4">
          <button className="rounded-full bg-white px-10 py-4 text-xl font-bold text-black transition hover:bg-gray-200">
            Join the Revolution
          </button>
          <p className="text-sm text-gray-400">First month free • No credit card required</p>
        </div>
        
        <div className="text-center mt-8">
          <p className="text-lg text-gray-300">
            Launching soon in NYC • LA • Chicago
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Currently building the future of theatre casting
          </p>
        </div>
      </div>
    </main>
  );
