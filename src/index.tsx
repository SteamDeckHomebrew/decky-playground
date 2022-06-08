import {
  ButtonItem,
  definePlugin,
  PanelSection,
  PanelSectionRow,
  Router,
  ServerAPI,
  SidebarNavigation,
  staticClasses,
} from "decky-frontend-lib";
import { VFC } from "react";
import { FaShip } from "react-icons/fa";
import { ButtonPlayground, DropdownPlayground } from "./playgrounds";
import { TextFieldPlayground } from "./playgrounds/TextFieldPlayground";

const Content: VFC<{ serverAPI: ServerAPI }> = ({}) => {
  return (
    <PanelSection title="Panel Section">
      <PanelSectionRow>
        <ButtonItem
          layout="below"
          onClick={() => {
            Router.CloseSideMenus();
            Router.Navigate("/decky-playground");
          }}
        >
          Decky Playground
        </ButtonItem>
      </PanelSectionRow>
      <PanelSectionRow>
        <ButtonItem
          layout="below"
          onClick={() => {
            Router.CloseSideMenus();
            Router.Navigate("/zoo");
          }}
        >
          Deck Zoo
        </ButtonItem>
      </PanelSectionRow>
    </PanelSection>
  );
};

const DeckyPluginRouterTest: VFC = () => {
  return (
    <SidebarNavigation
      title="Decky Playground"
      showTitle
      pages={[
        {
          title: "TextField",
          content: <TextFieldPlayground />,
          route: "/decky-playground/textfield",
        },
        {
          title: "Button",
          content: <ButtonPlayground />,
          route: "/decky-playground/button",
        },
        {
          title: "Dropdown",
          content: <DropdownPlayground />,
          route: "/decky-playground/dropdown",
        },
      ]}
    />
  );
};

export default definePlugin((serverApi: ServerAPI) => {
  serverApi.routerHook.addRoute("/decky-playground", DeckyPluginRouterTest);

  return {
    title: <div className={staticClasses.Title}>Example Plugin</div>,
    content: <Content serverAPI={serverApi} />,
    icon: <FaShip />,
    onDismount() {
      serverApi.routerHook.removeRoute("/decky-playground");
    },
  };
});
