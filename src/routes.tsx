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
        path="/p"
        element={<Navigate to="/p/main/" replace />}
    />

       <Route path="/p/main" element={<Main/>}/>  
       <Route path="/p/:id" element={<ResultAnalize/>}/> 
       <Route path="/p/dinamic" element={<Dinamic/>}/> 
         </Routes>
  </>
    

    )
 
  }

    return(
  <>
    <Routes > 
    {/* <Route
        path="/"
        element={<Navigate to={ Authenticated ? '/p/main' : '/p/'} replace />}
    /> */}
       <Route path="/p" element={<Login/>}/>  
 
         </Routes>
    
  </>
    
    )
  

  
   
}

