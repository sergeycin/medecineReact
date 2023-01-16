import './leftSideBar.scss'

import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { useAppDispatch, UseAppSelector } from '../../hooks/redux';

import Loader from '../loader/loader';






function LeftSidaBar(){

const dispatch = useAppDispatch()
// const {error,loading,pages} = UseAppSelector(state => state.pagesSlice)
const navigate = useNavigate() 



// useEffect(() => {

//     dispatch(fetchPages())
 
    
// },[])



  const [isOpen,setIsOpen] = useState<number>(0)

 const openList = (event: React.MouseEvent, num:number) =>{
isOpen === num ? setIsOpen(0) : setIsOpen(num)
 } 

 const goList = (event:React.MouseEvent,p:string) =>{
    event.preventDefault()
    navigate(`admin/${p}`)
 }
    

    return(
        
        <div className="leftSidaBar">
              {/* {loading && <Loader/>} */}
           <div className="leftSideBar__content">

            

           </div>
        </div>

    );

}


export default LeftSidaBar;
