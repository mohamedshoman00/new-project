import React, { useEffect } from "react";
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
import User from "./pages/User";
import Doctors_profile from "./components/Views/DoctorProfile";
import DoctorTimeTable1 from "./components/Views/DoctorTimeTableUser";
import DoctorTimeTableUser from "./components/Views/DoctorTimeTableUser";
import DoctorAppointmentList from "./components/Views/DoctorAppointmentList";
import { useDispatch, useSelector } from "react-redux";
import {
  postLoginUser,
  sessionCheck,
  sessionLogOut,
} from "./redux/actions/appAction";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { BASEURL } from "./redux/types/type";

function App() {
  const dispatch = useDispatch();
  const checkUser = useSelector((state) => state.loginStatus);
  const checkLogin = useSelector((state) => state.user);
  console.log(checkUser);
  const RoutesApp = () => {
    if (checkUser === 200) {
      return (
        <>
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/" element={<Navigate to="/admin" replace />} />
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
        </>
      );
    } else if (checkUser === 201) {
      return (
        <>
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/" element={<Navigate to="/user" replace />} />
          <Route path="/user" element={<User />}>
            <Route
              path="/user"
              element={<Navigate to="/user/user-profile" replace />}
            />
            <Route path="/user/user-profile" element={<Doctors_profile />} />

            <Route
              path="/user/doctor-time-table"
              element={<DoctorTimeTableUser />}
            />
            <Route
              path="/user/appointment-list"
              element={<DoctorAppointmentList />}
            />
          </Route>
        </>
      );
    }
     else if (checkUser === 203) {
    return <> <Route path="/" element={<Navigate to="/login" replace />} />
    <Route path="/login" element={<FormLogin />} />
    <Route path="forgot-password" element={<ForgotPassword1 />} /></>;
    }
  };
  useEffect(() => {
  //   // toast.success("🦄 Wow so easy!", {
  //   //   position: "top-right",
  //   //   autoClose: 5000,
  //   //   hideProgressBar: false,
  //   //   closeOnClick: true,
  //   //   pauseOnHover: true,
  //   //   draggable: true,
  //   //   progress: undefined,
  //   //   theme: "colored",
  //   // });
  //   // dispatch(sessionLogOut());
    dispatch(sessionCheck());
  //   RoutesApp();
  }, [checkLogin]);
  return (
    <>
      <AnimatePresence>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        <Routes>
          {RoutesApp()}
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
