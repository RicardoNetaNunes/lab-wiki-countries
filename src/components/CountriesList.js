import { useState, useEffect } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

function CountriesList() {

    const [ countries, setCountries] = useState ([])

    useEffect(() => {

        async function getData(){
            let response = await axios.get('https://restcountries.com/v3.1/all',{
                
              })
            setCountries(response.data)
        }

        getData()
    }, [])

//console.log(countries.length)

if (!countries.length) {
    return <p>Just wait for it ...</p>
}

console.log(countries)
    return (
        <div>

            {
                countries.map((elem, i) => {
                    return (
                        
                    <div className="list">

                    <Link to={`/countries/${elem.cca3}`} >
                    <img  src={elem.flags.svg} class="card-img-top flag" alt="flag" />
                    </Link>
                    <h5>{elem.name.common}</h5>
                    

                </div> 
                
                )   
                })
            }
        </div>
    )
}

export default CountriesList
