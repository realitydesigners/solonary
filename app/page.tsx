"use client";

import { useState } from "react";
import Link from "next/link";

export default function App() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-black/50 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold">
                Solonary
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/post" className="hover:text-blue-400 px-3 py-2">
                  Post
                </Link>
                <Link
                  href="#features"
                  className="hover:text-blue-400 px-3 py-2"
                >
                  Features
                </Link>
                <Link href="#pricing" className="hover:text-blue-400 px-3 py-2">
                  Pricing
                </Link>
                <Link
                  href="#platforms"
                  className="hover:text-blue-400 px-3 py-2"
                >
                  Platforms
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative pt-32 pb-20 sm:pt-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Schedule Your Content Everywhere in Seconds
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            The simplest way to post and grow on all platforms. Built for
            creators and small teams without the ridiculous price tag.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/post"
              className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg text-lg font-semibold"
            >
              Start Posting
            </Link>
            <button className="border border-gray-600 hover:border-gray-400 px-8 py-4 rounded-lg text-lg font-semibold">
              View Demo
            </button>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-8">
            <div className="flex items-center">
              <span className="text-4xl font-bold text-blue-400">2914+</span>
              <span className="ml-2 text-gray-400">Creators</span>
            </div>
            <div className="flex items-center">
              <span className="text-4xl font-bold text-blue-400">9+</span>
              <span className="ml-2 text-gray-400">Platforms</span>
            </div>
            <div className="flex items-center">
              <span className="text-4xl font-bold text-blue-400">19,511</span>
              <span className="ml-2 text-gray-400">Posts Published</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
