import Image from "next/image";
import Link from "next/link";
import { MessageSquare, Smartphone, Settings, TrendingUp, UserCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LogoBanner from "@/components/LogoBanner";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section with Video */}
      <section id="home" className="relative bg-white">
        <div className="relative h-screen">
          <video
            autoPlay
            muted
            loop
            playsInline
            controls={true}
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center' }}
          >
            <source src="/Edtech.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        
        {/* Hero Content Section */}
        <section className="relative bg-[#FEFEFE] py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#1c1d1f] mb-6 leading-tight">
                  Master Digital Design
                </h1>
                <p className="text-xl text-[#6a6f73] mb-8 max-w-2xl leading-relaxed">
                  Build hands-on skills with expert-led courses in RTL design, SoC development, and digital electronics. Join thousands of learners worldwide.
                </p>
                                  <div className="flex gap-4">
                    <button className="bg-[#a435f0] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#8b2db8] transition-colors flex items-center gap-2">
                      Start Learning
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                    <Link href="/why-choose-us" className="border-2 border-[#a435f0] text-[#a435f0] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#a435f0] hover:text-white transition-colors">
                      Why Choose Us
                    </Link>
                  </div>
              </div>
              <div className="hidden lg:block">
                <div className="relative">
                  <div className="w-[500px] h-96 bg-gradient-to-br from-[#a435f0]/20 to-[#8b2db8]/20 rounded-2xl flex items-center justify-center overflow-hidden">
                    <Image
                      src="/Hero.png"
                      alt="Digital Design Hero"
                      width={500}
                      height={384}
                      className="object-cover w-full h-full rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* Courses Section */}
      <section id="expertise" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F8F9FF]">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-16">
            {/* Course 1 - Text Left, Illustration Right */}
            <div className="flex items-center gap-12">
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-[#2A2B3F] mb-6">
                  RTL Design & IP Integration
                </h3>
                <p className="text-lg text-[#2A2B3F] leading-relaxed mb-6">
                  Learn Verilog coding, synthesizable constructs, and subsystem-level IP integration with real bus protocols like APB and AHB-lite.
                </p>
                <div className="flex items-center gap-4 text-sm text-[#2A2B3F] mb-6">
                  <span>🔹 Verilog coding & synthesizable constructs</span>
                  <span>🔹 APB and AHB-lite protocols</span>
                </div>
                <button className="bg-[#8B2DB8] text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-[#7A1AA7] transition-colors">
                  Start Learning
                </button>
              </div>
              <div className="flex-1 flex justify-center">
                <div className="w-80 h-64 bg-purple-50 rounded-xl flex items-center justify-center overflow-hidden shadow-lg">
                  <Image
                    src="/RTL.jpg"
                    alt="RTL Design & IP Integration"
                    width={320}
                    height={256}
                    className="object-cover w-full h-full rounded-xl"
                  />
                </div>
              </div>
            </div>

            {/* Course 2 - Illustration Left, Text Right */}
            <div className="flex items-center gap-12">
              <div className="flex-1 flex justify-center">
                <div className="w-80 h-64 bg-purple-50 rounded-xl flex items-center justify-center overflow-hidden shadow-lg">
                  <Image
                    src="/SOC.jpg"
                    alt="CDC/RDC & Advanced RTL Design"
                    width={320}
                    height={256}
                    className="object-cover w-full h-full rounded-xl"
                  />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-[#2A2B3F] mb-6">
                  CDC/RDC & Advanced RTL Design
                </h3>
                <p className="text-lg text-[#2A2B3F] leading-relaxed mb-6">
                  Handle multi-clock designs, asynchronous resets, FIFOs, and low-power design techniques like clock gating.
                </p>
                <div className="flex items-center gap-4 text-sm text-[#2A2B3F] mb-6">
                  <span>🔹 Multi-clock designs & asynchronous resets</span>
                  <span>🔹 FIFOs & clock gating</span>
                </div>
                <button className="bg-[#8B2DB8] text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-[#7A1AA7] transition-colors">
                  Start Learning
                </button>
              </div>
            </div>

            {/* Course 3 - Text Left, Illustration Right */}
            <div className="flex items-center gap-12">
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-[#2A2B3F] mb-6">
                  Synthesis & Static Timing Analysis
                </h3>
                <p className="text-lg text-[#2A2B3F] leading-relaxed mb-6">
                  Use open-source tools like Yosys and OpenSTA to analyze area, timing, and power for RTL blocks and full SoCs.
                </p>
                <div className="flex items-center gap-4 text-sm text-[#2A2B3F] mb-6">
                  <span>🔹 Yosys and OpenSTA tools</span>
                  <span>🔹 Area, timing, and power analysis</span>
                </div>
                <button className="bg-[#8B2DB8] text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-[#7A1AA7] transition-colors">
                  Start Learning
                </button>
              </div>
              <div className="flex-1 flex justify-center">
                <div className="w-80 h-64 bg-purple-50 rounded-xl flex items-center justify-center overflow-hidden shadow-lg">
                  <Image
                    src="/DFT.webp"
                    alt="Synthesis & Static Timing Analysis"
                    width={320}
                    height={256}
                    className="object-cover w-full h-full rounded-xl"
                  />
                </div>
              </div>
            </div>

            {/* Course 4 - Illustration Left, Text Right */}
            <div className="flex items-center gap-12">
              <div className="flex-1 flex justify-center">
                <div className="w-80 h-64 bg-purple-50 rounded-xl flex items-center justify-center overflow-hidden shadow-lg">
                  <Image
                    src="/new course.jpeg"
                    alt="Physical Design & Timing Closure"
                    width={320}
                    height={256}
                    className="object-cover w-full h-full rounded-xl"
                  />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-[#2A2B3F] mb-6">
                  Physical Design & Timing Closure
                </h3>
                <p className="text-lg text-[#2A2B3F] leading-relaxed mb-6">
                  Step into placement, routing, and GDSII generation using RePlAce, TritonCTS, Magic, and KLayout. Perform signoff checks (DRC, LVS, STA).
                </p>
                <div className="flex items-center gap-4 text-sm text-[#2A2B3F] mb-6">
                  <span>🔹 RePlAce, TritonCTS, Magic, KLayout</span>
                  <span>🔹 DRC, LVS, STA signoff checks</span>
                </div>
                <button className="bg-[#8B2DB8] text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-[#7A1AA7] transition-colors">
                  Start Learning
                </button>
              </div>
            </div>

            {/* Course 5 - Text Left, Illustration Right */}
            <div className="flex items-center gap-12">
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-[#2A2B3F] mb-6">
                  Capstone Project
                </h3>
                <p className="text-lg text-[#2A2B3F] leading-relaxed mb-6">
                  Team-based RTL to GDSII project with full documentation, scan chain insertion, physical layout, and report generation.
                </p>
                <div className="flex items-center gap-4 text-sm text-[#2A2B3F] mb-6">
                  <span>🔹 Team-based RTL to GDSII project</span>
                  <span>🔹 Full documentation & report generation</span>
                </div>
                <button className="bg-gray-400 text-white px-6 py-3 rounded-lg text-sm font-medium cursor-not-allowed">
                  Coming Soon
                </button>
              </div>
              <div className="flex-1 flex justify-center">
                <div className="w-80 h-64 bg-purple-50 rounded-xl flex items-center justify-center overflow-hidden shadow-lg">
                  <Image
                    src="/new  course2.jpeg"
                    alt="Capstone Project"
                    width={320}
                    height={256}
                    className="object-cover w-full h-full rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Collaborations Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FEFEFE]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1c1d1f] mb-4">
              Our Collaborations
            </h2>
            <p className="text-lg text-[#6a6f73] max-w-3xl mx-auto">
              Partnering with leading institutions and organizations to deliver world-class education
            </p>
          </div>

          <div className="relative overflow-hidden">
            <div className="flex animate-scroll space-x-16">
              <div className="flex-shrink-0 w-40 h-40 flex items-center justify-center">
                <Image
                  src="/NIT.png"
                  alt="NIT"
                  width={140}
                  height={140}
                  className="object-contain max-w-full max-h-full"
                />
              </div>
              <div className="flex-shrink-0 w-40 h-40 flex items-center justify-center">
                <Image
                  src="/nsut.png"
                  alt="NSUT"
                  width={140}
                  height={140}
                  className="object-contain max-w-full max-h-full"
                />
              </div>
              <div className="flex-shrink-0 w-40 h-40 flex items-center justify-center">
                <Image
                  src="/DTU.png"
                  alt="DTU"
                  width={140}
                  height={140}
                  className="object-contain max-w-full max-h-full"
                />
              </div>
              <div className="flex-shrink-0 w-40 h-40 flex items-center justify-center">
                <Image
                  src="/HCL.png"
                  alt="HCL"
                  width={140}
                  height={140}
                  className="object-contain max-w-full max-h-full"
                />
              </div>
              <div className="flex-shrink-0 w-40 h-40 flex items-center justify-center">
                <Image
                  src="/NIELIT-Preview.png"
                  alt="NIELIT"
                  width={140}
                  height={140}
                  className="object-contain max-w-full max-h-full"
                />
              </div>
              <div className="flex-shrink-0 w-40 h-40 flex items-center justify-center">
                <Image
                  src="/Ministry.png"
                  alt="Ministry"
                  width={140}
                  height={140}
                  className="object-contain max-w-full max-h-full"
                />
              </div>
              <div className="flex-shrink-0 w-40 h-40 flex items-center justify-center">
                <Image
                  src="/SCL.png"
                  alt="SCL"
                  width={140}
                  height={140}
                  className="object-contain max-w-full max-h-full"
                />
              </div>
              <div className="flex-shrink-0 w-40 h-40 flex items-center justify-center">
                <Image
                  src="/tata.webp"
                  alt="Tata"
                  width={140}
                  height={140}
                  className="object-contain max-w-full max-h-full"
                />
              </div>
              {/* Duplicate for seamless loop */}
              <div className="flex-shrink-0 w-40 h-40 flex items-center justify-center">
                <Image
                  src="/NIT.png"
                  alt="NIT"
                  width={140}
                  height={140}
                  className="object-contain max-w-full max-h-full"
                />
              </div>
              <div className="flex-shrink-0 w-40 h-40 flex items-center justify-center">
                <Image
                  src="/nsut.png"
                  alt="NSUT"
                  width={140}
                  height={140}
                  className="object-contain max-w-full max-h-full"
                />
              </div>
              <div className="flex-shrink-0 w-40 h-40 flex items-center justify-center">
                <Image
                  src="/DTU.png"
                  alt="DTU"
                  width={140}
                  height={140}
                  className="object-contain max-w-full max-h-full"
                />
              </div>
              <div className="flex-shrink-0 w-40 h-40 flex items-center justify-center">
                <Image
                  src="/HCL.png"
                  alt="HCL"
                  width={140}
                  height={140}
                  className="object-contain max-w-full max-h-full"
                />
              </div>
              <div className="flex-shrink-0 w-40 h-40 flex items-center justify-center">
                <Image
                  src="/NIELIT-Preview.png"
                  alt="NIELIT"
                  width={140}
                  height={140}
                  className="object-contain max-w-full max-h-full"
                />
              </div>
              <div className="flex-shrink-0 w-40 h-40 flex items-center justify-center">
                <Image
                  src="/Ministry.png"
                  alt="Ministry"
                  width={140}
                  height={140}
                  className="object-contain max-w-full max-h-full"
                />
              </div>
              <div className="flex-shrink-0 w-40 h-40 flex items-center justify-center">
                <Image
                  src="/SCL.png"
                  alt="SCL"
                  width={140}
                  height={140}
                  className="object-contain max-w-full max-h-full"
                />
              </div>
              <div className="flex-shrink-0 w-40 h-40 flex items-center justify-center">
                <Image
                  src="/tata.webp"
                  alt="Tata"
                  width={140}
                  height={140}
                  className="object-contain max-w-full max-h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
