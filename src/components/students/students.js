import React from "react";
import PropTypes from 'prop-types';
import Student from "./student/student";
import "./student/students.css"
const Students = (props) => {
  if(props.toggle){
    return<div className="student-section">{
      props.studentList.map((student, index) => (
        <Student
          key={index}
          id={student.id}
          name={student.name}
          classNumber={student.classNumber}
          phoneNumber={student.phoneNumber}
          email={student.email}
          nameChanged={(event)=>props.nameChanged(event,student.id)}
          classChanged={(event)=>props.classChanged(event,student.id)}
          phoneChanged={(event)=>props.phoneChanged(event,student.id)}
          emailChanged={(event)=>props.emailChanged(event,student.id)}
          deleted={props.deleted}
          edited={()=>props.edited(student.id)}
        />
      ))
    }
       
    </div>
  }
  return props.studentList.map((student, index) => (
    <Student
      key={index}
      id={student.id}
      name={student.name}
      classNumber={student.classNumber}
      phoneNumber={student.phoneNumber}
      email={student.email}
      nameChanged={(event)=>props.nameChanged(event,student.id)}
      classChanged={(event)=>props.classChanged(event,student.id)}
      phoneChanged={(event)=>props.phoneChanged(event,student.id)}
      emailChanged={(event)=>props.emailChanged(event,student.id)}
      deleted={props.deleted}
    />
  ));
};
export default Students;
