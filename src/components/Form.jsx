import React from "react";
import logo from "../assets/SPITlogo.jpeg"

class StudentInformation extends React.Component {
    state = {};
    render() {
        return (

            <>
            <div className=" container-lg m-4">

                <div className="d-flex justify-content-center align-items-center mt-4 bg-light">
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
                    <label className="col-form-label text-end">Date of Birth:</label>
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
          
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
            </div>

            </>
        );
    }
}

export default StudentInformation;
