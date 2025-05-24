import Header from "../components/header";
import Body from "../components/body";
import AuthForm from "../components/auth-form";
import Container from "../components/container";
import ActionForm from "../components/action-form";
import IdenticalInput from "../components/identical-input";
import GenderInput from "../components/gender-input";
import PhoneInput from "../components/phone-input";
import ForgotPass from "../components/forgot-pass";
import AuthBtn from "../components/auth-btn";
import Divider from "../components/divider";
import GoogleSSOBtn from "../components/google-sso-btn";

const RegisterPage = () => {
  return (
    <>
      <Header />

      <Body>
        <AuthForm isLoginForm={false}>
          <Container containerClass="action">
            <ActionForm>
              <Container containerClass="inputAction">
                <IdenticalInput 
                  fieldName="userFullName" 
                  labelText="Nama Lengkap" 
                  inputType="text" 
                />

                <IdenticalInput 
                  fieldName="userEmail" 
                  labelText="E-Mail" 
                  inputType="email" 
                />

                <GenderInput />

                <PhoneInput />

                <IdenticalInput 
                  fieldName="userPass" 
                  labelText="Kata Sandi" 
                  inputType="password" 
                  isPassInput={true}
                />

                <IdenticalInput 
                  fieldName="userConfirmPass" 
                  labelText="Konfirmasi Kata Sandi" 
                  inputType="password" 
                  isPassInput={true}
                />
              </Container>

              <Container containerClass="btnAction"></Container>
            </ActionForm>
          </Container>
        </AuthForm>
      </Body>
    </>
  );
}

export default RegisterPage;