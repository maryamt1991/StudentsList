import React ,{useEffect,useState,useRef} from "react";
import NewStudent from "../components/students/newStudent/newstudent";

const AddStudent=()=>{
    const[studentName,setStudentName]= useState('');
    const[studentClass,setStudentClass] = useState('');
    const[studentPhoneNumber,setStudentPhoneNumber] = useState('');
    const [studentEmail,setStudentEmail] = useState('');
    const[result,setResult] = useState(false);
    const studentNameHandler=(event)=>{
      setStudentName(event.target.value)
    }
    const studentClassHandler=(event)=>{
      setStudentClass(event.target.value)
    }
    const studentPhoneNumberHandler=(event)=>{
      setStudentPhoneNumber(event.target.value)
    }
    const studentEmailHandler=(event)=>{
      setStudentEmail(event.target.value);
    }
    const addStudent=()=>{
        alert('student added');
    }
    return(
<NewStudent
        studentName={studentName}
        studentClass={studentClass}
        studentPhoneNumber={studentPhoneNumber}
        studentEmail={studentEmail}
        studentNameHandler={studentNameHandler}
        studentClassHandler={studentClassHandler}
        studentPhoneNumberHandler={studentPhoneNumberHandler}
        studentEmailHandler={studentEmailHandler}
        clicked={addStudent}
        
      />
    )
}
export default AddStudent