import googleIcon from "../assets/images/google-icon.png";

const GoogleSSOBtn = ({ inLoginPage = true }) => {
  return (
    <button 
      type="button" 
      className="googleBtn">
      <img 
        src={googleIcon} 
        alt="google icon" 
      />
      {inLoginPage ? "Masuk" : "Daftar"} dengan Google
     </button>
  );
}

export default GoogleSSOBtn;