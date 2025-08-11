'use client';

import { X } from 'lucide-react';

interface KnowMoreSectionProps {
  onClose?: () => void;
}

export default function KnowMoreSection({ onClose }: KnowMoreSectionProps) {
  return (
    <>
      {/* Platform Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F8F9FF] relative">
        {onClose && (
          <button
            onClick={onClose}
            className="absolute top-8 right-8 text-gray-500 hover:text-gray-700 transition-colors z-10"
            aria-label="Close section"
          >
            <X className="w-6 h-6" />
          </button>
        )}
        
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1c1d1f] mb-4">
              Platform Features
            </h2>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4 group hover:bg-white/50 p-4 rounded-lg transition-all duration-300 hover:shadow-md">
              <div className="w-3 h-3 bg-[#a435f0] rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-[#1c1d1f] mb-2 group-hover:text-[#a435f0] transition-colors duration-300">
                  Cloud-Based EDA Tool Access – Anytime, Anywhere
                </h3>
                <p className="text-[#6a6f73] leading-relaxed">
                  Run pre-installed, browser-based open-source EDA tools from anywhere — no setup hassles, just log in and start designing.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 group hover:bg-white/50 p-4 rounded-lg transition-all duration-300 hover:shadow-md">
              <div className="w-3 h-3 bg-[#a435f0] rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-[#1c1d1f] mb-2 group-hover:text-[#a435f0] transition-colors duration-300">
                  Self-Paced, Step-by-Step Tutorials
                </h3>
                <p className="text-[#6a6f73] leading-relaxed">
                  Follow structured, beginner-to-advanced tutorials guiding you through the complete chip design process.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 group hover:bg-white/50 p-4 rounded-lg transition-all duration-300 hover:shadow-md">
              <div className="w-3 h-3 bg-[#a435f0] rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-[#1c1d1f] mb-2 group-hover:text-[#a435f0] transition-colors duration-300">
                  Reproducible Lab Exercises
                </h3>
                <p className="text-[#6a6f73] leading-relaxed">
                  Each lab comes with pre-configured environments ensuring consistent, verifiable results for every learner.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 group hover:bg-white/50 p-4 rounded-lg transition-all duration-300 hover:shadow-md">
              <div className="w-3 h-3 bg-[#a435f0] rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-[#1c1d1f] mb-2 group-hover:text-[#a435f0] transition-colors duration-300">
                  Expert-Curated Curriculum
                </h3>
                <p className="text-[#6a6f73] leading-relaxed">
                  Learn from courses designed by semiconductor industry veterans, ensuring direct relevance to current hiring needs.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 group hover:bg-white/50 p-4 rounded-lg transition-all duration-300 hover:shadow-md">
              <div className="w-3 h-3 bg-[#a435f0] rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-[#1c1d1f] mb-2 group-hover:text-[#a435f0] transition-colors duration-300">
                  Ticket-Based Technical Support
                </h3>
                <p className="text-[#6a6f73] leading-relaxed">
                  Get fast, personalized query resolution via an integrated support ticketing system.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 group hover:bg-white/50 p-4 rounded-lg transition-all duration-300 hover:shadow-md">
              <div className="w-3 h-3 bg-[#a435f0] rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-[#1c1d1f] mb-2 group-hover:text-[#a435f0] transition-colors duration-300">
                  Git-Based Collaborative Projects
                </h3>
                <p className="text-[#6a6f73] leading-relaxed">
                  Collaborate on live projects, track changes, and submit assignments using Git — just like in real-world engineering teams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Courses Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1c1d1f] mb-4">
              Specialized Industry-Relevant Courses – Coming Soon
            </h2>
            <p className="text-lg text-[#6a6f73] max-w-3xl mx-auto">
              Designed to meet global semiconductor workforce demands, our upcoming open-source EDA-based courses include:
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-4 group hover:bg-[#F8F9FF] p-4 rounded-lg transition-all duration-300">
              <div className="w-2 h-2 bg-[#a435f0] rounded-full group-hover:scale-150 transition-transform duration-300"></div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-[#1c1d1f] group-hover:text-[#a435f0] transition-colors duration-300">
                  RTL Design & Verification
                </h3>
                <p className="text-[#6a6f73] leading-relaxed">
                  Master Verilog, SystemVerilog, and verification flows for SoC IP development.
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 group hover:bg-[#F8F9FF] p-4 rounded-lg transition-all duration-300">
              <div className="w-2 h-2 bg-[#a435f0] rounded-full group-hover:scale-150 transition-transform duration-300"></div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-[#1c1d1f] group-hover:text-[#a435f0] transition-colors duration-300">
                  Physical Design
                </h3>
                <p className="text-[#6a6f73] leading-relaxed">
                  Learn floorplanning, placement, routing, STA, and signoff flows using open-source tools.
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 group hover:bg-[#F8F9FF] p-4 rounded-lg transition-all duration-300">
              <div className="w-2 h-2 bg-[#a435f0] rounded-full group-hover:scale-150 transition-transform duration-300"></div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-[#1c1d1f] group-hover:text-[#a435f0] transition-colors duration-300">
                  Design for Test (DFT)
                </h3>
                <p className="text-[#6a6f73] leading-relaxed">
                  Gain skills in scan insertion, ATPG, BIST, and testability analysis.
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 group hover:bg-[#F8F9FF] p-4 rounded-lg transition-all duration-300">
              <div className="w-2 h-2 bg-[#a435f0] rounded-full group-hover:scale-150 transition-transform duration-300"></div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-[#1c1d1f] group-hover:text-[#a435f0] transition-colors duration-300">
                  Analog & Mixed-Signal (AMS) Design
                </h3>
                <p className="text-[#6a6f73] leading-relaxed">
                  Explore circuit design, simulation, and verification for analog IPs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 