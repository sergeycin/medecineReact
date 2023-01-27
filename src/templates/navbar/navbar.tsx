import React, { useContext, useState } from "react";
import './header.scss'

import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import burger from '../../assets/img/burger.svg'
import {clinicsObject} from '../../config'
function Navbar(){

    const auth = useContext(AuthContext)
    const navigate= useNavigate();
    const [isActiveMenu,setActiveMenu] = useState(false)

    const logoutHandler = () =>{
        try {
            navigate("/lk")
            auth.logout()
            
       
    
        }
       catch(e)
       {
           console.log(e)
       }
    }

    return(
        <div className="warpper__navbar">
   <div className="header">
            <div className="header__left">
                {/* <div className="header__name"><h2><NavLink to="/admin/main">Ланта Центр</NavLink> </h2></div> */}
                <img className="user-image" src={clinicsObject.logo} alt="" />
                {/* <div className="header__logo"><img src={lexus} alt="" /></div> */}
            </div>
            <div className="header__right">
                <img onClick={() => setActiveMenu(!isActiveMenu)} src={burger} alt="" />
               
                    {/* <p>admin@lexus.com</p>
                    <img onClick={logoutHandler} className="door-image" src={door} alt="" /> */}
         
            </div>
        </div>
    <div className={ isActiveMenu  ?  'modal__menu active' : 'modal__menu'}>
    <div className="modal__menu-content " >

<div className="collection">
<NavLink to="/lk/main"   className="collection-item " ><span className="badge">  <i className="material-icons">analytics</i></span><span className='TextSideBar'> Результаты анализов</span></NavLink>
<NavLink to="/lk/dinamic" className="collection-item "><span className="badge"><i className="material-icons">assessment</i></span><span className='TextSideBar'> Динамика показателей</span></NavLink>
<a href="/lk/exit" onClick={logoutHandler} className="collection-item"><span className="badge"><i className="material-icons">exit_to_app</i></span><span className='TextSideBar'> Выход</span></a>

</div>

</div>
    </div>
        </div>
     

    
    );

}


export default Navbar;

