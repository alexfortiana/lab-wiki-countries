import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'


function CountryDetails() {

    const [selectCountry, setSelectCountry] = useState(null)
    const {name} = useParams()
    console.log(name)

    useEffect(() => {
        axios.get(`https://ih-countries-api.herokuapp.com/countries/${name}`)
        .then((response) => {

            setSelectCountry(response.data)
            
        })
    }, [name])






if(!selectCountry) {
    return <div> ...Loading</div>
}



  return (
    <div>
    
    <img src={`https://flagpedia.net/data/flags/icon/72x54/${selectCountry.alpha2Code.toLowerCase()}.png`} alt="" width={100} />
    <h3>{selectCountry.name.common}</h3>
    <h3>{selectCountry.capital}</h3>
    <h3>{selectCountry.area}km2</h3>

  {console.log(selectCountry.borders)}

     { selectCountry.borders.map((eachBorder, index) => {
        return <p key={index+eachBorder}>{}{eachBorder}</p>
    })}




  

    

    
    </div>
  )
}

export default CountryDetails