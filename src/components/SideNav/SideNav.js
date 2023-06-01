import styled from "styled-components";
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
  width: 18%;
  min-width: 200px;

  height: 100vh;
  background-color: #548AFF;
  box-shadow: 2px 0 2.94px 0.06px rgba(4, 26, 55, 0.16);

`

const SMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  font-size: 1.1em;
  color: white;
  font-weight: 500;

  width: 100%;
  padding-left: 15%;


  a {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 0.5em;
    color: white;
    &:hover, &:active {
      color: ${({theme}) => theme.colors.blue010};
      text-decoration: none;
    }
  }

`



const SideNav = () => {

  return (

    <SWrapper>
      <SMenuContainer>
        <Link to="/home/depart">
          <RiGroup2Fill size={35}/>
          <div>부서관리</div>
        </Link>
        <Link to="/home/employee">
          <RiUserSettingsLine size={29}/>
          <div>사원정보관리</div>
        </Link>
        <Link to="/home/employeelist">
          <ImProfile size={27}/>
          <div>직원명부</div>
        </Link>
        <Link to="/home/attendance">
          <ImCalendar size={27}/>
          <div>근태관리</div>
        </Link>
        <Link to="/home/annual">
          <MdOutlineFreeCancellation size={30}/>
          <div>연차사용내역</div>
        </Link>
        <Link to="/home/defaultworktime">
          <FaClock size={25}/>
          <div>근로시간관리</div>
        </Link>
        <Link to="/home/payrollmanage">
          <TbPigMoney size={30}/>
          <div>급여관리</div>
        </Link>
        <Link to="/home/ratemanage">
          <MdTableView size={32}/>
          <div>급여항목 및 요율관리</div>
        </Link>
        <Link to="/home/payrollcheck">
          <MdLibraryBooks size={30}/>
          급여대장
        </Link>
        <Link to="/home/transferhistory">
          <TbReportMoney size={30}/>
          <div>이체내역서</div>
        </Link>
        <Link to="/home/departins">
          <MdLocalAirport size={30}/>
          <div>출국만기보험내역</div>
        </Link>
        <Link to="/home/retire">
          <HiDocumentText size={30}/>
          <div>퇴직연금내역</div>
        </Link>
        <Link to="/home/insurunce">
          <HiDocumentDuplicate size={30} color="white"/>
          <div>보험적취내역</div>
        </Link>
        <Link to="/home/device">
          <TbDeviceMobileVibration size={30}/>
          <div>기기관리</div>
        </Link>
      </SMenuContainer>
    </SWrapper>

  )



}

export default SideNav;