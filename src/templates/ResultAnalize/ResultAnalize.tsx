
import './ResultAnalize.scss'
import analize from '../../assets/img/analize.svg'
import { BreadCrumb } from '../breadcrumb/breadcrumb';

export  function ResultAnalize() {

  
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
        <a className="waves-effect waves-light btn"><i className="material-icons right">print</i>Распечатать результат</a>
         
        </div>
    
      </div>
    </div>
  </div>
    </div>
 

  );
}
