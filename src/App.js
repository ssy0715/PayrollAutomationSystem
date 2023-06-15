import { Home, 
  Login, 
  CompanyManage, 
  DepartmentManage, 
  CompanyDetail, 
  EmployeeManage, 
  EmployeeListManage, 
  AnnualManage, 
  AttendanceManage,
  WorkTimeManage,
  PayrollManage,
  RateManage,
  PayrollCheck,
  TransferHistory,
  DepartureInsurance,
  RetirePension,
  InsuranceClaim,
  DeviceManage,
  EmployeeCommuteManage,
  CommuteManage,
  FixedWorkTimeManage,
  DayOffManage,
  PremiumManage,
  EmployeeDetail,
  CommuteDetail,
  DeviceDetail,
} from "./pages";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/" element={<SharedLayout />}> */}
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home/com" element={<CompanyManage />}/>
            <Route path="/home/depart" element={<DepartmentManage />}/>
            <Route path="/home/employee" element={<EmployeeManage />} />
            <Route path="/home/employeelist" element={<EmployeeListManage />} />
            <Route path="/home/annual" element={<AnnualManage />} />
            <Route path="/home/attendance" element={<AttendanceManage />} />
            <Route path="/home/defaultworktime" element={<WorkTimeManage />} />
            <Route path="/home/payrollmanage" element={<PayrollManage />} />
            <Route path="/home/payrollcheck" element={<PayrollCheck />} />
            <Route path="/home/ratemanage" element={<RateManage />} />
            <Route path="/home/transferhistory" element={<TransferHistory />} />
            <Route path="/home/departins" element={<DepartureInsurance />} />
            <Route path="/home/retire" element={<RetirePension />} />
            <Route path="/home/insurunce" element={<InsuranceClaim />} />
            <Route path="/home/device" element={<DeviceManage />} />
            <Route path="/home/emplcommute" element={<EmployeeCommuteManage />} />
            <Route path="/home/commute" element={<CommuteManage />} />
            <Route path="/home/fixworktime" element={<FixedWorkTimeManage />} />
            <Route path="/home/dayoff" element={<DayOffManage />} />
            <Route path="/home/premium" element={<PremiumManage />} />

            <Route path="/home/com/:companyId" element={<CompanyDetail />} />
            <Route path="/home/employee/employeedetail" element={<EmployeeDetail />} />
            <Route path="/home/commute/commutedetail" element={<CommuteDetail />} />
            <Route path="/home/device/devicedetail" element={<DeviceDetail />} />
          {/* </Route> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
