import React, { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import AdminNavbar from "../components/Navbar/AdminNavbar";
import { BsPieChart } from "react-icons/bs";
import {
  FaCheckSquare,
  FaListAlt,
  FaStethoscope,
  FaUserAlt,
  FaUserCircle,
} from "react-icons/fa";
import { BiNotepad } from "react-icons/bi";
import { motion } from "framer-motion";

const Admin = () => {
  const menu = [
    {
      path: "/admin/user-profile",
      name: "User profile",
      icon: <FaUserCircle />,
    },
    {
      path: "/admin/doctor",
      name: "Doctors List",
      icon: <FaStethoscope />,
    },
    {
      path: "/admin/patient",
      name: "Patients List",
      icon: <FaUserAlt />,
    },
    {
      path: "/admin/doctor-schedule",
      name: "Doctors Schedule",
      icon: <FaListAlt />,
    },
    {
      path: "/admin/doctor-time-table",
      name: "Doctor TimeTable",
      icon: <BiNotepad />,
    },
    {
      path: "/admin/appointment-list",
      name: "Appointment List",
      icon: <FaCheckSquare />,
    },
  ];
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <div className="d-flex" style={{ position: "relative" }}>
        <Sidebar isOpen={isOpen} menu={menu} />
        <motion.div
          animate={{
            left: isOpen ? "250px" : "70px",
            width: isOpen ? "calc(100% - 250px)" : "calc(100% - 70px)",
            opacity: 1,
          }}
          style={{
            position: "relative",
            // width: isOpen ? "calc(100% - 250px)" : "calc(100% - 70px)",
          }}
        >
          <AdminNavbar isOpen={isOpen} setIsOpen={setIsOpen} />
          <Outlet />
        </motion.div>
      </div>
    </>
  );
};

export default Admin;
