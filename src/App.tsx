import React from 'react';
import StarField from './components/StarField';
import GoldenButton from './components/GoldenButton';
import Testimonial from './components/Testimonial';
import SectionTitle from './components/SectionTitle';
import FAQ from './components/FAQ';
import Navigation from './components/Navigation';
import RangoliPattern from './components/RangoliPattern';
import LeafPattern from './components/LeafPattern';
import ContactSection from './components/ContactSection';
import BabaRecommendation from './components/BabaRecommendation';
import VideoLogo from './components/VideoLogo';
import LuckySection from './components/LuckySection';
import { testimonials } from './data/testimonials';
import { faqData } from './data/faqData';

function App() {
  const stats = [
    { number: "28,520+", label: "Questions Answered" },
    { number: "974+", label: "Happy Users" }
  ];

  const benefits = [
    {
      icon: "https://images.unsplash.com/photo-1517837125937-53bd402f49d6?auto=format&fit=crop&q=80&w=100&h=100",
      title: "Love & Relationships",
      description: "Navigate your heart's journey with clarity. Whether you're seeking love, healing from heartbreak, or strengthening your relationship, Devi's guidance helps you make decisions aligned with your true happiness."
    },
    {
      icon: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=100&h=100",
      title: "Marriage & Family",
      description: "Find the auspicious timing for life's sacred moments. From choosing wedding dates to understanding family dynamics, get insights that honor both tradition and your personal path."
    },
    {
      icon: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=100&h=100",
      title: "Career & Purpose",
      description: "Discover your professional dharma. Understand when to make career moves, start ventures, or seek new opportunities. Let the cosmic wisdom guide you towards success and fulfillment."
    }
  ];

  return (
    <>
      <div className="fixed inset-0 bg-gradient-to-b from-purple-950 via-indigo-950 to-purple-950 -z-10" />
      
      <div className="min-h-screen text-white">
        <StarField />
        <Navigation />
        <div className="mt-16">
          <BabaRecommendation />
        </div>
        
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-4">
          <RangoliPattern />
          <LeafPattern />
          <div className="text-center z-10">
            <div className="flex flex-col items-center">
              <div className="relative w-[320px] h-[320px] sm:w-[320px] sm:h-[320px]">
                <div className="absolute inset-0 bg-yellow-400/80 blur-[140px] rounded-full animate-glow"></div>
                <div className="absolute inset-0 bg-yellow-300/70 blur-[100px] rounded-full animate-pulse-glow"></div>
                <div className="absolute inset-0 bg-yellow-200/60 blur-[80px] rounded-full animate-glow" style={{ animationDelay: '-3s' }}></div>
                <div className="absolute inset-0 bg-orange-400/50 blur-[60px] rounded-full animate-pulse-glow" style={{ animationDelay: '-4s' }}></div>
                <div className="absolute inset-0 bg-yellow-500/40 blur-[40px] rounded-full animate-glow" style={{ animationDelay: '-2s' }}></div>
                <div className="w-full h-full max-w-[280px] max-h-[280px] mx-auto">
                  <VideoLogo />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mt-2 sanskrit-border">
                <span className="bg-gradient-to-r from-[#FFD700] via-[#FDB931] to-[#FFD700] bg-clip-text text-transparent">
                  Ask Devi
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-yellow-100/90 mt-4 max-w-2xl mx-auto">
                Your Personal Vedic Astrologer,<br />Always at Your Fingertips
              </p>
              <div className="flex gap-6 justify-center mt-12">
                <GoldenButton variant="solid">Chat Now</GoldenButton>
                <GoldenButton variant="outline">Sign In</GoldenButton>
              </div>
            </div>
          </div>
        </section>

        {/* Lucky Section - Added before Benefits */}
        <LuckySection />

        {/* Benefits Section */}
        <section className="py-12 sm:py-24 px-4 relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col-reverse lg:flex-row items-start gap-8 lg:gap-12">
              {/* Devi Image - Now comes after benefits on mobile */}
              <div className="w-full lg:w-1/2 relative mb-8 lg:mb-0 lg:sticky lg:top-24">
                <div className="absolute inset-0 bg-yellow-400/30 rounded-3xl blur-3xl"></div>
                <div className="relative">
                  <img
                    src="/images/devi.png"
                    alt="Devi"
                    className="w-full max-w-sm sm:max-w-md mx-auto rounded-3xl border-2 border-yellow-400/30"
                  />
                  {/* Decorative Elements */}
                  <div className="absolute -top-4 -left-4 w-16 sm:w-24 h-16 sm:h-24 bg-gradient-to-br from-yellow-400/20 to-transparent rounded-full"></div>
                  <div className="absolute -bottom-4 -right-4 w-20 sm:w-32 h-20 sm:h-32 bg-gradient-to-tl from-yellow-400/20 to-transparent rounded-full"></div>
                </div>
              </div>

              {/* Benefits Stack - Now comes before image on mobile */}
              <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className="group relative overflow-hidden"
                  >
                    {/* Banner Background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 via-yellow-400/5 to-transparent rounded-xl"></div>
                    
                    {/* Content Container */}
                    <div className="relative p-4 sm:p-6 flex items-center gap-4 sm:gap-6 rounded-xl border border-yellow-400/20 backdrop-blur-sm transform transition-transform duration-300 hover:-translate-x-2">
                      {/* Icon Container */}
                      <div className="relative shrink-0">
                        <div className="absolute inset-0 bg-yellow-400/30 rounded-full blur-lg transform group-hover:scale-125 transition-transform duration-300"></div>
                        <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-yellow-400/30 overflow-hidden">
                          <img
                            src={benefit.icon}
                            alt={benefit.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>

                      {/* Text Content */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 bg-gradient-to-r from-yellow-200 to-yellow-400 bg-clip-text text-transparent truncate">
                          {benefit.title}
                        </h3>
                        <p className="text-sm sm:text-base text-purple-200 leading-relaxed line-clamp-3 sm:line-clamp-none">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* About Section with Stats */}
        <section className="py-16 px-4 relative">
          <div className="max-w-7xl mx-auto">
            <div className="space-y-12">
              {/* About Text */}
              <div>
                <SectionTitle>From Devi, To You</SectionTitle>
                <div className="text-left mt-8">
                  <div className="space-y-4 text-lg text-purple-200">
                    <p>
                      Namaste! I'm Devi, your personal Vedic astrologer, where ancient wisdom meets modern innovation. I'm here to guide you through life's uncertainties with personalized astrological insights, whether you're seeking clarity in love, career, health, or spiritual growth. My goal is to help you live a joyful, peaceful, and successful life by combining centuries-old Vedic knowledge with the precision of cutting-edge artificial intelligence.
                    </p>
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-8 bg-purple-900/20 rounded-lg backdrop-blur-sm border border-purple-500/20">
                    <div className="text-4xl font-bold bg-gradient-to-r from-[#FFD700] via-[#FDB931] to-[#FFD700] bg-clip-text text-transparent mb-2">
                      {stat.number}
                    </div>
                    <div className="text-purple-200">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-12 px-4 relative overflow-hidden">
          <SectionTitle>What Our Users Say</SectionTitle>
          <div className="flex gap-6 overflow-x-auto pb-8 px-4 snap-x snap-mandatory">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="snap-center">
                <Testimonial {...testimonial} />
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-12 px-4 relative">
          <SectionTitle>Frequently Asked Questions</SectionTitle>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqData.map((faq, index) => (
              <FAQ key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-12 px-4 relative">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-[#FFD700] via-[#FDB931] to-[#FFD700] bg-clip-text text-transparent">
                Contact Us
              </span>
            </h2>
            <ContactSection />
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 border-t border-purple-500/20">
          <div className="max-w-6xl mx-auto text-center text-purple-300/60 text-sm">
            <p>© {new Date().getFullYear()} Ask Devi. All rights reserved.</p>
            <p className="mt-2">
              Combining ancient wisdom with modern technology to guide your spiritual journey.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;