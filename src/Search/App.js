import React, { useEffect, useState } from 'react'
import { getCategories } from './API';
import Searchbox from './Searchbox';
import CardUI from './CardUI';
import "./style.css"


function App() {

  const [categories,setCategories] = useState([]);
  const [filterCount,setFilterCount] = useState(2);


  let getAllCategories=async () =>{

    try {
      let response = await getCategories()
      let ConvertoJSON = await response?.json();
      let filteredCategories = ConvertoJSON?.categories?.filter((elements,index)=> index < filterCount)
      setCategories(filteredCategories)

    } catch (error) {
      
    }

  }

  useEffect(() =>{
    getAllCategories()
    return () =>{

    }
  },[filterCount])
    

  const handleSelectChange = (e)=>{
    setFilterCount(e.target.value)
  }

  const ifSearchUpdateState= (argument) =>{
    setCategories(argument)
  }


  return (
   <div>

    <div className='box'>
        <Searchbox updateState={ifSearchUpdateState}/>

        <select className='select-condainer' onChange={handleSelectChange}>
          <option value="2">2</option>
          <option value="4">4</option>
          <option value="6">6</option>
          <option value="8">8</option>
          <option value="10">10</option>
          <option value="12">12</option>
          <option value="14">14</option>
        </select>
      </div>

        <div className='condainer'>
          {
            categories?.map((item,index)=>{
              console.log(item.m);
              return(
                <div key={index}>
                  <CardUI data={item}/>
                </div>
              )
            })
          }
        </div>

   </div>
  )
}

export default App