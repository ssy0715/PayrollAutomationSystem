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
  EmployeeFamilyCheck,
  EmployeeInfoCheck,
  VacationUseStatus,
  VacationForm,
  BusinessTripStatus,
  BusinessTripForm,
  AnnualUseStatus,
  OperatorInfoManage,
} from "./pages";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
      <Router>
        <Routes>
            <Route index element={<Home />} />
            {/* (관리자 권한) admin 메뉴 페이지 라우팅 */}
            <Route path="/login" element={<Login />} />
            <Route path="/admin/com" element={<CompanyManage />}/>
            <Route path="/admin/depart" element={<DepartmentManage />}/>
            <Route path="/admin/employee" element={<EmployeeManage />} />
            <Route path="/admin/employeelist" element={<EmployeeListManage />} />
            <Route path="/admin/annual" element={<AnnualManage />} />
            <Route path="/admin/attendance" element={<AttendanceManage />} />
            <Route path="/admin/defaultworktime" element={<WorkTimeManage />} />
            <Route path="/admin/payrollmanage" element={<PayrollManage />} />
            <Route path="/admin/payrollcheck" element={<PayrollCheck />} />
            <Route path="/admin/ratemanage" element={<RateManage />} />
            <Route path="/admin/transferhistory" element={<TransferHistory />} />
            <Route path="/admin/departins" element={<DepartureInsurance />} />
            <Route path="/admin/retire" element={<RetirePension />} />
            <Route path="/admin/insurunce" element={<InsuranceClaim />} />
            <Route path="/admin/device" element={<DeviceManage />} />
            <Route path="/admin/emplcommute" element={<EmployeeCommuteManage />} />
            <Route path="/admin/commute" element={<CommuteManage />} />
            <Route path="/admin/fixworktime" element={<FixedWorkTimeManage />} />
            <Route path="/admin/dayoff" element={<DayOffManage />} />
            <Route path="/admin/premium" element={<PremiumManage />} />
            
            <Route path="/admin/com/:companyId" element={<CompanyDetail />} />
            <Route path="/admin/employee/employeedetail" element={<EmployeeDetail />} />
            <Route path="/admin/commute/commutedetail" element={<CommuteDetail />} />
            <Route path="/admin/device/devicedetail" element={<DeviceDetail />} />

            {/* (사용자 권한) user메뉴 페이지 라우팅 */}
            <Route path="/user/employeefamilycheck" element={<EmployeeFamilyCheck />} />
            <Route path="/user/employeeinfocheck" element={<EmployeeInfoCheck />} />
            
            <Route path="/user/vacation" element={<VacationUseStatus />} />
            <Route path="/user/vacation/vacationform" element={<VacationForm />} />
            
            <Route path="/user/businesstrip" element={<BusinessTripStatus />} />
            <Route path="/user/businesstrip/businesstripform" element={<BusinessTripForm />} />
        
            <Route path="/user/annualusestatus" element={<AnnualUseStatus />} />

            {/* (운영자 권한) operator메뉴 페이지 라우팅 */}
            <Route path="/operator/operatorinfo" element={<OperatorInfoManage />} />
        
        </Routes>
      </Router>
    </>
  );
}

export default App;
