import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function WhyChooseUs() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2 text-[#2A2B3F] hover:text-[#a435f0] transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-semibold">Back to Home</span>
            </Link>
            <h1 className="text-2xl font-bold text-[#2A2B3F]">Why Choose Us</h1>
            <div className="w-20"></div> {/* Spacer for centering */}
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <section className="relative">
        <div className="w-full h-96 md:h-[500px] lg:h-[600px] relative overflow-hidden">
          <Image
            src="/aboutus.jpg"
            alt="About Us Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2A2B3F] mb-6 leading-tight">
              Bringing Academia, Industry, and Open Tools Together
            </h1>
            <p className="text-xl text-[#6a6f73] max-w-4xl mx-auto leading-relaxed">
              We combine tools, learning, and support into one seamless experience
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-[#F6F7F9] p-6 rounded-xl">
              <div className="w-full h-32 mb-4 relative overflow-hidden rounded-lg">
                <Image
                  src="/tile1.jpg"
                  alt="Pre-installed EDA Tool Environment"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-[#2A2B3F] mb-2">Pre-installed EDA Tool Environment</h3>
              <p className="text-[#6a6f73] text-sm">No student left behind due to software installation issues.</p>
            </div>

            <div className="bg-[#F6F7F9] p-6 rounded-xl">
              <div className="w-full h-32 mb-4 relative overflow-hidden rounded-lg">
                <Image
                  src="/tile2.jpg"
                  alt="Integrated Student Support System"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-[#2A2B3F] mb-2">Integrated Student Support System</h3>
              <p className="text-[#6a6f73] text-sm">Raise tickets for tool access issues, lab bugs, or learning doubts.</p>
            </div>

            <div className="bg-[#F6F7F9] p-6 rounded-xl">
              <div className="w-full h-32 mb-4 relative overflow-hidden rounded-lg">
                <Image
                  src="/tile3.png"
                  alt="Dedicated Mentor Escalation"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-[#2A2B3F] mb-2">Dedicated Mentor Escalation</h3>
              <p className="text-[#6a6f73] text-sm">Domain-wise mentors available for RTL, DFT, Physical Design, etc.</p>
            </div>

            <div className="bg-[#F6F7F9] p-6 rounded-xl">
              <div className="w-full h-32 mb-4 relative overflow-hidden rounded-lg">
                <Image
                  src="/tile4.jpg"
                  alt="Remote Labs, 24x7 Access"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-[#2A2B3F] mb-2">Remote Labs, 24x7 Access</h3>
              <p className="text-[#6a6f73] text-sm">Learn Verilog, debug synthesis issues and other advanced concepts at your own pace and time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F6F7F9]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#2A2B3F] mb-6">
                We&apos;re not just another online learning platform
              </h2>
              <p className="text-lg text-[#6a6f73] mb-8 leading-relaxed">
                We&apos;re building a national capability in semiconductor education and design IP creation. Here&apos;s what sets us apart:
              </p>

              {/* Features List */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#a435f0] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">🔹</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#2A2B3F] mb-1">Open-Source Toolchain</h3>
                    <p className="text-[#6a6f73]">Hands-on with Yosys, OpenSTA, Magic, Verilator, OpenROAD</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#a435f0] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">🔹</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#2A2B3F] mb-1">Fabrication-Ready Flows</h3>
                    <p className="text-[#6a6f73]">IPs can be deployed on FPGA or taken to SCL for tapeout</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#a435f0] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">🔹</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#2A2B3F] mb-1">Academia-Industry Synergy</h3>
                    <p className="text-[#6a6f73]">Designed with leading professors and silicon professionals</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#a435f0] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">🔹</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#2A2B3F] mb-1">Modular & Career-Aligned</h3>
                    <p className="text-[#6a6f73]">Each module builds towards full-stack chip design readiness</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#a435f0] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">🔹</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#2A2B3F] mb-1">Zero-Cost Tools, National-Scale Reach</h3>
                    <p className="text-[#6a6f73]">No licenses required, no vendor lock-in</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#a435f0] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">🔹</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#2A2B3F] mb-1">Mentor-Guided Community</h3>
                    <p className="text-[#6a6f73]">Learn with peers, industry mentors, and alumni network</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="text-center lg:text-left">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-[#2A2B3F] mb-4">
                  Our Vision
                </h3>
                <p className="text-lg text-[#6a6f73] leading-relaxed">
                  Our vision is to build India&apos;s Silicon Skilling Stack, layer by layer.
                </p>
                <div className="mt-8">
                  <button className="bg-[#a435f0] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#8b2db8] transition-colors">
                    Start Your Journey
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 