import googleIcon from "../assets/google-icon.png";
import eyeOffIcon from "../assets/eye-off-icon.png";

const AuthForm = ({ isLoginForm }) => {
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

          <div className="action">
            <form action="" method="post">
              <div className="inputAction"></div>
            </form>
          </div>
        </div>
      </>
  );
}