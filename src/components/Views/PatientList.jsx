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
const PatientList = () => {
  const [patients, setPatients] = useState([
    {
      name: "ahmed",
      img: doctorImg,
      address: "Linden Avenue, Orlando",
      disease: "ee Disease",
      age: 15,
      phone: "01023770767",
      email: "Hamoda00@gmail.com",
      doctorName: "Zeko",
    },
    {
      name: "m",
      img: doctorImg,
      address: "Avenue, Orlando",
      disease: "gb Disease",
      age: 13,
      phone: "01023770767",
      email: "Hamoda00@gmail.com",
      doctorName: "Zeko",
    },
    {
      name: "b",
      img: doctorImg,
      address: "Orlando",
      disease: "fgb Disease",
      age: 12,
      phone: "01023770767",
      email: "Hamoda00@gmail.com",
      doctorName: "Zeko",
    },
    {
      name: "c",
      img: doctorImg,
      address: "AA Avenue, Orlando",
      disease: "Liver Disease",
      age: 2,
      phone: "01023770767",
      email: "Hamoda00@gmail.com",
      doctorName: "Zeko",
    },
    {
      name: "n",
      img: doctorImg,
      address: "DD Avenue, Orlando",
      disease: "zzzz Disease",
      age: 80,
      phone: "01023770767",
      email: "Hamoda00@gmail.com",
      doctorName: "Ahmed",
    },
    {
      name: "e",
      img: doctorImg,
      address: "XX Avenue, Orlando",
      disease: "xxx Disease",
      age: 90,
      phone: "01023770767",
      email: "Hamoda00@gmail.com",
      doctorName: "Ahmed",
    },
    {
      name: "x",
      img: doctorImg,
      address: "FG Avenue, Orlando",
      disease: "cccc Disease",
      age: 100,
      phone: "01023770767",
      email: "Hamoda00@gmail.com",
      doctorName: "Ahmed",
    },
    {
      name: "s",
      img: doctorImg,
      address: "Linden Avenue, Orlando",
      disease: "SASS Disease",
      age: 200,
      phone: "01023770767",
      email: "Hamoda00@gmail.com",
      doctorName: "Memo",
    },
    {
      name: "z",
      img: doctorImg,
      address: "Linden Avenue, Orlando",
      disease: "AAA Disease",
      age: 1,
      phone: "01023770767",
      email: "Hamoda00@gmail.com",
      doctorName: "Memo",
    },
    {
      name: "y",
      img: doctorImg,
      address: "Linden Avenue, Orlando",
      disease: "BBB Disease",
      age: 22,
      phone: "01023770767",
      email: "Hamoda00@gmail.com",
      doctorName: "Memo",
    },
  ]);
  const data = useMemo(() => [...patients], [patients]);
  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
        Cell: ({ row }) => (
          <div className="d-flex align-items-center">
            <img
              src={row.original.img}
              alt=""
              width="30px"
              height="30px"
              style={{ borderRadius: "50%", marginRight: "10px" }}
            />
            <p
              style={{
                fontWeight: "500",
                fontSize: "14px",
                margin: "0",
              }}
            >
              {row.original.name}
            </p>
          </div>
        ),
      },
      {
        Header: "Address",
        accessor: "address",
      },

      {
        Header: "Disease",
        accessor: "disease",
      },
      {
        Header: "Age",
        accessor: "age",
      },
      {
        Header: "Phone",
        accessor: "phone",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Action",
        accessor: "action",
        Cell: ({ row }) => (
          <div className="d-flex hidden-print">
            <FaPencilAlt
              className="me-lg-3 me-sm-2"
              style={{
                cursor: "pointer",
                fontSize: "20px",
                color: "#009efb",
              }}
            />
            <FaRegTrashAlt
              className="me-lg-3 me-sm-2"
              style={{
                cursor: "pointer",
                fontSize: "20px",
                color: "#d9534f",
              }}
            />
          </div>
        ),
      },
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
        }}
      >
        <Card style={{ overflowX: "auto" }}>
          <div
            className="d-flex align-items-center justify-content-between"
            style={{ borderBottom: "1px solid rgba(0, 0, 0, .1)" }}
          >
            <h4 className="p-3">Patients List</h4>
            <NavLink className="p-3" style={{ textDecoration: "none" }}>
              Add Patient
            </NavLink>
          </div>
          <GlobalTable data={data} columns={columns} />
        </Card>
      </div>
    </>
  );
};

export default PatientList;
