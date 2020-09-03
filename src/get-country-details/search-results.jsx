import React from 'react';
import { useQuery, gql } from '@apollo/client';

import { SearchResults } from './search.results';

const COUNTRY_DETAILS = gql`
    query CountryDet($name: String!) {
    countryDetails(name: $name) {
        name,
        capital,
        flag,
        regionDetails {
            region,
            subregion,
            population
        },
        languages {
            name,
            nativeName
        },
        currencyDetails {
            name,
            symbol,
            code
        }
    }
}`;
function Details({name}) {
  const { loading, error, data } = useQuery(COUNTRY_DETAILS, {variables: {name: name}});
  
  if(error) return <h1>Enter a Valid Country</h1>
  if(loading) return <h1>Loading</h1>
  
  console.log(data)
  return (
    <div>
        {data.countryDetails.map(function(country, i){
          return <div key={i}>
              <SearchResults country = {country}></SearchResults>
          </div>; 
        })}
    </div>
  );
}

export { Details };