import React, { useContext, useEffect, useState } from 'react';
import logo from '../../assets/img/logo.png'
import med from '../../assets/img/med.svg'
// import car from '../../assets/img/car.svg'
import './login.scss'
import { useNavigate } from 'react-router-dom';
import { useHttp } from '../../hooks/http.hook';
import { AuthContext } from '../../context/AuthContext';
import { useMessage } from '../../hooks/message.hook';


function Login() {
  const navigate= useNavigate();
  const auth = useContext(AuthContext)
  const message = useMessage()
  const {loading,error,request, clearError} = useHttp() 

    const [form,setForm] = useState({
        folderno: '', password:''
    })

    useEffect(()=>{
      message(error)
      clearError()
    }, [error,message,clearError])


    const changeHandler = (event:any) =>{
        setForm({ ...form, [event.target.name]: event.target.value})
    }

  const loginHandler = async (event:any) =>{
    event.preventDefault()

    // if(form.login == '0000333189' && form.password == '25672'){
    //     navigate("/patient/main")
    //     message('Вы успешно авторизировались')
    // }
    // else{
    //     message('Неверный логин или пароль')
    // }

    try{
      let formData = new FormData();
      formData.append("api-key", "ba4deeb3-e2a1-4f8e-8b44-4ffb6455ed48");
      const data = await request('http://dev.rulis.club:4028/api/login2.json','POST',formData)
      console.log(data)
      // auth.login(data.token,data.userId)
      // message(data.message)
  
      // navigate("/admin/main")
      
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
        {/* <div className="input-field col s12">
    
          <label htmlFor="password">Медицинский центр</label>
          <ul id="dropdown2" className="dropdown-content">
    <li><a href="#!">one<span className="badge">1</span></a></li>
    <li><a href="#!">two<span className="new badge">1</span></a></li>
    <li><a href="#!">three</a></li>
  </ul>
  <a className="btn dropdown-trigger" href="#!" data-target="dropdown2">Dropdown<i className="material-icons right"></i></a>
         
        </div> */}
      </div>
      <button onClick={loginHandler} className="login-btn" disabled={loading}  style={{marginRight:10}}>Login</button>
   {/* <button type='submit' className='login-btn'>Login</button> */}
    </form> 
  
        </div>

      </div>

    </div>
  );
}

export default Login;
