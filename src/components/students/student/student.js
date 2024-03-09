import React from "react";
import "./students.css";
import Button from "../../UI/button/button"
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

const Student = (props) => {
  return (
    <div className="students">
      <label>شماره دانش آموزی:{props.id}</label>
      <label>نام و نام خانوادگی:{props.name}</label>
      <label>کلاس:{props.classNumber}</label>
      <label>شماره تلفن:{props.phoneNumber}</label>
      <label>ایمیل:{props.email}</label>
            <label style={{display:"flex", gap:"10px", justifyContent:"center"}}>
        <Button btnType={"danger"} clicked={props.deleted}>حذف</Button>
       
        </label>
        <label><Button btnType={"success"} clicked={props.edited}>ویرایش</Button></label>
      
    </div>
  );
};
export default Student;
