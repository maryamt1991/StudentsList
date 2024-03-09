import React from 'react'
import Logo from '../../../components/logo/logo'
import MenuItems from '../MenuItems/MenuItems'
import './SideDrawer.css'
import Button from '../../../components/UI/button/button'
import  Backdrop from '../../../components/UI/backdrop/Backdrop'

const SideDrawer=(prpos)=>{
    let classes=['SideDrawer','Close'];
    if(prpos.show){
        classes=['SideDrawer','Open']
    }
    return(
        <React.Fragment>
            <Backdrop show={prpos.show} modalClosed={prpos.closeDrawer}/>
<div className={classes.join(' ')}>
            <div style={{height:'10%'}}>
            <Logo/>
            </div>
            <nav>
<MenuItems/>
            </nav>
            <div className='boxButton'>
            <Button btnType='danger' clicked={()=>{alert("sign in page opened")}}>ورود و ثبت نام</Button>
            </div>
        </div>
        </React.Fragment>
        
    )
}
export default SideDrawer;