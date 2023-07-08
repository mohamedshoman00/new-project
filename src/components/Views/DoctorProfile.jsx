import React from "react";
import { Button, Card, Col, Container, Form } from "react-bootstrap";
import doctorImg from "../../assets/images/doctor-3.jpg";
import {
  FaFacebookSquare,
  FaGooglePlusSquare,
  FaLinkedin,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDoctorData } from "../../redux/actions/appAction";
const DoctorProfile = () => {
  const [date, setdate] = useState();
  const chage = (e) => {
    const date = e.target.value;
    setdate(date);
    console.log(date);
  };
const userData = useSelector(state=>state.doctorData);

  return (
    <>
      <Container fluid>
        <div
          className="d-flex w-100 py-5"
          style={{
            backgroundColor: "#f1f5fc",
            padding: "15px",
          }}
        >
          <Col>
            <Card className="p-2">
              <div
                className="d-flex align-items-center justify-content-between"
                style={{ borderBottom: "1px solid rgba(0, 0, 0, .1)" }}
              >
                <h3 className="p-3">My Profile</h3>
              </div>
              <Form className="p-4 d-flex flex-wrap align-items-center  gap-4">
                <Form.Group className="col-lg-6" controlId="fname">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter First Name"
                    value={userData&&userData.firstName}
                    disabled
                  />
                </Form.Group>

                <Form.Group className="col-lg-5" controlId="lname">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Last Name"
                    value={userData&&userData.lastName}
                    disabled
                    />
                </Form.Group>
                <Form.Group className="col-lg-6" controlId="mobile">
                  <Form.Label>Mobile Number</Form.Label>
                   
                  <Form.Control type="text" placeholder="Enter Mobile Number" value={userData&&userData.lastName} />
                </Form.Group>
                <Form.Group className="col-lg-5" controlId="email">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter Email Address"
                    value={userData&&userData.email}
                    disabled
                  />
                </Form.Group>

                <Form.Group className="col-lg-6" controlId="Address">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Your Address"
                    disabled
                    value={userData&&userData.address}
                  />
                </Form.Group>

                <Form.Group className="col-lg-5" controlId="DateOfBirth">
                  <Form.Label>Date of Birth</Form.Label>
                  <Form.Control
                    type="date"
                    onChange={(e) => {
                      chage(e);
                    }}
                    value={userData&&userData.dateOfBirth}
                    />
                </Form.Group>
                <Form.Group className="col-lg-6" controlId="DoctorDepartment">
                  <Form.Label>Doctor Department</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Doctor Department"
                    disabled
                    value={userData&& userData.doctorDepartment}
                    />
                </Form.Group>
                <Form.Group className="col-lg-5" controlId="specialist">
                  <Form.Label>Specialist</Form.Label>
                  <Form.Control
                    type="test"
                    placeholder="Enter Your Specialist"
                    disabled
                    value={userData&& userData.specialist}
                  />
                </Form.Group>
                <Form.Group className="col-lg-6" controlId="DoctorImg">
                  <Form.Label>Doctor Image</Form.Label>
                  <Form.Control type="file" />
                </Form.Group>
                <Form.Group className="col-lg-5" controlId="N-IDImg">
                  <Form.Label>N-ID Photo</Form.Label>
                  <Form.Control type="file" />
                </Form.Group>
                <Form.Group className="col-lg-12" controlId="shortText">
                  <textarea
                    rows="2"
                    className=" p-2"
                    placeholder="short Biography"
                    style={{ width: `94%`, outline: "none" }}
                  >{userData && userData.shortBiography}</textarea>
                </Form.Group>
                <Form.Group className="col-lg-12" controlId="DoctorImg">
                  <Form.Label>Gender</Form.Label>
                  <Form.Check
                    disabled
                    checked = {userData.gender === 'male' ? true:false}
                    type="radio"
                    id="default-radio-male"
                    label="Male"
                    name="group1"
                  />

                  <Form.Check
                    disabled
                    checked = {userData.gender === 'female' ? true:false}
                    type="radio"
                    id="default-radio-female"
                    label="Female"
                    name="group1"
                  />
                </Form.Group>
                <Form.Group className="col-lg-5">
                  <div className="d-flex gap-4  " style={{ height: "70px" }}>
                    <Button
                      variant="warning"
                      style={{
                        color: "#fff",
                        width: "150px",
                        height: "50px",
                        fontSize: "20px",
                      }}
                    >
                      Reset
                    </Button>
                    <Button
                      variant="info"
                      style={{
                        color: "#fff",
                        width: "200px",
                        height: "50px",
                        fontSize: "20px",
                      }}
                    >
                      Update Profile
                    </Button>
                  </div>
                </Form.Group>
              </Form>
            </Card>
            <Card className="p-2 my-4">
              <div
                className="d-flex align-items-center justify-content-between"
                style={{ borderBottom: "1px solid rgba(0, 0, 0, .1)" }}
              >
                <h3 className="p-3">Update Password</h3>
              </div>
              {/* <div
                className="d-flex align-items-center justify-content-between"
                style={{ borderBottom: "1px solid rgba(0, 0, 0,.1)" }}
              >
                <h3 className="p-3">My Doctors</h3>
              </div> */}
              <Form
                className="p-4 d-flex flex-wrap align-items-center  gap-4"
                style={{
                  // flex-wrap: nowrap;
                  alignItems: " center",
                  flexDirection: "row",
                  alignContent: "flex-end",
                  justifyContent: "space-between",
                }}
              >
                <Form.Group className="col-lg-6" controlId="fname">
                  <Form.Label>Carrant Password </Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter Carrant Password"
                  />
                </Form.Group>
                <Form.Group className="col-lg-6" controlId="fname">
                  <Form.Label>New PassWord</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter New PassWord"
                  />
                </Form.Group>
                <Form.Group className="col-lg-6" controlId="fname">
                  <Form.Label>Confirm New PassWord</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Confirm New PassWord"
                  />
                </Form.Group>
                <div className="d-flex gap-4  " style={{ height: "70px" }}>
                  <Button
                    variant="success"
                    style={{
                      color: "#fff",
                      width: "150px",
                      height: "50px",
                      fontSize: "20px",
                    }}
                  >
                    Update
                  </Button>
                </div>
              </Form>
            </Card>
          </Col>
        </div>
      </Container>
    </>
  );
};

export default DoctorProfile;
