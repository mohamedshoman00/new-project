import React, { useState } from "react";
import { GrFormSchedule } from "react-icons/gr";
import Card from "react-bootstrap/Card";
import { Button, Col, Container, Row, Form } from "react-bootstrap";
import "../../index.css";

const DoctorTimeTableUser = () => {
  const [docdata, setdocdata] = useState([
    {
      id: 0,
      name: "ahmed yahia",
      department: "dentist",
      date: "",
      days: [
        {
          active: false,
          day: "Saturday",
        },
        {
          active: false,
          day: "Sunday",
        },
        {
          active: false,
          day: "Monday",
        },
        {
          active: false,
          day: "Tuesday",
        },
        {
          active: false,
          day: "Wednesday",
        },
        {
          active: false,
          day: "Thursday",
        },
        {
          active: false,
          day: "Friday",
        },
      ],
      startTime: "",
      endTime: "",
    },
  ]);
  // const days = [
  //   "Monday",
  //   "Tuesday",
  //   "Wednesday",
  //   "Thursday",
  //   "Friday",
  //   "Saturday",
  //   "Sunday",
  // ];
  const onsub = (e) => {
    e.preventDefault();
  };

  const [checked, setchecked] = useState(true);

  const handleChange = (e) => {
    //clone
    const alldata = [...docdata];
    const hamoda = [...alldata[0].days];
    //change
    const i = hamoda.findIndex((s) => s.day === e.day);
    // console.log(i);
    hamoda[i] = { ...hamoda[i], active: !hamoda[i].active };
    alldata[0] = { ...alldata[0], days: hamoda };
    //setstate
    setdocdata(alldata);
    // setchecked(!checked);
    // setdocdata(!docdata[0].days[0].active);
  };

  const handleSubmit = () => {
    handleSubmit.bind();
  };

  return (
    <>
      <div
        className="w-100 py-5"
        style={{
          backgroundColor: "#f1f5fc",
          padding: "15px",
        }}
      >
        <Card className="w-100" style={{ overflowX: "auto" }}>
          <div
            className="d-flex align-items-center justify-content-between"
            style={{
              borderBottom: "1px solid rgba(0, 0, 0, .1)",
            }}
          >
            <h4 className="p-3">Add Schedule</h4>
          </div>

          <Form onSubmit={onsub} className="formm p-3 px-5  ">
            <Row className="col-12  mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Doctor Name</Form.Label>
                <Form.Control disabled type="text" value={docdata[0].name} />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Doctor Department</Form.Label>
                <Form.Control
                  disabled
                  type="text"
                  value={docdata[0].department}
                />
              </Form.Group>
            </Row>
            {docdata[0].days.map((e, i) => (
              <Row key={i} className="col-12  mb-3">
                <Form.Group
                  size="lg"
                  className=" d-flex align-items-center align-self-center"
                  as={Col}
                  controlId="formGridEmail"
                >
                  <Form.Check
                    style={{
                      paddingLeft: "7.5em",
                      marginBottom: "-0.875rem",
                    }}
                    label={e.day}
                    onChange={() => handleChange(e)}
                    type="switch"
                    id={`custom-switch + ${e.day}`}
                    name="hamoda"
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Start time</Form.Label>
                  {e.active ? (
                    <Form.Control name="hamoda" type="time" />
                  ) : (
                    <Form.Control type="time" disabled />
                  )}
                </Form.Group>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>End time</Form.Label>
                  {e.active ? (
                    <Form.Control type="time" />
                  ) : (
                    <Form.Control type="time" disabled />
                  )}
                </Form.Group>
              </Row>
            ))}
            <Row
              className="col-12
              my-4 
                "
            >
              <Form.Group as={Col} className="d-flex justify-content-end">
                <Button
                  className="mb"
                  variant="primary"
                  type="submit"
                  style={{ width: "200px", height: "50px" }}
                >
                  Save
                </Button>
              </Form.Group>
            </Row>
          </Form>
        </Card>
      </div>
      ;
    </>
  );
};

export default DoctorTimeTableUser;
