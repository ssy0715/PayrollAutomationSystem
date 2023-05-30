import { HomeRouter } from "./Routers";
import { SharedLayout, SideNav } from "./components";
import { Home, Login, CompanyManage, DepartmentManage, CompanyDetail } from "./pages";
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
            <Route path="/home/com/:companyId" element={<CompanyDetail />} />
          {/* </Route> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
