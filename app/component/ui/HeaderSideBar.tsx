
interface HeaderSideBarProps {
	username?: string;
  greatingMessage?: string;
  userIcon?: string;
  }
function HeaderSideBar({ username = "Inconnu", userIcon = 'assets/images/stories/small/pic1.jpg', greatingMessage = 'Bonjour'}: HeaderSideBarProps) {

 
  return (
    <>
      <div className="author-box">
        <div className="dz-media">
          <img src={userIcon} alt="author-image"/> 
        </div>
        <div className="dz-info">
          <span>{greatingMessage}</span>
          <h5 className="name">{username}</h5>
        </div>
      </div>

    </>
  );
}

export default HeaderSideBar;
