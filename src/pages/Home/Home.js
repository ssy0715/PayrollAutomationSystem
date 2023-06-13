import styled from "styled-components"
import { IconInput, Footer } from "../../components"
import { useNavigate } from "react-router-dom"
// import { FaUser } from 'react-icons/fa';


const SCompanyName = styled.div`
  padding: 30px;
  font-weight: 500;
  font-size: 1.5em;
  position: flxed;
`

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: calc(100% - 120px);

`

const SContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  min-width: 100vw;
  min-height:100%;
  margin: 5% 0;

  overflow: hidden;

`



const SHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 30%;
`

const SSubHeader = styled.div`
  font-size: 36px;
  padding: 3rem 1rem 1rem 1rem;
`
const SHeader = styled.div`
  font-size: 8rem;
  font-weight: 900;
  padding: 3rem 1rem 1rem 1rem;
`

const SLoginContainer = styled.div`
  width: 30%;
`

const SInputContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 5% 5% 1% 5%;
  margin-top: 15%;

  & > div {
    flex-direction: column;

  }
`
const SLoginButton = styled.button`
  flex-wrap: wrap;
  min-width: 80px;
  min-height: 80px;
  color: white;
  background-color: rgb(52, 152, 219);
  border-radius: 3px;
  margin: 8px 8px 0px 8px;
  border: none;
`

const SCheckboxContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 5% 5% 1% 5%;
  flex-wrap: wrap;

  & > div {
    margin-right: 10%;
    margin-top: 8px;
  }

`

const SCheckbox = styled.div`
  display: flex;
`

// const SFooterContainer = styled.div`
//  min-width: calc(100% - 220px);
// `


const Home = () => {

  const navigate = useNavigate();

  return (
    <>
    <SCompanyName>(주)케이이노텍</SCompanyName>
    <SContainer>
      <SContentWrapper>
        <SHeaderContainer>
          <SSubHeader>Payroll Automatic System</SSubHeader>
          <SHeader>급여자동화시스템</SHeader>
        </SHeaderContainer>
        <SLoginContainer>
          <SInputContainer>
            <div>
              <IconInput />
              <IconInput />
              <IconInput />
            </div>
            <SLoginButton>
              로그인
            </SLoginButton>
          </SInputContainer>
          <SCheckboxContainer>
              <SCheckbox>
                <input type="checkbox" />
                <div>아이디 저장</div>
              </SCheckbox>
              <div onClick={() => navigate('')}>비밀번호 찾기</div>
          </SCheckboxContainer>
        </SLoginContainer>
      </SContentWrapper>
      <Footer />
    </SContainer>
    </>
  )


}

export default Home;