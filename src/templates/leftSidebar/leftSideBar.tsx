import './leftSideBar.scss'

import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { useAppDispatch, UseAppSelector } from '../../hooks/redux';

import Loader from '../loader/loader';
import { AuthContext } from '../../context/AuthContext';






function LeftSidaBar(){
   const auth = useContext(AuthContext)


const navigate = useNavigate() 

  const [isOpen,setIsOpen] = useState<number>(0)

 const openList = (event: React.MouseEvent, num:number) =>{
   isOpen === num ? setIsOpen(0) : setIsOpen(num)
 } 

 const goList = (event:React.MouseEvent,p:string) =>{
    event.preventDefault()
    navigate(`admin/${p}`)
 }
    


 const logoutHandler = (event:any) =>{
   event.preventDefault()
     try {
         navigate("/patient")
         auth.logout()
     }
    catch(e)
    {
        console.log(e)
    }
 }


    return(
        
        <div className="leftSidaBar">
              {/* {loading && <Loader/>} */}
           <div className="leftSideBar__content">

           <div className="collection">
    <NavLink to="/patient/main"   className="collection-item " ><span className="badge">  <i className="material-icons">analytics</i></span>Результаты анализов</NavLink>
    <NavLink to="/patient/dinamic" className="collection-item "><span className="badge"><i className="material-icons">assessment</i></span>Динамика показателей</NavLink>
    <a href="/patient/exit" onClick={logoutHandler} className="collection-item"><span className="badge"><i className="material-icons">exit_to_app</i></span>Выход</a>
  </div>

           </div>
        </div>

    );

}


export default LeftSidaBar;
