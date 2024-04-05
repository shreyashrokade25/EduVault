import React, { Component } from "react";
import axios from "axios";
import logo from "../assets/SPITlogo.png"

class StudentInformation extends React.Component {
    state = {
        sem: "",
        class: "",
        uid: "",
        studentName: "",
        branch: "",
        dob: "",
        bloodGroup: "",
        tempAddress: "",
        permAddress: "",
        fatherPhone: "",
        motherPhone: "",
        studentPhone: "",
        fatherOccupation: "",
        motherOccupation: "",
        hobbies: "",
        strengthAndWeaknesses: "",
        sem1CGPA: "",
        sem2CGPA: "",
        sem3CGPA: "",
        sem4CGPA: "",
        sem5CGPA: "",
        sem6CGPA: "",
        sem7CGPA: "",
        sem8CGPA: "",
        sem1FA: "",
        sem2FA: "",
        sem3FA: "",
        sem4FA: "",
        sem5FA: "",
        sem6FA: "",
        sem7FA: "",
        sem8FA: "",
        sem1SA: "",
        sem2SA: "",
        sem3SA: "",
        sem4SA: "",
        sem5SA: "",
        sem6SA: "",
        sem7SA: "",
        sem8SA: "",
        sem1TA: "",
        sem2TA: "",
        sem3TA: "",
        sem4TA: "",
        sem5TA: "",
        sem6TA: "",
        sem7TA: "",
        sem8TA: "",
        sem1FrA: "",
        sem2FrA: "",
        sem3FrA: "",
        sem4FrA: "",
        sem5FrA: "",
        sem6FrA: "",
        sem7FrA: "",
        sem8FrA: "",
        sem1FD: "",
        sem2FD: "",
        sem3FD: "",
        sem4FD: "",
        sem5FD: "",
        sem6FD: "",
        sem7FD: "",
        sem8FD: "",
        sem1SD: "",
        sem2SD: "",
        sem3SD: "",
        sem4SD: "",
        sem5SD: "",
        sem6SD: "",
        sem7SD: "",
        sem8SD: "",
        sem1TD: "",
        sem2TD: "",
        sem3TD: "",
        sem4TD: "",
        sem5TD: "",
        sem6TD: "",
        sem7TD: "",
        sem8TD: "",
        sem1FND: "",
        sem2FND: "",
        sem3FND: "",
        sem4FND: "",
        sem5FND: "",
        sem6FND: "",
        sem7FND: "",
        sem8FND: "",
        areaOfInterest: "",
        goalsFuturePlans: "",
        date1: "",
        award1: "",
        collegeStateNationalInternational1: "",
        date2: "",
        award2: "",
        collegeStateNationalInternational2: "",
        date3: "",
        award3: "",
        collegeStateNationalInternational3: "",
        date4: "",
        award4: "",
        collegeStateNationalInternational4: "",
        anyOther: "",
        signature: ""
    };
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/students", this.state);
            console.log("Student data submitted successfully:", response.data);
            // TO Reset form fields after successful submission 
            this.setState({
                sem: "",
                class: "",
                uid: "",
                studentName: "",
                branch: "",
                dob: "",
                bloodGroup: "",
                tempAddress: "",
                permAddress: "",
                fatherPhone: "",
                motherPhone: "",
                studentPhone: "",
                fatherOccupation: "",
                motherOccupation: "",
                hobbies: "",
                strengthAndWeaknesses: "",
                sem1CGPA: "",
                sem2CGPA: "",
                sem3CGPA: "",
                sem4CGPA: "",
                sem5CGPA: "",
                sem6CGPA: "",
                sem7CGPA: "",
                sem8CGPA: "",
                sem1FA: "",
                sem2FA: "",
                sem3FA: "",
                sem4FA: "",
                sem5FA: "",
                sem6FA: "",
                sem7FA: "",
                sem8FA: "",
                sem1SA: "",
                sem2SA: "",
                sem3SA: "",
                sem4SA: "",
                sem5SA: "",
                sem6SA: "",
                sem7SA: "",
                sem8SA: "",
                sem1TA: "",
                sem2TA: "",
                sem3TA: "",
                sem4TA: "",
                sem5TA: "",
                sem6TA: "",
                sem7TA: "",
                sem8TA: "",
                sem1FrA: "",
                sem2FrA: "",
                sem3FrA: "",
                sem4FrA: "",
                sem5FrA: "",
                sem6FrA: "",
                sem7FrA: "",
                sem8FrA: "",
                sem1FD: "",
                sem2FD: "",
                sem3FD: "",
                sem4FD: "",
                sem5FD: "",
                sem6FD: "",
                sem7FD: "",
                sem8FD: "",
                sem1SD: "",
                sem2SD: "",
                sem3SD: "",
                sem4SD: "",
                sem5SD: "",
                sem6SD: "",
                sem7SD: "",
                sem8SD: "",
                sem1TD: "",
                sem2TD: "",
                sem3TD: "",
                sem4TD: "",
                sem5TD: "",
                sem6TD: "",
                sem7TD: "",
                sem8TD: "",
                sem1FND: "",
                sem2FND: "",
                sem3FND: "",
                sem4FND: "",
                sem5FND: "",
                sem6FND: "",
                sem7FND: "",
                sem8FND: "",
                areaOfInterest: "",
                goalsFuturePlans: "",
                date1: "",
                award1: "",
                collegeStateNationalInternational1: "",
                date2: "",
                award2: "",
                collegeStateNationalInternational2: "",
                date3: "",
                award3: "",
                collegeStateNationalInternational3: "",
                date4: "",
                award4: "",
                collegeStateNationalInternational4: "",
                anyOther: "",
                signature: ""
            });
            
        } catch (error) {
            console.error("Error submitting student data:", error);
        }
    };

    render() {
        return (

            <>
            
            <div className="container-fluid" style={{ height: "100vh" }}>
                <div className="row justify-content-center align-items-center h-100">
                    <div className="col-md-8">

                <div className=" d-flex justify-content-center align-items-center mt-4 bg-light">
                <img src={logo} alt="spit logo" className="img-fluid"  style={{ width: "750px" }} />
                </div>

            <div className="text-center mt-3 bg-light">
               <h2 className="mt-3 fs-4 fw-bold">DEPARTMENT OF COMPUTER ENGINEERING</h2>
                  <h2 className="fs-5 fw-bolder ">STUDENT INFORMATION FORM</h2>
            </div>

            <div className=" mt-4 row mb-3 bg-light">
                
        <form onSubmit={this.handleSubmit}>  {/* To handle form submission to database  */}
        <div className="row mb-3 justify-content-center">
                <div className="col-md-4">
                    <label className="col-form-label text-end">SEM:</label>
                    <input type="text" className="form-control" name="sem" value={this.state.sem} onChange={this.handleChange}/>
                </div>

                <div className="col-md-4">
                    <label className="col-form-label text-end">CLASS:</label>
                    <input type="text" className="form-control" name="class" value={this.state.class} onChange={this.handleChange}/>
                </div>
                
                <div className="col-md-4">
                    <label className="col-form-label text-end">UID NO:</label>
                    <input type="text" className="form-control" name="uid" value={this.state.uid} onChange={this.handleChange}/>
                </div>
            </div>

          <div className="row mb-3">
                <div className="col-md-12">
                    <label className="col-form-label text-end">Name of the Student:</label>
                    <input type="text" className="form-control" name="studentName" value={this.state.studentName} onChange={this.handleChange}/>
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-md-12">
                    <label className="col-form-label text-end">Photograph:</label>
                    <input type="file" className="form-control" accept=".pdf,.jpg,.jpeg" />
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-md-6">
                    <label className="col-form-label text-end ">Date of Birth:</label>
                    <input type="text" className="form-control" name="dob" value={this.state.dob} onChange={this.handleChange}/>
                </div>
                <div className="col-md-6">
                    <label className="col-form-label text-end">Blood Group:</label>
                    <input type="text" className="form-control" name="bloodGroup" value={this.state.bloodGroup} onChange={this.handleChange}/>
                </div>
            </div>
            
            <div className="row mb-3">
                <div className="col-md-12">
                    <label className="col-form-label text-end">Branch:</label>
                    <input type="text" className="form-control" name="branch" value={this.state.branch} onChange={this.handleChange}/>
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-md-12">
                    <label className="col-form-label text-end">Temporary Address:</label>
                    <input type="text" className="form-control" name="tempAddress" value={this.state.tempAddress} onChange={this.handleChange}/>
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-md-12">
                    <label className="col-form-label text-end">Permanent Address:</label>
                    <input type="text" className="form-control" name="permAddress" value={this.state.permAddress} onChange={this.handleChange}/>
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-md-12">
                    <label className="col-form-label text-end">Father's Occupation:</label>
                    <input type="text" className="form-control" name="fatherOccupation" value={this.state.fatherOccupation} onChange={this.handleChange}/>
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-md-12">
                    <label className="col-form-label text-end">Mother's Occupation:</label>
                    <input type="text" className="form-control" name="motherOccupation" value={this.state.motherOccupation} onChange={this.handleChange}/>
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-md-12">
                    <label className="col-form-label text-end">Hobbies:</label>
                    <input type="text" className="form-control" name="hobbies" value={this.state.hobbies} onChange={this.handleChange}/>
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-md-12">
                    <label className="col-form-label text-end">Strength and Weaknesses:</label>
                    <input type="text" className="form-control" name="strengthAndWeaknesses" value={this.state.strengthAndWeaknesses} onChange={this.handleChange}/>
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-md-12">
                    <label className="col-form-label text-end">Result: Final Mark (with percentage):</label>
                    <input type="text" className="form-control" name="Result" value={this.state.Result} onChange={this.handleChange}/>

                </div>
            </div>
            <div className="row mb-3 justify-content-center">
             <div className="col-md-12">
          <table className="table table-bordered" style={{ marginTop: "20px" }}>
            <thead>
            
              <tr>
                <th></th>
                <th>SEM I</th>
                <th>SEM II</th>
                <th>SEM III</th>
                <th>SEM IV</th>
                <th>SEM V</th>
                <th>SEM VI</th>
                <th>SEM VII</th>
                <th>SEM VIII</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>CGPA</td>
                <td>
                  <input type="text" name="sem1CGPA" className=" col-md-11" value={this.state.sem1CGPA} onChange={this.handleChange}/>
                </td>
                <td>
                  <input type="text" name="sem2CGPA" className=" col-md-11"  value={this.state.sem2CGPA} onChange={this.handleChange}/>
                </td>
                <td>
                  <input type="text" name="sem3CGPA"className=" col-md-11" value={this.state.sem3CGPA} onChange={this.handleChange}/>
                </td>
                <td>
                  <input type="text" name="sem4CGPA" className=" col-md-11" value={this.state.sem4CGPA} onChange={this.handleChange}/>
                </td>
                <td>
                  <input type="text" name="sem5CGPA" className=" col-md-11" value={this.state.sem5CGPA} onChange={this.handleChange}/>
                </td>
                <td>
                  <input type="text" name="sem6CGPA" className=" col-md-11" value={this.state.sem6CGPA} onChange={this.handleChange}/>
                </td>
                <td>
                  <input type="text" name="sem7CGPA" className=" col-md-11" value={this.state.sem7CGPA} onChange={this.handleChange}/>
                </td>
                <td>
                  <input type="text" name="sem8CGPA" className=" col-md-11" value={this.state.sem8CGPA} onChange={this.handleChange}/>
                </td>
              </tr>
            </tbody>
          </table>
          </div>
          </div>

          {/* Form part 2*/}
          <div className=" row mb-3">
            <div className=" col-md-12">
            <label  className="col-form-label text-end">KT information: Write name of subject(s) only</label>
            </div>
            </div>

            <div className="row mb-3 justify-content-center">
              <div className=" col-md-12">
            <table className="table table-bordered" style={{ marginTop: "20px" }}>
              <thead>
                <tr>
                  <th></th>
                  <th>SEM I</th>
                  <th>SEM II</th>
                  <th>SEM III</th>
                  <th>SEM IV</th>
                  <th>SEM V</th>
                  <th>SEM VI</th>
                  <th>SEM VII</th>
                  <th>SEM VIII</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>First Attempt</td>
                  <td>
                    <input type="text" name="sem1" className=" col-md-11" value={this.state.sem1} onChange={this.handleChange}/>
                  </td>
                  <td>
                    <input type="text" name="sem2"className=" col-md-11"  value={this.state.sem2} onChange={this.handleChange}/>
                  </td>
                  <td>
                    <input type="text" name="sem3"className=" col-md-11" value={this.state.sem3} onChange={this.handleChange} />
                  </td>
                  <td>
                    <input type="text" name="sem4"className=" col-md-11"  value={this.state.sem4} onChange={this.handleChange}/>
                  </td>
                  <td>
                    <input type="text" name="sem5"className=" col-md-11" value={this.state.sem5} onChange={this.handleChange}/>
                  </td>
                  <td>
                    <input type="text" name="sem6"className=" col-md-11"  value={this.state.sem6} onChange={this.handleChange}/>
                  </td>
                  <td>
                    <input type="text" name="sem7"className=" col-md-11"  value={this.state.sem7} onChange={this.handleChange}/>
                  </td>
                  <td>
                    <input type="text" name="sem8"className=" col-md-11"  value={this.state.sem8} onChange={this.handleChange}/>
                  </td>
                </tr>
                <tr>
                  <td>Second Attempt</td>
                  <td>
                    <input type="text" name="sem1" className=" col-md-11" value={this.state.sem1} onChange={this.handleChange}/>
                  </td>
                  <td>
                    <input type="text" name="sem2" className=" col-md-11" value={this.state.sem2} onChange={this.handleChange}/>
                  </td>
                  <td>
                    <input type="text" name="sem3" className=" col-md-11" value={this.state.sem3} onChange={this.handleChange}/>
                  </td>
                  <td>
                    <input type="text" name="sem4" className=" col-md-11" value={this.state.sem4} onChange={this.handleChange}/>
                  </td>
                  <td>
                    <input type="text" name="sem5" className=" col-md-11" value={this.state.sem5} onChange={this.handleChange}/>
                  </td>
                  <td>
                    <input type="text" name="sem6" className=" col-md-11" value={this.state.sem6} onChange={this.handleChange}/>
                  </td>
                  <td>
                    <input type="text" name="sem7"className=" col-md-11" value={this.state.sem7} onChange={this.handleChange}/>
                  </td>
                  <td>
                    <input type="text" name="sem8" className=" col-md-11" value={this.state.sem8} onChange={this.handleChange}/>
                  </td>
                </tr>
                <tr>
                  <td>Third Attempt</td>
                  <td>
                    <input type="text" name="sem1"className=" col-md-11" value={this.state.sem1} onChange={this.handleChange}/>
                  </td>
                  <td>
                    <input type="text" name="sem2" className=" col-md-11" value={this.state.sem2} onChange={this.handleChange}/>
                  </td>
                  <td>
                    <input type="text" name="sem3" className=" col-md-11" value={this.state.sem3} onChange={this.handleChange}/>
                  </td>
                  <td>
                    <input type="text" name="sem4" className=" col-md-11" value={this.state.sem4} onChange={this.handleChange}/>
                  </td>
                  <td>
                    <input type="text" name="sem5"className=" col-md-11" value={this.state.sem5} onChange={this.handleChange}/>
                  </td>
                  <td>
                    <input type="text" name="sem6" className=" col-md-11" value={this.state.sem6} onChange={this.handleChange}/>
                  </td>
                  <td>
                    <input type="text" name="sem7" className=" col-md-11" value={this.state.sem7} onChange={this.handleChange}/>
                  </td>
                  <td>
                    <input type="text" name="sem8" className=" col-md-11" value={this.state.sem8} onChange={this.handleChange}/>
                  </td>
                </tr>
                <tr>
                  <td>Fourth Attempt</td>
                  <td>
                    <input type="text" name="sem1"className=" col-md-11" value={this.state.sem1} onChange={this.handleChange}/>
                  </td>
                  <td>
                    <input type="text" name="sem2"className=" col-md-11" value={this.state.sem2} onChange={this.handleChange}/>
                  </td>
                  <td>
                    <input type="text" name="sem3"className=" col-md-11" value={this.state.sem3} onChange={this.handleChange}/>
                  </td>
                  <td>
                    <input type="text" name="sem4" className=" col-md-11" value={this.state.sem4} onChange={this.handleChange}/>
                  </td>
                  <td>
                    <input type="text" name="sem5"className=" col-md-11" value={this.state.sem5} onChange={this.handleChange}/>
                  </td>
                  <td>
                    <input type="text" name="sem6" className=" col-md-11" value={this.state.sem6} onChange={this.handleChange}/>
                  </td>
                  <td>
                    <input type="text" name="sem7" className=" col-md-11" value={this.state.sem7} onChange={this.handleChange}/>
                  </td>
                  <td>
                    <input type="text" name="sem8" className=" col-md-11" value={this.state.sem8} onChange={this.handleChange}/>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          </div>
          
          <div className="row mb-3">
            <div className=" col-md-12">
            <label>Defaulter’s subject wise/total attendance details:</label>
            </div>
            </div>
            
            <div>
              <div>
            <table className="table table-bordered" style={{ marginTop: "20px" }}>
              <thead>
                <tr>
                  <th></th>
                  <th>SEM I</th>
                  <th>SEM II</th>
                  <th>SEM III</th>
                  <th>SEM IV</th>
                  <th>SEM V</th>
                  <th>SEM VI</th>
                  <th>SEM VII</th>
                  <th>SEM VIII</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Attendance After First Defaulters</td>
                  <td>
                    <input type="text" name="sem1" className=" col-md-11" value={this.state.sem1} onChange={this.handleChange}/>
                  </td>
                  <td>
                    <input type="text" name="sem" className=" col-md-11" value={this.state.sem2} onChange={this.handleChange}/>
                  </td>
                  <td>
                    <input type="text" name="sem" className=" col-md-11" value={this.state.sem3} onChange={this.handleChange}/>
                  </td>
                  <td>
                    <input type="text" name="sem" className=" col-md-11" value={this.state.sem4} onChange={this.handleChange}/>
                  </td>
                  <td>
                    <input type="text" name="sem5" className=" col-md-11" value={this.state.sem5} onChange={this.handleChange}/>
                  </td>
                  <td>
                    <input type="text" name="sem6" className=" col-md-11" value={this.state.sem6} onChange={this.handleChange}/>
                  </td>
                  <td>
                    <input type="text" name="sem7" className=" col-md-11" value={this.state.sem7} onChange={this.handleChange}/>
                  </td>
                  <td>
                    <input type="text" name="sem8" className=" col-md-11" value={this.state.sem8} onChange={this.handleChange}/>
                  </td>
                </tr>
                <tr>
                  <td>Attendance After Second Defaulters</td>
                  <td>
                    <input type="text" name="sem1" className=" col-md-11" value={this.state.sem1} onChange={this.handleChange}/>
                  </td>
                  <td>
                    <input type="text" name="sem2" className=" col-md-11" value={this.state.sem2} onChange={this.handleChange}/>
                  </td>
                  <td>
                    <input type="text" name="sem3" className=" col-md-11" value={this.state.sem3} onChange={this.handleChange}/>
                  </td>
                  <td>
                    <input type="text" name="sem4" className=" col-md-11" value={this.state.sem4} onChange={this.handleChange}/>
                  </td>
                  <td>
                    <input type="text" name="sem5" className=" col-md-11" value={this.state.sem5} onChange={this.handleChange}/>
                  </td>
                  <td>
                    <input type="text" name="sem6" className=" col-md-11" value={this.state.sem6} onChange={this.handleChange}/>
                  </td>
                  <td>
                    <input type="text" name="sem7" className=" col-md-11" value={this.state.sem7} onChange={this.handleChange}/>
                  </td>
                  <td>
                    <input type="text" name="sem8" className=" col-md-11" value={this.state.sem8} onChange={this.handleChange}/>
                  </td>
                </tr>
                <tr>
                  <td>Attendance After Third Defaulters</td>
                  <td>
                    <input type="text" name="sem1" className=" col-md-11" value={this.state.sem1} onChange={this.handleChange}/>
                  </td>
                  <td>
                    <input type="text" name="sem2" className=" col-md-11" value={this.state.sem2} onChange={this.handleChange}/>
                  </td>
                  <td>
                    <input type="text" name="sem3" className=" col-md-11" value={this.state.sem3} onChange={this.handleChange}/>
                  </td>
                  <td>
                    <input type="text" name="sem4" className=" col-md-11" value={this.state.sem4} onChange={this.handleChange}/>
                  </td>
                  <td>
                    <input type="text" name="sem5" className=" col-md-11" value={this.state.sem5} onChange={this.handleChange}/>
                  </td>
                  <td>
                    <input type="text" name="sem6" className=" col-md-11" value={this.state.sem6} onChange={this.handleChange}/>
                  </td>
                  <td>
                    <input type="text" name="sem7"className=" col-md-11" value={this.state.sem7} onChange={this.handleChange}/>
                  </td>
                  <td>
                    <input type="text" name="sem8" className=" col-md-11" value={this.state.sem8} onChange={this.handleChange}/>
                  </td>
                </tr>
                <tr>
                  <td>Attendance After Final Defaulters</td>
                  <td>
                    <input type="text" name="sem1" className=" col-md-11" value={this.state.sem1} onChange={this.handleChange}/>
                  </td>
                  <td>
                    <input type="text" name="sem2" className=" col-md-11" value={this.state.sem2} onChange={this.handleChange}/>
                  </td>
                  <td>
                    <input type="text" name="sem3" className=" col-md-11" value={this.state.sem3} onChange={this.handleChange}/>
                  </td>
                  <td>
                    <input type="text" name="sem4" className=" col-md-11" value={this.state.sem4} onChange={this.handleChange}/>
                  </td>
                  <td>
                    <input type="text" name="sem5" className=" col-md-11" value={this.state.sem5} onChange={this.handleChange}/>
                  </td>
                  <td>
                    <input type="text" name="sem6" className=" col-md-11" value={this.state.sem6} onChange={this.handleChange}/>
                  </td>
                  <td>
                    <input type="text" name="sem7" className=" col-md-11" value={this.state.sem7} onChange={this.handleChange}/>
                  </td>
                  <td>
                    <input type="text" name="sem8" className=" col-md-11" value={this.state.sem8} onChange={this.handleChange}/>
                  </td>
                </tr>
              </tbody>
            </table>
            </div>
          </div>

          <div className="row mb-3">
            <div className=" col-md-12">
            <label className="col-form-label text-end">Area of interest:</label>
            <input type="text" className=" form-control" name="AreaOfInterest" />
            
            <label className="col-form-label text-end">Goals/Future Plans (After BE):</label>
            <input type="text" className="form-control" name="goalsFuturePlans" />
            </div>
          </div>

          <div className="row mb-3 mt-2">
            <div className=" col-md-12">
            <label>Achievements:</label>
            </div>
          </div>
            <div className="row mb-3">
              <div className=" col-md-12">
            <table className="table table-bordered" style={{ marginTop: "20px" }}>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Award</th>
                  <th>College/State/National/International</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input type="text" name="date" className=" col-md-11" value={this.state.date} onChange={this.handleChange}/>
                  </td>
                  <td>
                    <input type="text" name="award" className=" col-md-11" value={this.state.award} onChange={this.handleChange}/>
                  </td>
                  <td>
                    <input type="text" name="collegeStateNationalInternational" className="col-md-11" value={this.state.collegeStateNationalInternational} onChange={this.handleChange}/>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="text" name="date" className=" col-md-11" value={this.state.date} onChange={this.handleChange}/>
                  </td>
                  <td>
                    <input type="text" name="award" className=" col-md-11" value={this.state.award} onChange={this.handleChange}/>
                  </td>
                  <td>
                    <input type="text"  name="collegeStateNationalInternational" className="col-md-11" value={this.state.collegeStateNationalInternational} onChange={this.handleChange}/>
                  </td>
                </tr><tr>
                  <td>
                    <input type="text" name="date" className=" col-md-11" value={this.state.date} onChange={this.handleChange}/>
                  </td>
                  <td>
                    <input type="text" name="award" className=" col-md-11" value={this.state.award} onChange={this.handleChange}/>
                  </td>
                  <td>
                    <input type="text" name="collegeStateNationalInternational" className="col-md-11" value={this.state.collegeStateNationalInternational} onChange={this.handleChange}/>
                  </td>
                </tr><tr>
                  <td>
                    <input type="text" name="date" className=" col-md-11" value={this.state.date} onChange={this.handleChange}/>
                  </td>
                  <td>
                    <input type="text" name="award" className=" col-md-11" value={this.state.award} onChange={this.handleChange}/>
                  </td>
                  <td>
                    <input type="text" name="collegeStateNationalInternational"  className="col-md-11" value={this.state.collegeStateNationalInternational} onChange={this.handleChange} />
                  </td>
                </tr>
              </tbody>
            </table>
            </div>
            </div>
            
            <div className="row mb-3 ">
              <div className=" col-md-12">
              <label className="col-form-label text-end">Any other:</label>
              <input type="text" className=" form-control" name="anyOther" value={this.state.anyOther} onChange={this.handleChange}/>
            
              <label className="col-form-label text-end mt-2">Signature of student</label>
              <input type="file" className=" form-control" accept=".pdf,.jpg,.jpeg" />
              <br />
              
              </div>
            </div>
          
          <button type="submit" className="btn btn-primary container d-flex justify-content-center align-content-center">Submit</button>
        </form>
      </div>
     </div>
</div></div>
            </>
        );
    }
}

export default StudentInformation;
