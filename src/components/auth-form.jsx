const AuthForm = ({ isLoginForm = true, children }) => {
  return (
      <>
        <div className="formContainer">
          <div className="formDesc">
            <h3 className="formTitle">
              {isLoginForm ? 'Masuk ke Akun' : 'Pendaftaran Akun'}
            </h3>
            <p className="formSubTitle">
              {isLoginForm ? 'Yuk, lanjutin belajarmu di videobelajar.' 
              : 'Yuk, daftarkan akunmu sekarang juga!'}
            </p>
          </div>

          {children}
        </div>
      </>
  );
}

export default AuthForm;