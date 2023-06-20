import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import React from "react";
import { useRef, useState, useEffect } from "react";
import { FaClock } from "react-icons/fa";
import { HiDocumentText, HiDocumentDuplicate } from "react-icons/hi";
import { TbReportMoney, TbPigMoney, TbDeviceMobileVibration } from "react-icons/tb";
import { ImProfile, ImCalendar } from "react-icons/im";
import { RiGroup2Fill, RiUserSettingsLine,  } from "react-icons/ri";
import { MdOutlineFreeCancellation, MdTableView, MdLibraryBooks, MdLocalAirport } from "react-icons/md";


const SWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 20%;
  min-width: 300px;

  overflow-y: auto;

  max-height: 100%;
  min-height: calc(100vh-200px);
  background-color: #548AFF;
  box-shadow: 2px 0 2.94px 0.06px rgba(4, 26, 55, 0.16);

`

const SMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  width: 100%;
  padding: 15% 15%;

  
  div {
    font-size: 1.1em;
    color: white;
    font-weight: 500;
    letter-spacing : 1px;
}

  

  a {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    text-align: right;
    padding-top: 15px;
    color: white;
    font-size: 0.8em;

    &:hover, &:active {
      color: ${({theme}) => theme.colors.blue010};
      text-decoration: none;
    }
  }

`

const SAccordion = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;

  &:hover, &:active {
    color: ${({theme}) => theme.colors.blue010};
    text-decoration: none;
    cursor: pointer;
  }

`
const SAccordionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5em;

  // position: absolute;
`

const SAccordionContent = styled.div`
  height: 0;
  width: 100%;
  overflow: hidden;
  transition: height 0.35s ease;
  
  `
  
  const IconWrapper = styled.span`
  font-size: 1.5em; /* Adjust the icon size as needed */
  `;
  
  const Title = styled.span`
  font-size: 0.9em; 
`;

const managerMenuItems = [
  {
    title: "부서관리",
    content: ["부서정보"],
    innerLink: ["/home/depart"],
  },
  {
    title: "사원정보관리",
    content: ["사원정보"],
    innerLink: ["/home/employee"],
  },
  {
    title: "직원명부",
    content: ["직원명부조회"],
    innerLink: ["/home/employeelist"],
  },
  {
    title: "근태관리",
    content: ["출퇴근 확인 및 조회","근태조회","출퇴근관리"],
    innerLink: ["/home/emplcommute","/home/attendance","/home/commute"],
  },
  {
    title: "연차사용내역",
    content: ["연차사용내역조회"],
    innerLink: ["/home/annual"],
  },
  {
    title: "근로시간관리",
    content: ["기본근로시간관리","소정근로시간관리","휴일관리"],
    innerLink: ["/home/defaultworktime","/home/fixworktime","/home/dayoff"],
  },
  {
    title: "급여관리",
    content: ["급여관리"],
    innerLink: ["/home/payrollmanage"],
  },
  {
    title: "급여항목 및 요율관리",
    content: ["보험료관리", "급여항목관리"],
    innerLink: ["/home/premium","/home/ratemanage"],
  },
  {
    title: "급여대장",
    content: ["급여대장조회"],
    innerLink: ["/home/payrollcheck"],
  },
  {
    title: "이체내역서",
    content: ["급여이체내역서"],
    innerLink: ["/home/transferhistory"],
  },
  {
    title: "출국만기보험내역",
    content: ["출국만기보험내역 조회"],
    innerLink: ["/home/departins"],
  },
  {
    title: "퇴직연금내역",
    content: ["퇴직연금조회"],
    innerLink: ["/home/retire"],
  },
  {
    title: "보험적취내역",
    content: ["보험적취내역"],
    innerLink: ["/home/insurunce"],
  },

  {
    title: "기기관리",
    content: ["비콘단말기관리"],
    innerLink: ["/home/device"],
  },

];


const managerIconMapping = {
  0: RiGroup2Fill,
  1: RiUserSettingsLine,
  2: ImProfile,
  3: ImCalendar,
  4: MdOutlineFreeCancellation,
  5: FaClock,
  6: MdTableView,
  7: MdLibraryBooks,
  8: HiDocumentDuplicate,
  9: HiDocumentText,
  10: MdLocalAirport,
  11: TbPigMoney,
  12: TbReportMoney,
  13: TbDeviceMobileVibration,
};


const SideNav = () => {
  const parentRefs = useRef([]);
  const childRefs = useRef([]);
  const [isCollapse, setIsCollapse] = useState([]);
  const location = useLocation();

  useEffect(() => {
    parentRefs.current = parentRefs.current.slice(0, managerMenuItems.length);
    childRefs.current = childRefs.current.slice(0, managerMenuItems.length);
    setIsCollapse((prev) => prev.slice(0, managerMenuItems.length));
  }, []);

  useEffect(() => {
    const path = location.pathname;
    const itemIndex = managerMenuItems.findIndex((menuItem) =>
      menuItem.innerLink.includes(path)
    );
    if (itemIndex !== -1) {
      const parentRef = parentRefs.current[itemIndex];
      const childRef = childRefs.current[itemIndex];
      const newIsCollapse = [...isCollapse];
      const isCollapsed = newIsCollapse[itemIndex];
      if (parentRef && childRef) {
        parentRef.style.height = `${childRef.scrollHeight}px`;
        newIsCollapse[itemIndex] = true;
        setIsCollapse(newIsCollapse);
      }
    }
  }, [location]);

  const handleOnClick = (index) => {
    const parentRef = parentRefs.current[index];
    const childRef = childRefs.current[index];
    const newIsCollapse = [...isCollapse];
    const isCollapsed = newIsCollapse[index];
    if (parentRef && childRef) {
      if (isCollapsed) {
        parentRef.style.height = "0";
      } else {
        parentRef.style.height = `${childRef.scrollHeight}px`;
      }
      newIsCollapse[index] = !isCollapsed;
      setIsCollapse(newIsCollapse);
    }
  };

  return (
    <SWrapper>
      <SMenuContainer>
        {managerMenuItems.map((menuItem, index) => (
          <SAccordion key={index}>
            <SAccordionHeader onClick={() => handleOnClick(index)}>
              <IconWrapper>
                {React.createElement(managerIconMapping[index], {
                  style: { verticalAlign: "middle" },
                })}
              </IconWrapper>
              <Title>{menuItem.title}</Title>
            </SAccordionHeader>
            <SAccordionContent
              ref={(ref) => (parentRefs.current[index] = ref)}
            >
              <div ref={(ref) => (childRefs.current[index] = ref)}>
                {menuItem.content.map((item, itemIndex) => (
                  <Link key={itemIndex} to={menuItem.innerLink[itemIndex] || "/home/com"}>
                    {item}
                  </Link>
                ))}
              </div>
            </SAccordionContent>
          </SAccordion>
        ))}
      </SMenuContainer>
    </SWrapper>
  );
};

export default SideNav;