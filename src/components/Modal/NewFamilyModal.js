import styled from "styled-components";
import ModalTemplate from "./ModalTemplate";


const SContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.6);
`

const SModalBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: auto;
  min-height: 50%;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 2px 8px -2px rgba(0, 0, 0, 0.5);

  position: fixed;
  top: 50%;  
  left: 50%;   
  transform: translate(-50%, -50%);

  p {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.1em;
  }


`
const SModalTable = styled.div`
  width: 90%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.1em;
  
  table {    
    width: 90%;
    height: 70%;
    text-align: right;
  }
  
  
  tr > td {
    padding: 7px;
    font-weight: 500;
    border: 2px solid #ccc;
    vertical-align: middle;

    :nth-child(odd) {
      background-color: ${({theme}) => theme.colors.blue010};
    }


  input {
      border: none;
      width: 100%;
      height: 100%;
    }
  }


`
const SButtonCotainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.8em;
  width: 80%;

  padding: 1.5em 0;

`

const SCancleButton = styled.button`
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

const SSaveButton = styled.button`
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


const NewFamilyModal = ({isOpen, closeModal}) => {



  return (
    <SContainer style={{ display: isOpen ? "block" : "none" }}>
      <SModalBody>
        <p>가족 사항을 생성 및 수정합니다.</p>
        <SModalTable>
          <table>
            <tr>
              <td>구성원구분</td>
              <td><input type="text"/></td>
              <td>관계</td>
              <td><input type="text"/></td>
            </tr>
            <tr>
              <td>이름</td>
              <td><input type="text"/></td>
              <td>생년월일</td>
              <td><input type="text"/></td>
            </tr>
            <tr>
              <td>동거여부</td>
              <td>
                <select size={1}>
                  <option value={1}>예</option>
                  <option value={2}>아니오</option>
                </select>
              </td>
              <td>공제희망여부</td>
              <td>                
                <select size={1}>
                  <option value={1}>예</option>
                  <option value={2}>아니오</option>
                </select>
              </td>
              </tr>
              <tr>
              <td>장애인여부</td>
              <td>                
                <select size={1}>
                  <option value={1}>예</option>
                  <option value={2}>아니오</option>
                </select>
              </td>
              <td>장애인여부</td>
              <td>                
                <select size={1}>
                  <option value={1}>예</option>
                  <option value={2}>아니오</option>
                </select>
              </td>
            </tr>
          </table>
        </SModalTable>
        <SButtonCotainer>
          <SCancleButton onClick={closeModal}>취소</SCancleButton>
          <SSaveButton onClick={closeModal}>저장</SSaveButton>
        </SButtonCotainer>
      </SModalBody>
    </SContainer>
  )
}


export default NewFamilyModal;