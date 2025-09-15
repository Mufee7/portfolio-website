import React from 'react';
import { CheckCircle, Award, Users, Target } from 'lucide-react';
import myWeb from '../assets/myWeb.png'

const About = () => {
  const achievements = [
    { icon: Users, label: '2nd Year', description: 'Data Science Undergraduate' },
    { icon: Award, label: 'Sabaragamuwa University', description: 'Sri Lanka' },
    { icon: Target, label: 'Projects', description: 'LearnExchange, Python Banking System' },
    { icon: CheckCircle, label: 'Skills', description: 'Web Development, Python, Data Science' },
  ];

  const expertise = [
    'Python Programming & Data Analysis',
    'Machine Learning (Beginner)',
    'Data Visualization (Matplotlib, Seaborn, Excel)',
    'Web Development (HTML, CSS, JavaScript, React)',
    'SQL & Database Management',
    'Problem-Solving & Algorithms',
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-amber-100 rounded-full text-amber-800 text-sm font-medium mb-6">
            About Me
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Hi, I'm <span className="text-amber-600">Mufeedh Ahmed</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I am a 2nd-year Data Science undergraduate at Sabaragamuwa University of Sri Lanka, 
            passionate about turning data into insights and building practical solutions through 
            coding, analytics, and web development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br ">
              <img
                src={myWeb}
                alt="Mufeedh Ahmed - Data Science Undergraduate"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Floating achievement card */}
            <div className="absolute -top-0.5 -right-6 bg-white rounded-xl shadow-xl p-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-600 mb-1">2+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                My academic journey has given me a strong foundation in mathematics, programming, 
                and statistics. Beyond academics, I work on projects that combine web development 
                and data science, such as <strong>LearnExchange</strong>, a peer-to-peer learning platform, 
                and a <strong>Python Banking System</strong>.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                I am eager to apply my skills to real-world challenges and continuously grow as 
                a data science professional.
              </p>
            </div>

            {/* Expertise Grid */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Skills & Expertise</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {expertise.map((skill, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <button className="inline-flex items-center px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-colors duration-200">
              More About Me
            </button>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4 group-hover:bg-amber-200 transition-colors duration-200">
                  <Icon className="w-8 h-8 text-amber-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{achievement.label}</h4>
                <p className="text-gray-600 text-sm">{achievement.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
