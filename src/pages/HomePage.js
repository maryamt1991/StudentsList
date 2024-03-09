import React ,{useEffect,useState,useRef} from "react";
import Students from"../components/students/students";
import Button from "../components/UI/button/button";
import axios from "axios"

const HomePage=(props)=>{
    const [searchBarValue,setSearchBarValue]=useState('');
    const searchFilterFunction=(event)=>{
        const itemData = arrayHolder.filter((item)=>{
          const itemData=item.name.toUpperCase();
          const textData=event.target.value.toUpperCase();
          return itemData.indexOf(textData)>-1;
    })}
    const [studentsState, setStudents] = useState([
       
      ]);
      const [arrayHolder,setArrayHolder]=useState([]);
      const [loading,setLoading]=useState(false);
      useEffect(()=>{
        setArrayHolder(studentsState)
        //console.log(props)
        setLoading(true)
        const students = axios.get('https://jsonplaceholder.typicode.com/posts').then(response=>{
          console.log(response)
          setStudents(response.data)
          setLoading(false)
        })
      },[])
      const nameChangeHandler=(event,id)=>{
        const studentIndex=studentsState.findIndex(student=>{
          return student.id===id;
        })}
        const deleteStudent=(index)=>{
            const students=[...studentsState];
            students.splice(index,1);
            setStudents(students);
          }  
          const[toggle,setToggle]=useState(false);
          const classChangeHandler=(event,id)=>{
            const studentIndex=studentsState.findIndex(student=>{
              return student.id===id;
            })
            console.log(studentIndex)
            const student={...studentsState[studentIndex]}
            console.log(student)
            student.classNumber=event.target.value;
            const students=[...studentsState]
            students[studentIndex]=student
            setStudents(students)
              }
              const phoneChangeHandler=(event,id)=>{
                const studentIndex=studentsState.findIndex(student=>{
                  return student.id===id;
                })
                console.log(studentIndex)
                const student={...studentsState[studentIndex]}
                console.log(student)
                student.phoneNumber=event.target.value;
                const students=[...studentsState]
                students[studentIndex]=student
                setStudents(students)
                  }
                  const emailChangeHandler=(event,id)=>{
                    const studentIndex=studentsState.findIndex(student=>{
                      return student.id===id;
                    })
                    console.log(studentIndex)
                    const student={...studentsState[studentIndex]}
                    console.log(student)
                    student.email=event.target.value;
                    const students=[...studentsState]
                    students[studentIndex]=student
                    setStudents(students)
                      }
                      const toggleHandler=()=>{
                        setToggle(!toggle)
                        console.log(toggle)
                      }
                      const edited=(id)=>{
alert("hello");
                      }
    return(
        <React.Fragment>
    <input type='text' value={searchBarValue} onChange={searchFilterFunction} style={{marginTop:"100px"}}/>
    <Button 
    btnType="success" 
    clicked={toggleHandler} 
    toggle={toggle}
    >تغییر وضعیت نمایش</Button>
    {
      loading?<h1>...loading</h1>:
      <Students 
      studentList={studentsState} 
      nameChanged={nameChangeHandler} 
      classChanged={classChangeHandler} 
      phoneChanged={phoneChangeHandler} 
      emailChanged={emailChangeHandler} 
      deleted={deleteStudent}
      toggle={toggle}
      style={{marginTop:"100px"}}
      edited={edited}
      />
    }
        
    </React.Fragment>
    )
    
      
}
export default HomePage