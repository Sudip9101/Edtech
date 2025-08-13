"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function IPLibrary() {
  const [activeTile, setActiveTile] = useState(0);

  const ipBlocks = [
    {
      name: "UART",
      description: "8-bit Configurable",
      status: "Under Dev",
      statusColor: "bg-yellow-100 text-yellow-800",
      details: "Universal Asynchronous Receiver-Transmitter with configurable baud rates, parity, and stop bits. Perfect for serial communication protocols."
    },
    {
      name: "GPIO",
      description: "Parameterized I/O Block",
      status: "Under Dev",
      statusColor: "bg-yellow-100 text-yellow-800",
      details: "General Purpose Input/Output controller with configurable pin directions, interrupt support, and debouncing capabilities."
    },
    {
      name: "PWM Timer",
      description: "16-bit Pulse Generator",
      status: "Under Dev",
      statusColor: "bg-yellow-100 text-yellow-800",
      details: "Pulse Width Modulation timer with configurable duty cycle and frequency generation. Ideal for motor control and signal generation."
    },
    {
      name: "SPI Master",
      description: "Fully Synchronous",
      status: "Under Dev",
      statusColor: "bg-yellow-100 text-yellow-800",
      details: "Serial Peripheral Interface master controller with configurable clock polarity, phase, and data width for high-speed communication."
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const tileHeight = windowHeight * 0.8; // Each tile takes 80% of viewport height
      
      const newActiveTile = Math.floor(scrollPosition / tileHeight);
      setActiveTile(Math.min(newActiveTile, ipBlocks.length - 1));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [ipBlocks.length]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-[#F8F9FF] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Image - Full Width */}
          <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-xl mb-12">
            <Image
              src="/lib.jpeg"
              alt="IP Library Hero"
              width={1200}
              height={600}
              className="object-cover w-full h-full"
            />
          </div>
          
          {/* Text Content */}
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1c1d1f] mb-6">
              IP Library Preview
            </h1>
            <p className="text-xl text-[#6a6f73] max-w-3xl mx-auto mb-8">
              Open IPs You Can Learn & Build
            </p>
            <p className="text-lg text-[#6a6f73] max-w-4xl mx-auto">
              Browse reusable, verifiable IP blocks
            </p>
          </div>
        </div>
      </section>

      {/* Scrolling IP Tiles Section */}
      <section className="relative bg-gray-50">
        {ipBlocks.map((block, index) => (
          <div
            key={index}
            data-tile={index}
            className="min-h-screen flex items-center justify-center"
          >
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-200">
                <div className="text-center mb-8">
                  <h2 className="text-4xl md:text-5xl font-bold text-[#2A2B3F] mb-4">
                    {block.name}
                  </h2>
                  <p className="text-xl text-[#6a6f73] mb-6">
                    {block.description}
                  </p>
                  <span className={`inline-flex items-center px-4 py-2 rounded-full text-lg font-medium ${block.statusColor}`}>
                    {block.status}
                  </span>
                </div>
                
                <div className="text-center">
                  <p className="text-lg text-[#6a6f73] leading-relaxed max-w-3xl mx-auto">
                    {block.details}
                  </p>
                </div>

                <div className="mt-8 text-center">
                  <button className="bg-[#8B2DB8] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#7A1AA7] transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Progress Indicator */}
      <div className="fixed top-1/2 right-8 transform -translate-y-1/2 z-50">
        <div className="flex flex-col space-y-2">
          {ipBlocks.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                const element = document.querySelector(`[data-tile="${index}"]`);
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeTile === index 
                  ? 'bg-[#8B2DB8] scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Back to Home Button */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F8F9FF]">
        <div className="max-w-6xl mx-auto text-center">
          <Link href="/" className="bg-gray-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-700 transition-colors flex items-center gap-2 mx-auto inline-flex">
            ← Back to Home
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
} 