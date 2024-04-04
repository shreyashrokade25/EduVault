import React from "react";
import logo from "../assets/SPITlogo.png"

class StudentInformation extends React.Component {
    state = {};
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
        <form>
        <div className="row mb-3 justify-content-center">
                <div className="col-md-4">
                    <label className="col-form-label text-end">SEM:</label>
                    <input type="text" className="form-control" name="sem" />
                </div>

                <div className="col-md-4">
                    <label className="col-form-label text-end">CLASS:</label>
                    <input type="text" className="form-control" name="class" />
                </div>
                
                <div className="col-md-4">
                    <label className="col-form-label text-end">UID NO:</label>
                    <input type="text" className="form-control" name="uid" />
                </div>
            </div>

          <div className="row mb-3">
                <div className="col-md-12">
                    <label className="col-form-label text-end">Name of the Student:</label>
                    <input type="text" className="form-control" name="studentName" />
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
                    <input type="text" className="form-control" name="dob" />
                </div>
                <div className="col-md-6">
                    <label className="col-form-label text-end">Blood Group:</label>
                    <input type="text" className="form-control" name="bloodGroup" />
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-md-12">
                    <label className="col-form-label text-end">Branch:</label>
                    <input type="text" className="form-control" name="branch" />
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-md-12">
                    <label className="col-form-label text-end">Temporary Address:</label>
                    <input type="text" className="form-control" name="tempAddress" />
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-md-12">
                    <label className="col-form-label text-end">Permanent Address:</label>
                    <input type="text" className="form-control" name="permAddress" />
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-md-12">
                    <label className="col-form-label text-end">Father's Occupation:</label>
                    <input type="text" className="form-control" name="fatherOccupation" />
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-md-12">
                    <label className="col-form-label text-end">Mother's Occupation:</label>
                    <input type="text" className="form-control" name="motherOccupation" />
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-md-12">
                    <label className="col-form-label text-end">Hobbies:</label>
                    <input type="text" className="form-control" name="hobbies" />
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-md-12">
                    <label className="col-form-label text-end">Strength and Weaknesses:</label>
                    <input type="text" className="form-control" name="strengthAndWeaknesses" />
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-md-12">
                    <label className="col-form-label text-end">Result: Final Mark (with percentage):</label>
                    <input type="text" className="form-control" name="Result" />

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
                  <input type="text" name="sem1CGPA" className=" col-md-11" />
                </td>
                <td>
                  <input type="text" name="sem2CGPA" className=" col-md-11"  />
                </td>
                <td>
                  <input type="text" name="sem3CGPA"className=" col-md-11" />
                </td>
                <td>
                  <input type="text" name="sem4CGPA" className=" col-md-11" />
                </td>
                <td>
                  <input type="text" name="sem5CGPA" className=" col-md-11" />
                </td>
                <td>
                  <input type="text" name="sem6CGPA" className=" col-md-11" />
                </td>
                <td>
                  <input type="text" name="sem7CGPA" className=" col-md-11" />
                </td>
                <td>
                  <input type="text" name="sem8CGPA" className=" col-md-11" />
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
                    <input type="text" name="sem1" className=" col-md-11" />
                  </td>
                  <td>
                    <input type="text" name="sem2"className=" col-md-11"  />
                  </td>
                  <td>
                    <input type="text" name="sem3"className=" col-md-11"  />
                  </td>
                  <td>
                    <input type="text" name="sem4"className=" col-md-11"  />
                  </td>
                  <td>
                    <input type="text" name="sem5"className=" col-md-11"  />
                  </td>
                  <td>
                    <input type="text" name="sem6"className=" col-md-11"  />
                  </td>
                  <td>
                    <input type="text" name="sem7"className=" col-md-11"  />
                  </td>
                  <td>
                    <input type="text" name="sem8"className=" col-md-11"  />
                  </td>
                </tr>
                <tr>
                  <td>Second Attempt</td>
                  <td>
                    <input type="text" name="sem1" className=" col-md-11" />
                  </td>
                  <td>
                    <input type="text" name="sem2" className=" col-md-11" />
                  </td>
                  <td>
                    <input type="text" name="sem3" className=" col-md-11" />
                  </td>
                  <td>
                    <input type="text" name="sem4" className=" col-md-11"/>
                  </td>
                  <td>
                    <input type="text" name="sem5" className=" col-md-11" />
                  </td>
                  <td>
                    <input type="text" name="sem6" className=" col-md-11"/>
                  </td>
                  <td>
                    <input type="text" name="sem7"className=" col-md-11" />
                  </td>
                  <td>
                    <input type="text" name="sem8" className=" col-md-11"/>
                  </td>
                </tr>
                <tr>
                  <td>Third Attempt</td>
                  <td>
                    <input type="text" name="sem1"className=" col-md-11" />
                  </td>
                  <td>
                    <input type="text" name="sem2" className=" col-md-11"/>
                  </td>
                  <td>
                    <input type="text" name="sem3" className=" col-md-11"/>
                  </td>
                  <td>
                    <input type="text" name="sem4" className=" col-md-11" />
                  </td>
                  <td>
                    <input type="text" name="sem5"className=" col-md-11" />
                  </td>
                  <td>
                    <input type="text" name="sem6" className=" col-md-11"/>
                  </td>
                  <td>
                    <input type="text" name="sem7" className=" col-md-11"/>
                  </td>
                  <td>
                    <input type="text" name="sem8" className=" col-md-11"/>
                  </td>
                </tr>
                <tr>
                  <td>Fourth Attempt</td>
                  <td>
                    <input type="text" name="sem1"className=" col-md-11" />
                  </td>
                  <td>
                    <input type="text" name="sem2"className=" col-md-11" />
                  </td>
                  <td>
                    <input type="text" name="sem3"className=" col-md-11" />
                  </td>
                  <td>
                    <input type="text" name="sem4" className=" col-md-11"/>
                  </td>
                  <td>
                    <input type="text" name="sem5"className=" col-md-11" />
                  </td>
                  <td>
                    <input type="text" name="sem6" className=" col-md-11"/>
                  </td>
                  <td>
                    <input type="text" name="sem7" className=" col-md-11"/>
                  </td>
                  <td>
                    <input type="text" name="sem8" className=" col-md-11" />
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
                    <input type="text" name="sem1" className=" col-md-11"/>
                  </td>
                  <td>
                    <input type="text" name="sem" className=" col-md-11"/>
                  </td>
                  <td>
                    <input type="text" name="sem" className=" col-md-11"/>
                  </td>
                  <td>
                    <input type="text" name="sem" className=" col-md-11"/>
                  </td>
                  <td>
                    <input type="text" name="sem5" className=" col-md-11"/>
                  </td>
                  <td>
                    <input type="text" name="sem6" className=" col-md-11"/>
                  </td>
                  <td>
                    <input type="text" name="sem7" className=" col-md-11"/>
                  </td>
                  <td>
                    <input type="text" name="sem8" className=" col-md-11"/>
                  </td>
                </tr>
                <tr>
                  <td>Attendance After Second Defaulters</td>
                  <td>
                    <input type="text" name="sem1" className=" col-md-11"/>
                  </td>
                  <td>
                    <input type="text" name="sem2" className=" col-md-11"/>
                  </td>
                  <td>
                    <input type="text" name="sem3" className=" col-md-11"/>
                  </td>
                  <td>
                    <input type="text" name="sem4" className=" col-md-11"/>
                  </td>
                  <td>
                    <input type="text" name="sem5" className=" col-md-11"/>
                  </td>
                  <td>
                    <input type="text" name="sem6" className=" col-md-11"/>
                  </td>
                  <td>
                    <input type="text" name="sem7" className=" col-md-11"/>
                  </td>
                  <td>
                    <input type="text" name="sem8" className=" col-md-11"/>
                  </td>
                </tr>
                <tr>
                  <td>Attendance After Third Defaulters</td>
                  <td>
                    <input type="text" name="sem1" className=" col-md-11"/>
                  </td>
                  <td>
                    <input type="text" name="sem2" className=" col-md-11"/>
                  </td>
                  <td>
                    <input type="text" name="sem3" className=" col-md-11"/>
                  </td>
                  <td>
                    <input type="text" name="sem4" className=" col-md-11"/>
                  </td>
                  <td>
                    <input type="text" name="sem5" className=" col-md-11"/>
                  </td>
                  <td>
                    <input type="text" name="sem6" className=" col-md-11"/>
                  </td>
                  <td>
                    <input type="text" name="sem7"className=" col-md-11" />
                  </td>
                  <td>
                    <input type="text" name="sem8" className=" col-md-11"/>
                  </td>
                </tr>
                <tr>
                  <td>Attendance After Final Defaulters</td>
                  <td>
                    <input type="text" name="sem1" className=" col-md-11"/>
                  </td>
                  <td>
                    <input type="text" name="sem2" className=" col-md-11"/>
                  </td>
                  <td>
                    <input type="text" name="sem3" className=" col-md-11"/>
                  </td>
                  <td>
                    <input type="text" name="sem4" className=" col-md-11"/>
                  </td>
                  <td>
                    <input type="text" name="sem5" className=" col-md-11"/>
                  </td>
                  <td>
                    <input type="text" name="sem6" className=" col-md-11"/>
                  </td>
                  <td>
                    <input type="text" name="sem7" className=" col-md-11"/>
                  </td>
                  <td>
                    <input type="text" name="sem8" className=" col-md-11"/>
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
                    <input type="text" name="date" className=" col-md-11" />
                  </td>
                  <td>
                    <input type="text" name="award" className=" col-md-11" />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="collegeStateNationalInternational"
                      className="col-md-11"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="text" name="date" className=" col-md-11" />
                  </td>
                  <td>
                    <input type="text" name="award" className=" col-md-11" />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="collegeStateNationalInternational"
                      className="col-md-11"
                    />
                  </td>
                </tr><tr>
                  <td>
                    <input type="text" name="date" className=" col-md-11" />
                  </td>
                  <td>
                    <input type="text" name="award" className=" col-md-11" />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="collegeStateNationalInternational"
                      className="col-md-11"
                    />
                  </td>
                </tr><tr>
                  <td>
                    <input type="text" name="date" className=" col-md-11" />
                  </td>
                  <td>
                    <input type="text" name="award" className=" col-md-11" />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="collegeStateNationalInternational"
                      className="col-md-11"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            </div>
            </div>
            
            <div className="row mb-3 ">
              <div className=" col-md-12">
              <label className="col-form-label text-end">Any other:</label>
              <input type="text" className=" form-control" name="anyOther" />
            
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
