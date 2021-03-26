import { Icon } from "@iconify/react";
import listIcon from "@iconify/icons-bi/list";

const Header = ({ displayEventList }) => {
  return (
    <header className="header">
      <div className="header-list-button" onClick={() => displayEventList()}>
        <Icon icon={listIcon} className="header-list-icon" />
      </div>
      <h1>Event Tracker</h1>
      <p>
        <em>(Powered by NASA)</em>
      </p>
    </header>
  );
};

export default Header;
