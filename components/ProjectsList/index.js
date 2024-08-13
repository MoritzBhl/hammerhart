import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";
import styled from "styled-components";

export default function ProjectsList({ projects, searchInput }) {
  if (!projects || projects.length === 0) {
    return <h1>No projects found. Please create new ones.</h1>;
  }

  const searchedProjects = projects.filter((project) => {
    if (searchInput === "") {
      return project;
    } else {
      return (
        project.title.toLowerCase().startsWith(searchInput) ||
        project.title.toLowerCase().includes(searchInput)
      );
    }
  });

  if (searchedProjects.length === 0) {
    return <StyledNoSearchResults>No projects found</StyledNoSearchResults>;
  }

  return (
    <div>
      <StyledUl>
        {searchedProjects.toReversed().map((project) => (
          <li key={project.id}>
            <ProjectCard project={project} />
          </li>
        ))}
      </StyledUl>
    </div>
  );
}

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
const StyledUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  list-style: none;
  padding: 2rem;
  margin: 0;
`;

const StyledNoSearchResults = styled.p`
  color: white;
  padding: 1rem;
  text-align: center;
`;
