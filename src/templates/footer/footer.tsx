import './footer.scss'








function Footer(){
    let date = new Date()


    return(
        
        <div className='footer'>
             <p>{date.getFullYear()} г Лабораторная Информационная Система RosLIS</p>
        </div>

    );

}


export default Footer;
