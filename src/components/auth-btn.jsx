const AuthBtn = ({ isLoginBtn = true, inLoginPage = true }) => {
  const getAuthBtnClasses = () => {
    if(isLoginBtn && inLoginPage) {
      return "loginBtn login";
    } else if(!isLoginBtn && !inLoginPage) {
      return "registerBtn register";
    } else if(isLoginBtn && !inLoginPage) {
      return "loginBtn register";
    } else {
      return "registerBtn login";
    }
  }

  return(
    <button 
      type="button" 
      className={isLoginBtn ? "loginBtn" : "registerBtn"}>
        {isLoginBtn ? "Masuk" : "Daftar"}
    </button>
  );
}

export default AuthBtn;