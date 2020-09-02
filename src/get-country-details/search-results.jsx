import React from 'react';
import { useQuery, gql } from '@apollo/client';


const COUNTRY_DETAILS = gql`
    query CountryDet($name: String!) {
    countryDetails(name: $name) {
        name,
        capital
    }
}`;
function Details({name}) {
  const { loading, error, data } = useQuery(COUNTRY_DETAILS, {variables: {name: name}});
  if(name === "") return <h1>Enter Country Name</h1>
  if(error) return <h1>Enter a Valid Country</h1>
  if(loading) return <h1>Loading</h1>
  
  console.log(data)
  return (
    <div>
        {data.countryDetails.map(function(country, i){
          return <div key={i}><b>Country</b>: {[ country.name , <p key={i}> <b>Capital</b>: {country.capital} </p> ]}</div>; 
        })}
    </div>
  );
}

export { Details };