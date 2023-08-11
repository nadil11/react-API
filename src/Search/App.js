import React, { useEffect, useState } from 'react'
import { getCategories } from './API';
import Searchbox from './Searchbox';
import CardUI from './CardUI';
import Loading from "./Loading"
import "./style.css"
import { Link } from 'react-router-dom';


function App() {
   
  const [loading,setLoading] = useState(false)
  const [categories,setCategories] = useState([]);
  const [filterCount,setFilterCount] = useState(2);


  let getAllCategories=async () =>{

    try {
      let response = await getCategories()
      let ConvertoJSON = await response?.json();
      let filteredCategories = ConvertoJSON?.meals?.filter((elements,index)=> index < filterCount)
      setCategories(filteredCategories)
      setLoading(false)

    } catch (error) {
      
    }

  }

  useEffect(() =>{
    setLoading(true)
    getAllCategories()
    // return () =>{

    // }
  },[filterCount])
    

  const handleSelectChange = (e)=>{
    setFilterCount(e.target.value)
  }

  const ifSearchUpdateState= (argument) =>{
    setCategories(argument)
  }


  return (
    <>

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
            loading?
            <div className='loader'>
              <Loading/>
            </div>
            :
            categories?.length>0 ?

            categories?.map((item)=>{
              console.log(item,"hii");
              return(
                <Link to={`Product/${item.idMeal}`}>
                  <CardUI data={item}/>
                </Link>
              )
            })
            :
            <div className='notfound'> Not found!</div>
        }
        </div>
   </>
  )
}

export default App