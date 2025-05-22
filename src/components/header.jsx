import videobelajarLogo from "../assets/images/videobelajar-logo.png";
import avatar from "../assets/images/avatar.png";
import dehazeIcon from "../assets/images/dehaze.png";

const Header = ({ isHomepageHeader = false }) => {
  if(isHomepageHeader) {
     return (
     <div className="header">
      <>
        <div className="left">
          <img 
            src={videobelajarLogo}
            alt="videobelajar logo"
            className="videobelajarLogo"
          />

          <button className="navBtn">Kategori</button>

          <img 
            src={dehazeIcon}
            alt="dehaze icon"
            className="dehazeIcon"
          />
        </div>

        <img 
          src={avatar}
          alt="avatar"
          className="avatarImg"
        />
      </>
    </div>
    );
  } else {
    return (
    <div className="header">
       <img 
        src={videobelajarLogo}
        alt="videobelajar logo"
        className="videobelajarLogo"
      />
    </div>
    );
  }
}