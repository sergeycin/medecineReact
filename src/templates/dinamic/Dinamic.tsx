import React, { useContext, useEffect, useState } from "react";
import { BreadCrumb } from "../breadcrumb/breadcrumb";
import './Dinamic.scss'
import analize from '../../assets/img/analize.svg'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Select from 'react-select';
import { UserData } from '../charts/chart';
import BarChart from '../charts/BarChart';
import { makeRequest } from "../../hooks/fetch.hooks";
import { AuthContext } from "../../context/AuthContext";
import { useAppDispatch, UseAppSelector } from "../../hooks/redux";
import { fetchIndicators } from "../../store/actions/DinamicIndicatorsAction";


function Dinamic(){
    const [myvalue, onChange] = useState(new Date());
    const [endvalue, onChangeEnd] = useState(new Date());
    const [selectedOption, setSelectedOption] = useState(null);
    const auth = useContext(AuthContext)
    const dispatch = useAppDispatch()
    const {error,loading,indicators} = UseAppSelector(state => state.IndicatorsSLice)
  
    const [options,setOptions]= useState(indicators)
    
    
    useEffect(() => {
          dispatch(fetchIndicators(auth))      
    },[])
  

    const [userData,setUserData] = useState({
      labels: UserData.map((item) => item.year ) ,
      datasets:[{
        label: 'Users Game',
        data: UserData.map((item) => item.id ) 
  
      }]
    })

    // useEffect(()=>{
    //   const data = makeRequest(`${auth.url}/api/lis/analytes.json?api-key=${auth.api_key}&pid=${auth.token}&uid=${auth.userId}`,'GET')

    //   data.then((data)=>{
    //     console.log(data)
    //   })
    // },[])

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
        <div className="name"></div>
        <div className="calendars">
          <div className="calendars__blok">
            <p>c {myvalue.getDate()}-{myvalue.getMonth() + 1}-{myvalue.getFullYear()}</p>
          <Calendar onChange={onChange} value={myvalue} />
          </div>
          <div className="calendars__blok">
            <p>по {endvalue.getDate()}-{endvalue.getMonth() + 1}-{endvalue.getFullYear()}</p>
         <Calendar onChange={onChangeEnd} value={endvalue} />
         </div>
        </div>
    
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

