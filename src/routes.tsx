import React from 'react'
import {BrowserRouter,Navigate,Route,Routes } from 'react-router-dom'
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
       {/* <Route path="/admin/create" element={<CreateUser/>}/>  
       <Route path="/admin/createNewModel" element={<CreateModel/>}/>  
       <Route path="/admin/:id" element={<List/>}/>  
       <Route path="/admin/watch" element={<WatchModel/>}/>   */}
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

