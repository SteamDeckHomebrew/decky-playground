import { PanelSectionRow, SliderField } from "decky-frontend-lib";
import { useState, VFC } from "react";
import { FaPhone } from "react-icons/fa";

export const SliderPlayground: VFC = () => {
  const [value, setValue] = useState(0);

  console.log(SliderField);

  return (
    <>
      <PanelSectionRow>
        <div style={{ textAlign: "center" }}>{value}</div>
      </PanelSectionRow>
      <PanelSectionRow>
        <SliderField min={0} max={5} value={value} onChange={setValue} />
      </PanelSectionRow>
      <PanelSectionRow>
        <SliderField
          min={0}
          max={5}
          value={value}
          onChange={setValue}
          icon={<FaPhone />}
        />
      </PanelSectionRow>
      <PanelSectionRow>
        <SliderField
          min={0}
          max={5}
          value={value}
          onChange={setValue}
          label="Label"
          description="Description"
        />
      </PanelSectionRow>
    </>
  );
};
