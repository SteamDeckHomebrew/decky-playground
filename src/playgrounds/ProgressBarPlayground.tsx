import { PanelSectionRow, ProgressBarItem } from "decky-frontend-lib";
import { useEffect, useState, VFC } from "react";

console.log(ProgressBarItem);

export const ProgressBarPlayground: VFC = () => {
  const [progress, setProgress] = useState(20);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((progress) => (progress + 20) % 100);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <PanelSectionRow>
        <ProgressBarItem label="Progress Bar Default" nProgress={progress} />
      </PanelSectionRow>
      <PanelSectionRow>
        <ProgressBarItem
          label="Progress Bar Unsmoothed"
          description={`Description`}
          nProgress={progress}
          nTransitionSec={0}
        />
      </PanelSectionRow>
      <PanelSectionRow>
        <ProgressBarItem
          label="Progress Bar Intermediate"
          indeterminate
          nProgress={0}
        />
      </PanelSectionRow>
    </>
  );
};
