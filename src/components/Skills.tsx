import React, { useMemo } from 'react';
import { useInView } from 'react-intersection-observer';
import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaGitAlt,
  FaDocker,
  FaPhp,
  FaAngular,
  FaJava,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiJavascript,
  SiKubernetes,
  SiCsharp,
  SiExpress,
  SiPostgresql,
  SiAmazondynamodb,
  SiGo,
  SiCircleci,
  SiApachekafka,
} from 'react-icons/si';

const Skills: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const skills = useMemo(
    () =>
      [
        { name: 'Angular', Icon: FaAngular, color: '#DD0031' },
        { name: 'Kafka', Icon: SiApachekafka, color: '#000000' },
        { name: 'AWS', Icon: FaAws, color: '#FF9900' },
        { name: 'C#', Icon: SiCsharp, color: '#239120' },
        { name: 'CircleCI', Icon: SiCircleci, color: '#000000' },
        { name: 'Go', Icon: SiGo, color: '#00ADD8' },
        { name: 'Docker', Icon: FaDocker, color: '#2496ED' },
        { name: 'DynamoDB', Icon: SiAmazondynamodb, color: '#4053D6' },
        { name: 'Express', Icon: SiExpress, color: '#000000' },
        { name: 'Git', Icon: FaGitAlt, color: '#F05032' },
        { name: 'Java', Icon: FaJava, color: '#007396' },
        { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
        { name: 'Kubernetes', Icon: SiKubernetes, color: '#326CE5' },
        { name: 'Node.js', Icon: FaNodeJs, color: '#339933' },
        { name: 'PHP', Icon: FaPhp, color: '#777BB4' },
        { name: 'PostgreSQL', Icon: SiPostgresql, color: '#336791' },
        { name: 'React', Icon: FaReact, color: '#61DAFB' },
        { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
      ].sort((a, b) => a.name.localeCompare(b.name)),
    []
  );

  return (
    <section
      id="skills"
      ref={ref}
      className={`transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}
    >
      <h2 className="text-5xl font-bold text-blue-800 mb-16">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10">
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            className={`bg-white p-8 rounded-lg shadow-xl flex flex-col items-center justify-center transition-all duration-500 transform hover:scale-105 hover:shadow-2xl ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <skill.Icon className="w-20 h-20 mb-4" style={{ color: skill.color }} />
            <span className="text-xl font-medium text-gray-800 text-center">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
