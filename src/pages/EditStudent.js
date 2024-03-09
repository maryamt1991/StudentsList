import React ,{ useEffect }from "react"
import Button from "../components/UI/button/button"
import "./style/editStudent.css"

const EditStudent=(props)=>{
    useEffect(()=>{
        console.log(props)
    },[])
    const editStudent=()=>{
        alert("successful")
    }
    return (<div className="newStudent">
       <h1>ویرایش دانش آموز</h1>
        <label>نام و نام خانوادگی</label>
        <input type='text'></input>
        <label>کلاس</label>
        <input type='text'></input>
        <label>شماره تلفن</label>
        <input type='number'></input>
        <label>ایمیل</label>
        <input type='email'></input>
        <br/>
        <Button btnType='danger' clicked={editStudent}>  ویرایش اطلاعات</Button>
    </div>
    )
}
export default EditStudent;