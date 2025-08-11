'use client';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Events() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#F8F9FF] to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1c1d1f] mb-6 leading-tight">
              Upcoming Events & Workshops
            </h1>
            <p className="text-xl text-[#6a6f73] max-w-3xl mx-auto leading-relaxed">
              Join our workshops, webinars, and industry events to stay updated with the latest 
              in semiconductor design and open-source EDA tools.
            </p>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1c1d1f] mb-4">
              Featured Events
            </h2>
            <p className="text-lg text-[#6a6f73] max-w-3xl mx-auto">
              Discover upcoming workshops, conferences, and learning opportunities
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Event 1 */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-[#a435f0]/10 to-[#8b2db8]/10 flex items-center justify-center">
                <svg className="w-16 h-16 text-[#a435f0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-sm text-[#a435f0] font-medium mb-2">Workshop</div>
                <h3 className="text-xl font-bold text-[#1c1d1f] mb-3">RTL Design Fundamentals</h3>
                <p className="text-[#6a6f73] text-sm mb-4">Learn the basics of RTL design with hands-on Verilog coding exercises.</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#6a6f73]">Dec 15, 2024</span>
                  <button className="bg-[#a435f0] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#8b2db8] transition-colors">
                    Register Now
                  </button>
                </div>
              </div>
            </div>

            {/* Event 2 */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-[#a435f0]/10 to-[#8b2db8]/10 flex items-center justify-center">
                <svg className="w-16 h-16 text-[#a435f0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-sm text-[#a435f0] font-medium mb-2">Webinar</div>
                <h3 className="text-xl font-bold text-[#1c1d1f] mb-3">Open Source EDA Tools</h3>
                <p className="text-[#6a6f73] text-sm mb-4">Explore the power of open-source EDA tools for chip design.</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#6a6f73]">Dec 20, 2024</span>
                  <button className="bg-[#a435f0] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#8b2db8] transition-colors">
                    Register Now
                  </button>
                </div>
              </div>
            </div>

            {/* Event 3 */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-[#a435f0]/10 to-[#8b2db8]/10 flex items-center justify-center">
                <svg className="w-16 h-16 text-[#a435f0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-sm text-[#a435f0] font-medium mb-2">Conference</div>
                <h3 className="text-xl font-bold text-[#1c1d1f] mb-3">Semiconductor Summit 2024</h3>
                <p className="text-[#6a6f73] text-sm mb-4">Join industry leaders for insights into the future of chip design.</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#6a6f73]">Jan 15, 2025</span>
                  <button className="bg-[#a435f0] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#8b2db8] transition-colors">
                    Register Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold text-[#1c1d1f] mb-4">
              Want to Host an Event?
            </h3>
            <p className="text-lg text-[#6a6f73] mb-8 max-w-2xl mx-auto">
              Partner with us to organize workshops, webinars, or industry events 
              that advance semiconductor education and innovation.
            </p>
            <button className="bg-[#a435f0] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#8b2db8] transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 