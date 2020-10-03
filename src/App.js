import React from 'react';
import './App.css';
import HeaderTab from './components/headertab';
import WeatherChart from './components/weatherchart';
import WeatherData from './components/weatherData';
import axios from "axios";
import ErrorPage from './components/errorPage';

let API_Key="5957da5aa58a42a4a8375042200110";
let API_LINK="https://api.weatherapi.com/v1/current.json?key=";

let BANGALORE =API_LINK+API_Key+"&q=Bangalore";
let CHENNAI =API_LINK+API_Key+"&q=Chennai";
let DELHI =API_LINK+API_Key+"&q=Delhi";
let KOLKATA =API_LINK+API_Key+"&q=Kolkata";
let MUMBAI =API_LINK+API_Key+"&q=Mumbai";

const reqBANGALORE = axios.get(BANGALORE);
const reqCHENNAI = axios.get(CHENNAI);
const reqDELHI = axios.get(DELHI);
const reqKOLKATA = axios.get(KOLKATA);
const reqMUMBAI = axios.get(MUMBAI);

const INITIAL_CITY="BANGALORE";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={selectedCity:"",temp_c:[],isToggleOn: false,selCityDetails:""};
    this.getCitiesTemp=this.getCitiesTemp.bind(this);
  }

  componentDidMount(){
    //for the default city selected
    this.getSelectedCityForecast(INITIAL_CITY);
  }
  //to store picked city from the dropdown
  selectedCity=(e)=>{
    this.setState({ selectedCity: e.target.value });
    this.getSelectedCityForecast(e.target.value);
  }
  //API call for individual city 
  getSelectedCityForecast=(city)=>{
       let link =API_LINK+API_Key+"&q="+city;
        fetch(link)
        .then(res => res.json())
        .then(
          (result) => {
            // console.log("API response",Object.values(result));
            this.setState({
              selCityDetails: Object.values(result),
            });
          },
          (error) => {
            console.error("Error in loading API results",error);
            this.setState({
              error
            });
          }
        )
  }
  //to get temperatures of all cities to display in the charts
  getCitiesTemp=(val)=>{
    var i,data=[];
    for (i = 0; i < val.length; i++) {
      data.push(val[i].data.current.temp_c);
    }
    return data;
  }
//API calls made to get the date on click of show graph
  getWeatherDetails=(value)=>{
    axios
  .all([reqBANGALORE, reqCHENNAI, reqDELHI,reqKOLKATA,reqMUMBAI])
  .then(
    axios.spread((...responses) => {
    this.setState(state => ({
      allCities:responses,
      temp_c:this.getCitiesTemp(responses),
      isToggleOn: !state.isToggleOn,
    }));
    })
  )
  .catch(errors => {
    // react on errors.
    console.error("Error in loading API results",errors);
  });
  }

  render() {
    return (
      <div className="App">  
      <HeaderTab  
         cityForecast={this.state.selCityDetails}
         getWeatherDetails={this.getWeatherDetails}
         selectedCity={this.selectedCity}
      />   
      {this.state.selCityDetails? 
      <div>

      {/* weather forecast list of the selected city*/}
      <div className="detailsSection" >  
      {this.state.selCityDetails?
      <WeatherData cityForecast={this.state.selCityDetails} /> :""
       }
      </div>

      {/* chart Section- toggle button and check if the api response length*/}
      {(this.state.temp_c.length>0 && this.state.isToggleOn)?
      <div className="chartSection">
      <WeatherChart temp_c={this.state.temp_c}  />
      </div>
      :
      <div className="placeholder-chart">Chart will be displayed here</div>
      }
      </div>

      :
      <ErrorPage/>
      }

    </div>
    );
  }
}

export default App;