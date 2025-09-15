import React from "react";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import x from '../assets/project.jpg'

const Project = () => {
  const testimonials = [
    {
      name: "Senior Lecturer",
      role: "Faculty of Computing",
      company: "Sabaragamuwa University of Sri Lanka",
      image:x,//, replace with real photo later
      content:
        "Mufeedh is a highly motivated student with excellent skills in web development and Python. His projects demonstrate creativity and problem-solving ability.",
      rating: 5,
    },
    {
      name: "Project Teammate",
      role: "Software Engineering Student",
      company: "SUSL",
      image:
        x, // replace with real photo later
      content:
        "Working with Mufeedh on LearnExchange was inspiring. He brings modern design practices, clean code, and strong teamwork skills.",
      rating: 5,
    },
  ];

  const stats = [
    { number: "2+", label: "Projects Completed" },
    { number: "2nd Year", label: "Undergraduate at SUSL" },
    { number: "3+", label: "Core Skills (Web Dev, Python, Java)" },
    { number: "100%", label: "Dedication & Learning Drive" },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-amber-100 rounded-full text-amber-800 text-sm font-medium mb-6">
            More About Me..
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            What Others Say About{" "}
            <span className="text-amber-600">Mufeedh Ahmed</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A few words from lecturers and teammates about my work, learning
            journey, and collaboration.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-amber-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <Quote className="w-8 h-8 text-amber-600 mr-4" />
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-amber-400 fill-current"
                    />
                  ))}
                </div>
              </div>

              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-center mr-4"
                  loading="lazy"
                />
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {testimonial.role} – {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
