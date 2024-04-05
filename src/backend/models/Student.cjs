const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    sem: String,
    class: String,
    uid: String,
    studentName: String,
    branch: String,
    dob: String,
    bloodGroup: String,
    tempAddress: String,
    permAddress: String,
    fatherPhone: String,
    motherPhone: String,
    studentPhone: String,
    fatherOccupation: String,
    motherOccupation: String,
    hobbies: String,
    strengthAndWeaknesses: String,
    sem1CGPA: String,
    sem2CGPA: String,
    sem3CGPA: String,
    sem4CGPA: String,
    sem5CGPA: String,
    sem6CGPA: String,
    sem7CGPA: String,
    sem8CGPA: String,
    ktSubjects: String,
    attempts: {
        first: String,
        second: String,
        third: String,
        fourth: String
    },
    defaulterAttendance: {
        sem1: String,
        sem2: String,
        sem3: String,
        sem4: String,
        sem5: String,
        sem6: String,
        sem7: String,
        sem8: String
    },
    attendanceAfterDefaulter: {
        first: String,
        second: String,
        third: String,
        final: String
    },
    areaOfInterest: String,
    goals: String,
    achievements: [
        {
            date: Date,
            award: String,
            place: String
        }
    ],
    anyOther: String,
    signature: String,
});

module.exports = mongoose.model('Student', studentSchema);