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
          </div>
        </div>
      </>
  );
}