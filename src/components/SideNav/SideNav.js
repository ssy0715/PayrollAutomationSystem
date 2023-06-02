import styled from "styled-components";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { FaClock } from "react-icons/fa";
import { HiDocumentText, HiDocumentDuplicate } from "react-icons/hi";
import { TbReportMoney, TbPigMoney, TbDeviceMobileVibration } from "react-icons/tb";
import { ImProfile, ImCalendar } from "react-icons/im";
import { RiGroup2Fill, RiUserSettingsLine,  } from "react-icons/ri";
import { MdOutlineFreeCancellation, MdTableView, MdLibraryBooks, MdLocalAirport } from "react-icons/md";


const SWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 20%;
  min-width: 200px;

  min-height: calc(100vh-200px);
  background-color: #548AFF;
  box-shadow: 2px 0 2.94px 0.06px rgba(4, 26, 55, 0.16);

`

const SMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  
  div {
    font-size: 1.1em;
    color: white;
    font-weight: 500;
    letter-spacing : 1px;
}

  width: 100%;

  padding: 15% 15%;
  // padding-left: 15%;

  a {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    text-align: right;
    padding-top: 15px;
    color: white;
    font-size: 0.9em;

    &:hover, &:active {
      color: ${({theme}) => theme.colors.blue010};
      text-decoration: none;
    }
  }

`

const SAccordion = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;

  &:hover, &:active {
    color: ${({theme}) => theme.colors.blue010};
    text-decoration: none;
  }

`
const SAccordionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5em;
`

const SAccodionContent = styled.div`

`



const SideNav = () => {

    const parentRef = useRef(null);
    const childRef = useRef(null);

  return (

    <SWrapper>
      <SMenuContainer>
        <SAccordion>
          <SAccordionHeader>
            <RiGroup2Fill size={35}/>
            <div>부서관리</div>
          </SAccordionHeader>
          <SAccodionContent ref={parentRef}>
            <Link ref={childRef} to="/home/depart">부서정보</Link>
          </SAccodionContent>
        </SAccordion>
        <SAccordion>
          <SAccordionHeader>
            <RiUserSettingsLine size={29}/>
            <div>사원정보관리</div>
          </SAccordionHeader>
          <Link ref={childRef} to="/home/employee">사원정보</Link>
        </SAccordion>
        <SAccordion>
          <SAccordionHeader>
            <ImProfile size={27}/>
            <div>직원명부</div>
          </SAccordionHeader>
          <Link ref={childRef} to="/home/employeelist">직원명부조회</Link>
        </SAccordion>
        <SAccordion>
          <SAccordionHeader>
            <ImCalendar size={27}/>
            <div>근태관리</div>
          </SAccordionHeader>
          <Link ref={childRef} to="">출퇴근 확인 및 조회</Link>
          <Link ref={childRef} to="/home/attendance">근태조회</Link>
          <Link ref={childRef} to="">출퇴근관리</Link>
        </SAccordion>
        <SAccordion>
          <SAccordionHeader>
            <MdOutlineFreeCancellation size={30}/>
            <div>연차사용내역</div>
          </SAccordionHeader>
          <Link ref={childRef} to="/home/annual">연차사용내역조회</Link>
        </SAccordion>
        <SAccordion>
          <SAccordionHeader>
            <FaClock size={25}/>
            <div>근로시간관리</div>
          </SAccordionHeader>
          <Link ref={childRef} to="/home/defaultworktime">기본근로시간관리</Link>
          <Link ref={childRef} to="">소정근로시간관리</Link>
        </SAccordion>
        <SAccordion>
          <SAccordionHeader>
            <TbPigMoney size={30}/>
            <div>급여관리</div>
          </SAccordionHeader>
          <Link ref={childRef} to="/home/payrollmanage">급여관리</Link>
        </SAccordion>
        <SAccordion>
          <SAccordionHeader>
            <MdTableView size={32}/>
            <div>급여항목 및 요율관리</div>
          </SAccordionHeader>
          <Link ref={childRef} to="">보험료관리</Link>
          <Link ref={childRef} to="/home/ratemanage">급여항목관리</Link>
        </SAccordion>
        <SAccordion>
          <SAccordionHeader>
            <MdLibraryBooks size={30}/>
            <div>급여대장</div>
          </SAccordionHeader>
          <Link ref={childRef} to="/home/payrollcheck">급여대장조회</Link>
        </SAccordion>
        <SAccordion>
          <SAccordionHeader>
            <TbReportMoney size={30}/>
            <div>이체내역서</div>
          </SAccordionHeader>
          <Link ref={childRef} to="/home/transferhistory">급여이체내역서</Link>
        </SAccordion>
        <SAccordion>
          <SAccordionHeader>
            <MdLocalAirport size={30}/>
            <div>출국만기보험내역</div>
          </SAccordionHeader>
          <Link ref={childRef} to="/home/departins">출국만기보험내역 조회</Link>
        </SAccordion>
        <SAccordion>
          <SAccordionHeader>
            <HiDocumentText size={30}/>
            <div>퇴직연금내역</div>
          </SAccordionHeader>
          <Link ref={childRef} to="/home/retire">퇴직연금조회</Link>
        </SAccordion>
        <SAccordion>
          <SAccordionHeader>
            <HiDocumentDuplicate size={30} color="white"/>
            <div>보험적취내역</div>
          </SAccordionHeader>
          <Link ref={childRef} to="/home/insurunce">보험적취내역</Link>
        </SAccordion>
        <SAccordion>
          <SAccordionHeader>
            <TbDeviceMobileVibration size={30}/>
            <div>기기관리</div>
          </SAccordionHeader>
          <Link ref={childRef} to="/home/device">비콘단말기관리</Link>
        </SAccordion>
      </SMenuContainer>
    </SWrapper>

  )



}

export default SideNav;