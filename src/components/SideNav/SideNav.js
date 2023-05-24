import styled from "styled-components";
import { useState } from "react";



const SWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 15%;
  height: 100vh;
  background-color: rgb(52, 152, 219);
  box-shadow: 2px 0 2.94px 0.06px rgba(4, 26, 55, 0.16);

`

const SMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2.8rem;
  font-size: 1.1em;
  color: white;
  font-weight: 500;

`



const SideNav = () => {


  return (

    <SWrapper>
      <SMenuContainer>
        <div>부서관리</div>
        <div>사원정보관리</div>
        <div>직원명부</div>
        <div>근태관리</div>
        <div>연차사용내역</div>
        <div>근로시간관리</div>
        <div>급여관리</div>
        <div>급여항목 및 요율관리</div>
        <div>급여대장</div>
        <div>이체내역서</div>
        <div>출국만기보험내역</div>
        <div>퇴직연금내역</div>
        <div>보험적취내역</div>
        <div>기기관리</div>
      </SMenuContainer>
    </SWrapper>

  )



}

export default SideNav;