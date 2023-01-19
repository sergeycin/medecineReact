import React, { useState } from "react";
import { BreadCrumb } from "../breadcrumb/breadcrumb";
import './Dinamic.scss'
import analize from '../../assets/img/analize.svg'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Select from 'react-select';
import { UserData } from '../charts/chart';
import BarChart from '../charts/BarChart';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

function Dinamic(){
    const [myvalue, onChange] = useState(new Date());

    const [selectedOption, setSelectedOption] = useState(null);

    const [userData,setUserData] = useState({
      labels: UserData.map((item) => item.year ) ,
      datasets:[{
        label: 'Users Game',
        data: UserData.map((item) => item.id ) 
  
      }]
    })

    return(
     <div className="wrapper__right">
  <BreadCrumb array={['Главная','Динамика показателей']}></BreadCrumb>
  <div className="analize dinamic">
  <div className="col s12 m7">
    <h2 className="header header-list">Список анализов</h2>
    <div className="card horizontal">
      <div className="card-image">
        <img src={analize} />
      </div>
      <div className="card-stacked">
        <div className="card-content ">
         <p>Показатель:</p>
         <Select
        defaultValue={selectedOption}
        onChange={() => setSelectedOption}
        options={options}
      />
         <p>за период:</p>
         <Calendar onChange={onChange} value={myvalue} />
        </div>
        <div className="card-action">
        <a className="waves-effect waves-light btn">button</a>
        </div>
      </div>


    </div>

    <BarChart chartData={userData} />
</div>
  </div>


     </div>
    );

}


export default Dinamic;

