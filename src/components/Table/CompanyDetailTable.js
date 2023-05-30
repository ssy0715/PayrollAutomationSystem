import styled from "styled-components";

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

const SCompanyInfo = styled.div`

`

const SManagerInfo = styled.div`

`

const SContractInfo = styled.div`

`

const SEtcInfo = styled.div`

`

const SNote = styled.div`

`


const CompanyDetailTable = () => {

  return (
    <SWrapper>
      <SCompanyInfo>
        <h3>회사 정보</h3>
      </SCompanyInfo>
      <SManagerInfo>
        <h3>담당자 정보</h3>
      </SManagerInfo>
      <SContractInfo>
        <h3>계약자 정보</h3>
      </SContractInfo>
      <SEtcInfo>
        <h3>기타</h3>
      </SEtcInfo>
      <SNote>
        <h3>비고</h3>
      </SNote>
    </SWrapper>
  )

}

export default CompanyDetailTable;