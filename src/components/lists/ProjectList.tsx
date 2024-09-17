import React from "react";
import LogoCollection from "../images/LogoCollection";

interface ProjectListProps {
  site: "github" | "gitlab" | "bitbucket" | "payload";
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ProjectList = (props: ProjectListProps) => {
  //   const projectsData = getProjects(props.site);
  return (
    <div className="grid grid-flow-row">
      <div className="flex flex-row ">
        {/* date started */}
        <div>{"date"}</div>
        {/* project name */}
        <h3>{"name"}</h3>
      </div>

      <LogoCollection logos={"github"} size="medium" opacity="translucent" />
    </div>
  );
};

export default ProjectList;
