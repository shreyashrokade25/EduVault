import React from "react";

class StudentInformation extends React.Component {
    state = {};
    render() {
        return (
            <div>
                <h2>DEPARTMENT OF COMPUTER ENGINEERING</h2>
                <h2>STUDENT INFORMATION FORM</h2>

                <form>
                    <label>
                        SEM:
                        <input type="text" name="sem" />
                    </label>
                    <span style={{ margin: "0 10px" }}></span>
                    <label>
                        CLASS:
                        <input type="text" name="class" />
                    </label>
                    <span style={{ margin: "0 10px" }}></span>
                    <label>
                        UID NO:
                        <input type="text" name="uid" />
                    </label>
                    <br /> <br />
                    <label>
                        Name of the Student:
                        <input type="text" name="studentName" />
                        <span style={{ margin: "0 10px" }}></span>
                        Photograph:
                        <input type="file" accept=".pdf,.jpg,.jpeg" />
                    </label>
                    <br />
                    <br />
                    <label>
                        Branch:
                        <input type="text" name="branch" />
                    </label>
                    <br />
                    <br />
                    <label>
                        Date of Birth:
                        <input type="text" name="dob" />
                        <span style={{ margin: "0 10px" }}></span>
                        Blood Group:
                        <input type="text" name="bloodGroup" />
                    </label>
                    <br />
                    <br />
                    <label>
                        Temporary Address:
                        <input type="text" name="tempAddress" />
                    </label>
                    <br />
                    <br />
                    <label>
                        Permanent Address:
                        <input type="text" name="permAddress" />
                    </label>
                    <br />
                    <br />
                    <label>
                        Phone no of Father:
                        <input type="text" name="fatherPhone" />
                        <span style={{ margin: "0 10px" }}></span>
                        Mother:
                        <input type="text" name="motherPhone" />
                        <span style={{ margin: "0 10px" }}></span>
                        Student:
                        <input type="text" name="studentPhone" />
                    </label>
                    <br />
                    <br />
                    <label>
                        Father's Occupation:
                        <input type="text" name="fatherOccupation" />
                    </label>
                    <br />
                    <br />
                    <label>
                        Mother's Occupation:
                        <input type="text" name="motherOccupation" />
                    </label>
                    <br />
                    <br />
                    <label>
                        Hobbies:
                        <input type="text" name="hobbies" />
                    </label>
                    <br />
                    <br />
                    <label>
                        Strength and Weaknesses:
                        <input type="text" name="strengthAndWeaknesses" />
                    </label>
                    <br />
                    <br />
                    <label>Result: Final Mark (with percentage):</label>
                    <table style={{ borderCollapse: "collapse", marginTop: "20px" }}>
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
                                    <input type="text" name="sem1CGPA" />
                                </td>
                                <td>
                                    <input type="text" name="sem2CGPA" />
                                </td>
                                <td>
                                    <input type="text" name="sem3CGPA" />
                                </td>
                                <td>
                                    <input type="text" name="sem4CGPA" />
                                </td>
                                <td>
                                    <input type="text" name="sem5CGPA" />
                                </td>
                                <td>
                                    <input type="text" name="sem6CGPA" />
                                </td>
                                <td>
                                    <input type="text" name="sem7CGPA" />
                                </td>
                                <td>
                                    <input type="text" name="sem8CGPA" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default StudentInformation;
