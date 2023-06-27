import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Header, SideNav, EmployeeDetailTable, EmployeeDetailFamilyTable } from "../../../components";
import { BusinessTripFormTable } from "../../../components";


const SWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

`

const SContentWrapper = styled.div`
  display: flex;
  width: 100%;
  background-color: #f8f9fa;
`

const SContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  padding: 30px;
  width: 100%;

`

const SCategory = styled.div`
  width: 90%;

  padding: 10px 0px;
  font-size: 28px;
  font-weight: 600;
  color: ${({theme}) => theme.colors.black110};

`
const SButtonContainer = styled.div`
  display: flex;
  min-width: 90%;
  justify-content: flex-end;
  gap: 10px;
`

const SCancleBtn = styled.button`
flex-wrap: wrap;
  width: 80px;
  height: 40px;
  color: white;
  font-size: 0.8em;
  background-color: ${({theme}) => theme.colors.blue090};
  border-radius: 3px;
  border: none;


  &:hover{  
    background-color : skyblue;
  }
`

const SSaveBtn = styled.button`
  flex-wrap: wrap;
  width: 80px;
  height: 40px;
  color: white;
  font-size: 0.8em;
  background-color: ${({theme}) => theme.colors.blue090};
  border-radius: 3px;
  border: none;

  &:hover{  
    background-color : skyblue;
  }
`
const SPrintBtn = styled(SSaveBtn)`
  background-color: ${({theme}) => theme.colors.black110};

`



const VacationForm = () => {

  const navigate = useNavigate();

  return (
    <SWrapper>
      <Header />
      <SContentWrapper>
        <SideNav />
        <SContentContainer>
          <SCategory>휴가신청서 작성</SCategory>
          <SButtonContainer>
            <SCancleBtn onClick={() => navigate(`/user/businesstripform`)}>취소</SCancleBtn>
            <SSaveBtn onClick={() => navigate(`/user/businesstripform`)}>저장</SSaveBtn>
            <SPrintBtn onClick={() => navigate(`/user/businesstripform`)}>인쇄</SPrintBtn>
          </SButtonContainer>
          <BusinessTripFormTable />
        </SContentContainer>
      </SContentWrapper>
    </SWrapper>

  )

}

export default VacationForm;