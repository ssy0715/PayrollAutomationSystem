import styled from "styled-components";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { GoPrimitiveDot } from "react-icons/go";
import EmployeeDetailFamilyTable from "./EmployeeDetailFamilyTable";
import NewFamilyModal from "../Modal/NewFamilyModal";


const SWrapper = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 90%;
  height: 90%;

  font-size: 1.1em;
  text-align: left;
  line-height: 2.8;
  border-collapse: collaps;

  margin: 20px 10px;
  padding-top: 40px;
  
  border-top: 2.5px solid ${({theme}) => theme.colors.black050};

  gap: 2em;



  input {
    border: none;
    border-radius: 5px;
    padding: 15px;
  }


  tr td:nth-child(odd) {
    background-color: ${({ theme }) => theme.colors.blue010};
    text-align: right;
  }


  td {
    width: 25%;
    padding: 0 15px;
    border-bottom: 1px solid ${({theme}) => theme.colors.black050};
 
    > select {
      width: 100%;
      height: 100%;
      padding: 0;
      border: none;
    }
  }
  

`

const SCategoryContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
  vertical-align: middle;



& > div {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-left: 1em;

  }
`

const SCompanyInfo = styled.div`
  display: flex;
  flex-direction: column;
  

  height: 30%;

  table {
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 1px 5px -2px rgba(0, 0, 0, 0.5);
    
  }

`

const SManagerInfo = styled.div`
display: flex;
flex-direction: column;


height: 30%;


table {
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 1px 5px -2px rgba(0, 0, 0, 0.5);
  
  
}

`

const SContractInfo = styled.div`
display: flex;
flex-direction: column;


height: 30%;


table {
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 1px 5px -2px rgba(0, 0, 0, 0.5);
  
  
}

`

const SAttendanceInfo = styled.div`
display: flex;
flex-direction: column;


height: 30%;


input {
  height: 100%;
  border: none;
  border-radius: 5px;
  padding: 15px;
}

table {
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 1px 5px -2px rgba(0, 0, 0, 0.5);
  
  
}

`

const SNote = styled.div`
display: flex;
flex-direction: column;


height: 30%;

input {
  height: 100px;
  border: none;
  border-radius: 5px;
  box-shadow: 0 1px 5px -2px rgba(0, 0, 0, 0.5);
  padding: 15px;
}

`

const SFamilyInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;


  height: 30%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  
  
  height: 30%;
  
  
}


`

const SFileContainer = styled.div`
display: flex;

gap: 1.1em;

input {
  width: 20%;
  box-shadow: 0 1px 5px -2px rgba(0, 0, 0, 0.5);
}

`

const SFileBtn = styled.button`
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

const SLogoimgContainer = styled.div`
width: 100%;
height: 10em;

background-color: white;
border-radius: 3px;
box-shadow: 0 1px 5px -2px rgba(0, 0, 0, 0.5);
margin: 2em 0;
padding: 20px;
`

const SSalaryInfo = styled.div`
display: flex;
flex-direction: column;


height: 30%;


input {
  height: 100%;
  border: none;
  border-radius: 5px;
  padding: 15px;
}

table {
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 1px 5px -2px rgba(0, 0, 0, 0.5);
  
  
}
`

const SForeignerInfo = styled.div`
display: flex;
flex-direction: column;


height: 30%;


input {
  height: 100%;
  border: none;
  border-radius: 5px;
  padding: 15px;
}

table {
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 1px 5px -2px rgba(0, 0, 0, 0.5);
  
  
}
`

const SAddButton = styled.button`
flex-wrap: wrap;

width: 80px;
height: 30px;
color: white;
font-size: 0.8em;
background-color: ${({theme}) => theme.colors.blue090};
border-radius: 3px;
border: none;

&:hover{  
  background-color : skyblue;
}


`



const EmployeeDetailTable = () => {

  // user 경로인 경우 가족사항 조회 숨김
  const location = useLocation();
  const isUserPath = location.pathname.startsWith('/user');

  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <SWrapper>
      <SCompanyInfo>
        <SCategoryContainer>
          <GoPrimitiveDot color = "#548AFF" />
          <h3>기본 정보</h3>
        </SCategoryContainer>
        <table>
          <tr>
            <td>사원번호</td>
            <td><input type="text"/></td>
            <td>사원명</td>
            <td><input type="text"/></td>
          </tr>
          <tr>
            <td>주민등록번호</td>
            <td><input type="text"/></td>
            <td>성별</td>
            <td><input type="text"/></td>
          </tr>
          <tr>
            <td>생년월일</td>
            <td><input type="text"/></td>
            <td>양력/음력</td>
            <td><input type="text"/></td>
          </tr>
          <tr>
            <td>결혼유무</td>
            <td><input type="text"/></td>
            <td>결혼기념일</td>
            <td><input type="text"/></td>
          </tr>
        </table>
      </SCompanyInfo>
      <SManagerInfo>
        <SCategoryContainer>
          <GoPrimitiveDot color = "#548AFF" />
          <h3>연락처 및 주소</h3>
        </SCategoryContainer>
        <table>
          <tr>
            <td>회사 전화번호</td>
            <td><input type="text"/></td>
            <td>휴대폰 번호</td>
            <td><input type="text"/></td>
          </tr>
          <tr>
            <td>주민등록 주소</td>
            <td><input type="text"/></td>
            <td>실거주지 주소</td>
            <td><input type="text"/></td>
          </tr>
          <tr>
            <td>이메일</td>
            <td><input type="text"/></td>
            <td>개인이메일</td>
            <td><input type="text"/></td>
          </tr>
        </table>
      </SManagerInfo>
      <SContractInfo>
        <SCategoryContainer>
          <GoPrimitiveDot color = "#548AFF" />
          <h3>부서정보</h3>
        </SCategoryContainer>
        <table>
          <tr>
            <td>부서명</td>
            <td><input type="date"/></td>
            <td>임원여부</td>
            <td>              
              <select size={1}>
              <option value="1">X</option>
              <option value="2">O</option>
            </select>
            </td>
          </tr>
          <tr>
            <td>직책</td>
            <td><input type="text"/></td>
            <td>고용형태</td>
            <td><input type="text"/></td>
          </tr>
          <tr>
            <td>급여형태</td>
            <td>
            <select size={1}>
              <option value="1">시급</option>
              <option value="2">월급</option>
              <option value="3">연봉</option>
            </select>
            </td>
            <td>입사일</td>
            <td><input type="date"/></td>
          </tr>
          <tr>
            <td>재직상태</td>
            <td>            
              <select size={1}>
              <option value="1">재직</option>
              <option value="2">퇴사</option>
              <option value="3">휴직</option>
            </select>
            </td>
            <td>퇴사일자</td>
            <td><input type="date"/></td>
          </tr>
        </table>
      </SContractInfo>
      <SAttendanceInfo>
        <SCategoryContainer>
          <GoPrimitiveDot color = "#548AFF" />
          <h3>근태정보</h3>
        </SCategoryContainer>
        <table>
          <tr>
            <td>기본출근시간</td>
            <td><input type="text"/></td>
            <td>기본퇴근시간</td>
            <td><input type="text"/></td>
          </tr>
          <tr>
            <td>주중근무일</td>
            <td><input type="text"/></td>
            <td>주휴일</td>
            <td><input type="text"/></td>
          </tr>
          <tr>
            <td>소정근로시간(일)</td>
            <td><input /></td>
            <td></td>
            <td></td>
          </tr>
        </table>
      </SAttendanceInfo>
      <SSalaryInfo>
        <SCategoryContainer>
          <GoPrimitiveDot color = "#548AFF" />
          <h3>급여정보</h3>
        </SCategoryContainer>
        <table>
          <tr>
            <td>기본급여</td>
            <td><input type="text"/></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>이체은행</td>
            <td>              
              <select size={1}>
              <option value="1">은행선택</option>
              <option value="2">국민은행</option>
              <option value="3">신한은행</option>
              <option value="3">하나은행</option>
              <option value="3">우리은행</option>
              <option value="3">IBK기업은행</option>
              <option value="3">SC제일은행</option>
              <option value="3">우체국</option>
              <option value="3">농협은행</option>
              <option value="3">신협은행</option>
              <option value="3">수협은행</option>
              <option value="3">새마을금고</option>
              <option value="3">대구은행</option>
              <option value="3">부산은행</option>
              <option value="3">광주은행</option>
              <option value="3">경남은행</option>
              <option value="3">전북은행</option>
              <option value="3">제주은행</option>
              <option value="3">산업은행</option>
              <option value="3">씨티은행</option>
              <option value="3">산림조합</option>
              <option value="3">저축은행</option>
            </select></td>
            <td>계좌번호</td>
            <td><input type="text"/></td>
          </tr>
          <tr>
            <td>국민연금납부</td>
            <td><input type="text"/></td>
            <td>국민연금신고 월보수액</td>
            <td></td>
          </tr>
          <tr>
            <td>건강보험납부</td>
            <td><input type="text"/></td>
            <td>건강보험 월보수액</td>
            <td></td>
          </tr>
          <tr>
            <td>고용보험납부</td>
            <td><input type="text"/></td>
            <td>고용보험 월보수액</td>
            <td></td>
          </tr>
        </table>
      </SSalaryInfo>
      <SForeignerInfo>
        <SCategoryContainer>
          <GoPrimitiveDot color = "#548AFF" />
          <h3>외국인정보</h3>  
        </ SCategoryContainer>
        <table>
        <tr>
            <td>외국인여부</td>
            <td>              
              <select size={1}>
              <option value="1">X</option>
              <option value="2">O</option>
            </select>
            </td>
            <td>출국만기일자</td>
            <td><input type="date"/></td>
          </tr>
          <tr>
            <td>출국만기보험사</td>
            <td><input type="text"/></td>
            <td>출국만기보험금액</td>
            <td><input type="text"/></td>
          </tr>
        </table>
      </SForeignerInfo>
      {/* user권한 페이지일경우 추가버튼 숨김 */}
      {isUserPath ? null : (
                <>
      <SFamilyInfo>
      <SCategoryContainer>
          <GoPrimitiveDot color = "#548AFF" />
          <h3>가족사항</h3>
          <div>
          <SAddButton onClick={openModal}>추가</SAddButton>
          <NewFamilyModal  isOpen={isModalOpen} closeModal={closeModal}/>
          </div>
        </SCategoryContainer>
      </SFamilyInfo>
      </>
      )}
    </SWrapper>
  )
}

export default EmployeeDetailTable;