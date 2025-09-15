import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import prof from '../assets/Prof.jpg'

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-amber-100 rounded-full text-amber-800 text-sm font-medium">
              Data Science Undergraduate
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Hi, I'm <span className="text-amber-600">Mufeedh Ahmed</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              2nd Year <span className="font-semibold">Data Science Undergraduate</span> at 
              <span className="font-semibold"> Sabaragamuwa University of Sri Lanka</span>.  
              Skilled in <span className="text-amber-600">Python, Web Development, and Data Analysis</span>, with projects in 
              machine learning and full-stack applications.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('#projects')}
                className="inline-flex items-center px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-colors duration-200 group"
              >
                View My Projects
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>

              <button
                onClick={() => scrollToSection('#contact')}
                className="inline-flex items-center px-8 py-4 border-2 border-gray-300 hover:border-amber-600 text-gray-700 hover:text-amber-600 font-semibold rounded-lg transition-colors duration-200"
              >
                Get in Touch
              </button>
            </div>

            {/* Achievements / Highlights */}
            <div className="flex flex-wrap items-center gap-6 pt-8">
              <div className="flex items-center text-gray-600">
                <div className="flex -space-x-2 mr-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                  ))}
                </div>
                <span className="text-sm font-medium">Passionate Learner</span>
              </div>

              <div className="text-gray-600 text-sm">
                <span className="font-semibold text-gray-900">2+</span> Projects Completed
              </div>

              <div className="text-gray-600 text-sm">
                <span className="font-semibold text-gray-900">Focused</span> on Data & AI
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden ">
              <img 
                src={prof}
                alt="Mufeedh Ahmed - Data Science Undergraduate"
                className="w-full h-full object-contain rounded-sm"
              />
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 max-w-xs">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-amber-600 fill-current" />
                  </div>
                </div>
                <div>
                  <div className="flex text-amber-400 mb-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    "Always curious and motivated to learn & build with data."
                  </p>
                  <p className="text-xs text-gray-500 font-medium">- Personal Motto</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
