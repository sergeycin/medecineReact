
import './ResultAnalize.scss'
import analize from '../../assets/img/analize.svg'

export  function ResultAnalize() {


  return (
  <div className="result">
     <h2 className="header header-list">Результаты анализов</h2>
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

  );
}
