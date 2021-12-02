import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import  'bootstrap/dist/css/bootstrap.css';

function CountryDetails() {
    const {id} = useParams()
    const [detail, setDetail] = useState(null)
    

    useEffect(() => {
        
        async function getData(){
            let {data} = await axios.get(`https://restcountries.com/v3.1/alpha/${id}`)
            
            let country = {
                id: id,
                country: data[0].name.common,
                capital: [data[0].capital], 
                area: data[0].area,
                borders: [data[0].borders],
                flag: data[0].flags.svg
          
            }

            setDetail(country)
            
        }

        getData()
       
    }, [id])

    //console.log(detail)

    if (!detail) {
        return <p>Loading . . . </p>
    }


    return (
        <div class="card detail" >
        <img src={detail.flag} class="card-img-top" alt="flag" />
        <div class="card-body">
          <h5 class="card-title">Country:   {detail.country}</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Capital:     {detail.capital}</li>
          <li class="list-group-item">Area: {detail.area} km²</li>
          <li class="list-group-item">Borders: {detail.borders}</li>
        </ul>
        <hr/>
      </div>
    )
}


export default CountryDetails
