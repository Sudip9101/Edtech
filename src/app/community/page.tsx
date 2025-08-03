import Image from "next/image";
import { Github, Calendar, Code, MessageSquare, Users2, Globe } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function Community() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Image */}
      <section className="relative">
        <div className="max-w-4xl mx-auto h-80 md:h-96 lg:h-[500px] relative overflow-hidden rounded-2xl">
          <Image
            src="/community.jpeg"
            alt="Community Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F6F7F9]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2A2B3F] mb-6 leading-tight">
              A National Collaborative of Chip Learners, Builders, and Innovators
            </h1>
            <p className="text-xl text-[#6a6f73] max-w-4xl mx-auto leading-relaxed">
              India&apos;s Open Silicon Movement Starts Here
            </p>
          </div>

          {/* Community Members Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-white p-10 rounded-xl shadow-sm border border-[#d1d7dc] hover:shadow-md transition-shadow">
              <div className="w-full h-48 mb-8 relative overflow-hidden rounded-lg">
                <Image
                  src="/engineer.jpg"
                  alt="Engineering Students"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-semibold text-[#2A2B3F] mb-4">Engineering Students</h3>
              <p className="text-[#6a6f73] text-lg">Designing real IP blocks and contributing to open-source projects</p>
            </div>

            <div className="bg-white p-10 rounded-xl shadow-sm border border-[#d1d7dc] hover:shadow-md transition-shadow">
              <div className="w-full h-48 mb-8 relative overflow-hidden rounded-lg">
                <Image
                  src="/proffesor.jpeg"
                  alt="Faculty Members"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-semibold text-[#2A2B3F] mb-4">Faculty Members</h3>
              <p className="text-[#6a6f73] text-lg">Mentoring SoC projects and creating curriculum</p>
            </div>

            <div className="bg-white p-10 rounded-xl shadow-sm border border-[#d1d7dc] hover:shadow-md transition-shadow">
              <div className="w-full h-48 mb-8 relative overflow-hidden rounded-lg">
                <Image
                  src="/research.jpg"
                  alt="Research Groups"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-semibold text-[#2A2B3F] mb-4">Research Groups</h3>
              <p className="text-[#6a6f73] text-lg">Validating toolchains and tapeouts</p>
            </div>

            <div className="bg-white p-10 rounded-xl shadow-sm border border-[#d1d7dc] hover:shadow-md transition-shadow">
              <div className="w-full h-48 mb-8 relative overflow-hidden rounded-lg">
                <Image
                  src="/startup.jpg"
                  alt="Startups & Industries"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-semibold text-[#2A2B3F] mb-4">Startups & Industries</h3>
              <p className="text-[#6a6f73] text-lg">Building open IP pipelines</p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Can Do Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2A2B3F] mb-4">
              As a member of the community, you can:
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            <div className="bg-[#F6F7F9] p-8 rounded-xl">
              <div className="w-14 h-14 bg-[#8B2DB8] rounded-lg flex items-center justify-center mb-6">
                <Github className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#2A2B3F] mb-3">Collaborate on IPs</h3>
              <p className="text-[#6a6f73] text-base">Work on IPs and projects via GitHub with the community</p>
            </div>

            <div className="bg-[#F6F7F9] p-8 rounded-xl">
              <div className="w-14 h-14 bg-[#8B2DB8] rounded-lg flex items-center justify-center mb-6">
                <Calendar className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#2A2B3F] mb-3">Attend Events</h3>
              <p className="text-[#6a6f73] text-base">Join webinars, workshops, and guest lectures</p>
            </div>

            <div className="bg-[#F6F7F9] p-8 rounded-xl">
              <div className="w-14 h-14 bg-[#8B2DB8] rounded-lg flex items-center justify-center mb-6">
                <Code className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#2A2B3F] mb-3">Contribute Labs</h3>
              <p className="text-[#6a6f73] text-base">Share labs or tools to the ecosystem</p>
            </div>

            <div className="bg-[#F6F7F9] p-8 rounded-xl">
              <div className="w-14 h-14 bg-[#8B2DB8] rounded-lg flex items-center justify-center mb-6">
                <Users2 className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#2A2B3F] mb-3">Join FPGA Teams</h3>
              <p className="text-[#6a6f73] text-base">Participate in FPGA evaluation teams for open IPs</p>
            </div>

            <div className="bg-[#F6F7F9] p-8 rounded-xl">
              <div className="w-14 h-14 bg-[#8B2DB8] rounded-lg flex items-center justify-center mb-6">
                <Globe className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#2A2B3F] mb-3">Form ChipClubs</h3>
              <p className="text-[#6a6f73] text-base">Create ChipClubs in your institute or region</p>
            </div>

            <div className="bg-[#F6F7F9] p-8 rounded-xl">
              <div className="w-14 h-14 bg-[#8B2DB8] rounded-lg flex items-center justify-center mb-6">
                <MessageSquare className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#2A2B3F] mb-3">Discuss & Debug</h3>
              <p className="text-[#6a6f73] text-base">Engage in peer groups and mentor channels</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F6F7F9]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#2A2B3F] mb-6">
                Together, we are building a fabric of innovation, skilling, and open hardware.
              </h2>
              <p className="text-lg text-[#6a6f73] mb-8 leading-relaxed">
                Join our fast-growing, mission-driven community and be part of India&apos;s open silicon movement. 
                Whether you&apos;re a student, faculty member, researcher, or industry professional, there&apos;s a place for you in our ecosystem.
              </p>
              <div className="flex gap-4">
                <button className="bg-[#8B2DB8] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#7A1AA7] transition-colors">
                  Join Community
                </button>
                <button className="border-2 border-[#8B2DB8] text-[#8B2DB8] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#8B2DB8] hover:text-white transition-colors">
                  Learn More
                </button>
              </div>
            </div>
            <div className="text-center lg:text-left">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="w-full h-48 mb-6 relative overflow-hidden rounded-lg">
                  <Image
                    src="/future.jpeg"
                    alt="Building the Future"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-[#2A2B3F] mb-4">
                  Building the Future
                </h3>
                <p className="text-lg text-[#6a6f73] leading-relaxed">
                  We&apos;re creating an ecosystem where innovation meets collaboration, 
                  and where every member contributes to India&apos;s semiconductor future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 