
import { NavLink } from 'react-router-dom';
import './breadcrumb.scss'
 
interface listArray{
  array?: listArrayObject[]
}

interface listArrayObject{
  label:string,
  route:string
}

export  function BreadCrumb({array}:listArray) {


  return (
 
  
  <nav>
    <div className="nav-wrapper  nav-bread">
      <div className="col s12">
       {array?.map((item) => <NavLink key={item.route} to={item.route} className="breadcrumb">{item.label}</NavLink>)}
       
        {/* <a href="#!" className="breadcrumb">Список анализов</a> */}
      
      </div>
    </div>
  </nav>

  );
}
