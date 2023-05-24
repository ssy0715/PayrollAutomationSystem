import { useMemo } from "react"
import { useTable } from "react-table";

export const CompanyDummy = [
  {
    company: {
      companyId: 1,
      companyName: "(주)포어링크",
      manager: "홍길동",
      contact: "010-1234-1234",
      email: "abc@abcd.co.kr",
      companyAdress: "서울시 동작구 흑석동 123-123",
      contractType: "년간 갱신",
      contractDate: "2023-03-10",
      expirationDate: "2024-03-10",
      status: "회원",
    },
  },
  {
    company: {
      companyId: 2,
      companyName: "(주)포어링크",
      manager: "홍길동",
      contact: "010-1234-1234",
      email: "abc@abcd.co.kr",
      companyAdress: "서울시 동작구 흑석동 123-123",
      contractType: "년간 갱신",
      contractDate: "2023-03-10",
      expirationDate: "2024-03-10",
      status: "회원",
    },
  },
  {
    company: {
      companyId: 3,
      companyName: "(주)포어링크",
      manager: "홍길동",
      contact: "010-1234-1234",
      email: "abc@abcd.co.kr",
      companyAdress: "서울시 동작구 흑석동 123-123",
      contractType: "년간 갱신",
      contractDate: "2023-03-10",
      expirationDate: "2024-03-10",
      status: "회원",
    },
  },
  {
    company: {
      companyId: 4,
      companyName: "(주)포어링크",
      manager: "홍길동",
      contact: "010-1234-1234",
      email: "abc@abcd.co.kr",
      companyAdress: "서울시 동작구 흑석동 123-123",
      contractType: "년간 갱신",
      contractDate: "2023-03-10",
      expirationDate: "2024-03-10",
      status: "회원",
    },
  },
  {
    company: {
      companyId: 5,
      companyName: "(주)포어링크",
      manager: "홍길동",
      contact: "010-1234-1234",
      email: "abc@abcd.co.kr",
      companyAdress: "서울시 동작구 흑석동 123-123",
      contractType: "년간 갱신",
      contractDate: "2023-03-10",
      expirationDate: "2024-03-10",
      status: "회원",
    },
  },
  {
    company: {
      companyId: 6,
      companyName: "(주)포어링크",
      manager: "홍길동",
      contact: "010-1234-1234",
      email: "abc@abcd.co.kr",
      companyAdress: "서울시 동작구 흑석동 123-123",
      contractType: "년간 갱신",
      contractDate: "2023-03-10",
      expirationDate: "2024-03-10",
      status: "회원",
    },
  },
  {
    company: {
      companyId: 7,
      companyName: "(주)포어링크",
      manager: "홍길동",
      contact: "010-1234-1234",
      email: "abc@abcd.co.kr",
      companyAdress: "서울시 동작구 흑석동 123-123",
      contractType: "년간 갱신",
      contractDate: "2023-03-10",
      expirationDate: "2024-03-10",
      status: "회원",
    },
  },
  {
    company: {
      companyId: 8,
      companyName: "(주)포어링크",
      manager: "홍길동",
      contact: "010-1234-1234",
      email: "abc@abcd.co.kr",
      companyAdress: "서울시 동작구 흑석동 123-123",
      contractType: "년간 갱신",
      contractDate: "2023-03-10",
      expirationDate: "2024-03-10",
      status: "회원",
    },
  },
  {
    company: {
      companyId: 9,
      companyName: "(주)포어링크",
      manager: "홍길동",
      contact: "010-1234-1234",
      email: "abc@abcd.co.kr",
      companyAdress: "서울시 동작구 흑석동 123-123",
      contractType: "년간 갱신",
      contractDate: "2023-03-10",
      expirationDate: "2024-03-10",
      status: "회원",
    },
  },  
  {
    company: {
      companyId: 10,
      companyName: "(주)포어링크",
      manager: "홍길동",
      contact: "010-1234-1234",
      email: "abc@abcd.co.kr",
      companyAdress: "서울시 동작구 흑석동 123-123",
      contractType: "년간 갱신",
      contractDate: "2023-03-10",
      expirationDate: "2024-03-10",
      status: "회원",
    },
  },

];

export const companyColumnData = [
  {
    accessor: "companyId",
    Header: "번호"
},
  {
    accessor: "companyName",
    Header: "회사명"
},
{
  accessor: "manager",
  Header: "담당자"
},
{
  accessor: "contact",
  Header: "연락처"
},
{
  accessor: "email",
  Header: "이메일"
},
{
  accessor: "companyAdress",
  Header: "주소"
},
{
  accessor: "contractType",
  Header: "계약형태"
},
{
  accessor: "contractDate",
  Header: "계약일"
},
{
  accessor: "expirationDate",
  Header: "만료일"
},
{
  accessor: "status",
  Header: "상태"
},

];