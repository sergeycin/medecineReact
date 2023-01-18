
import './ResultAnalize.scss'
import analize from '../../assets/img/analize.svg'
import { BreadCrumb } from '../breadcrumb/breadcrumb';
import { useState } from 'react';

export  function ResultAnalize() {
  const [isOpen,setIsOpen] = useState<number>(0)

  const openList = (event: React.MouseEvent, num:number) =>{
 isOpen === num ? setIsOpen(0) : setIsOpen(num)
  } 
  
  return (
    <div className="wrapper__right">
       <BreadCrumb array={['Главная','Список анализов','Результаты анализов']}></BreadCrumb>
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
               <div className="leftSideBar__list-item">
                      <h5 onClick={(e) => openList(e,1)}>- 343 - Общий анализ крови от 0 до 7лет</h5>
                      {isOpen == 1 ?    <div className="leftSideBar__list-open">
                          <ul>

                           
                               <li>
                               <div className="table__names table-list">
        <div className="table__names-item explore"><p>Гемоглобин</p></div>
        <div className="table__names-item"><p>110</p></div>
        <div className="table__names-item"><p>г/л</p></div>
        <div className="table__names-item"><p>110-140</p></div>
      </div>
                                </li>
                                <li>
                               <div className="table__names table-list">
        <div className="table__names-item explore"><p>Исследование</p></div>
        <div className="table__names-item"><p>Результат</p></div>
        <div className="table__names-item"><p>Ед.изм.</p></div>
        <div className="table__names-item"><p>Референсные значения</p></div>
      </div>
                                </li>

                                <li>
                               <div className="table__names table-list redcolor">
        <div className="table__names-item explore"><p>Исследование</p></div>
        <div className="table__names-item"><p>Результат</p></div>
        <div className="table__names-item"><p>Ед.изм.</p></div>
        <div className="table__names-item"><p>Референсные значения</p></div>
      </div>
                                </li>
                                <li>
                               <div className="table__names table-list redcolor">
        <div className="table__names-item explore"><p>Исследование</p></div>
        <div className="table__names-item"><p>Результат</p></div>
        <div className="table__names-item"><p>Ед.изм.</p></div>
        <div className="table__names-item"><p>Референсные значения</p></div>
      </div>
                                </li>

                           
                          </ul>
                      </div> : ''}
                    

                  </div>
                
                </div>

                <div className="leftSideBar__list">
               <div className="leftSideBar__list-item">
                      <h5 onClick={(e) => openList(e,2)}>+ 264 - Общий Ig E</h5>
                      {isOpen == 2 ?    <div className="leftSideBar__list-open">
                          <ul>

                           
                               <li>
                               <div className="table__names table-list">
        <div className="table__names-item explore"><p>Гемоглобин</p></div>
        <div className="table__names-item"><p>110</p></div>
        <div className="table__names-item"><p>г/л</p></div>
        <div className="table__names-item"><p>110-140</p></div>
      </div>
                                </li>
                                <li>
                               <div className="table__names table-list">
        <div className="table__names-item explore"><p>Исследование</p></div>
        <div className="table__names-item"><p>Результат</p></div>
        <div className="table__names-item"><p>Ед.изм.</p></div>
        <div className="table__names-item"><p>Референсные значения</p></div>
      </div>
                                </li>

                                <li>
                               <div className="table__names table-list">
        <div className="table__names-item explore"><p>Исследование</p></div>
        <div className="table__names-item"><p>Результат</p></div>
        <div className="table__names-item"><p>Ед.изм.</p></div>
        <div className="table__names-item"><p>Референсные значения</p></div>
      </div>
                                </li>
                                <li>
                               <div className="table__names table-list">
        <div className="table__names-item explore"><p>Исследование</p></div>
        <div className="table__names-item"><p>Результат</p></div>
        <div className="table__names-item"><p>Ед.изм.</p></div>
        <div className="table__names-item"><p>Референсные значения</p></div>
      </div>
                                </li>

                           
                          </ul>
                      </div> : ''}
                    

                  </div>
                
                </div>
        </div>
    
      </div>
    </div>
  </div>
    </div>
 

  );
}
