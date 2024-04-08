import React, { Component } from "react";
import axios from "axios";
import logo from "../assets/Spit.png"
import "../components/styles.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

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
        ktSubjects: "",
        attempts: {
            first: "",
            second: "",
            third: "",
            fourth: ""
        },
        defaulterAttendance: {
            sem1: "",
            sem2: "",
            sem3: "",
            sem4: "",
            sem5: "",
            sem6: "",
            sem7: "",
            sem8: ""
        },
        attendanceAfterDefaulter: {
            first: "",
            second: "",
            third: "",
            final: ""
        },
        areaOfInterest: "",
        goals: "",
        achievements: [],
        anyOther: "",
        signature: "",
        errors: {}
    };
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });

        if (e.target.name === 'photo') {
            const file = e.target.files[0];
            console.log('Uploaded file:', file);
            this.setState({ photo: file });
        } else {
            this.setState({ [e.target.name]: e.target.value });
        }

    };



    // handleSubmit = async (e) => {
    //     e.preventDefault();

    //     try {
    //         const response = await axios.post("http://localhost:5000/students", this.state);
    //         console.log("Student data submitted successfully:", response.data);
    //         // TO Reset form fields after successful submission 

    handleSubmit = async (values, { resetForm, setSubmitting }) => {
        try {
            const response = await axios.post("http://localhost:5000/students", values);
            console.log("Student data submitted successfully:", response.data);
            resetForm(); // Reset form fields after successful submission
            this.setState({
                photo: null,
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
                ktSubjects: "",
                attempts: {
                    first: "",
                    second: "",
                    third: "",
                    fourth: ""
                },
                defaulterAttendance: {
                    sem1: "",
                    sem2: "",
                    sem3: "",
                    sem4: "",
                    sem5: "",
                    sem6: "",
                    sem7: "",
                    sem8: ""
                },
                attendanceAfterDefaulter: {
                    first: "",
                    second: "",
                    third: "",
                    final: ""
                },
                areaOfInterest: "",
                goals: "",
                achievements: [],
                anyOther: "",
                signature: ""
            });
        } catch (error) {
            console.error("Error submitting student data:", error);
        } finally {
            setSubmitting(false); // Set submitting state to false
        }
    };

    render() {
        const validationSchema = Yup.object().shape({
            sem: Yup.string().required("SEM is required"),
            class: Yup.string().required("Class is required"),
            uid: Yup.string()
                .matches(/^[0-9]{10}$/, "UID must be a 10-digit number")
                .required("UID is required"),
            studentName: Yup.string().required("Student Name is required"),
            branch: Yup.string().required("Branch is required"),
            dob: Yup.string().required("Date of Birth is required"),
            bloodGroup: Yup.string().required("Blood Group is required"),
            tempAddress: Yup.string().required("Temporary Address is required"),
            permAddress: Yup.string().required("Permanent Address is required"),
            fatherOccupation: Yup.string().required("Father's Occupation is required"),
            motherOccupation: Yup.string().required("Mother's Occupation is required"),
            hobbies: Yup.string().required("Hobbies are required"),
            strengthAndWeaknesses: Yup.string().required(
                "Strengths and Weaknesses are required"
            ),
            sem1CGPA: Yup.string().required("SEM I CGPA is required"),
            sem2CGPA: Yup.string().required("SEM II CGPA is required"),
            sem3CGPA: Yup.string().required("SEM III CGPA is required"),
            sem4CGPA: Yup.string().required("SEM IV CGPA is required"),
            sem5CGPA: Yup.string().required("SEM V CGPA is required"),
            sem6CGPA: Yup.string().required("SEM VI CGPA is required"),
            sem7CGPA: Yup.string().required("SEM VII CGPA is required"),
            sem8CGPA: Yup.string().required("SEM VIII CGPA is required"),
            Result: Yup.string().required("Final Mark (with percentage) is required"),
            AreaOfInterest: Yup.string().required("Area of interest required"),

        });
        return (

            <div className="container-fluid" style={{ height: "100%", backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)', backgroundSize: 'inherit' }}>
                <div className="row justify-content-center align-items-center h-100">
                    <div className="col-md-8" style={{ boxShadow: "white 0px 1px 70px", margin: "20px" }}>

                        <div className="" style={{ color: "white", border: " 10px solid black", backgroundColor: "#1d1919" }}>

                            <div className=" d-flex justify-content-center align-items-center mt-4">
                                <img src={logo} alt="spit logo" className="img-fluid" style={{ width: "900px" }} />
                            </div>

                            <div className="text-center mt-3">
                                <h2 className="mt-3 fs-4 fw-bold underline" >DEPARTMENT OF COMPUTER ENGINEERING</h2>
                                <h2 className="fs-4 fw-bolder underline">STUDENT INFORMATION FORM</h2>
                            </div>
                        </div>

                        <Formik
                            initialValues={this.state}
                            validationSchema={validationSchema}
                            onSubmit={this.handleSubmit}
                        >
                            {({ isSubmitting }) => (

                                <form onSubmit={this.handleSubmit} className="custom-form" style={{ margin: "7px" }}>
                                    <div className=" mt-4 row mb-3 bg-light" >

                                        <div className="row mb-3">
                                            <div className="col-md-6">
                                                <label className="col-form-label text-end">Name of the Student:</label>
                                                <Field type="text" className="form-control" name="studentName" value={this.state.studentName} onChange={this.handleChange} style={{ width: '700px' }} />
                                                <ErrorMessage name="studentName" component="div" className="error-message" />
                                            </div>

                                            <div className="col-md-12">
                                                <label className="col-form-label text-end">Photograph:</label>
                                                <div className="d-flex align-items-center"> {/* Use flexbox for layout */}
                                                    <input type="file" className="form-control" name="photo" onChange={this.handleChange} accept=".pdf,.jpg,.jpeg" style={{ width: '700px' }} />
                                                    {this.state.photo ? (
                                                        <img
                                                            src={URL.createObjectURL(this.state.photo)}
                                                            alt="Uploaded"
                                                            style={{ width: '150px', height: '150px', marginLeft: '30px' }}
                                                        />
                                                    ) : (
                                                        <div style={{ width: '150px', height: '150px', backgroundColor: '#ddd', display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: '60px', border: '2px solid black' }}>
                                                            Photograph
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row mb-3 justify-content-center">


                                            <div className="col-md-4">
                                                <label className="col-form-label text-end">SEM:</label>
                                                <Field type="text" className="form-control" name="sem" value={this.state.sem} onChange={this.handleChange} />
                                                <ErrorMessage name="sem" component="div" className="error-message" />
                                            </div>

                                            <div className="col-md-4">
                                                <label className="col-form-label text-end">CLASS:</label>
                                                <Field type="text" className="form-control" name="class" value={this.state.class} onChange={this.handleChange} />
                                                <ErrorMessage name="class" component="div" className="error-message" />
                                            </div>

                                            <div className="col-md-4">
                                                <label className="col-form-label text-end">UID NO:</label>
                                                <Field type="text" className="form-control" name="uid" value={this.state.uid} onChange={this.handleChange} />
                                                <ErrorMessage name="uid" component="div" className="error-message" />
                                            </div>
                                        </div>


                                        <div className="row mb-3">
                                            <div className="col-md-6">
                                                <label className="col-form-label text-end ">Date of Birth:</label>
                                                <Field type="date" className="form-control" name="dob" value={this.state.dob} onChange={this.handleChange} />
                                                <ErrorMessage name="dob" component="div" className="error-message" />
                                            </div>
                                            <div className="col-md-6">
                                                <label className="col-form-label text-end">Blood Group:</label>
                                                <Field type="text" className="form-control" name="bloodGroup" value={this.state.bloodGroup} onChange={this.handleChange} />
                                                <ErrorMessage name="bloodGroup" component="div" className="error-message" />
                                            </div>
                                        </div>

                                        <div className="row mb-3">
                                            <div className="col-md-12">
                                                <label className="col-form-label text-end">Branch:</label>
                                                <Field type="text" className="form-control" name="branch" value={this.state.branch} onChange={this.handleChange} />
                                                <ErrorMessage name="branch" component="div" className="error-message" />
                                            </div>
                                        </div>

                                        <div className="row mb-3">
                                            <div className="col-md-12">
                                                <label className="col-form-label text-end">Temporary Address:</label>
                                                <Field type="text" className="form-control" name="tempAddress" value={this.state.tempAddress} onChange={this.handleChange} />
                                                <ErrorMessage name="tempAddress" component="div" className="error-message" />
                                            </div>
                                        </div>

                                        <div className="row mb-3">
                                            <div className="col-md-12">
                                                <label className="col-form-label text-end">Permanent Address:</label>
                                                <Field type="text" className="form-control" name="permAddress" value={this.state.permAddress} onChange={this.handleChange} />
                                                <ErrorMessage name="permAddress" component="div" className="error-message" />
                                            </div>
                                        </div>

                                        <div className="row mb-3">
                                            <div className="col-md-12">
                                                <label className="col-form-label text-end">Father's Occupation:</label>
                                                <Field type="text" className="form-control" name="fatherOccupation" value={this.state.fatherOccupation} onChange={this.handleChange} />
                                                <ErrorMessage name="fatherOccupation" component="div" className="error-message" />
                                            </div>
                                        </div>

                                        <div className="row mb-3">
                                            <div className="col-md-12">
                                                <label className="col-form-label text-end">Mother's Occupation:</label>
                                                <Field type="text" className="form-control" name="motherOccupation" value={this.state.motherOccupation} onChange={this.handleChange} />
                                                <ErrorMessage name="motherOccupation" component="div" className="error-message" />
                                            </div>
                                        </div>

                                        <div className="row mb-3">
                                            <div className="col-md-12">
                                                <label className="col-form-label text-end">Hobbies:</label>
                                                <Field type="text" className="form-control" name="hobbies" value={this.state.hobbies} onChange={this.handleChange} />
                                                <ErrorMessage name="hobbies" component="div" className="error-message" />
                                            </div>
                                        </div>

                                        <div className="row mb-3">
                                            <div className="col-md-12">
                                                <label className="col-form-label text-end">Strength and Weaknesses:</label>
                                                <Field type="text" className="form-control" name="strengthAndWeaknesses" value={this.state.strengthAndWeaknesses} onChange={this.handleChange} />
                                                <ErrorMessage name="strengthAndWeaknesses" component="div" className="error-message" />
                                            </div>
                                        </div>

                                        <div className="row mb-3">
                                            <div className="col-md-12">
                                                <label className="col-form-label text-end">Result: Final Mark (with percentage):</label>
                                                <Field type="text" className="form-control" name="Result" value={this.state.Result} onChange={this.handleChange} />
                                                <ErrorMessage name="Result" component="div" className="error-message" />

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
                                                                <Field type="text" name="sem1CGPA" className=" col-md-11" value={this.state.sem1CGPA} onChange={this.handleChange} />
                                                                <ErrorMessage name="sem1CGPA" component="div" className="error-message" />
                                                            </td>
                                                            <td>
                                                                <Field type="text" name="sem2CGPA" className=" col-md-11" value={this.state.sem2CGPA} onChange={this.handleChange} />
                                                                <ErrorMessage name="sem2CGPA" component="div" className="error-message" />
                                                            </td>
                                                            <td>
                                                                <Field type="text" name="sem3CGPA" className=" col-md-11" value={this.state.sem3CGPA} onChange={this.handleChange} />
                                                                <ErrorMessage name="sem3CGPA" component="div" className="error-message" />
                                                            </td>
                                                            <td>
                                                                <Field type="text" name="sem4CGPA" className=" col-md-11" value={this.state.sem4CGPA} onChange={this.handleChange} />
                                                                <ErrorMessage name="sem4CGPA" component="div" className="error-message" />
                                                            </td>
                                                            <td>
                                                                <Field type="text" name="sem5CGPA" className=" col-md-11" value={this.state.sem5CGPA} onChange={this.handleChange} />
                                                                <ErrorMessage name="sem5CGPA" component="div" className="error-message" />
                                                            </td>
                                                            <td>
                                                                <Field type="text" name="sem6CGPA" className=" col-md-11" value={this.state.sem6CGPA} onChange={this.handleChange} />
                                                                <ErrorMessage name="sem6CGPA" component="div" className="error-message" />
                                                            </td>
                                                            <td>
                                                                <Field type="text" name="sem7CGPA" className=" col-md-11" value={this.state.sem7CGPA} onChange={this.handleChange} />
                                                                <ErrorMessage name="sem7CGPA" component="div" className="error-message" />
                                                            </td>
                                                            <td>
                                                                <Field type="text" name="sem8CGPA" className=" col-md-11" value={this.state.sem8CGPA} onChange={this.handleChange} />
                                                                <ErrorMessage name="sem8CGPA" component="div" className="error-message" />
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>

                                        {/* Form part 2*/}
                                        <div className=" row mb-3">
                                            <div className=" col-md-12">
                                                <label className="col-form-label text-end">KT information: Write name of subject only</label>
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
                                                                <input type="text" name="sem1FA" className="col-md-11" value={this.state.sem1FA} onChange={this.handleChange} />
                                                            </td>
                                                            <td>
                                                                <input type="text" name="sem2FA" className="col-md-11" value={this.state.sem2FA} onChange={this.handleChange} />
                                                            </td>
                                                            <td>
                                                                <input type="text" name="sem3FA" className="col-md-11" value={this.state.sem3FA} onChange={this.handleChange} />
                                                            </td>
                                                            <td>
                                                                <input type="text" name="sem4FA" className="col-md-11" value={this.state.sem4FA} onChange={this.handleChange} />
                                                            </td>
                                                            <td>
                                                                <input type="text" name="sem5FA" className="col-md-11" value={this.state.sem5FA} onChange={this.handleChange} />
                                                            </td>
                                                            <td>
                                                                <input type="text" name="sem6FA" className="col-md-11" value={this.state.sem6FA} onChange={this.handleChange} />
                                                            </td>
                                                            <td>
                                                                <input type="text" name="sem7FA" className="col-md-11" value={this.state.sem7FA} onChange={this.handleChange} />
                                                            </td>
                                                            <td>
                                                                <input type="text" name="sem8FA" className="col-md-11" value={this.state.sem8FA} onChange={this.handleChange} />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Second Attempt</td>
                                                            <td>
                                                                <input type="text" name="sem1SA" className="col-md-11" value={this.state.sem1SA} onChange={this.handleChange} />
                                                            </td>
                                                            <td>
                                                                <input type="text" name="sem2SA" className="col-md-11" value={this.state.sem2SA} onChange={this.handleChange} />
                                                            </td>
                                                            <td>
                                                                <input type="text" name="sem3SA" className="col-md-11" value={this.state.sem3SA} onChange={this.handleChange} />
                                                            </td>
                                                            <td>
                                                                <input type="text" name="sem4SA" className="col-md-11" value={this.state.sem4SA} onChange={this.handleChange} />
                                                            </td>
                                                            <td>
                                                                <input type="text" name="sem5SA" className="col-md-11" value={this.state.sem5SA} onChange={this.handleChange} />
                                                            </td>
                                                            <td>
                                                                <input type="text" name="sem6SA" className="col-md-11" value={this.state.sem6SA} onChange={this.handleChange} />
                                                            </td>
                                                            <td>
                                                                <input type="text" name="sem7SA" className="col-md-11" value={this.state.sem7SA} onChange={this.handleChange} />
                                                            </td>
                                                            <td>
                                                                <input type="text" name="sem8SA" className="col-md-11" value={this.state.sem8SA} onChange={this.handleChange} />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Third Attempt</td>
                                                            <td>
                                                                <input type="text" name="sem1TA" className="col-md-11" value={this.state.sem1TA} onChange={this.handleChange} />
                                                            </td>
                                                            <td>
                                                                <input type="text" name="sem2TA" className="col-md-11" value={this.state.sem2TA} onChange={this.handleChange} />
                                                            </td>
                                                            <td>
                                                                <input type="text" name="sem3TA" className="col-md-11" value={this.state.sem3TA} onChange={this.handleChange} />
                                                            </td>
                                                            <td>
                                                                <input type="text" name="sem4TA" className="col-md-11" value={this.state.sem4TA} onChange={this.handleChange} />
                                                            </td>
                                                            <td>
                                                                <input type="text" name="sem5TA" className="col-md-11" value={this.state.sem5TA} onChange={this.handleChange} />
                                                            </td>
                                                            <td>
                                                                <input type="text" name="sem6TA" className="col-md-11" value={this.state.sem6TA} onChange={this.handleChange} />
                                                            </td>
                                                            <td>
                                                                <input type="text" name="sem7TA" className="col-md-11" value={this.state.sem7TA} onChange={this.handleChange} />
                                                            </td>
                                                            <td>
                                                                <input type="text" name="sem8TA" className="col-md-11" value={this.state.sem8TA} onChange={this.handleChange} />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Fourth Attempt</td>
                                                            <td>
                                                                <input type="text" name="sem1FrA" className="col-md-11" value={this.state.sem1FrA} onChange={this.handleChange} />
                                                            </td>
                                                            <td>
                                                                <input type="text" name="sem2FrA" className="col-md-11" value={this.state.sem2FrA} onChange={this.handleChange} />
                                                            </td>
                                                            <td>
                                                                <input type="text" name="sem3FrA" className="col-md-11" value={this.state.sem3FrA} onChange={this.handleChange} />
                                                            </td>
                                                            <td>
                                                                <input type="text" name="sem4FrA" className="col-md-11" value={this.state.sem4FrA} onChange={this.handleChange} />
                                                            </td>
                                                            <td>
                                                                <input type="text" name="sem5FrA" className="col-md-11" value={this.state.sem5FrA} onChange={this.handleChange} />
                                                            </td>
                                                            <td>
                                                                <input type="text" name="sem6FrA" className="col-md-11" value={this.state.sem6FrA} onChange={this.handleChange} />
                                                            </td>
                                                            <td>
                                                                <input type="text" name="sem7FrA" className="col-md-11" value={this.state.sem7FrA} onChange={this.handleChange} />
                                                            </td>
                                                            <td>
                                                                <input type="text" name="sem8FrA" className="col-md-11" value={this.state.sem8FrA} onChange={this.handleChange} />
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
                                                                <input type="text" name="sem1FD" className=" col-md-11" value={this.state.sem1FD} onChange={this.handleChange} />
                                                            </td>
                                                            <td>
                                                                <input type="text" name="sem2FD" className=" col-md-11" value={this.state.sem2FD} onChange={this.handleChange} />
                                                            </td>
                                                            <td>
                                                                <input type="text" name="sem3FD" className=" col-md-11" value={this.state.sem3FD} onChange={this.handleChange} />
                                                            </td>
                                                            <td>
                                                                <input type="text" name="sem4FD" className=" col-md-11" value={this.state.sem4FD} onChange={this.handleChange} />
                                                            </td>
                                                            <td>
                                                                <input type="text" name="sem5FD" className=" col-md-11" value={this.state.sem5FD} onChange={this.handleChange} />
                                                            </td>
                                                            <td>
                                                                <input type="text" name="sem6FD" className=" col-md-11" value={this.state.sem6FD} onChange={this.handleChange} />
                                                            </td>
                                                            <td>
                                                                <input type="text" name="sem7FD" className=" col-md-11" value={this.state.sem7FD} onChange={this.handleChange} />
                                                            </td>
                                                            <td>
                                                                <input type="text" name="sem8FD" className=" col-md-11" value={this.state.sem8FD} onChange={this.handleChange} />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Attendance After Second Defaulters</td>
                                                            <td>
                                                                <input type="text" name="sem1SD" className=" col-md-11" value={this.state.sem1SD} onChange={this.handleChange} />
                                                            </td>
                                                            <td>
                                                                <input type="text" name="sem2SD" className=" col-md-11" value={this.state.sem2SD} onChange={this.handleChange} />
                                                            </td>
                                                            <td>
                                                                <input type="text" name="sem3SD" className=" col-md-11" value={this.state.sem3SD} onChange={this.handleChange} />
                                                            </td>
                                                            <td>
                                                                <input type="text" name="sem4SD" className=" col-md-11" value={this.state.sem4SD} onChange={this.handleChange} />
                                                            </td>
                                                            <td>
                                                                <input type="text" name="sem5SD" className=" col-md-11" value={this.state.sem5SD} onChange={this.handleChange} />
                                                            </td>
                                                            <td>
                                                                <input type="text" name="sem6SD" className=" col-md-11" value={this.state.sem6SD} onChange={this.handleChange} />
                                                            </td>
                                                            <td>
                                                                <input type="text" name="sem7SD" className=" col-md-11" value={this.state.sem7SD} onChange={this.handleChange} />
                                                            </td>
                                                            <td>
                                                                <input type="text" name="sem8SD" className=" col-md-11" value={this.state.sem8SD} onChange={this.handleChange} />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Attendance After Third Defaulters</td>
                                                            <td>
                                                                <input type="text" name="sem1TD" className=" col-md-11" value={this.state.sem1TD} onChange={this.handleChange} />
                                                            </td>
                                                            <td>
                                                                <input type="text" name="sem2TD" className=" col-md-11" value={this.state.sem2TD} onChange={this.handleChange} />
                                                            </td>
                                                            <td>
                                                                <input type="text" name="sem3TD" className=" col-md-11" value={this.state.sem3TD} onChange={this.handleChange} />
                                                            </td>
                                                            <td>
                                                                <input type="text" name="sem4TD" className=" col-md-11" value={this.state.sem4TD} onChange={this.handleChange} />
                                                            </td>
                                                            <td>
                                                                <input type="text" name="sem5TD" className=" col-md-11" value={this.state.sem5TD} onChange={this.handleChange} />
                                                            </td>
                                                            <td>
                                                                <input type="text" name="sem6TD" className=" col-md-11" value={this.state.sem6TD} onChange={this.handleChange} />
                                                            </td>
                                                            <td>
                                                                <input type="text" name="sem7TD" className=" col-md-11" value={this.state.sem7TD} onChange={this.handleChange} />
                                                            </td>
                                                            <td>
                                                                <input type="text" name="sem8TD" className=" col-md-11" value={this.state.sem8TD} onChange={this.handleChange} />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Attendance After Final Defaulters</td>
                                                            <td>
                                                                <input type="text" name="sem1FND" className=" col-md-11" value={this.state.sem1FND} onChange={this.handleChange} />
                                                            </td>
                                                            <td>
                                                                <input type="text" name="sem2FND" className=" col-md-11" value={this.state.sem2FND} onChange={this.handleChange} />
                                                            </td>
                                                            <td>
                                                                <input type="text" name="sem3FND" className=" col-md-11" value={this.state.sem3FND} onChange={this.handleChange} />
                                                            </td>
                                                            <td>
                                                                <input type="text" name="sem4FND" className=" col-md-11" value={this.state.sem4FND} onChange={this.handleChange} />
                                                            </td>
                                                            <td>
                                                                <input type="text" name="sem5FND" className=" col-md-11" value={this.state.sem5FND} onChange={this.handleChange} />
                                                            </td>
                                                            <td>
                                                                <input type="text" name="sem6FND" className=" col-md-11" value={this.state.sem6FND} onChange={this.handleChange} />
                                                            </td>
                                                            <td>
                                                                <input type="text" name="sem7FND" className=" col-md-11" value={this.state.sem7FND} onChange={this.handleChange} />
                                                            </td>
                                                            <td>
                                                                <input type="text" name="sem8FND" className=" col-md-11" value={this.state.sem8FND} onChange={this.handleChange} />
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>

                                        <div className="row mb-3">
                                            <div className=" col-md-12">
                                                <label className="col-form-label text-end">Area of interest:</label>
                                                <Field type="text" className=" form-control" name="AreaOfInterest" />
                                                <ErrorMessage name="AreaOfInterest" component="div" className="error-message" />


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
                                                                <input type="text" name="date1" className=" col-md-11" value={this.state.date1} onChange={this.handleChange} />
                                                            </td>
                                                            <td>
                                                                <input type="text" name="award1" className=" col-md-11" value={this.state.award1} onChange={this.handleChange} />
                                                            </td>
                                                            <td>
                                                                <input type="text" name="collegeStateNationalInternational1" className="col-md-11" value={this.state.collegeStateNationalInternational1} onChange={this.handleChange} />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <input type="text" name="date2" className=" col-md-11" value={this.state.date2} onChange={this.handleChange} />
                                                            </td>
                                                            <td>
                                                                <input type="text" name="award2" className=" col-md-11" value={this.state.award2} onChange={this.handleChange} />
                                                            </td>
                                                            <td>
                                                                <input type="text" name="collegeStateNationalInternational2" className="col-md-11" value={this.state.collegeStateNationalInternational2} onChange={this.handleChange} />
                                                            </td>
                                                        </tr><tr>
                                                            <td>
                                                                <input type="text" name="date3" className=" col-md-11" value={this.state.date3} onChange={this.handleChange} />
                                                            </td>
                                                            <td>
                                                                <input type="text" name="award3" className=" col-md-11" value={this.state.award3} onChange={this.handleChange} />
                                                            </td>
                                                            <td>
                                                                <input type="text" name="collegeStateNationalInternational3" className="col-md-11" value={this.state.collegeStateNationalInternational3} onChange={this.handleChange} />
                                                            </td>
                                                        </tr><tr>
                                                            <td>
                                                                <input type="text" name="date4" className=" col-md-11" value={this.state.date4} onChange={this.handleChange} />
                                                            </td>
                                                            <td>
                                                                <input type="text" name="award4" className=" col-md-11" value={this.state.award4} onChange={this.handleChange} />
                                                            </td>
                                                            <td>
                                                                <input type="text" name="collegeStateNationalInternational4" className="col-md-11" value={this.state.collegeStateNationalInternational4} onChange={this.handleChange} />
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>

                                        <div className="row mb-3 ">
                                            <div className=" col-md-12">
                                                <label className="col-form-label text-end">Any other:</label>
                                                <input type="text" className=" form-control" name="anyOther" value={this.state.anyOther} onChange={this.handleChange} />

                                                <label className="col-form-label text-end mt-2">Signature of student</label>
                                                <input type="file" className=" form-control" accept=".pdf,.jpg,.jpeg" />
                                                <br />

                                            </div>
                                        </div>

                                        <button type="submit" className="btn btn-primary container d-flex justify-content-center align-content-center">Submit</button>
                                    </div>
                                </form>
                            )}
                        </Formik>

                    </div>

                </div>
            </div >
        )
    }
}

export default StudentInformation;
