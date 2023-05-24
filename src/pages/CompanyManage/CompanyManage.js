import styled from "styled-components";
import SideNav from "../../components/SideNav/SideNav";
import {FaUserCircle} from 'react-icons/fa';
import {BsArrowBarRight} from 'react-icons/bs';
import { CompanyDummy, companyColumnData } from "./CompanyDummy";
import { useState } from "react";
import { useTable } from "react-table";


const SHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: white;
  color: rgb(52, 152, 219);
  font-size: 1.1em;
  font-weight: 500;
  box-shadow: 0 2px 18px -2px rgba(0, 0, 0, 0.5);

`

const SWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const SCompanyWrapper = styled.div`
  display: flex;
  align-items: center;
  min-width: 45%;
  padding: 0px 30px;
  gap: 40px;
  font-size: 1.3em;
  font-weight: 800;
`

const SUserWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: flex-end;
  padding: 0px 30px;
  gap: 20px;
`

const SUserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
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
  background-color: rgb(52, 152, 219);
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
  background-color: rgb(52, 152, 219);
  border-radius: 3px;
  border: none;

  &:hover{  
    background-color : skyblue;
  }

`

const SCompanyTable = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 80%;
  margin: 10px;
  padding: 0px 20px;
  gap: 10px;
  background-color: white;
  box-shadow: 0 2px 8px -2px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
`

// const columns = useMemo(() => companyColumnData, [])



const CompanyManage = () => {
// const {
//   getTableProps, //table props
//   getTableBodyProps, //table body props
//   headerGroups, //헤더들
//   rows, //로우 데이터들
//   prepareRow } =
// useTable({ columns, companyDummy });

  return (
  <SWrapper>
    <SHeader>
      <SCompanyWrapper>
        <div>Payroll Auto</div>
        <BsArrowBarRight size={25}/>
      </SCompanyWrapper>
      <SUserWrapper>
        <div>계약 만료일 : 2025-12-31</div>
        <SUserInfo>
          <FaUserCircle size={32}/>
          <div>Username</div>
        </SUserInfo>
        <div>로그아웃</div>
      </SUserWrapper>
    </SHeader>
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
        {/* <table {...getTableProps}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table> */}
          {/* <table>
            <th>
              <td>번호</td>
              <td>회사명</td>
              <td>담당자</td>
              <td>연락처</td>
              <td>이메일</td>
              <td>주소</td>
              <td>계약형태</td>
              <td>계약일</td>
              <td>만료일</td>
              <td>상태</td>
            </th>
            <th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </th>
          </table> */}
        </SCompanyTable>
      </SContentContainer>
    </SContentWrapper>
  </SWrapper>
  )

}

export default CompanyManage;