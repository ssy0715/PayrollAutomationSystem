import styled from "styled-components";
import SideNav from "../../components/SideNav/SideNav";
import { useState } from "react";
import { CompanyTable } from "../../components/Table/CompanyTable";
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
  padding: 0px 20px;
  gap: 10px;
  background-color: white;
  box-shadow: 0 2px 8px -2px rgba(0, 0, 0, 0.5);
  border-radius: 5px;

  font-size: 1.2em;

& > input {
  border: none;
  font-size: 1em;

}

`

const SCategory = styled.div`
  width: 90%;

  padding: 10px 0px;
  font-size: 28px;
  font-weight: 600;
  color: rgb(127, 127, 127);

`

const SButtonContainer = styled.div`
  display: flex;
  min-width: 40%;
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
  // padding: 0px 20px;
  gap: 10px;
  background-color: white;
  box-shadow: 0 2px 8px -2px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
`

const CompanyManage = () => {

  return (
  <SWrapper>
    <Header />
    <SContentWrapper>
      <SideNav />
      <SContentContainer>
        <SCategory>
          <div>회사정보</div>
        </SCategory>
        <SContentHeader>
          <div>회사명 : </div>
          <input placeholder="내용을 입력해주세요" />
          <div>등록일 : </div>
          <input size={10} type="date" />
          <div>~</div>
          <input size={10} type="date" />
          <SButtonContainer>
            <SSerchButton>검색</SSerchButton>
            <SNewButton>신규</SNewButton>
          </SButtonContainer>
        </SContentHeader>
        <SCompanyTable>
          <CompanyTable/>
        </SCompanyTable>
      </SContentContainer>
    </SContentWrapper>
  </SWrapper>
  )

}

export default CompanyManage;