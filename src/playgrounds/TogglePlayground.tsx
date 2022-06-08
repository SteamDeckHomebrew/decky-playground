import { PanelSectionRow, Toggle } from "decky-frontend-lib";
import { useState, VFC } from "react";
import { FaShapes } from "react-icons/fa";

export const TogglePlayground: VFC = () => {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <PanelSectionRow>
        <Toggle
          label="A Toggle"
          description={`Description: ${checked}`}
          checked={checked}
          onChange={(e) => setChecked(e)}
        />
      </PanelSectionRow>
      <PanelSectionRow>
        <Toggle label="A disabled Toggle" disabled checked={checked} />
      </PanelSectionRow>
      <PanelSectionRow>
        <Toggle
          label="A Toggle with an icon"
          checked={checked}
          onChange={(e) => setChecked(e)}
          icon={<FaShapes style={{ display: "block" }} />}
        />
      </PanelSectionRow>
    </>
  );
};
