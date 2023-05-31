import styled from "styled-components";
import { GoPrimitiveDot } from "react-icons/go";

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
  border-top: 1.5px solid ${({theme}) => theme.colors.black110};


`

const SCategoryContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
`

const SCompanyInfo = styled.div`
  display: flex;
  flex-direction: column;
  

  height: 30%;

  table {
    background-color: white;
    border-radius: 5px;
    
    
  }

`

const SManagerInfo = styled.div`
display: flex;
flex-direction: column;


height: 30%;


table {
  background-color: white;
  border-radius: 5px;
  
  
}

`

const SContractInfo = styled.div`
display: flex;
flex-direction: column;


height: 30%;


table {
  background-color: white;
  border-radius: 5px;
  
  
}

`

const SEtcInfo = styled.div`
display: flex;
flex-direction: column;


height: 30%;


table {
  background-color: white;
  border-radius: 5px;
  
  
}

`

const SNote = styled.div`
display: flex;
flex-direction: column;


height: 30%;

input {

}

`


const CompanyDetailTable = () => {

  return (
    <SWrapper>
      <SCompanyInfo>
        <SCategoryContainer>
          <GoPrimitiveDot color = "#548AFF" />
          <h3>회사 정보</h3>
        </SCategoryContainer>
        <table>
          <tr>
            <td>회사명</td>
            <td>d</td>
            <td>대표자명</td>
            <td>d</td>
          </tr>
          <tr>
            <td>사업자번호</td>
            <td>d</td>
            <td>대표전화번호</td>
            <td>d</td>
          </tr>
          <tr>
            <td>주소</td>
            <td>d</td>
            <td>사원수</td>
            <td>d</td>
          </tr>
        </table>
      </SCompanyInfo>
      <SManagerInfo>
        <SCategoryContainer>
          <GoPrimitiveDot color = "#548AFF" />
          <h3>담당자 정보</h3>
        </SCategoryContainer>
        <table>
          <tr>
            <td>회사명</td>
            <td>d</td>
            <td>대표자명</td>
            <td>d</td>
          </tr>
          <tr>
            <td>사업자번호</td>
            <td>d</td>
            <td>대표전화번호</td>
            <td>d</td>
          </tr>
          <tr>
            <td>주소</td>
            <td>d</td>
            <td>사원수</td>
            <td>d</td>
          </tr>
        </table>
      </SManagerInfo>
      <SContractInfo>
        <SCategoryContainer>
          <GoPrimitiveDot color = "#548AFF" />
          <h3>계약자 정보</h3>
        </SCategoryContainer>
        <table>
          <tr>
            <td>회사명</td>
            <td>d</td>
            <td>대표자명</td>
            <td>d</td>
          </tr>
          <tr>
            <td>사업자번호</td>
            <td>d</td>
            <td>대표전화번호</td>
            <td>d</td>
          </tr>
          <tr>
            <td>주소</td>
            <td>d</td>
            <td>사원수</td>
            <td>d</td>
          </tr>
        </table>
      </SContractInfo>
      <SEtcInfo>
        <SCategoryContainer>
          <GoPrimitiveDot color = "#548AFF" />
          <h3>기타</h3>
        </SCategoryContainer>
        <table>
          <tr>
            <td>회사명</td>
            <td>d</td>
            <td>대표자명</td>
            <td>d</td>
          </tr>
        </table>
      </SEtcInfo>
      <SNote>
        <SCategoryContainer>
          <GoPrimitiveDot color = "#548AFF" />
          <h3>비고</h3>  
        </ SCategoryContainer>
        <input />
      </SNote>
    </SWrapper>
  )

}

export default CompanyDetailTable;