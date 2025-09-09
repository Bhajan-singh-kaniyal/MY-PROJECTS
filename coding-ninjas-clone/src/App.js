import React from 'react';
import HeroSection from './components/HeroSection';
import CourseOfferings from './components/CourseOfferings';
import LearningModel from './components/LearningModel';
import InstructorCard from './components/InstructorCard';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App font-sans">
      <HeroSection />
      <CourseOfferings />
      <LearningModel />
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Our Faculty</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <InstructorCard name="Ankush Singla" role="Co‑Founder & Instructor" courses="C++, DSA, ML" />
          <InstructorCard name="Parikh Jain" role="Instructor & Founding Member" courses="Python, DSA" />
          {/* Add more cards */}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
