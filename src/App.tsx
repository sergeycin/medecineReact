import React from 'react';
import { useAuth } from './hooks/auth.hook';

import { AuthContext } from "./context/AuthContext";
import { BrowserRouter, useRoutes } from 'react-router-dom';
import { MyRoutes } from './routes';
import Navbar from './templates/navbar/navbar';
import LeftSidaBar from './templates/leftSidebar/leftSideBar';
import {clinicsObject} from './config'
function App() {
  const {token,login,logout,userId} = useAuth()
 const isAuthenticated:any = !!token //
 const url = clinicsObject.url
 const api_key = 'ba4deeb3-e2a1-4f8e-8b44-4ffb6455ed48'

  return (
   <>
      <AuthContext.Provider value={{
      token,login,url,api_key,logout,userId, isAuthenticated
    }}>

{isAuthenticated && <Navbar/>}
<div className="wrapper">
{isAuthenticated && <LeftSidaBar/>}

<MyRoutes Authenticated={isAuthenticated} />


</div>

  
  
    </AuthContext.Provider>


   </>
 

  );
}

export default App;
