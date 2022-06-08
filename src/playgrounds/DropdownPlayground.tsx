import {
  Dropdown,
  DropdownItem,
  DropdownOption,
  PanelSectionRow,
} from "decky-frontend-lib";
import { useMemo, useState, VFC } from "react";

export const DropdownPlayground: VFC = () => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [selectedNestedOption, setSelectedNestedOption] = useState<
    number | null
  >(null);

  const options = useMemo(
    (): DropdownOption[] => [
      {
        data: 1,
        label: "One",
      },
      {
        data: 2,
        label: "Two",
      },
      {
        data: 3,
        label: "Three",
      },
    ],
    []
  );

  const nestedOptions = useMemo(
    (): DropdownOption[] => [
      {
        data: 1,
        label: "test",
      },
      {
        label: "One",
        options: [
          {
            data: 2,
            label: "One.One",
          },
          {
            data: 3,
            label: "One.Two",
          },
        ],
      },
      {
        label: "Two",
        options: [
          {
            data: 5,
            label: "Two.One",
          },
          {
            data: 6,
            label: "Two.Two",
          },
          {
            label: "Two.Three",
            options: [
              {
                data: 8,
                label: "Two.Three.One",
              },
            ],
          },
        ],
      },
    ],
    []
  );

  return (
    <>
      <PanelSectionRow>
        <Dropdown
          rgOptions={options}
          strDefaultLabel="Select a value"
          selectedOption={selectedOption}
          onChange={(data) => setSelectedOption(data.data)}
        />
      </PanelSectionRow>
      <PanelSectionRow>
        <DropdownItem
          rgOptions={options}
          label="Nice"
          description="Nice description"
          strDefaultLabel="SELECT A VALUE"
          menuLabel="Menu Label"
          selectedOption={selectedOption}
          onChange={(data) => setSelectedOption(data.data)}
        />
      </PanelSectionRow>
      <PanelSectionRow>
        <DropdownItem
          rgOptions={options}
          label="Hello Label"
          strDefaultLabel="Select a value"
          selectedOption={selectedOption}
          onChange={(data) => setSelectedOption(data.data)}
        />
      </PanelSectionRow>
      <PanelSectionRow>
        <DropdownItem
          rgOptions={nestedOptions}
          label="Nested Options"
          selectedOption={selectedNestedOption}
          onChange={(data) => setSelectedNestedOption(data.data)}
        />
      </PanelSectionRow>
    </>
  );
};
