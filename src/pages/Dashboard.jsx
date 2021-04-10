import React, { useEffect, useState } from 'react';
import CountryItems from '../components/CountryItems';
import Navbar from '../components/Navbar';
import '../styles/Dashboard.css';
import '../styles/Navbar.css';

const Dashboard = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch('https://api.covid19api.com/summary', {mode:"cors",}).then((response) => {
      response.json().then((dados) => {
        setCountries(dados.Countries);
      })
    })
  },[] );

return(
  <>
  <Navbar/>
  <div className="container"> 
    <h1>Dados Covid-19</h1>
    <ul className="list">
      {countries.map((country, index) => (
          <CountryItems
            key={index}
            name={country.Country}
            totalCases={country.TotalConfirmed} 
            recovered={country.TotalRecovered} 
            deaths={country.TotalDeaths}/>)
        )} 
    </ul>
  </div>
  </>
)
}
export default Dashboard;