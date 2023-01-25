import React, { useContext, useEffect, useState } from 'react';
import logo from '../../assets/img/logo.png'
import med from '../../assets/img/med.svg'
// import car from '../../assets/img/car.svg'
import './login.scss'
import { useNavigate } from 'react-router-dom';
import { useHttp } from '../../hooks/http.hook';
import { AuthContext } from '../../context/AuthContext';
import { useMessage } from '../../hooks/message.hook';
import Select from 'react-select';


function Login() {
  const navigate= useNavigate();
  const auth = useContext(AuthContext)
  const message = useMessage()
  const {loading,error,request, clearError} = useHttp() 
  const [isChecked,setChecked] = useState(false)
  const [selectedOption, setSelectedOption] = useState<any>(null);

  // const [dataClinicks,setClinicks] = useState([{label:'Медицинский центр Ланта',value:'Медицинский центр Ланта'}])

  const [form,setForm] = useState({
        folderno: '', password:''
  })

  const dataClinicks = [{label:'Медицинский центр Ланта',value:'Медицинский центр Ланта'}]

  useEffect(()=>{
      message(error)
      clearError()
  }, [error,message,clearError])


  const changeHandler = (event:any) =>{
        setForm({ ...form, [event.target.name]: event.target.value})
  }

  const loginHandler = async (event:any) =>{
    event.preventDefault()
    try{

      const data = await request(`http://dev.rulis.club:4028/api/lis/login2.json?api-key=ba4deeb3-e2a1-4f8e-8b44-4ffb6455ed48&folderno=${form.folderno}&password=${form.password}`,'GET')
      if(isChecked){
        auth.login(data.data.pid,data.data.pid)
        message(data.message)
    
        navigate("/patient/main")
      }
      else{
        message('Вы не дали согласие на обработку персональных данных')
      }
     
      
    }catch (e){console.log(e)}
  }



  return (
    <div className="login">
      <div className="login__block">

        <div className="login__left">

          <div className="login__text">
            <h2>Добро Пожаловать</h2>
            <p>
            Авторизируйтесь в личном кабинете медицинского центра 
            </p>
          </div>
     
          <img className='med'  src={med} alt="" />
        </div>

        <div className="login__right">
        <div className="login__right-name">
          {/* <img src={car} alt="" /> */}
          <h3>Авторизация</h3>
        </div>

          <form className="form">
      <div className="row">
      <div className="input-field col s12">
          <input id="email" type="text" className="validate " name='folderno'  value={form.folderno}
           onChange={changeHandler}/>
          <label htmlFor="email">Логин</label>
        
        </div>
        <div className="input-field col s12">
          <input id="password" type="password" className="validate"  name='password' value={form.password}
           onChange={changeHandler}/>
          <label htmlFor="password">Пароль</label>

        </div>
        <div className="input-field col s12">
        {dataClinicks ?<Select<any>
        defaultValue = {dataClinicks[0]}
        onChange={setSelectedOption}
        options={dataClinicks} /> : ''}
        </div>
        <div className="check-block">
        <div className=" col s12">
  
      <p>
      <label>
        <input type="checkbox" className="filled-in"  checked={isChecked} onChange={() => setChecked(!isChecked)}/>
        <span>Я даю своё  согласие на обработку моих персональных данных обработку персональных данных </span>
      </label>
    </p>
    
{/* 
      <label htmlFor="#check"></label>
 */}

          </div>
        </div>
      </div>
      <button onClick={loginHandler} className="login-btn" disabled={loading}  style={{marginRight:10}}>Login</button>

    </form> 
  
        </div>

      </div>

    </div>
  );
}

export default Login;
