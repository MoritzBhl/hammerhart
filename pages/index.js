import Form from "@/components/Form";
import useLocalStorageState from "use-local-storage-state";
import FilterList from "@/components/FilterList";
import SearchBar from "@/components/SearchBar";
import { useState } from "react";

export default function HomePage({ projects, onAddProject, onBookmark }) {
  const [searchInput, setSearchInput] = useState("");

  function handleSearch(event) {
    const lowerCasedInput = event.target.value.toLowerCase();
    setSearchInput(lowerCasedInput);
  }

  const [formMaterials, setFormMaterials] = useLocalStorageState("materials", {
    defaultValue: [""],
  });

  const [formSteps, setFormSteps] = useLocalStorageState("steps", {
    defaultValue: [{ id: "1", description: "" }],
  });

  function handleClearMaterialsAndSteps() {
    setFormMaterials([""]);
    setFormSteps([{ id: "1", description: "" }]);
  }

  // functions for materials list

  function handleAddMaterialField() {
    setFormMaterials([...state, ""]);
  }

  function handleRemoveMaterialField(indexToRemove) {
    setFormMaterials(state.filter((_, index) => index !== indexToRemove));
  }

  function handleMaterialChange(index, event) {
    const newMaterials = [...state];
    newMaterials[index] = event.target.value;
    setFormMaterials(newMaterials);
  }

  // functions for dynamic steps input fields

  function handleAddStepField() {
    setSteps([...steps, { id: `${steps.length + 1}`, description: "" }]);
  }

  function handleRemoveStepField(indexToRemove) {
    setSteps(
      steps
        .filter((_, index) => index !== indexToRemove)
        .map((step, index) => {
          return { ...step, id: `${index + 1}` };
        })
    );
  }

  function handleStepChange(index, event) {
    const newSteps = [...steps];
    newSteps[index].description = event.target.value;
    setSteps(newSteps);
  }

  return (
    <>
      <Form
        onAddProject={onAddProject}
        projects={projects}
        formMaterials={formMaterials}
        formSteps={formSteps}
        onClearMaterialsAndSteps={handleClearMaterialsAndSteps}
        onAddMaterialField={handleAddMaterialField}
        onRemoveMaterialField={handleRemoveMaterialField}
        onMaterialChange={handleMaterialChange}
        onAddStepField={handleAddStepField}
        onRemoveStepField={handleRemoveStepField}
        onStepChange={handleStepChange}
      />

      <SearchBar onSearch={handleSearch} />
      <FilterList
        projects={projects}
        onAddProject={onAddProject}
        onBookmark={onBookmark}
        searchInput={searchInput}
      />
    </>
  );
}
