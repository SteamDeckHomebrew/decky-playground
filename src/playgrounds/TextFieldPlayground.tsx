import { PanelSectionRow, TextField } from "decky-frontend-lib";
import { useState, VFC } from "react";

export const TextFieldPlayground: VFC = () => {
  const [text, setText] = useState("");

  return (
    <>
      <PanelSectionRow>
        <TextField
          label="A TextField"
          description={`Value: ${text}`}
          value={text}
          onChange={(e) => setText(e?.target.value)}
        />
      </PanelSectionRow>
    </>
  );
};
