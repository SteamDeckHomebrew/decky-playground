import { PanelSectionRow, Slider } from "decky-frontend-lib";
import { useState, VFC } from "react";
import { FaPhone } from "react-icons/fa";

export const SliderPlayground: VFC = () => {
  const [value, setValue] = useState(0);

  console.log(Slider);

  return (
    <>
      <PanelSectionRow>
        <div style={{ textAlign: "center" }}>{value}</div>
      </PanelSectionRow>
      <PanelSectionRow>
        <Slider min={0} max={5} value={value} onChange={setValue} />
      </PanelSectionRow>
      <PanelSectionRow>
        <Slider
          min={0}
          max={5}
          value={value}
          onChange={setValue}
          icon={<FaPhone />}
        />
      </PanelSectionRow>
      <PanelSectionRow>
        <Slider
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
