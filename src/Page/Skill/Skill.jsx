import React from 'react';
import './Skill.css';

// Import icons from react-icons
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaWordpress, FaGitAlt } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiWix, SiFigma, SiCanva, SiAdobexd, SiBootstrap } from 'react-icons/si';
import { MdDesignServices } from 'react-icons/md';
import Navbar from '../../Components/Navbar/Navbar'; // adjust path as needed

const skillsData = [
  { name: 'HTML5', icon: <FaHtml5 color="#e34f26" /> },
  { name: 'CSS3', icon: <FaCss3Alt color="#1572b6" /> },
  { name: 'JavaScript', icon: <FaJs color="#f7df1e" /> },
  { name: 'React.js', icon: <FaReact color="#61dafb" /> },
  { name: 'Node.js', icon: <FaNodeJs color="#339933" /> },
  { name: 'Express.js', icon: <SiExpress color="#000000" /> },
  { name: 'MongoDB', icon: <SiMongodb color="#47a248" /> },
  { name: 'Python', icon: <FaPython color="#3776ab" /> },
  { name: 'WordPress', icon: <FaWordpress color="#21759b" /> },
  { name: 'Wix', icon: <SiWix color="#000000" /> },
  { name: 'UI/UX Design', icon: <MdDesignServices color="#f59e0b" /> },
  { name: 'Figma', icon: <SiFigma color="#f24e1e" /> },
  { name: 'Canva', icon: <SiCanva color="#00c4cc" /> },
  { name: 'Adobe XD', icon: <SiAdobexd color="#ff61f6" /> },
  { name: 'Bootstrap', icon: <SiBootstrap color="#7952b3" /> },
  { name: 'Git', icon: <FaGitAlt color="#f05032" /> },
];

const Skills = () => {
  return (
    <>
      <Navbar />
      <section className="skills-section" id="skills">
        <h2>My Skills</h2>
        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className="icon">{skill.icon}</div>
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Skills;
