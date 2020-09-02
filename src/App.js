import React from 'react';
import { useQuery, gql } from '@apollo/client';

import './App.css';


const COUNTRY_DETAILS = gql`{
  countryDetails(name: "united") {
    name,
    capital
  }
}`
function App() {
  const { loading, error, data } = useQuery(COUNTRY_DETAILS);
  if(loading) return <h1>Loading</h1>
  if(error) return <h1>Error</h1>
  console.log(data)
  return (
    <div>
        {data.countryDetails.map(function(country, i){
          return <div key={i}>Country: {[ country.name , <p key={i}> Capital: {country.capital} </p> ]}</div>; 
        })}
    </div>
  );
}

export default App;
