
import './ResultAnalize.scss'
import analize from '../../assets/img/analize.svg'
import { BreadCrumb } from '../breadcrumb/breadcrumb';
import { useContext, useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import { makeRequest } from '../../hooks/fetch.hooks';
import { AuthContext } from '../../context/AuthContext';
import { useAppDispatch, UseAppSelector } from '../../hooks/redux';
import { fetchResultAnalizes } from '../../store/actions/analizeAction';
interface LocationState {
  state:{
      orderno: string,
  }
 

}

export  function ResultAnalize() {
  const auth = useContext(AuthContext)
  const location = useLocation();
  const { state } = location as LocationState;
  const [isOpen,setIsOpen] = useState<number>(0)

  const openList = (event: React.MouseEvent, num:number) =>{
 isOpen === num ? setIsOpen(0) : setIsOpen(num)
  } 

  const dispatch = useAppDispatch()
  const {error,loading,resultAnalizes} = UseAppSelector(state => state.ResultSLice)

  
  
  useEffect(() => {
        dispatch(fetchResultAnalizes(auth,state.orderno))    

  },[])


  return (
    <div className="wrapper__right">
       <BreadCrumb array={[{label:'Главная',route:'/patient/main'},{label:'Список анализов',route:'/patient/main'},{label:'Результаты анализов',route:'/patient/:id'}]} ></BreadCrumb>
       <div className="result">
     <h2 className="header header-list">Результаты анализов</h2>
    <div className="card horizontal">
      <div className="card-image">
        <img src={analize} />
      </div>
      <div className="card-stacked">
        <div className="card-content ">
        <a target='_blank' href='https://dev.rulis.club/patient/print.php' className="waves-effect waves-light btn"><i className="material-icons right">print</i>Распечатать результат</a>
         
      <div className="table__names">
        <div className="table__names-item explore"><p>Исследование</p></div>
        <div className="table__names-item"><p>Результат</p></div>
        <div className="table__names-item"><p>Ед.изм.</p></div>
        <div className="table__names-item"><p>Референсные значения</p></div>
      </div>

        <div className="leftSideBar__list">

          {resultAnalizes ? resultAnalizes.map(result => 
            <div className="leftSideBar__list-item">
            <h5 className={isOpen ? 'arrowOpen' : ''} onClick={(e) => openList(e,Number(result.code))}>{result.panel}</h5>
            {isOpen == Number(result.code) ?    <div className="leftSideBar__list-open">
                <ul>

                 {result.tests.map((test:any) =>
                        test.results[0].analytes.map((item:any) => 
                        <div key={item.key}  className={`table__names table-list ${item.status == 'O' ? 'redcolor' : ''}`}>
                        <div className="table__names-item explore"><p>{item.analyte}</p></div>
                        <div className="table__names-item"><p>{item.result}</p></div>
                        <div className="table__names-item"><p>{item.unit}</p></div>
                        <div className="table__names-item"><p>{item.limits}</p></div>
                        </div>        
                        )
                
                  
                  )}
                     <li>
                   
                      </li>
                    

                 
                </ul>
            </div> : ''}
          

        </div>
          
          ): ''}
             
                
                </div>

             
        </div>




    
      </div>
    </div>
  </div>
    </div>
 

  );
}
