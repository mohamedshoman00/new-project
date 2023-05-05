import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import DashBoard from "./components/Views/DashBoard";
import FormLogin from "./pages/FormLogin";
import { AnimatePresence } from "framer-motion";
import ForgotPassword from "./components/Login/oldLogin/ForgotPassword";
import Admin from "./pages/Admin";
import UserProfile from "./components/Views/UserProfile";
import DoctorList from "./components/Views/DoctorList";
import PatientList from "./components/Views/PatientList";
import DoctorSchedule from "./components/Views/DoctorSchedule";
import AppointmentList from "./components/Views/AppointmentList";
import DoctorTimeTable from "./components/Views/DoctorTimeTable";
// import SignupForm from "./components/Login/SignupForm";
import Ee from "./components/Login/multiStep/Ee";
import FormSignUp from "./components/Login/multiStep/FormSignUp";
import SignupForm from "./components/Login/multiStep/SignupForm";
import SignUp2 from "./components/Login/SignUp2";
import Login1 from "./components/Login/Login1";
import ForgotPassword1 from "./components/Login/ForgotPassword1";

function App() {
  return (
    <>
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<FormLogin />} />
          <Route path="/admin" element={<Admin />}>
            <Route
              path="/admin"
              element={<Navigate to="/admin/user-profile" replace />}
            />
            <Route path="/admin/user-profile" element={<UserProfile />} />
            <Route path="/admin/doctor" element={<DoctorList />} />
            <Route path="/admin/patient" element={<PatientList />} />
            <Route path="/admin/doctor-schedule" element={<DoctorSchedule />} />
            <Route
              path="/admin/doctor-time-table"
              element={<DoctorTimeTable />}
            />
            <Route
              path="/admin/appointment-list"
              element={<AppointmentList />}
            />
          </Route>
          <Route path="/signup" element={<FormSignUp />} />
          <Route path="/ss" element={<SignupForm />} />
          <Route path="/ee" element={<Ee />} />
          <Route path="forgot-password" element={<ForgotPassword1 />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
