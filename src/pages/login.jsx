import Body from "../components/body";
import AuthForm from "../components/auth-form";
import Container from "../components/container";
import ActionForm from "../components/action-form";
import IdenticalInput from "../components/identical-input";
import ForgotPass from "../components/forgot-pass";
import AuthBtn from "../components/auth-btn";
import Divider from "../components/divider";
import GoogleSSOBtn from "../components/google-sso-btn";

const LoginPage = () => {
  return (
    <Body>
      <AuthForm>
        <Container containerClass="action">
          <ActionForm>
            <Container containerClass="inputAction">
              <IdenticalInput 
                fieldName="userEmail" 
                labelText="E-Mail" 
                inputType="email" 
              />

              <IdenticalInput 
                fieldName="userPass" 
                labelText="Kata Sandi" 
                inputType="password" 
                isPassInput={true}
              />
            </Container>

            <Container containerClass="btnAction"></Container>
          </ActionForm>
        </Container>
      </AuthForm>
    </Body>
  );
}

export default LoginPage;