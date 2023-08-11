import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function Product() {
  const {id} = useParams();

  // console.log(value);
  const getId = ()=>{

  }

  const [product,setProduct] = useState([])

    let getProduct =async(id) =>{
        let response =await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        console.log(response.data.meals,'response');
        setProduct(response.data.meals[0]);

    }

    useEffect(() => {
      getProduct(id)

      return () => {

      }
    }, [])



    
  return (
    <>
    <div className='product_main' style={{color:'white'}}>


        <div className='img'>
          <img className='pro_img' src={product.strMealThumb}></img>
          </div>
          <div className='product'>
            {
              product.strMeal
            }
          </div>
          <p className='para_pro'>{product.strInstructions}</p>                           
      </div>
    </>
  )
}

export default Product