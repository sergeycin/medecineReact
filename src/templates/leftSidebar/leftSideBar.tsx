import './leftSideBar.scss'

import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { useAppDispatch, UseAppSelector } from '../../hooks/redux';

import Loader from '../loader/loader';
import { AuthContext } from '../../context/AuthContext';






function LeftSidaBar(){
   const auth = useContext(AuthContext)
   const [isRollUp,setRollUp] = useState(false)

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
   if (window.confirm("Вы уверены что хотите выйти")) {
      try {
         navigate("/lk")
         auth.logout()
     }
    catch(e)
    {
        console.log(e)
    }
    }
    
 }

 const rollUp = (event:any) =>{

   event.preventDefault();
   setRollUp(!isRollUp)


 }

    return(
        
        <div className={isRollUp ? `leftSidaBar leftSideBar__small` : 'leftSidaBar'}>
              {/* {loading && <Loader/>} */}
           <div className="leftSideBar__content " >

           <div className="collection">
    <NavLink to="/lk/main"   className="collection-item " ><span className="badge">  <i className="material-icons">analytics</i></span><span className='TextSideBar'> Результаты анализов</span></NavLink>
    <NavLink to="/lk/dinamic" className="collection-item "><span className="badge"><i className="material-icons">assessment</i></span><span className='TextSideBar'> Динамика показателей</span></NavLink>
    <a href="/lk/exit" onClick={logoutHandler} className="collection-item"><span className="badge"><i className="material-icons">exit_to_app</i></span><span className='TextSideBar'> Выход</span></a>
    <a href="#" onClick={rollUp} className="collection-item rollup"><span className="badge"><i className="material-icons">format_indent_decrease</i></span><span className='TextSideBar'>Свернуть</span></a>
  </div>

           </div>
        </div>

    );

}


export default LeftSidaBar;
