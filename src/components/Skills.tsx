import React from 'react';
import { Code, Database, BarChart3, Brain, Globe, GitBranch } from 'lucide-react';


const Skills = () => {
  const skills = [
    {
      icon: Code,
      title: 'Python Programming',
      description: 'Building data-driven solutions with clean, efficient, and modular code.',
      features: ['Data Analysis', 'Automation Scripts', 'Problem Solving'],
      color: 'bg-blue-100 text-blue-600',
    },
    {
      icon: Database,
      title: 'Data Management',
      description: 'Working with structured and unstructured datasets for insights.',
      features: ['SQL & Databases', 'Data Cleaning', 'Data Wrangling'],
      color: 'bg-green-100 text-green-600',
    },
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'Applying ML models to solve real-world problems and discover patterns.',
      features: ['Regression & Classification', 'Model Training', 'Scikit-learn'],
      color: 'bg-purple-100 text-purple-600',
    },
    {
      icon: BarChart3,
      title: 'Data Visualization',
      description: 'Transforming raw data into meaningful and interactive visual insights.',
      features: ['Matplotlib & Seaborn', 'Power BI / Tableau (Basics)', 'Interactive Dashboards'],
      color: 'bg-amber-100 text-amber-600',
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Designing responsive and modern web applications with clean UI/UX.',
      features: ['HTML, CSS, JavaScript', 'React & Tailwind', 'Full-stack Projects'],
      color: 'bg-red-100 text-red-600',
    },
    {
      icon: GitBranch,
      title: 'Collaboration & Tools',
      description: 'Using modern tools for effective teamwork and version control.',
      features: ['Git & GitHub', 'Project Management', 'Agile Practices'],
      color: 'bg-indigo-100 text-indigo-600',
    },
  ];
    const scrollToSection = (href:string) => {
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-amber-100 rounded-full text-amber-800 text-sm font-medium mb-6">
            Skills & Expertise
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            What I <span className="text-amber-600">Bring to the Table</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A mix of technical skills and practical knowledge in data science and web development, 
            showcased through hands-on projects and continuous learning.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 p-8 group"
              >
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${skill.color} mb-6 group-hover:scale-110 transition-transform duration-200`}
                >
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">{skill.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{skill.description}</p>

                <ul className="space-y-2">
                  {skill.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Want to Collaborate or Learn More?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Feel free to explore my projects or reach out for discussions on data, AI, and web development.
            </p>
            <button
              onClick={() => scrollToSection('#contact')}
              className="inline-flex items-center px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-colors duration-200"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
