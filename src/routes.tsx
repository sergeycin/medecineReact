import React from 'react'
import {BrowserRouter,Navigate,Route,Routes } from 'react-router-dom'
import Dinamic from './templates/dinamic/Dinamic'
import Login from './templates/login/login'
import Main from './templates/main/main'
import { ResultAnalize } from './templates/ResultAnalize/ResultAnalize'


export const MyRoutes : React.FC<{Authenticated: string}> = ({Authenticated}) => {

  if(Authenticated){
    // console.log('login',Authenticated)
    return(
  <>
     {/* <Navigate to="/admin/main" /> */}
    <Routes > 
    <Route
        path="/"
        element={<Navigate to="/patient/main" replace />}
    />

       <Route path="/patient/main" element={<Main/>}/>  
       <Route path="/patient/:id" element={<ResultAnalize/>}/> 
       <Route path="/patient/dinamic" element={<Dinamic/>}/> 
         </Routes>
  </>
    

    )
 
  }

    return(
  <>
    <Routes > 
       
       <Route path="/patient" element={<Login/>}/>  
 
         </Routes>
    
  </>
    
    )
  

  
   
}

