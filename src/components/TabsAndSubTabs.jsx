import { useCallback, useState } from "react";
import { PageContainer } from "./PageContainer";
import { TabButton } from "./TabButton";
import { tabs } from "../data/tabs";

export const TabsAndSubTabs = () => {
  const [selectedTabId, setSelectedTabId] = useState(tabs[0].id);
  const [selectedSubTabId, setSelectedSubTabId] = useState(
    tabs[0].subTabs[0].id
  );

  const handleTabSelection = useCallback((tab) => {
    setSelectedTabId(tab.id);
    setSelectedSubTabId(tab.subTabs[0].id);
  }, []);

  const handleSubTabSelection = useCallback((tab) => {
    setSelectedSubTabId(tab.id);
  }, []);

  const getSubTabButtons = (tabs) => {
    return tabs.map((tab) =>
      getTabButton(tab, tab.id === selectedSubTabId, true)
    );
  };

  const getTabButton = (tab, isSelected, isSubTab = false) => (
    <TabButton
      key={tab.id}
      tab={tab}
      isSelected={isSelected}
      handleTabSelection={isSubTab ? handleSubTabSelection : handleTabSelection}
    />
  );

  const { tabButtons, subTabButtons } = tabs.reduce(
    (acc, tab) => {
      const isSelected = tab.id === selectedTabId;
      acc.tabButtons.push(getTabButton(tab, isSelected));
      if (isSelected)
        acc.subTabButtons.push(getSubTabButtons(tab.subTabs, true));
      return acc;
    },
    { tabButtons: [], subTabButtons: [] }
  );

  return (
    <div className="outerContainer">
      <div className="navbar">{tabButtons}</div>
      <div className="innerContainer">
        <div className="navbar">{subTabButtons}</div>
        <PageContainer
          selectedTabId={selectedTabId}
          selectedSubTabId={selectedSubTabId}
        />
      </div>
    </div>
  );
};
