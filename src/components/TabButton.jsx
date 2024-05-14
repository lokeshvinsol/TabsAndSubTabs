export const TabButton = ({ tab, isSelected, handleTabSelection }) => {
  const handleTabClick = () => handleTabSelection(tab);

  return (
    <div
      key={tab.id}
      className={isSelected ? "active" : "navItem"}
      onClick={handleTabClick}
    >
      {tab.name}
    </div>
  );
};
