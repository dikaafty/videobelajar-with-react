const AuthBtn = ({ isLoginBtn = true, inLoginPage = true }) => {
  return(
    <button 
      type="button" 
      className={isLoginBtn ? "loginBtn" : "registerBtn"}>
        {isLoginBtn ? "Masuk" : "Daftar"}
    </button>
  );
}

export default AuthBtn;