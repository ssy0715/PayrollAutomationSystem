import styled from "styled-components";


const SWrapper = styled.div`
  display: flex;
  justify-content: flex-start;

  position: absolute;
  left: 0;
  bottom: 0;

  width: 100%;
  height: 6%;
  padding: 10px;

  background-color: rgb(247, 247, 247);
  // border-top: 2px solid rgb(127, 127, 127);
`
const SContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  color: rgb(127, 127, 127);


& > div {
  margin-right: 30px;
}

`


const Footer = ()=> {

  return (
    <SWrapper>
      <SContainer>
        <div>고객센터 0000 - 0000</div>
        <div>자주하는 질문</div>
      </SContainer>
    </SWrapper>
  )
}

export default Footer;