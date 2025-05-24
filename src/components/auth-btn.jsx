const AuthBtn = ({ isLoginBtn }) => {
  return(
    <button 
      type="button" 
      className={isLoginBtn ? "loginBtn" : "registerBtn"}>
        {isLoginBtn ? "Masuk" : "Daftar"}
    </button>
  );
}