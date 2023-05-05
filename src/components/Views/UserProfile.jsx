import React from "react";
import { Button, Card, Col, Form } from "react-bootstrap";
import doctorImg from "../../assets/images/doctor-3.jpg";
import {
  FaFacebookSquare,
  FaGooglePlusSquare,
  FaLinkedin,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
const UserProfile = () => {
  return (
    <>
      <div
        className="d-flex w-100 py-5"
        style={{
          backgroundColor: "#f1f5fc",
          padding: "15px",
        }}
      >
        <Col lg={8} md={8}>
          <Card className="p-2">
            <div
              className="d-flex align-items-center justify-content-between"
              style={{ borderBottom: "1px solid rgba(0, 0, 0, .1)" }}
            >
              <h3 className="p-3">My Profile</h3>
            </div>
            <Form className="p-4 d-flex flex-wrap align-items-center justify-content-center gap-4">
              <Form.Group className="col-lg-6" controlId="fname">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="First name" />
              </Form.Group>
              <Form.Group className="col-lg-5" controlId="lname">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Last name" />
              </Form.Group>
              <Form.Group className="col-lg-6" controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="Email Address" />
              </Form.Group>
              <Form.Group className="col-lg-5" controlId="phone">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="text" placeholder="Phone Number" />
              </Form.Group>
              <Form.Group className="col-lg-6" controlId="nationalID">
                <Form.Label>National ID</Form.Label>
                <Form.Control type="text" placeholder="National ID" />
              </Form.Group>
              <Form.Group className="col-lg-5" controlId="Address">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" placeholder="Address" />
              </Form.Group>
              <Form.Group className="col-lg-6" controlId="currentPassword">
                <Form.Label>Current Password</Form.Label>
                <Form.Control type="Password" placeholder="Current Password" />
              </Form.Group>
              <Form.Group className="col-lg-5" controlId="password">
                <Form.Label>New Password</Form.Label>
                <Form.Control type="Password" placeholder="New Password" />
              </Form.Group>
              <Form.Group className="col-lg-6" controlId="dateOfBirth">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control type="date" placeholder="Date of Birth" />
              </Form.Group>
              <Form.Group className="col-lg-5 text-end">
                <div
                  className="d-flex align-items-end justify-content-end"
                  style={{ height: "70px" }}
                >
                  <Button
                    variant="info"
                    style={{
                      color: "#fff",
                      width: "250px",
                      height: "55px",
                      fontSize: "20px",
                    }}
                  >
                    Update Profile
                  </Button>
                </div>
              </Form.Group>
            </Form>
          </Card>
        </Col>
        <Col className="ms-4">
          <Card className="">
            <Card.Body>
              <div className="text-center">
                <img
                  alt="..."
                  className="mb-2"
                  // src={require("assets/img/faces/face-3.jpg")}
                  width="200px"
                  height="200px"
                  style={{ borderRadius: "50%" }}
                  src={doctorImg}
                ></img>
                <h5>Mike Andrew</h5>
                <p>michael24</p>
              </div>
              <p className="text-center">
                "Lamborghini Mercy <br></br>
                Your chick she so thirsty <br></br>
                I'm in that two seat Lambo"
              </p>
            </Card.Body>
            <div className="w-100 d-flex justify-content-center">
              <hr className="w-75"></hr>
            </div>
            <div className="icons d-flex justify-content-center mb-4">
              <NavLink className="icons-style">
                <FaFacebookSquare
                  style={{
                    fontSize: "30px",
                    marginLeft: "6px",
                  }}
                />
              </NavLink>
              <NavLink className="icons-style">
                <FaLinkedin
                  style={{
                    fontSize: "30px",
                    marginLeft: "6px",
                  }}
                />
              </NavLink>
              <NavLink className="icons-style">
                <FaGooglePlusSquare
                  style={{
                    fontSize: "30px",
                    marginLeft: "6px",
                  }}
                />
              </NavLink>
            </div>
          </Card>
        </Col>
      </div>
    </>
  );
};

export default UserProfile;

// // react-bootstrap components
// import {
//   Badge,
//   Button,
//   Card,
//   Form,
//   Navbar,
//   Nav,
//   Container,
//   Row,
//   Col,
// } from "react-bootstrap";
// import doctorImg from "../../assets/images/doctor-3.jpg";

// function UserProfile() {
//   return (
//     <>
//       <Container fluid>
//         <Row>
//           <Col md="8">
//             <Card>
//               <Card.Header>
//                 <Card.Title as="h4">Edit Profile</Card.Title>
//               </Card.Header>
//               <Card.Body>
//                 <Form>
//                   <Row>
//                     <Col className="pr-1" md="5">
//                       <Form.Group>
//                         <label>Company (disabled)</label>
//                         <Form.Control
//                           defaultValue="Creative Code Inc."
//                           disabled
//                           placeholder="Company"
//                           type="text"
//                         ></Form.Control>
//                       </Form.Group>
//                     </Col>
//                     <Col className="px-1" md="3">
//                       <Form.Group>
//                         <label>Username</label>
//                         <Form.Control
//                           defaultValue="michael23"
//                           placeholder="Username"
//                           type="text"
//                         ></Form.Control>
//                       </Form.Group>
//                     </Col>
//                     <Col className="pl-1" md="4">
//                       <Form.Group>
//                         <label htmlFor="exampleInputEmail1">
//                           Email address
//                         </label>
//                         <Form.Control
//                           placeholder="Email"
//                           type="email"
//                         ></Form.Control>
//                       </Form.Group>
//                     </Col>
//                   </Row>
//                   <Row>
//                     <Col className="pr-1" md="6">
//                       <Form.Group>
//                         <label>First Name</label>
//                         <Form.Control
//                           defaultValue="Mike"
//                           placeholder="Company"
//                           type="text"
//                         ></Form.Control>
//                       </Form.Group>
//                     </Col>
//                     <Col className="pl-1" md="6">
//                       <Form.Group>
//                         <label>Last Name</label>
//                         <Form.Control
//                           defaultValue="Andrew"
//                           placeholder="Last Name"
//                           type="text"
//                         ></Form.Control>
//                       </Form.Group>
//                     </Col>
//                   </Row>
//                   <Row>
//                     <Col md="12">
//                       <Form.Group>
//                         <label>Address</label>
//                         <Form.Control
//                           defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
//                           placeholder="Home Address"
//                           type="text"
//                         ></Form.Control>
//                       </Form.Group>
//                     </Col>
//                   </Row>
//                   <Row>
//                     <Col className="pr-1" md="4">
//                       <Form.Group>
//                         <label>City</label>
//                         <Form.Control
//                           defaultValue="Mike"
//                           placeholder="City"
//                           type="text"
//                         ></Form.Control>
//                       </Form.Group>
//                     </Col>
//                     <Col className="px-1" md="4">
//                       <Form.Group>
//                         <label>Country</label>
//                         <Form.Control
//                           defaultValue="Andrew"
//                           placeholder="Country"
//                           type="text"
//                         ></Form.Control>
//                       </Form.Group>
//                     </Col>
//                     <Col className="pl-1" md="4">
//                       <Form.Group>
//                         <label>Postal Code</label>
//                         <Form.Control
//                           placeholder="ZIP Code"
//                           type="number"
//                         ></Form.Control>
//                       </Form.Group>
//                     </Col>
//                   </Row>
//                   <Row>
//                     <Col md="12">
//                       <Form.Group>
//                         <label>About Me</label>
//                         <Form.Control
//                           cols="80"
//                           defaultValue="Lamborghini Mercy, Your chick she so thirsty, I'm in
//                           that two seat Lambo."
//                           placeholder="Here can be your description"
//                           rows="4"
//                           as="textarea"
//                         ></Form.Control>
//                       </Form.Group>
//                     </Col>
//                   </Row>
//                   <Button
//                     className="btn-fill pull-right"
//                     type="submit"
//                     variant="info"
//                   >
//                     Update Profile
//                   </Button>
//                   <div className="clearfix"></div>
//                 </Form>
//               </Card.Body>
//             </Card>
//           </Col>
//           <Col md="4">
//             <Card className="card-user">
//               <div className="card-image">
//                 <img
//                   alt="..."
//                   src={doctorImg}
//                   // src={require("assets/img/photo-1431578500526-4d9613015464.jpeg")}
//                 ></img>
//               </div>
//               <Card.Body>
//                 <div className="author">
//                   <a href="#pablo" onClick={(e) => e.preventDefault()}>
//                     <img
//                       alt="..."
//                       className="avatar border-gray"
//                       // src={doctorImg}
//                       // src={require("assets/img/faces/face-3.jpg")}
//                     ></img>
//                     <h5 className="title">Mike Andrew</h5>
//                   </a>
//                   <p className="description">michael24</p>
//                 </div>
//                 <p className="description text-center">
//                   "Lamborghini Mercy <br></br>
//                   Your chick she so thirsty <br></br>
//                   I'm in that two seat Lambo"
//                 </p>
//               </Card.Body>
//               <hr></hr>
//               <div className="button-container mr-auto ml-auto">
//                 <Button
//                   className="btn-simple btn-icon"
//                   href="#pablo"
//                   onClick={(e) => e.preventDefault()}
//                   variant="link"
//                 >
//                   <i className="fab fa-facebook-square"></i>
//                 </Button>
//                 <Button
//                   className="btn-simple btn-icon"
//                   href="#pablo"
//                   onClick={(e) => e.preventDefault()}
//                   variant="link"
//                 >
//                   <i className="fab fa-twitter"></i>
//                 </Button>
//                 <Button
//                   className="btn-simple btn-icon"
//                   href="#pablo"
//                   onClick={(e) => e.preventDefault()}
//                   variant="link"
//                 >
//                   <i className="fab fa-google-plus-square"></i>
//                 </Button>
//               </div>
//             </Card>
//           </Col>
//         </Row>
//       </Container>
//     </>
//   );
// }

// export default UserProfile;
