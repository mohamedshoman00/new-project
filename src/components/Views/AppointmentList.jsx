// import React, { useMemo, useState } from "react";
// import { Button, Card, Form, Table } from "react-bootstrap";
// import { NavLink } from "react-router-dom";
// import doctorImg from "../../assets/images/doctor-3.jpg";
// import { FaPencilAlt, FaRegTrashAlt } from "react-icons/fa";
// import GlobalTable from "../Table/GlobalTable";
// import ColumnFilter from "../Table/ColumnFilter";
// const AppointmentList = () => {
//   const [patients, setPatients] = useState([
//     {
//       id: 1,
//       name: "ahmed",
//       age: "22",
//       doctorName: "Zeko",
//       department: "Dentist",
//       date: "11 Dec 2020",
//       time: "10:00am-12:00am",
//       disease: "cold",
//       img: doctorImg,
//     },
//     {
//       id: 2,
//       name: "ahmed",
//       age: "22",
//       doctorName: "Zeko",
//       department: "Dentist",
//       date: "11 Dec 2020",
//       time: "10:00am-12:00am",
//       disease: "cold",
//       img: doctorImg,
//     },
//     {
//       id: 3,
//       name: "ahmed",
//       age: "22",
//       doctorName: "Zeko",
//       department: "Dentist",
//       date: "11 Dec 2020",
//       time: "10:00am-12:00am",
//       disease: "cold",
//       img: doctorImg,
//     },
//     {
//       id: 4,
//       name: "ahmed",
//       age: "22",
//       doctorName: "Zeko",
//       department: "Dentist",
//       date: "11 Dec 2020",
//       time: "10:00am-12:00am",
//       disease: "cold",
//       img: doctorImg,
//     },
//     {
//       id: 5,
//       name: "ahmed",
//       age: "22",
//       doctorName: "Zeko",
//       department: "Dentist",
//       date: "11 Dec 2020",
//       time: "10:00am-12:00am",
//       disease: "cold",
//       img: doctorImg,
//     },
//     {
//       id: 6,
//       name: "ahmed",
//       age: "22",
//       doctorName: "Zeko",
//       department: "Dentist",
//       date: "11 Dec 2020",
//       time: "10:00am-12:00am",
//       disease: "cold",
//       img: doctorImg,
//     },
//     {
//       id: 7,
//       name: "ahmed",
//       age: "22",
//       doctorName: "Zeko",
//       department: "Dentist",
//       date: "11 Dec 2020",
//       time: "10:00am-12:00am",
//       disease: "cold",
//       img: doctorImg,
//     },
//     {
//       id: 8,
//       name: "ahmed",
//       age: "22",
//       doctorName: "Zeko",
//       department: "Dentist",
//       date: "11 Dec 2020",
//       time: "10:00am-12:00am",
//       disease: "cold",
//       img: doctorImg,
//     },
//     {
//       id: 9,
//       name: "ahmed",
//       age: "22",
//       doctorName: "Zeko",
//       department: "Dentist",
//       date: "11 Dec 2020",
//       time: "10:00am-12:00am",
//       disease: "cold",
//       img: doctorImg,
//     },
//     {
//       id: 10,
//       name: "ahmed",
//       age: "22",
//       doctorName: "Zeko",
//       department: "Dentist",
//       date: "11 Dec 2020",
//       time: "10:00am-12:00am",
//       disease: "cold",
//       img: doctorImg,
//     },
//   ]);
//   const columns = useMemo(
//     () => [
//       {
//         Header: "ID",
//         accessor: "id",
//       },
//       {
//         Header: "Patient Name",
//         accessor: "name",
//         Cell: ({ row }) => (
//           <div className="d-flex align-items-center">
//             <img
//               src={row.original.img}
//               alt=""
//               width="30px"
//               height="30px"
//               style={{ borderRadius: "50%", marginRight: "10px" }}
//             />
//             <p
//               style={{
//                 fontWeight: "500",
//                 fontSize: "14px",
//                 margin: "0",
//               }}
//             >
//               {row.original.name}
//             </p>
//           </div>
//         ),
//       },
//       {
//         Header: "Age",
//         accessor: "age",
//       },
//       {
//         Header: "Doctor Name",
//         accessor: "doctorName",
//         Filter: ColumnFilter,
//         canFilterColumn: true,
//       },
//       {
//         Header: "Department",
//         accessor: "department",
//       },
//       {
//         Header: "Date",
//         accessor: "date",
//       },
//       {
//         Header: "Time",
//         accessor: "time",
//       },
//       {
//         Header: "Disease",
//         accessor: "disease",
//       },
//       // {
//       //   Header: "Action",
//       //   accessor: "action",
//       //   Cell: ({ row }) => (
//       //     <div className="d-flex hidden-print">
//       //       <FaPencilAlt
//       //         className="me-lg-3 me-sm-2"
//       //         style={{
//       //           cursor: "pointer",
//       //           fontSize: "20px",
//       //           color: "#009efb",
//       //         }}
//       //         onClick={() => console.log(row.original.id)}
//       //       />
//       //       <FaRegTrashAlt
//       //         className="me-lg-3 me-sm-2"
//       //         style={{
//       //           cursor: "pointer",
//       //           fontSize: "20px",
//       //           color: "#d9534f",
//       //         }}
//       //         onClick={() => console.log(row.original.id)}
//       //       />
//       //     </div>
//       //   ),
//       // },
//     ],
//     []
//   );
//   const data = useMemo(() => [...patients], [patients]);
//   return (
//     <>
//       <div
//         className="w-100 py-5"
//         style={{
//           backgroundColor: "#f1f5fc",
//           padding: "15px",
//           minHeight: "92.8vh",
//         }}
//       >
//         <Card className="w-100" style={{ overflowX: "auto" }}>
//           <div
//             className="d-flex align-items-center justify-content-between"
//             style={{
//               borderBottom: "1px solid rgba(0, 0, 0, .1)",
//             }}
//           >
//             <h4 className="p-3">Appointment List</h4>
//           </div>
//           <GlobalTable data={data} columns={columns} />
//         </Card>
//       </div>
//     </>
//   );
// };

// export default AppointmentList;

// // {
// //     const [patients, setPatients] = useState([
// //       {
// //         id: 1,
// //         name: "ahmed",
// //         age: "22",
// //         doctorName: "Zeko",
// //         department: "Dentist",
// //         date: "11 Dec 2020",
// //         time: "10:00am-12:00am",
// //         disease: "cold",
// //         img: doctorImg,
// //       },
// //       {
// //         id: 2,
// //         name: "ahmed",
// //         age: "22",
// //         doctorName: "Zeko",
// //         department: "Dentist",
// //         date: "11 Dec 2020",
// //         time: "10:00am-12:00am",
// //         disease: "cold",
// //         img: doctorImg,
// //       },
// //       {
// //         id: 3,
// //         name: "ahmed",
// //         age: "22",
// //         doctorName: "Zeko",
// //         department: "Dentist",
// //         date: "11 Dec 2020",
// //         time: "10:00am-12:00am",
// //         disease: "cold",
// //         img: doctorImg,
// //       },
// //       {
// //         id: 4,
// //         name: "ahmed",
// //         age: "22",
// //         doctorName: "Zeko",
// //         department: "Dentist",
// //         date: "11 Dec 2020",
// //         time: "10:00am-12:00am",
// //         disease: "cold",
// //         img: doctorImg,
// //       },
// //       {
// //         id: 5,
// //         name: "ahmed",
// //         age: "22",
// //         doctorName: "Zeko",
// //         department: "Dentist",
// //         date: "11 Dec 2020",
// //         time: "10:00am-12:00am",
// //         disease: "cold",
// //         img: doctorImg,
// //       },
// //       {
// //         id: 6,
// //         name: "ahmed",
// //         age: "22",
// //         doctorName: "Zeko",
// //         department: "Dentist",
// //         date: "11 Dec 2020",
// //         time: "10:00am-12:00am",
// //         disease: "cold",
// //         img: doctorImg,
// //       },
// //       {
// //         id: 7,
// //         name: "ahmed",
// //         age: "22",
// //         doctorName: "Zeko",
// //         department: "Dentist",
// //         date: "11 Dec 2020",
// //         time: "10:00am-12:00am",
// //         disease: "cold",
// //         img: doctorImg,
// //       },
// //       {
// //         id: 8,
// //         name: "ahmed",
// //         age: "22",
// //         doctorName: "Zeko",
// //         department: "Dentist",
// //         date: "11 Dec 2020",
// //         time: "10:00am-12:00am",
// //         disease: "cold",
// //         img: doctorImg,
// //       },
// //       {
// //         id: 9,
// //         name: "ahmed",
// //         age: "22",
// //         doctorName: "Zeko",
// //         department: "Dentist",
// //         date: "11 Dec 2020",
// //         time: "10:00am-12:00am",
// //         disease: "cold",
// //         img: doctorImg,
// //       },
// //       {
// //         id: 10,
// //         name: "ahmed",
// //         age: "22",
// //         doctorName: "Zeko",
// //         department: "Dentist",
// //         date: "11 Dec 2020",
// //         time: "10:00am-12:00am",
// //         disease: "cold",
// //         img: doctorImg,
// //       },
// //     ]);
// //     const columns = useMemo(
// //       () => [
// //         {
// //           Header: "ID",
// //           accessor: "id",
// //         },
// //         {
// //           Header: "Patient Name",
// //           accessor: "name",
// //           Cell: ({ row }) => (
// //             <div className="d-flex align-items-center">
// //               <img
// //                 src={row.original.img}
// //                 alt=""
// //                 width="30px"
// //                 height="30px"
// //                 style={{ borderRadius: "50%", marginRight: "10px" }}
// //               />
// //               <p
// //                 style={{
// //                   fontWeight: "500",
// //                   fontSize: "14px",
// //                   margin: "0",
// //                 }}
// //               >
// //                 {row.original.name}
// //               </p>
// //             </div>
// //           ),
// //         },
// //         {
// //           Header: "Age",
// //           accessor: "age",
// //         },
// //         {
// //           Header: "Doctor Name",
// //           accessor: "doctorName",
// //           Filter: ColumnFilter,
// //           canFilterColumn: true,
// //         },
// //         {
// //           Header: "Department",
// //           accessor: "department",
// //         },
// //         {
// //           Header: "Date",
// //           accessor: "date",
// //         },
// //         {
// //           Header: "Time",
// //           accessor: "time",
// //         },
// //         {
// //           Header: "Disease",
// //           accessor: "disease",
// //         },
// //         {
// //           Header: "Action",
// //           accessor: "action",
// //           Cell: ({ row }) => (
// //             <div className="d-flex hidden-print">
// //               <FaPencilAlt
// //                 className="me-lg-3 me-sm-2"
// //                 style={{
// //                   cursor: "pointer",
// //                   fontSize: "20px",
// //                   color: "#009efb",
// //                 }}
// //                 onClick={() => console.log(row.original.id)}
// //               />
// //               <FaRegTrashAlt
// //                 className="me-lg-3 me-sm-2"
// //                 style={{
// //                   cursor: "pointer",
// //                   fontSize: "20px",
// //                   color: "#d9534f",
// //                 }}
// //                 onClick={() => console.log(row.original.id)}
// //               />
// //             </div>
// //           ),
// //         },
// //       ],
// //       []
// //     );
// //     const data = useMemo(() => [...patients], [patients]);
// // }

import React, { useMemo, useState } from "react";
import { Card, Table } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import doctorImg from "../../assets/images/doctor-3.jpg";
import {
  FaArrowDown,
  FaArrowUp,
  FaPencilAlt,
  FaRegTrashAlt,
} from "react-icons/fa";
import GlobalTable from "../Table/GlobalTable";
import ColumnFilter from "../Table/ColumnFilter";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  changeDate,
  deletePatient,
  getAllAppointments,
  getAllPatientsAdmin,
} from "../../redux/actions/appAction";
import { a } from "react-spring";
import DoctorFilter from "./DoctorFilter";
const AppointmentList = () => {
  const dispatch = useDispatch();
  const allDoc = useSelector((state) => state.allDoctors);
  const [curr, setCurr] = useState(0);
  const allApp = useSelector((state) => state.allAppointment);
  const data2 = useSelector((state) => state.allCo);
  const [AllData, setAllData] = useState([]);
  useEffect(() => {
    console.log(allDoc.length);
    console.log(allDoc[curr].mobile);
    if (allDoc.length > 0) {
      console.log(allDoc[curr].mobile);
      if (allDoc[curr]?.mobile !== ``) {
        dispatch(getAllAppointments(allDoc[curr].mobile));
      }
    }
  }, [allDoc, curr]);
  useEffect(() => {
    // dispatch(getAllAppointments(allDoctors));
    // dispatch(getAllAppointments());
    setAllData([
      ...allApp.map((e) => {
        return { ...e, date: changeDate(e.date) };
      }),
    ]);
  }, [allApp, curr]);
  // console.log(allApp);
  // const patientsData = useSelector((state) => state.adminAllPatient);
  // const [patients, setPatients] = useState([]);
  const changeHandler = (event) => {
    console.log(event.target.value);
    setCurr(allDoc.findIndex((e) => e.mobile === event.target.value));
    console.log(curr);
  };
  // useEffect(() => {
  // setPatients(patientsData);
  // }, [patientsData]);
  const data = useMemo(() => [...AllData], [AllData]);
  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
        Cell: ({ row }) => (
          <div className="d-flex align-items-center">
            {/* <img
              src={row.original.img}
              alt=""
              width="30px"
              height="30px"
              style={{ borderRadius: "50%", marginRight: "10px" }}
            /> */}
            <p
              style={{
                fontWeight: "500",
                fontSize: "14px",
                margin: "0",
              }}
            >
              {`${row.original.firstName} ${row.original.lastName}`}
            </p>
          </div>
        ),
      },
      // {
      //   Header: "Doctor Name",
      //   accessor: "doctorName",
      //   Filter: ColumnFilter,
      //   canFilterColumn: true,
      // },

      {
        Header: "Mobile",
        accessor: "mobile",
      },

      {
        Header: "Date",
        accessor: "date",
      },
      {
        Header: "Time",
        accessor: "time",
      },
      // {
      //   Header: "Action",
      //   accessor: "action",
      //   Cell: ({ row }) => (
      //     <div className="d-flex hidden-print">
      //       <FaPencilAlt
      //         className="me-lg-3 me-sm-2"
      //         style={{
      //           cursor: "pointer",
      //           fontSize: "20px",
      //           color: "#009efb",
      //         }}
      //       />
      //       <FaRegTrashAlt
      //         className="me-lg-3 me-sm-2"
      //         style={{
      //           cursor: "pointer",
      //           fontSize: "20px",
      //           color: "#d9534f",
      //         }}
      //         onClick={() => {
      //           // console.log(row.original[`_id`]);
      //           dispatch(deletePatient(row.original[`_id`]));
      //           dispatch(getAllPatientsAdmin());
      //         }}
      //       />
      //     </div>
      //   ),
      // },
    ],
    []
  );
  return (
    <>
      <div
        className="w-100 py-5"
        style={{
          backgroundColor: "#f1f5fc",
          padding: "15px",
          minHeight: "92.8vh",
        }}
      >
        <Card style={{ overflowX: "auto" }}>
          <div
            className="d-flex align-items-center justify-content-between"
            style={{ borderBottom: "1px solid rgba(0, 0, 0, .1)" }}
          >
            <h4 className="p-3">Patients Appointment List</h4>
            <DoctorFilter changeHandler={changeHandler} />
          </div>
          <GlobalTable data={data} columns={columns} />
        </Card>
      </div>
    </>
  );
};

export default AppointmentList;
