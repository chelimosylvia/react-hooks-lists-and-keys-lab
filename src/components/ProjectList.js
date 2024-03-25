import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        
          <ProjectItem
            key= "1" 
            name={"Reciplease"}
            about={"A recipe tracking app"}
            technologies={["Rails", "Bootstrap CSS"]} 
          />
      
        <ProjectItem
          key="2"
          name={"Kibbles N Bitz"}
          about={"A pet care application"}
          technologies={["React", "Node.js", "MongoDB"]}
        />
        <ProjectItem
          key="3"
          name={"Alienwares"}
          about={"An e-commerce website for alien gadgets"}
          technologies={["React", "Redux", "Express", "MongoDB"]}
        />
      </div>
    </div>
  );
}

export default ProjectList;
