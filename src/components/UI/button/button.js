import React from 'react'
import './button.css'
import PropTypes from 'prop-types';
const Button=(props)=>{
    let classes=[Button]
    switch(props.btnType){
case "danger":
    classes.push("Danger");
    break;
    case "success":
classes.push("Success");
break;
defualt:
break;
    }
    return(<button className={classes.join(' ')} onClick={props.clicked}>{props.children}</button>)
}
export default Button;
Button.propTypes={
    children:PropTypes.string.isRequired,
    clicked:PropTypes.func,
    btnType:PropTypes.string.isRequired,


}