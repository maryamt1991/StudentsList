
import './Toolbar.css';
import Logo from "../../../components/logo/logo";
import MenuItems from "../MenuItems/MenuItems";
import Button from "../../../components/UI/button/button"
import Modal from "../../../components/UI/modal/Modal"
import SignIn from "../../../components/user/signin/signIn";
import React, { useState } from "react";
import SideDrawer from "../SideDrawer/SideDrawer";

const Toolbar = () => {
    const [showModal, Setshowmodal] = useState(false)
    const modalHandler = () => {
        Setshowmodal(true);
    }
    const modalClosed = () => {
        Setshowmodal(false);
    }
    const [ openSideDrawer , SetOpenSideDrawer ]=useState(false)
    const SideDrawerHandler=()=>{
        SetOpenSideDrawer(true);
    }
    const closeDrawer=()=>{
        SetOpenSideDrawer(false); 
    }
    return (
        <header className="Toolbar">
            <SideDrawer show={openSideDrawer} closeDrawer={closeDrawer}/>
            <div onClick={SideDrawerHandler}>Hambuger Menu</div>
            <span className='showNav'>
                <Logo />
            </span>
            <span className='showNav'>
                <nav>
                    <MenuItems />
                </nav>
            </span>
            <span className='showNav'>
                <Button btnType="danger" clicked={modalHandler}>ورود و ثبت نام</Button>
            </span>
            <Modal show={showModal} modalClosed={modalClosed}>
                <input type="text" placeholder="username"></input>
                <input type="password" placeholder="password"></input>
                <Button btnType="danger">ورود</Button>
            </Modal>


        </header>
    )
}
export default Toolbar;