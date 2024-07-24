import React from 'react';
import me from './assets/me.jpg';

const AboutMe = () => {
  return (
    <div className="flex flex-col items-center bg-white text-gray-800 p-10" style={{ fontFamily: '"Glacial Indifference", sans-serif' }}>
      <h1 className="text-4xl  mb-6" style={{ letterSpacing: '0.15em', color: '#3b2d2d' }}>ABOUT ME</h1>
      <div className="flex flex-col md:flex-row items-center max-w-5xl text-left">
        <div className="flex-1 md:w-1/2">
          <p className="text-lg leading-relaxed text-gray-700 mb-6 px-6 md:px-0">
            Hello! I’m Crystal, a professional photographer based in San Antonio, Texas, specializing in architectural photography. With many years of experience in commercial photography, I have had the privilege of working on architectural projects across the US and abroad.
            <br /><br />
            My approach to photography blends technical expertise with creativity and an artistic eye, ensuring each photograph not only meets but exceeds client expectations. I am known for transforming clients’ visions into compelling visual narratives, capturing the essence of brands and the character of spaces.
            <br /><br />
            Beyond my photography career, I am fortunate to be the proud mom of three successful adult children. When I'm not working, I love exploring new places through travel and enjoying my passion for scuba diving.
            <br /><br />
            I believe that architectural photography is not just about documenting spaces but about evoking emotions and creating lasting impressions. Explore my portfolio to see examples of my work, or contact me to discuss how we can collaborate on your next architectural project.
          </p>
        </div>
        <div className="flex-shrink-0 md:w-1/2">
          <img src={me} alt="Crystal" className="w-full h-full object-cover object-top mb-6 md:mb-0 md:ml-6 border-4 border-gray-300" />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
