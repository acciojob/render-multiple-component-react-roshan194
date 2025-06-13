import React from "react";

const App = () => {
  const projects = [
    {
      name: "AI-Powered Study Assistant",
      description: "An app that helps students learn using personalized AI tutoring."
    },
    {
      name: "Smart Home Controller",
      description: "A system to manage all smart appliances using a single dashboard."
    },
    {
      name: "Health Tracker",
      description: "Tracks daily health stats and suggests improvements using ML."
    }
  ];

  return (
    <div className="ns-wrapper">
      {projects.map((project, index) => (
        <div key={index}>
          <h1 data-ns-test="project-name">{project.name}</h1>
          <h6 data-ns-test="project-description">{project.description}</h6>
        </div>
      ))}
    </div>
  );
};

export default App;
