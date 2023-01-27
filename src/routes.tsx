import React from 'react'
import {BrowserRouter,Navigate,Route,Routes } from 'react-router-dom'
import Dinamic from './templates/dinamic/Dinamic'
import Login from './templates/login/login'
import Main from './templates/main/main'
import { ResultAnalize } from './templates/ResultAnalize/ResultAnalize'


export const MyRoutes : React.FC<{Authenticated: string}> = ({Authenticated}) => {

  if(Authenticated){
    console.log('login',Authenticated)
    return(
  <>
     {/* <Navigate to="/admin/main" /> */}
    <Routes > 
    <Route
        path="/lk"
        element={<Navigate to="/lk/main/" replace />}
    />

       <Route path="/lk/main" element={<Main/>}/>  
       <Route path="/lk/:id" element={<ResultAnalize/>}/> 
       <Route path="/lk/dinamic" element={<Dinamic/>}/> 
         </Routes>
  </>
    

    )
 
  }

    return(
  <>
    <Routes > 
    {/* <Route
        path="/"
        element={<Navigate to={ Authenticated ? '/lk/main' : '/lk/'} replace />}
    /> */}
       <Route path="/lk" element={<Login/>}/>  
 
         </Routes>
    
  </>
    
    )
  

  
   
}

