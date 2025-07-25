import React from 'react';
import './Skills.css';

// Import icons from react-icons
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaWordpress, FaGitAlt } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiWix, SiFigma, SiCanva, SiAdobexd, SiBootstrap } from 'react-icons/si';
import { MdDesignServices } from 'react-icons/md';

const skillsData = [
  { name: 'HTML5', icon: <FaHtml5 color="#E34F26" /> },
  { name: 'CSS3', icon: <FaCss3Alt color="#1572B6" /> },
  { name: 'JavaScript', icon: <FaJs color="#F7DF1E" /> },
  { name: 'React.js', icon: <FaReact color="#61DAFB" /> },
  { name: 'Node.js', icon: <FaNodeJs color="#339933" /> },
  { name: 'Express.js', icon: <SiExpress color="#000000" /> },
  { name: 'MongoDB', icon: <SiMongodb color="#47A248" /> },
  { name: 'Python', icon: <FaPython color="#3776AB" /> },
  { name: 'WordPress', icon: <FaWordpress color="#21759B" /> },
  { name: 'Wix', icon: <SiWix color="#000000" /> },
  { name: 'UI/UX Design', icon: <MdDesignServices color="#f59e0b" /> },
  { name: 'Figma', icon: <SiFigma color="#F24E1E" /> },
  { name: 'Canva', icon: <SiCanva color="#00C4CC" /> },
  { name: 'Adobe XD', icon: <SiAdobexd color="#FF61F6" /> },
  { name: 'Bootstrap', icon: <SiBootstrap color="#7952B3" /> },
  { name: 'Git', icon: <FaGitAlt color="#F05032" /> },
];

const Skills = () => {
  return (
    <section className="skills-section">
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
  );
};

export default Skills;
