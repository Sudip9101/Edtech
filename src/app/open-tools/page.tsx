"use client";

import Image from "next/image";
import Link from "next/link";
import { Wrench, Ruler, Building, Database, BarChart3 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function OpenTools() {
  const tools = [
    {
      name: "Yosys",
      description: "RTL synthesis",
      icon: Wrench,
      color: "bg-blue-100 text-blue-800",
      image: "/yosos.png",
      details: "A framework for RTL synthesis that converts Verilog to a gate-level netlist. Supports various synthesis algorithms and optimization techniques."
    },
    {
      name: "OpenSTA",
      description: "Timing Analysis",
      icon: Ruler,
      color: "bg-green-100 text-green-800",
      image: "/open.png",
      details: "Static timing analysis tool that analyzes circuit timing without requiring simulation. Provides detailed timing reports and optimization suggestions."
    },
    {
      name: "RePlAce/TritonCTS",
      description: "Floorplanning and CTS",
      icon: Building,
      color: "bg-purple-100 text-purple-800",
      image: "/titron.png",
      details: "Advanced floorplanning and Clock Tree Synthesis tools for physical design. Optimizes placement and clock distribution networks."
    },
    {
      name: "Magic",
      description: "Layout & DRC",
      icon: Database,
      color: "bg-orange-100 text-orange-800",
      image: "/magic.jpeg",
      details: "VLSI layout tool for creating and editing integrated circuit layouts. Includes Design Rule Checking (DRC) and Layout vs Schematic (LVS) verification."
    },
    {
      name: "GTKWave",
      description: "Waveform Debugging",
      icon: BarChart3,
      color: "bg-red-100 text-red-800",
      image: "/gtx.png",
      details: "Waveform viewer for analyzing digital signal traces. Supports various file formats and provides advanced debugging capabilities for digital design verification."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-[#F8F9FF] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1c1d1f] mb-6">
              Open Tools
            </h1>
            <p className="text-xl text-[#6a6f73] max-w-3xl mx-auto mb-8">
              Use open-source tools across RTL, Synthesis, and Physical Design
            </p>
            <p className="text-lg text-[#6a6f73] max-w-4xl mx-auto">
              Explore our collection of powerful open-source tools for digital design and verification
            </p>
          </div>
        </div>
      </section>

      {/* Tools Grid Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.slice(0, 3).map((tool, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="text-center mb-6">
                  {/* Tool Image */}
                  <div className="w-24 h-24 mx-auto mb-4 rounded-xl overflow-hidden bg-gray-50 flex items-center justify-center">
                    <Image
                      src={tool.image}
                      alt={tool.name}
                      width={96}
                      height={96}
                      className="object-contain w-full h-full p-2"
                    />
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#2A2B3F] mb-2">
                    {tool.name}
                  </h3>
                  <p className="text-base text-[#6a6f73] mb-3">
                    {tool.description}
                  </p>
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${tool.color}`}>
                    {tool.description}
                  </span>
                </div>
                
                <div className="text-center">
                  <p className="text-[#6a6f73] leading-relaxed mb-4 text-sm">
                    {tool.details}
                  </p>
                  
                  <button className="bg-[#8B2DB8] text-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-[#7A1AA7] transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Second row with 2 centered tiles */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
            {tools.slice(3, 5).map((tool, index) => (
              <div key={index + 3} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="text-center mb-6">
                  {/* Tool Image */}
                  <div className="w-24 h-24 mx-auto mb-4 rounded-xl overflow-hidden bg-gray-50 flex items-center justify-center">
                    <Image
                      src={tool.image}
                      alt={tool.name}
                      width={96}
                      height={96}
                      className="object-contain w-full h-full p-2"
                    />
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#2A2B3F] mb-2">
                    {tool.name}
                  </h3>
                  <p className="text-base text-[#6a6f73] mb-3">
                    {tool.description}
                  </p>
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${tool.color}`}>
                    {tool.description}
                  </span>
                </div>
                
                <div className="text-center">
                  <p className="text-[#6a6f73] leading-relaxed mb-4 text-sm">
                    {tool.details}
                  </p>
                  
                  <button className="bg-[#8B2DB8] text-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-[#7A1AA7] transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F8F9FF]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1c1d1f] mb-6">
                Why Open-Source Tools?
              </h2>
              <p className="text-lg text-[#6a6f73] mb-6 leading-relaxed">
                Open-source tools provide transparency, community-driven development, and cost-effective solutions for digital design. Our curated collection ensures compatibility and reliability across the entire design flow.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#8B2DB8] rounded-full"></div>
                  <span className="text-[#6a6f73]">Transparent and auditable codebase</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#8B2DB8] rounded-full"></div>
                  <span className="text-[#6a6f73]">Active community support and updates</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#8B2DB8] rounded-full"></div>
                  <span className="text-[#6a6f73]">Cost-effective alternative to commercial tools</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#8B2DB8] rounded-full"></div>
                  <span className="text-[#6a6f73]">Customizable and extensible</span>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="w-64 h-64 rounded-2xl overflow-hidden mx-auto mb-6 bg-gray-100 relative">
                <div className="absolute inset-0 bg-gray-100"></div>
                <Image
                  src="/open source.jpg"
                  alt="Open Source Tools"
                  width={256}
                  height={256}
                  className="object-cover w-full h-full rounded-2xl relative z-10"
                />
              </div>
              <h3 className="text-2xl font-bold text-[#2A2B3F] mb-4">Complete Design Flow</h3>
              <p className="text-[#6a6f73]">
                From RTL synthesis to physical design, our open-source toolchain provides everything you need for digital design projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Home Button */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
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