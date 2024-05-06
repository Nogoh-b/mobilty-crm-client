import ButtonForSideBar from "./ButtonForSideBar";
import ToolButton from "./ToolButton";

interface HeaderProps {
	title?: string;
  }
function Header({ title = 'Home' }: HeaderProps) {

 
  return (
    <>
      <header className="header">
      <div className="container">
        <div className="main-bar">
          <div className="left-content">
            <h4 className="title mb-0">{title}</h4>
          </div>
          <div className="mid-content">
          </div>
          <div className="right-content d-flex align-items-center">
            <ToolButton iconSize={25}  iconName="video" />
            <ToolButton iconType="far" iconSize={25} hasNotification />
            <ButtonForSideBar component={<ToolButton iconSize={25} iconName="th-large" iconType="fas"  />} />
          </div>
        </div>
      </div>
    </header>
	  <div className="dark-overlay"></div>

    </>
  );
}

export default Header;
