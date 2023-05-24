import styled from "styled-components";
import { IconInput } from "../../components";


const SWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(237, 237, 237);
`

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-item: center;
  width: 400px;
  height: 370px;
  background-color: white;
  border-radius: 3px;
  box-shadow: 0 2px 18px -2px rgba(0, 0, 0, 0.5);
  padding: 40px;
`

const STitle = styled.h2`
  display: flex;
  justify-content: center;
  align-items: justify-content: space-between;
`

const SInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: gray;

`

const SInputWrapper = styled.div`

`
const BlueButton = styled.div`
  width: 50px;
  height: 50px;
  background-color: rgb(52, 152, 219);
  border-radius: 3px;
`


const Login = () => {

  return (
    <SWrapper>
      <SContainer>
        <STitle>Payroll Automaion System</STitle>
        <SInputWrapper>
          <SInputContainer>
            <IconInput placeholder={'아이디'} />
            <IconInput placeholder={'비밀번호'} />
          </SInputContainer>
          <BlueButton />
        </SInputWrapper>
      </SContainer>
    </SWrapper>
  );
};

export default Login;