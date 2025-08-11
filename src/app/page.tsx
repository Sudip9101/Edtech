'use client';

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import KnowMoreSection from "@/components/KnowMoreSection";


export default function Home() {
  const [showKnowMore, setShowKnowMore] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [videoLoading, setVideoLoading] = useState(true);

  useEffect(() => {
    try {
    setIsMounted(true);
      
      // Add error handling for unhandled promise rejections
      const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
        console.error('Unhandled promise rejection:', event.reason);
        // Prevent the default browser behavior
        event.preventDefault();
      };

      // Add error handling for unhandled errors
      const handleError = (event: ErrorEvent) => {
        console.error('Unhandled error:', event.error);
        // Prevent the default browser behavior
        event.preventDefault();
      };

      // Add the event listeners
      window.addEventListener('unhandledrejection', handleUnhandledRejection);
      window.addEventListener('error', handleError);

      // Cleanup function
      return () => {
        window.removeEventListener('unhandledrejection', handleUnhandledRejection);
        window.removeEventListener('error', handleError);
      };
    } catch (error) {
      console.error('Error in useEffect:', error);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section with Video */}
      <section id="home" className="relative bg-white">
        <div className="relative h-screen">
          {videoError ? (
            <div className="w-full h-full bg-gradient-to-br from-[#F8F9FF] to-white flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#a435f0]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#a435f0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-[#6a6f73] text-lg">Video unavailable</p>
              </div>
            </div>
          ) : (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center' }}
                onError={(e) => {
                  console.error('Video error:', e);
                  setVideoError(true);
                  setVideoLoading(false);
                }}
                onLoadStart={() => {
                  console.log('Video loading started');
                  setVideoLoading(true);
                }}
                onCanPlay={() => {
                  console.log('Video can play');
                  setVideoLoading(false);
                }}
                onLoadedData={() => {
                  console.log('Video data loaded');
                  setVideoLoading(false);
                }}
                preload="auto"
          >
            <source src="/Edtech.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          )}
          
          {videoLoading && !videoError && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-white text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
                <p>Loading video...</p>
              </div>
            </div>
          )}
        </div>
        
        {/* Hero Content Section */}
        <section className="relative bg-[#FEFEFE] py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1c1d1f] mb-6 leading-tight">
                  Open-Source First EdTech Platform
                </h1>
                <p className="text-xl font-semibold text-[#a435f0] mb-4">
                  Advancing Semiconductor Education & Innovation
                </p>
                <p className="text-lg text-[#6a6f73] mb-6 max-w-2xl leading-relaxed">
                  We are dedicated to strengthening India&apos;s capabilities in chip design, SoC development, and open-source EDA tool usage, contributing to self-reliance in the semiconductor domain.
                </p>
                <p className="text-lg text-[#6a6f73] mb-6 max-w-2xl leading-relaxed">
                  In an era where semiconductors are key to strategic independence and digital sovereignty, our mission is to make chip design skills accessible and affordable to students, researchers, startups, and MSMEs.
                </p>
                <p className="text-lg text-[#6a6f73] mb-8 max-w-2xl leading-relaxed">
                  Whether you are an engineering student, faculty member, startup founder, or an experienced chip designer, our platform offers tools, training, IPs, and mentorship to help you take your designs from RTL to GDSII using complete open-source flows.
                </p>
                <div className="flex gap-4">
                  <button 
                    onClick={() => setShowKnowMore(true)}
                    className="bg-[#a435f0] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#8b2db8] transition-colors flex items-center gap-2"
                  >
                    Know More
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

      {/* Show KnowMoreSection when button is clicked - only after mounting */}
      {isMounted && showKnowMore && (
        <div className="relative">
          <KnowMoreSection key="know-more-section" onClose={() => setShowKnowMore(false)} />
        </div>
      )}

      {/* Platform Features Section - REMOVING THIS DUPLICATE SECTION */}
      {/* <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F8F9FF]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1c1d1f] mb-4">
              Platform Features
            </h2>
            <p className="text-lg text-[#6a6f73] max-w-3xl mx-auto">
              Everything you need to succeed in semiconductor design with open-source tools
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#a435f0]/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#a435f0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.004 5.004 0 00-9.78 1.002A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1c1d1f] mb-4">Cloud-Based EDA Tool Access</h3>
              <p className="text-[#6a6f73] leading-relaxed">Run pre-installed, browser-based open-source EDA tools from anywhere — no setup hassles, just log in and start designing.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#a435f0]/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#a435f0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1c1d1f] mb-4">Self-Paced Tutorials</h3>
              <p className="text-[#6a6f73] leading-relaxed">Follow structured, beginner-to-advanced tutorials guiding you through the complete chip design process.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#a435f0]/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#a435f0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1c1d1f] mb-4">Reproducible Lab Exercises</h3>
              <p className="text-[#6a6f73] leading-relaxed">Each lab comes with pre-configured environments ensuring consistent, verifiable results for every learner.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#a435f0]/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#a435f0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.605-9-1.65M12 6a4 4 0 100 8 4 4 0 000-8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1c1d1f] mb-4">Expert-Curated Curriculum</h3>
              <p className="text-[#6a6f73] leading-relaxed">Learn from courses designed by semiconductor industry veterans, ensuring direct relevance to current hiring needs.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#a435f0]/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#a435f0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1c1d1f] mb-4">Technical Support</h3>
              <p className="text-[#6a6f73] leading-relaxed">Get fast, personalized query resolution via an integrated support ticketing system.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#a435f0]/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#a435f0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1c1d1f] mb-4">Git-Based Collaboration</h3>
              <p className="text-[#6a6f73] leading-relaxed">Collaborate on live projects, track changes, and submit assignments using Git — just like in real-world engineering teams.</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Ready to Start Learning? CTA (moved above Contact) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F8F9FF]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1c1d1f] mb-6">
            Ready to Start Learning?
          </h2>
          <p className="text-lg text-[#6a6f73] mb-8 max-w-2xl mx-auto">
            Explore our comprehensive courses in RTL Design, Physical Design, Synthesis, and more. 
            Master chip design from RTL to GDSII using complete open-source flows.
          </p>
          <Link 
            href="/courses" 
            className="inline-flex items-center gap-2 bg-[#a435f0] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#8b2db8] transition-colors"
          >
            View All Courses
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Contact Us Section (replaces Specialized Courses) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1c1d1f] mb-4">Contact Us</h2>
            <p className="text-lg text-[#6a6f73] max-w-3xl mx-auto">Have questions or want to collaborate? Send us a message and well get back to you soon.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Contact Details */}
            <div className="bg-[#F8F9FF] p-8 rounded-xl border border-[#e5e7eb]">
              <h3 className="text-xl font-semibold text-[#1c1d1f] mb-4">Get in touch</h3>
              <p className="text-[#6a6f73] mb-6">Reach out to us for partnerships, curriculum, workshops, or any general queries.</p>
              <ul className="space-y-3 text-[#1c1d1f]">
                <li><span className="font-medium">Email:</span> <a href="mailto:info@example.com" className="text-[#a435f0] hover:underline">info@example.com</a></li>
                <li><span className="font-medium">Community:</span> <Link href="/community" className="text-[#a435f0] hover:underline">Join the community</Link></li>
                <li><span className="font-medium">Courses:</span> <Link href="/courses" className="text-[#a435f0] hover:underline">Browse courses</Link></li>
              </ul>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-xl border border-[#e5e7eb] shadow-sm">
              <form onSubmit={(e) => { e.preventDefault(); alert('Thanks for reaching out! We will get back to you soon.'); (e.currentTarget as HTMLFormElement).reset(); }}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#374151] mb-1">Name</label>
                    <input type="text" required className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#a435f0]" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#374151] mb-1">Email</label>
                    <input type="email" required className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#a435f0]" />
                  </div>
                </div>
                <div className="mt-4">
                  <label className="block text-sm font-medium text-[#374151] mb-1">Message</label>
                  <textarea required rows={5} className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#a435f0]"></textarea>
                </div>
                <button type="submit" className="mt-6 bg-[#a435f0] text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-[#8b2db8] transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Removed duplicate CTA (now moved above Contact) */}



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

          <div className="flex justify-center items-center space-x-24">
            <div className="flex-shrink-0 w-80 h-80 flex items-center justify-center">
                <Image
                  src="/SCL.png"
                alt="SCL - Semi-Conductor Laboratory"
                width={280}
                height={280}
                  className="object-contain max-w-full max-h-full"
                />
              </div>
            <div className="flex-shrink-0 w-80 h-80 flex items-center justify-center">
                <Image
                  src="/tata.webp"
                alt="Tata Electronics"
                width={280}
                height={280}
                  className="object-contain max-w-full max-h-full"
                />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
