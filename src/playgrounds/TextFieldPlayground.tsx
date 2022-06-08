import { PanelSectionRow, TextField, Toggle } from "decky-frontend-lib";
import { useState, VFC } from "react";

export const TextFieldPlayground: VFC = () => {
  const [text, setText] = useState("");
  const [bShowCopyAction, setbShowCopyAction] = useState(false);

  return (
    <>
      <PanelSectionRow>
        <TextField
          bShowCopyAction={bShowCopyAction}
          label="Text Field"
          value={text}
          onChange={(e) => setText(e?.target.value)}
          description={`Value: ${text}`}
        />
      </PanelSectionRow>
      <PanelSectionRow>
        <Toggle
          label="bShowCopyAction"
          checked={bShowCopyAction}
          onChange={setbShowCopyAction}
        />
      </PanelSectionRow>
    </>
  );
};
