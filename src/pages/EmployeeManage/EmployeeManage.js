import styled from "styled-components";
import SideNav from "../../components/SideNav/SideNav";
import { useState } from "react";
import EmployeeTable from "../../components/Table/EmployeeTable";
import { Header } from "../../components";


const SWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
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
  height: calc(100% - 60px);
  padding: 30px;
  width: 100%;

`

const SContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 6%;
  margin: 10px;
  padding: 10px 20px;
  gap: 10px;
  background-color: white;
  box-shadow: 0 2px 8px -2px rgba(0, 0, 0, 0.5);
  border-radius: 5px;

  font-size: 1.2em;

& > input {
  border: none;
  font-size: 1em;
  width: 5%;

}

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
  min-width: 30%;
  justify-content: flex-end;
  gap: 10px;
`

const SSerchButton = styled.button`
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

const SNewButton = styled.button`
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

const SCompanyTable = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 80%;
  margin: 10px;
  gap: 10px;
  background-color: white;
  box-shadow: 0 2px 8px -2px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
`

const EmployeeManage = () => {

  return (
  <SWrapper>
    <Header />
    <SContentWrapper>
      <SideNav />
      <SContentContainer>
        <SCategory>
          <div>사원정보</div>
        </SCategory>
        <SContentHeader>
          <div>부서명 : </div>
          <select size={1}>
            <option value="1">생산부</option>
            <option value="2">인사부</option>
            <option value="3">관리부</option>
            <option value="4">경영부</option>
          </select>
          <div>사원명 : </div>
          <input placeholder="" />
          <div>외국인여부 : </div>
          <select size={1}>
            <option value="false">내국인</option>
            <option value="true">외국인</option>
          </select>
          <div>고용형태 : </div>
          <select size={1}>
            <option value="1">상용직</option>
            <option value="2">계약직</option>
            <option value="3">일용직</option>
          </select>
          <div>재직여부 : </div>
          <select size={1}>
            <option value="false">내국인</option>
            <option value="true">외국인</option>
          </select>
          <SButtonContainer>
            <SSerchButton>검색</SSerchButton>
            <SNewButton>신규</SNewButton>
          </SButtonContainer>
        </SContentHeader>
        <SCompanyTable>
          <EmployeeTable/>
        </SCompanyTable>
      </SContentContainer>
    </SContentWrapper>
  </SWrapper>
  )

}

export default EmployeeManage;