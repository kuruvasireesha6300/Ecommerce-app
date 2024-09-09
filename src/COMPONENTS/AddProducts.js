import React from 'react'
import { myDatabase } from '../firebase.js'

function AddProducts() 
{

  const [productData, setProductData] = React.useState({
    productSlno: "",
    productName: "",
    productImageUrl: "",
    productDescription: "",
    productOriginalPrice: "",
    productDiscountedPrice:"" 

  })

  function collectIt (event)
  {
     const myData = event.target.value 
     

     setProductData({...productData, [event.target.name]: myData})

     
  }

  function saveData()
  {
    //Logic the insert/add the data in to the database
    myDatabase.collection("products").add({
      slno: productData.productSlno,
      imageUrl: productData.productImageUrl,
      name: productData.productName,
      description: productData.productDescription,
      originalPrice: productData.productOriginalPrice,
      discountedPrice: productData.productDiscountedPrice
    }) 

    window.location.pathname = "/home"
  }
  return (
    <div className='row' style={{margin: 40}}>
      <div className='col-md-3'>
      <label>Product Slno:</label>
      <input type='number' name='productSlno' class="form-control" onChange={collectIt}/><br/><br/>

      <label>Product Name:</label>
      <input type='text' name='productName' class="form-control" onChange={collectIt}/><br/><br/>

      <label>Product Image URL:</label>
      <input type='text' name='productImageUrl' class="form-control" onChange={collectIt}/><br/><br/>

      <label>Product Description:</label>
      <textarea rows='4' cols='40' name='productDescription' class="form-control" onChange={collectIt}></textarea><br/><br/>

      <label>Product Original Price:</label>
      <input type='number' name='productOriginalPrice' class="form-control" onChange={collectIt}/><br/><br/>

      <label>Product Discounted Price:</label>
      <input type='number' name='productDiscountedPrice' class="form-control" onChange={collectIt}/><br/><br/>

      <button className='btn btn-outline-success' onClick={saveData}>Add Product</button>
      </div>
      
    </div>
  )
}

export default AddProducts