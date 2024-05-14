import { tabs } from "../data/tabs";

export const PageContainer = ({ selectedTabId, selectedSubTabId }) => {
  const selectedTab = tabs.find((tab) => tab.id === selectedTabId);

  const selecetedSubTab = selectedTab.subTabs.find(
    (subtab) => subtab.id === selectedSubTabId
  );

  return (
    <p className="content">
      <b>Tab</b> : {selectedTab.name} -- <b>SubTab</b> :{selecetedSubTab.name}
    </p>
  );
};
