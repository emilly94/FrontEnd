import React from 'react';

import '../styles/CountryItems.css';

const CountryItems = ({name,totalCases, recovered, deaths }) =>{
return(
<li className="country-item">
  <strong className="country-name">{name}</strong>

  <div className="total-cases">{totalCases} <span>confirmed</span></div>

  <div className="recovered-deaths">
    <span className="recovered">{recovered} <span>recovered </span></span>
    <span id="deaths">{deaths} <span>deaths </span></span>
  </div>
</li>
)}

export default CountryItems;