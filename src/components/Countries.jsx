import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { version } from 'react-dom';

const Countries = () => {

    const [country, setCountry ] = useState({})
    const [isloading, setIsLoading]= useState(true)
    const [demography, showDemography] = useState(false)
    const [location, showLocation] = useState(false)
    const [capital, showCapital] = useState(false)
    
    useEffect(() =>{
        
        axios.get('https://restcountries.com/v3.1/alpha/de')
        .then(res => { setCountry(res.data[0])
            
        })
        .finally (() => setIsLoading(false))
        

    },[])
console.log(country)


    return (
        <div>
            {
                isloading ? (
                    <h1>Loading....</h1>
                ): (

                 <>
             
                    <h1>{country.name?.common}</h1>
                    <br />
                    <img src={country.flags?.png} alt="" />
                    <br />
                    <button onClick={() => showDemography(!demography)}>Demography</button>
                    <button onClick={() => showLocation(!location)}>Location</button>
                    <button onClick={() => showCapital(!capital)}>Capital</button>
                    <br />
                
                    
                        
                            demography === true ? (
                            <>
                                <h2>Demography</h2>
                                <li>Population: {country.population?.[0]}</li>
                                <li>Area: {country.area}</li>
                            </>
                        ): (

                            location === true ? (
                            <>
                                <h2>Location</h2>
                                <li>Continent: {country.continents} </li>
                                <li>Region: {country.region}</li>
                                <li>Subregion: {country.subregion}</li>
                            </>
                        ): (

                            capital === true ? (
                            <>
                                <h2>Capital</h2>
                                <li>Capital: {country.capital} </li>
                            </>
                        )
                        
                
                        
                
            </>
       </div>
    )
    
}
export default Countries;