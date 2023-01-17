import './App.css';
import TopButton from './components/TopButton';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TemperatureAndDetails from './components/TemperatureAndDetails';
import Forecast from './components/Forecast';
import getFormattedWeatherData from './services/weatherServices';
import { useEffect, useState } from 'react';


function App() {
 
//  BU kısımlarda sayfa ilk açıldığında burada yazılan şehrin hava durumu bilgileri ekrana gelir

  const [query,setQuery]=useState({q:'KOcaeli'});
  const [units,setUnits]=useState('metric');
  const [weather,setWeather]=useState(null);

  //Hiç şehir bilgisi girilmezse ekrana gösterilen kısım gelir.Asenkron işlemi gerçekleşir
  useEffect (()=>{
    const fetchWeather=async ()=> {
      await getFormattedWeatherData({...query, units}).then(data=>
        {
          setWeather(data)
        });
      
    };
    fetchWeather();

  },[query,units]);


  //Havanın derecesine göre arkaplan renginde değişiklikler meydana gelir
  const formatBackground = () => {
    if (!weather) return "from-cyan-700 to-blue-700";
    const threshold = units === "metric" ? 8: 20;
    if (weather.temp <= threshold) return "from-red-700 to-blue-700";

    return "from-yellow-700 to-orange-700";
  };

  return (
    <div className={`mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br  h-fit shadow-xl shadow-gray-400 ${formatBackground()}`}>
    <TopButton setQuery ={setQuery}/>
<Inputs setQuery={setQuery} units={units} setUnits={setUnits}/>    

{weather && (
  
//Sayfadaki kullanılan başlıklar
<div>

<TimeAndLocation weather= {weather}/>
<TemperatureAndDetails weather= {weather}/>
<Forecast title='Saatlİk Hava Durumu' items={weather.hourly}/>
<Forecast title='Günlük Hava Durumu' items={weather.daily}/>

</div>

)}



 </div>
  );
}

export default App;   
  