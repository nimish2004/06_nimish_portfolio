import React from 'react';

const skillData = [
  {
    title: "Programming Languages",
    items: ["Python", "Java", "C", "C++", "JavaScript", "XML"],
  },
  {
    title: "Web Development",
    items: ["HTML", "CSS", "JavaScript", "ReactJS", "Tailwind CSS"],
  },
  {
    title: "Mobile Development",
    items: ["Kotlin (Android, Jetpack, Canvas)"],
  },
  {
    title: "Tools & IDEs",
    items: ["VS Code", "Android Studio", "Google Colab", "DevC++"],
  },
  {
    title: "Version Control",
    items: ["GitHub"],
  },
];

const Skills = () => {
  return (
    <section className="skills-container" id="skills">
      <h2>Skills</h2>
      {skillData.map((category, index) => (
        <div key={index}>
          <h3>{category.title}</h3>
          <ul>
            {category.items.map((skill, idx) => (
              <li key={idx}>{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Skills;
