import Form from "@/components/Form";
import Header from "@/components/Header";
import useLocalStorageState from "use-local-storage-state";
import FilterList from "@/components/FilterList";
import ProjectsList from "@/components/ProjectsList";

export default function HomePage({ projects, setNewProjects }) {
  const [formMaterials, setFormMaterials] = useLocalStorageState("materials", {
    defaultValue: [""],
  });

  const [formSteps, setFormSteps] = useLocalStorageState("steps", {
    defaultValue: [{ id: "1", description: "" }],
  });

  console.log("Homepage: ", projects);

  return (
    <>
      <Header />
      <Form
        setNewProjects={setNewProjects}
        projects={projects}
        formMaterials={formMaterials}
        setFormMaterials={setFormMaterials}
        formSteps={formSteps}
        setFormSteps={setFormSteps}
      />
      <FilterList projects={projects} setNewProjects={setNewProjects} />
    </>
  );
}
