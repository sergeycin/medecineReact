import React, { useContext, useEffect, useState } from "react";
import { BreadCrumb } from "../breadcrumb/breadcrumb";
import './Dinamic.scss'
import analize from '../../assets/img/analize.svg'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
// import AsyncSelect from 'react-select/async';
import { UserData } from '../charts/chart';
import BarChart from '../charts/BarChart';
import { makeRequest } from "../../hooks/fetch.hooks";
import { AuthContext } from "../../context/AuthContext";
import { useAppDispatch, UseAppSelector } from "../../hooks/redux";
import { fetchIndicators } from "../../store/actions/DinamicIndicatorsAction";
import { getSelectData } from "./addSelectData";
import Select from 'react-select';
import LineChart from "../charts/LineChart";
import Loader from "../loader/loader";



function Dinamic(){
    const [myvalue, onChange] = useState(new Date());
    const [endvalue, onChangeEnd] = useState(new Date());
    const [selectedOption, setSelectedOption] = useState<any>('Выберите анализ');
    const auth = useContext(AuthContext)
    const dispatch = useAppDispatch()
    const {error,loading,indicators} = UseAppSelector(state => state.IndicatorsSLice)
  
    const [point, setPoint]= useState<any>('')
    
    
    
    useEffect(() => {
      dispatch(fetchIndicators(auth))
    },[])
  
    const [userData,setUserData] = useState<any>()

    

    const AcceptHandler = async (event:any) =>{
      event.preventDefault()
      console.log(selectedOption,'selected')
      let startDate = `${myvalue.getDate()}.${myvalue.getMonth() + 1}.${myvalue.getFullYear()}`
      let endDate = `${endvalue.getDate()}.${endvalue.getMonth() + 1}.${endvalue.getFullYear()}`
      if(selectedOption != null){
        const data = makeRequest(`${auth.url}/api/lis/plot.json?api-key=${auth.api_key}&pid=${auth.token}&uid=${auth.userId}&analyte=${selectedOption.id}&dstart=${startDate}&dend=${endDate}`,'GET')
        data.then((data:any) =>{
          console.log(data,data.data.results.length)
          if(data.data.results.length > 0){
            setUserData({
              labels: data.data.results.map((item:any) => item.logdate ) ,
              datasets:[{
                label: `График изменения показателя «${data.data.test}»`,
                data: data.data.results.map((item:any) => item.result ) 
          
              }]
            })   
          }
          else{
            setUserData(0)
          }
        
        })
      }
    
     
    }
    const tdata = [{label:'Выберите Анализ',value: 'Выберите Анализ'}]

    return(
     <div className="wrapper__right">
  {loading && <Loader/>}
  <BreadCrumb array={[{label:'Главная',route:'/lk/main'},{label:'Динамика показателей',route:'/lk/dinamic'}]}></BreadCrumb>
  <div className="analize dinamic">
  <div className="col s12 m7">
    <h2 className="header header-list">Динамика показателей</h2>
    <div className="card horizontal card-dinamic">
      <div className="card-image">
        <img src={analize} />
      </div>
      <div className="card-stacked">
        <div className="card-content ">
         <p>Показатель:</p>
     
     { indicators ?   <Select
        defaultValue={tdata[0]}
        onChange={setSelectedOption}
        options={indicators}
      /> : ''
     }
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
        <a onClick={AcceptHandler} className="waves-effect waves-light btn">Сформировать</a>
        </div>
        {userData == 0 ? <p style={{textAlign:'center'}}>За данный период данные не найдены'</p> : '' }
      </div>

    </div>
    {userData ?  <div className="card horizontal card__chart">
       <LineChart chartData={userData} />  
      </div>
: ''}
</div>
  </div>


     </div>
    );

}


export default Dinamic;

