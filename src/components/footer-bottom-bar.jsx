import linkedInLogo from "../assets/images/linkedin-logo.png";
import facebookLogo from "../assets/images/facebook-logo.png";
import instagramLogo from "../assets/images/instagram-logo.png";
import twitterLogo from "../assets/images/twitter-logo.png";

const footerBottomBar = () => {
  return (
    <div className="footerBottomBar">
      <p 
        className="copyrightText">
          @2023 Gerobak Sayur All Rights Reserved.
      </p>

      <div className="brandSocials">
        <img 
          src={linkedInLogo} 
          alt="linkedIn logo" 
        />

        <img 
          src={facebookLogo} 
          alt="facebook logo" 
        />

        <img 
          src={instagramLogo} 
          alt="instagram logo" 
        />

        <img 
          src={twitterLogo} 
          alt="twitter logo" 
        />
      </div>
    </div>
  );
}

export default footerBottomBar;