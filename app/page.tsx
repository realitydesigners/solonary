"use client";
import Spline from "@splinetool/react-spline";

export default function App() {
  return (
    <main className="relative h-screen w-screen bg-black">
      <Spline
        scene="https://prod.spline.design/pLUkP3RsBqLi7ovE/scene.splinecode"
        className="h-screen w-screen absolute z-10"
      />

      {/* Content Overlay */}
      <div className="relative z-20 top-10 flex flex-col items-center  ">
        <h1 className="font-russo text-6xl lg:text-8xl leading-tight font-bold mb-4 text-white animate-fade-in">
          Solonary
        </h1>
        <p
          className="max-w-2xl font-outfit text-sm lg:text-xl text-center leading-normal text-gray-300/90 
                    animate-fade-in-up backdrop-blur-sm rounded-lg px-6"
        >
          Experience the future of meditation through immersive 3D guided
          journeys. Transform your mindfulness practice with our revolutionary
          approach.
        </p>
      </div>

      <div className="absolute z-10 bottom-[8%] w-full flex flex-col items-center justify-center px-4 text-center">
        {/* CTA Button */}
        <button
          className="rounded-full bg-white px-8 py-4 font-outfit text-2xl text-black font-bold
                     transition-all duration-300 hover:bg-blue-500 hover:scale-105 
                     hover:shadow-lg hover:shadow-blue-500/30 backdrop-blur-sm
                     animate-pulse-slow"
          onClick={() => console.log("Start Now clicked")}
        >
          Start Your Journey
        </button>

        {/* Subtitle */}
        <p
          className="mt-6 font-outfit text-sm text-white max-w-md
                     backdrop-blur-sm rounded-full px-4 py-2"
        >
          Join thousands of others in discovering inner peace through technology
        </p>
      </div>
    </main>
  );
}
