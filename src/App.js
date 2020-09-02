import React, { Fragment } from 'react';
import { useQuery, gql } from '@apollo/client';

import './App.css';


const COUNTRY_DETAILS = gql`{
  countryDetails(name: "India") {
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
    <>
      <h2>Country Details...</h2>
  <h2>{ data.countryDetails.map((country, id) => 
        <div>
          <h1 key = { id }>{ country.name }</h1>
          <p>{ country.capital }</p>
        </div>
      )}
  </h2>
    </>
  );
}

export default App;
