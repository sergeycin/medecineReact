
import { BreadCrumb } from '../breadcrumb/breadcrumb';
import './main.scss'
import analize from '../../assets/img/analize.svg'
import { makeRequest } from '../../hooks/fetch.hooks';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

function Main() {

  useEffect (()=>{ 

    // axios.post('http://dev.rulis.club:4028/api/login2.json', {
    //   ffolderno: '0000333189',
    // })
    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
    // fetch('http://dev.rulis.club:4028/api/login2.json', {
    //     method: 'POST',
    //     mode: 'cors',
    //     cache: 'no-cache',
    //     headers: {
    //       "Content-Type": "application/json"
    //   },
    //     body: JSON.stringify({'folderno':'0000333189','password':'25672','api-key': 'ba4deeb3-e2a1-4f8e-8b44-4ffb6455ed48'})
    // })  .then(data =>{
      
    //   return data.json()
    
    //   })
    //   .then( data => {
    //       console.log(data)
        
        
    // })
    // .catch(function(error){
    //     console.log(error)
    // })

        },[])
  // const data = makeRequest('http://127.0.0.1:4028/api/lis/login2.json','POST',{'folderno':'22333','password':'23232323232','api-key': 'ba4deeb3-e2a1-4f8e-8b44-4ffb6455ed48'})
  // setTimeout(()=>{
  //   console.log(data)
  // },500)
 

  let bread:string[] = ['Главная','Список анализов','Результаты анализов']
  return (
    <div className="wrapper__right">
  <div className="main">
  
    <BreadCrumb array={['Главная','Список анализов']} />
    <div className="analize">
    <div className="col s12 m7">
    <h2 className="header header-list">Список анализов</h2>
    <div className="card horizontal">
      <div className="card-image">
        <img src={analize} />
      </div>
      <div className="card-stacked">
        <div className="card-content analize__content">
          <p>Номер заказа: 0000026805</p>
          <p>Дата заказа: 2.02.2022</p>
          <p>Статус: <span className="label label-success">Завершен</span></p>
        </div>
        <div className="card-action">
        <NavLink to={`/patient/order22333`} className="waves-effect waves-light btn">Посмотреть</NavLink>

        </div>
      </div>
    </div>


    <div className="card horizontal">
      <div className="card-image">
        <img src={analize} />
      </div>
      <div className="card-stacked">
        <div className="card-content analize__content">
          <p>Номер заказа: 0000026805</p>
          <p>Дата заказа: 2.02.2022</p>
          <p>Статус: <span className="label label-success">Завершен</span></p>
        </div>
        <div className="card-action">
          <a href="#">Посмотреть</a>
        </div>
      </div>
    </div>



    <div className="card horizontal">
      <div className="card-image">
        <img src={analize} />
      </div>
      <div className="card-stacked">
        <div className="card-content analize__content">
          <p>Номер заказа: 0000026805</p>
          <p>Дата заказа: 2.02.2022</p>
          <p>Статус: <span className="label label-success">Завершен</span></p>
        </div>
        <div className="card-action">
          <a href="#">Посмотреть</a>
        </div>
      </div>
    </div>


    <div className="card horizontal">
      <div className="card-image">
        <img src={analize} />
      </div>
      <div className="card-stacked">
        <div className="card-content analize__content">
          <p>Номер заказа: 0000026805</p>
          <p>Дата заказа: 2.02.2022</p>
          <p>Статус: <span className="label label-success">Завершен</span></p>
        </div>
        <div className="card-action">
          <a href="#">Посмотреть</a>
        </div>
      </div>
    </div>


    <div className="card horizontal">
      <div className="card-image">
        <img src={analize} />
      </div>
      <div className="card-stacked">
        <div className="card-content analize__content">
          <p>Номер заказа: 0000026805</p>
          <p>Дата заказа: 2.02.2022</p>
          <p>Статус: <span className="label label-success">Завершен</span></p>
        </div>
        <div className="card-action">
          <a href="#">Посмотреть</a>
        </div>
      </div>
    </div>
  </div>
    </div>
      
                  
  </div>
    </div>

  );
}

export default Main;
