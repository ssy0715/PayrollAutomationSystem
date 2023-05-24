import styled from "styled-components";

const SWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-item: center;
  margin-top: 10px;
  width: ${(props) => props.width || 210}px;
  height: ${(props) => props.height || 40}px;

`;

const SContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-item: center;

  width: ${(props) => props.width || 210}px;
  height: ${(props) => props.height || 40}px;
  border-radius:3px;
  border: 1.7px solid rgb(207, 207, 207);
  
  & > input {
    border: none;
    placeholderTextColor: gray;
  }

`

const SIconBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-item: center;
  border-radius: 3px 0px 0px 3px;
  background-color: rgb(237, 237, 237);
`;


const StyledInput = ({ width, height, color, icon, placeholder }) => {

  return (
    <SWrapper>
      <SContainer>
        <SIconBox>
          <image src={icon} alt="아이콘" />
        </SIconBox>
        <input placeholder={placeholder} />
      </SContainer>
    </SWrapper>
  );
};

const IconInput = () => {
  return <StyledInput />
}

export default IconInput;