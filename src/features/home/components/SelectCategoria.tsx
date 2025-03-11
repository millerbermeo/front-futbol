import React from "react";
import { Select, SelectItem } from "@heroui/select";

const categories = [
  { key: "sub10", label: "Sub-10" },
  { key: "sub15", label: "Sub-15" },
  { key: "sub17", label: "Sub-17" },
  { key: "sub20", label: "Sub-20" },
  { key: "professional", label: "Profesionales" },
];

const teams = {
  sub10: [
    { key: "teamA", label: "Team A (Sub-10)" },
    { key: "teamB", label: "Team B (Sub-10)" },
  ],
  sub15: [
    { key: "teamC", label: "Team C (Sub-15)" },
    { key: "teamD", label: "Team D (Sub-15)" },
  ],
  sub17: [
    { key: "teamE", label: "Team E (Sub-17)" },
    { key: "teamF", label: "Team F (Sub-17)" },
  ],
  sub20: [
    { key: "teamG", label: "Team G (Sub-20)" },
    { key: "teamH", label: "Team H (Sub-20)" },
  ],
  professional: [
    { key: "realMadrid", label: "Real Madrid (Professional)" },
    { key: "barcelona", label: "Barcelona (Professional)" },
    { key: "bayernMunich", label: "Bayern Munich (Professional)" },
    { key: "manchesterCity", label: "Manchester City (Professional)" },
  ],
};

const SelectCategoria = () => {
  const [categoryValue, setCategoryValue] = React.useState<string | null>(null);
  const [teamValue, setTeamValue] = React.useState<string | null>(null);
  const [touched, setTouched] = React.useState(false);

  const handleCategoryChange = (value: Set<string>) => {
    setCategoryValue(Array.from(value)[0]);
    setTeamValue(null); // Reset team selection when category changes
  };

  const isValid = teamValue && categoryValue;

  return (
    <div>
      <Select
        className="max-w-xs"
        description="Select the category of the football team"
        errorMessage={isValid || !touched ? "" : "You must select a category"}
        isInvalid={isValid || !touched ? false : true}
        label="Select Category"
        placeholder="Select a category"
        selectedKeys={new Set([categoryValue])}
        variant="bordered"
        onClose={() => setTouched(true)}
        onSelectionChange={handleCategoryChange}
      >
        {categories.map((category) => (
          <SelectItem key={category.key}>{category.label}</SelectItem>
        ))}
      </Select>

      {categoryValue && (
        <Select
          className="max-w-xs mt-4"
          description="Select your favorite team"
          errorMessage={teamValue || !touched ? "" : "You must select a team"}
          isInvalid={teamValue || !touched ? false : true}
          label="Select Football Team"
          placeholder="Select a team"
          selectedKeys={new Set([teamValue])}
          variant="bordered"
          onClose={() => setTouched(true)}
          onSelectionChange={setTeamValue}
        >
          {teams[categoryValue]?.map((team) => (
            <SelectItem key={team.key}>{team.label}</SelectItem>
          ))}
        </Select>
      )}
    </div>
  );
};

export default SelectCategoria;
