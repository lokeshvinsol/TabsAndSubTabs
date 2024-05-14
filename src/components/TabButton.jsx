import PropTypes from "prop-types";

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

TabButton.propTypes = {
  tab: PropTypes.object.isRequired,
  isSelected: PropTypes.bool.isRequired,
  handleTabSelection: PropTypes.any,
};
