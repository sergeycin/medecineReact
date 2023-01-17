
import { BreadCrumb } from '../breadcrumb/breadcrumb';
import './main.scss'
import analize from '../../assets/img/analize.svg'
import { makeRequest } from '../../hooks/fetch.hooks';

function Main() {
  const data = makeRequest('http://127.0.0.1:4028/api/lis/results.json','POST',{'api-key': 'ba4deeb3-e2a1-4f8e-8b44-4ffb6455ed48'})
  setTimeout(()=>{
    console.log(data)
  },500)
 
	// $curl_params = array('domain'=> $_SESSION["REST_SERVICE"].'/api/lis/results.json',
	// 		'cookies'=> 'cookies.txt',
	// 		'params'=> array(
	// 			'orderno'=> $orderno,
	// 			'uid'=> $_SESSION["UID"],
	// 			'api-key'=> 'ba4deeb3-e2a1-4f8e-8b44-4ffb6455ed48'
	// 		)
	// );

  return (
    <div className="wrapper__right">
  <div className="main">
  
    <BreadCrumb></BreadCrumb>
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
