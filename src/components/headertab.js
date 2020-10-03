import React from 'react';

class HeaderTab extends React.Component{
    selectedCity=(e)=>{
        this.props.selectedCity(e);
    }
    getWeatherDetails=()=>{
        this.props.getWeatherDetails();
    }
    render(){
    return(
      <div >
      <nav className=" row navApp">
      {/* pick the city to display weather forecast */}
     

      <div className="align-left col-sm-6">
        { this.props.cityForecast ? 
        this.props.cityForecast.map(function(cast, i){        
         if(cast.humidity)
         return  <span >  
         <div className="tempNum" >{cast.temp_c } </div> 
         <div className="unitWrap">&#8451;</div>
         <img src={cast.condition.icon} alt="" width="70" height="70"></img>
         <div>{cast.condition.text}</div>  
         <div>Feels Like: {cast.feelslike_c}&#8451;</div>
         <div>Last updated: {cast.last_updated }</div>
         </span>        
        })
         :" "}
      </div>

      <div className=" col-sm-6  buttons">
      <select className=" buttonStyle" onChange={this.selectedCity}>
        <option value="BANGALORE">Bangalore</option>
        <option value="CHENNAI">Chennai</option>
        <option value="DELHI">Delhi</option>
        <option value="KOLKATA">Kolkata</option>
        <option value="MUMBAI">Mumbai</option>
      </select>
      <button className=" buttonStyle" onClick={this.getWeatherDetails}>Show Graph </button>
      </div>

      </nav>
      </div>
    );
    }
}
export default HeaderTab;