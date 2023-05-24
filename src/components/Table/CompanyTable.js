import styled from "styled-components";
import { DefaultTable } from "..";
import { CompanyDummy } from "../../pages/CompanyManage/CompanyDummy";

const TableContainer = styled(DefaultTable)`

`


export const CompanyTable = () => {


  return(
    <TableContainer>
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
      {(data.length) > 0 ? (
        data.map((companydata) =>{
        (<th>
        <td>{companydata.company.companyId}</td>
      </th>)
      :
      " 조회할 항목이 없습니다. "}
    )}

    </TableContainer>
  )

}