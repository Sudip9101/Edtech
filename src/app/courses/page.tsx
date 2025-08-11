'use client';

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Courses() {
  const [showCurriculumModal, setShowCurriculumModal] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#F8F9FF] to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1c1d1f] mb-6 leading-tight">
              Specialized Industry-Relevant Courses
            </h1>
            <p className="text-xl text-[#6a6f73] max-w-3xl mx-auto leading-relaxed">
              Master chip design from RTL to GDSII using complete open-source flows. 
              Designed to meet global semiconductor workforce demands.
            </p>
          </div>
        </div>
      </section>

      {/* Level 1 Courses Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1c1d1f] mb-4">
              Level 1: Foundation Courses
            </h2>
            <p className="text-lg text-[#6a6f73] max-w-3xl mx-auto">
              Comprehensive programs designed to build your semiconductor design foundation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Course 1: Chipcraft Bootcamp */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="relative h-48 bg-gradient-to-br from-blue-50 to-blue-100">
                <img
                  src="/tile1.jpg"
                  alt="Chipcraft Bootcamp"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    console.error('Course 1 image failed:', e);
                  }}
                                />
                 <div className="absolute top-4 right-4 bg-[#a435f0] text-white px-3 py-1 rounded-full text-sm font-semibold">
                   30 Hours
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-[#1c1d1f] mb-4">
                  Chipcraft Bootcamp
                </h3>
                <p className="text-[#6a6f73] mb-6">
                  A comprehensive introduction to semiconductor design fundamentals and open-source EDA tools.
                </p>
                <button className="bg-[#a435f0] text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-[#8b2db8] transition-colors">
                  Coming Soon
                </button>
              </div>
            </div>

            {/* Course 2: Chipcraft: RTL, IP Integration and SoC Signoff */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="relative h-48 bg-gradient-to-br from-green-50 to-green-100">
                <img
                  src="/tile2.jpg"
                  alt="Chipcraft RTL Course"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    console.error('Course 2 image failed:', e);
                  }}
                                />
                 <div className="absolute top-4 right-4 bg-[#a435f0] text-white px-3 py-1 rounded-full text-sm font-semibold">
                   90 Hours
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-[#1c1d1f] mb-4">
                  Chipcraft: RTL, IP Integration and SoC Signoff
                </h3>
                <p className="text-[#6a6f73] mb-6">
                  The first course in this series consisting of six comprehensive modules.
                </p>
                <button 
                  onClick={() => setShowCurriculumModal(true)}
                  className="bg-[#a435f0] text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-[#8b2db8] transition-colors"
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Level 2 Courses Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F8F9FF]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1c1d1f] mb-4">
              Level 2: Specialized Courses
            </h2>
            <p className="text-lg text-[#6a6f73] max-w-3xl mx-auto">
              Advanced courses designed to meet global semiconductor workforce demands
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Course 3: RTL Design & Verification */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="relative h-32 bg-gradient-to-br from-purple-50 to-purple-100">
                <img
                  src="/RTL.jpg"
                  alt="RTL Design & Verification"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    console.error('Course 3 image failed:', e);
                  }}
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold text-[#1c1d1f] mb-3">
                  RTL Design & Verification
                </h3>
                <p className="text-sm text-[#6a6f73] mb-4 min-h-24 text-left">
                  Master Verilog, SystemVerilog, and verification flows for SoC IP development.
                </p>
                <button className="bg-[#a435f0] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#8b2db8] transition-colors">
                  Coming Soon
                </button>
              </div>
            </div>

            {/* Course 4: Design for Testing */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="relative h-32 bg-gradient-to-br from-teal-50 to-teal-100">
                <img
                  src="/DFT.webp"
                  alt="Design for Testing"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    console.error('Course 4 image failed:', e);
                  }}
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold text-[#1c1d1f] mb-3">
                  Design for Testing
                </h3>
                <p className="text-sm text-[#6a6f73] mb-4 min-h-24 text-left">
                  Design for testability, scan chains, and built-in self-test techniques.
                </p>
                <button className="bg-[#a435f0] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#8b2db8] transition-colors">
                  Coming Soon
                </button>
              </div>
            </div>

            {/* Course 5: Physical Design */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="relative h-32 bg-gradient-to-br from-orange-50 to-orange-100">
                <img
                  src="/new course.jpeg"
                  alt="Physical Design"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    console.error('Course 5 image failed:', e);
                  }}
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold text-[#1c1d1f] mb-3">
                  Physical Design
                </h3>
                <p className="text-sm text-[#6a6f73] mb-4 min-h-24 text-left">
                  Learn floorplanning, placement, routing, and timing closure for ASIC design.
                </p>
                <button className="bg-[#a435f0] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#8b2db8] transition-colors">
                  Coming Soon
                </button>
              </div>
            </div>

            {/* Course 6: Analog Machine */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="relative h-32 bg-gradient-to-br from-indigo-50 to-indigo-100">
                <img
                  src="/SOC.jpg"
                  alt="Analog Machine"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    console.error('Course 6 image failed:', e);
                  }}
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold text-[#1c1d1f] mb-3">
                  Analog Machine
                </h3>
                <p className="text-sm text-[#6a6f73] mb-4 min-h-24 text-left">
                  System-on-chip design, IP integration, and verification methodologies.
                </p>
                <button className="bg-[#a435f0] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#8b2db8] transition-colors">
                  Coming Soon
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Modal */}
      {showCurriculumModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-[#1c1d1f]">
                  Course Curriculum
                </h3>
                <button
                  onClick={() => setShowCurriculumModal(false)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>
              
              <div className="space-y-6">
                <div className="border-l-4 border-[#a435f0] pl-4">
                  <h4 className="text-lg font-semibold text-[#1c1d1f] mb-2">
                    Module 1 – RTL Design & IP Integration (15 Hours)
                  </h4>
                  <p className="text-[#6a6f73] leading-relaxed">
                    Learn Verilog coding fundamentals, synthesizable constructs, and best practices for subsystem-level IP integration. Gain practical experience with real-world bus protocols such as APB and AHB-lite. Simulate designs using Verilator and visualize results with GTKWave, enabling deep insight into design functionality.
                  </p>
                </div>
                
                <div className="border-l-4 border-[#a435f0] pl-4">
                  <h4 className="text-lg font-semibold text-[#1c1d1f] mb-2">
                    Module 2 – Advanced RTL Design and CDC/RDC Handling (15 Hours)
                  </h4>
                  <p className="text-[#6a6f73] leading-relaxed">
                    Master techniques for multi-clock domain designs and asynchronous resets. Design and verify FIFOs for asynchronous interfaces, implement low-power techniques like clock gating, and ensure robust Clock Domain Crossing (CDC) and Reset Domain Crossing (RDC) synchronization. Verify implementations with Verilator simulations and waveform analysis in GTKWave.
                  </p>
                </div>
                
                <div className="border-l-4 border-[#a435f0] pl-4">
                  <h4 className="text-lg font-semibold text-[#1c1d1f] mb-2">
                    Module 3 – RTL Synthesis and Static Timing Constraints (15 Hours)
                  </h4>
                  <p className="text-[#6a6f73] leading-relaxed">
                    Use open-source tools like Yosys and OpenSTA to transform RTL into a gate-level netlist, apply timing constraints, and analyze synthesis results for area, timing, and power. Understand the impact of coding styles and learn how to debug synthesis issues effectively.
                  </p>
                </div>
                
                <div className="border-l-4 border-[#a435f0] pl-4">
                  <h4 className="text-lg font-semibold text-[#1c1d1f] mb-2">
                    Module 4 – Physical Awareness: Standard Cells, LEF/DEF, Timing, and Parasitics (15 Hours)
                  </h4>
                  <p className="text-[#6a6f73] leading-relaxed">
                    Explore the physical design foundation—standard cells, LEF/DEF formats, and parasitics. Get hands-on experience with placement, routing, and parasitic extraction using tools like RePlAce, TritonCTS, Magic, and KLayout. Learn to perform signoff checks such as DRC, LVS, and STA.
                  </p>
                </div>
                
                <div className="border-l-4 border-[#a435f0] pl-4">
                  <h4 className="text-lg font-semibold text-[#1c1d1f] mb-2">
                    Module 5 – RTL to GDSII: Synthesis to Full Physical Design (15 Hours)
                  </h4>
                  <p className="text-[#6a6f73] leading-relaxed">
                    Execute the complete physical design flow—from floorplanning and placement to Clock Tree Synthesis (CTS), routing, and final GDSII generation. Understand design rule checking (DRC), layout vs. schematic verification (LVS), and basic low-power considerations during implementation.
                  </p>
                </div>
                
                <div className="border-l-4 border-[#a435f0] pl-4">
                  <h4 className="text-lg font-semibold text-[#1c1d1f] mb-2">
                    Module 6 – Final Collaborative Project (15 Hours)
                  </h4>
                  <p className="text-[#6a6f73] leading-relaxed">
                    Work in teams to complete an end-to-end SoC project starting from RTL and concluding with signoff. Implement scan chain insertion, integrate digital and analog IPs, perform full physical layout, and prepare final reports and documentation to industry standards.
                  </p>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <button
                  onClick={() => setShowCurriculumModal(false)}
                  className="bg-[#a435f0] text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-[#8b2db8] transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
} 