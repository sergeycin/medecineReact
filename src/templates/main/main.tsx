
import { BreadCrumb } from '../breadcrumb/breadcrumb';
import './main.scss'
import analize from '../../assets/img/analize.svg'
import { makeRequest } from '../../hooks/fetch.hooks';
import { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { AuthContext } from '../../context/AuthContext';
import { useAppDispatch, UseAppSelector } from '../../hooks/redux';
import { fetchAnalizeList } from '../../store/actions/analizeAction';
import Loader from '../loader/loader';




function Main() {
  const auth = useContext(AuthContext)
  const dispatch = useAppDispatch()
  const {error,loading,analizes} = UseAppSelector(state => state.FieldSLice)
  
  useEffect(() => {
        dispatch(fetchAnalizeList(auth))      
  },[])

  return (
  
    <div className="wrapper__right">
  <div className="main">
  {loading && <Loader/>}
    <BreadCrumb array={[{label:'Главная',route:'/patient/main'},{label:'Список анализов',route:'/patient/main'}]} />
    <div className="analize">
    <div className="col s12 m7">
    <h2 className="header header-list">Список анализов</h2>

  
    {analizes ? analizes.map((item:any) => 
      <div key={item.logdate} className="card horizontal">
      <div className="card-image">
        <img src={analize} />
      </div>
      <div className="card-stacked">
        <div className="card-content analize__content">
          <p>Номер заказа: {item.orderno}</p>
          <p>Дата заказа: {item.logdate}</p>
          <p>Статус:  <span className={`label ${item.css}`}>{item.statusname}</span></p>
        </div>
        <div className="card-action">
        <NavLink to={`/patient/order${item.orderno}`} state={{orderno: item.orderno}} className="waves-effect waves-light btn">Посмотреть</NavLink>

        </div>
      </div>
    </div>
  
  ) : ''}

   
  </div>
    </div>
      
                  
  </div>
    </div>

  );
}

export default Main;
