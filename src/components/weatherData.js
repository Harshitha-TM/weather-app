import React from 'react';
import './weather.css';

class WeatherData extends React.Component{
    render(){
     return(
         <div >
        {this.props.cityForecast.map(function(cast, i){
                //   if(cast.name)
                //   return <div className="align-left">   
                //       <span className="" > Location: {cast.name}{", "}{cast.country}{"."} </span>
                //   </div> 
         if(cast.humidity)
         return  <div className="">   
         <div className="flex-container"> 
          <div className="details-container">    
          <span className="identiy" >Pressure: </span>
          <span className="vector" >{cast.pressure_in } </span>
          <span className="metric" >inches</span>
          </div>
          <div className="details-container">    
          <span className="identiy" >Wind: </span>
          <span className="vector" >{cast.wind_kph } </span>
          <span className="metric" >kph</span>
          </div>
          <div className="details-container">    
          <span className="identiy" >Humidity: </span>
          <span className="vector" >{cast.humidity } </span>
          <span className="metric" >%</span>
          </div>
          <div className="details-container">    
          <span className="identiy" >Visibility: </span>
          <span className="vector" >{cast.vis_km} </span>
          <span className="metric" >km</span>
          </div>
          <div className="details-container">    
          <span className="identiy" >Gust: </span>
          <span className="vector" >{cast.gust_kph} </span>
          <span className="metric" >kph</span>
          </div>
          <div className="details-container">    
          <span className="identiy" >Cloud: </span>
          <span className="vector" >{cast.cloud} </span>
          <span className="metric" >%</span>
          </div>
          <div className="details-container">    
          <span className="identiy" >Precipitation: </span>
          <span className="vector" >{cast.precip_in} </span>
          <span className="metric" >inches</span>
          </div>
          <div className="details-container">    
          <span className="identiy" >UV: </span>
          <span className="vector" >{cast.uv } </span>
          </div>
          </div>
         </div>
        }
        )}
    </div>
     ); 
    }
}
export default WeatherData;