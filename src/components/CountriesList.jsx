import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from "axios"


function CountriesList() {


    const [allCountries, setAllCountries] = useState(null)

    useEffect(() => {

        axios.get("https://ih-countries-api.herokuapp.com/countries")
        .then((response) => {

            console.log(response.data)


            setAllCountries(response.data) 
            
        })
        

    }, [])

    if(!allCountries) {
        return <div>...Loading</div>
    }



   


  return (
    <div>

    <h3>Countries List</h3>
    
   { allCountries.map((eachCountry, index)=> {
       return (
        <div key={index+eachCountry.alpha3Code}  >

        

        

        <img src={`https://flagpedia.net/data/flags/icon/72x54/${eachCountry.alpha2Code.toLowerCase()}.png`} alt="" width={25} />
        <Link to={`/countries/${eachCountry.alpha3Code}`}>{eachCountry.name.common}</Link>
        

            
        </div>
       )

   })}
    
    </div>
  )
}

export default CountriesList