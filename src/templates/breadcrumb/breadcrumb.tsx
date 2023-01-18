
import './breadcrumb.scss'
 
interface listArray{
  array?: any[]
}

export  function BreadCrumb({array}:listArray) {


  return (
 
  
  <nav>
    <div className="nav-wrapper  nav-bread">
      <div className="col s12">
       {array?.map((item) => <a href="#!" className="breadcrumb">{item}</a>)}
       
        {/* <a href="#!" className="breadcrumb">Список анализов</a> */}
      
      </div>
    </div>
  </nav>

  );
}
