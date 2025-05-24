const AuthBtn = ({ isLoginBtn = true, inLoginPage = true }) => {
  const getAuthBtnClasses = () => {

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