import React, { useState } from 'react'
import {searchCategories} from './API'

function Searchbox({updateState}) {

    const [searchedValue,setSearchedValue] = useState('');

    const  handleSearch = event =>{
        setSearchedValue(event.target.value)
        searchItem()
    }

    const searchItem =async ()=>{

        try {
            let response = await searchCategories(searchedValue)
            let convertoJSON = await response?.json();
            if(convertoJSON.meals === null){

                updateState([])
            }else{
                updateState(convertoJSON.meals)
            }

            
        } catch (error) {
            
        }
    }

    console.log(searchedValue);



  return (
    <div className='search'>
        <input onChange={handleSearch} placeholder='Search.....'/>
    </div>
  )
}

export default Searchbox