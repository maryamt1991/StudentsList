import React from 'react';
import './newstudent.css';
import '../../UI/button/button';
import Button from '../../UI/button/button';

const NewStudent=(props)=>{
    const {studentName, studentClass,studentEmail,studentPhoneNumber}=props;
    const {studentNameHandler,studentClassHandler, studentEmailHandler,studentPhoneNumberHandler,addStudent}=props;
    return<div className='newStudent'>
        <h1>اضافه کردن دانش آموز</h1>
        <label>نام و نام خانوادگی</label>
        <input type='text' value={studentName} onChange={studentNameHandler}></input>
        <label>کلاس</label>
        <input type='text' value={studentClass} onChange={studentClassHandler}></input>
        <label>شماره تلفن</label>
        <input type='number' value={studentPhoneNumber} onChange={studentPhoneNumberHandler}></input>
        <label>ایمیل</label>
        <input type='email' value={studentEmail} onChange={studentEmailHandler}></input>
        <br/>
        <Button btnType='danger' clicked={addStudent}>اضافه کردن دانش آموز</Button>
    </div>
}

export default NewStudent;