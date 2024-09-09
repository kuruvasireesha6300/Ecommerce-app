import React from 'react'
import { myDatabase } from '../firebase'
import jquery from "jquery"

function Card() {
    const [productsData, setProductsData] = React.useState([])
//  productsData =[{}, {}]
    React.useEffect(function()
    {
        //Logic to read the data from firestore database
        myDatabase.collection("products").onSnapshot(function(snapshot)
        {
            //snapshot = ["doc1","doc2"]
            setProductsData(snapshot.docs.map(function(i)
            {
                return i.data()
            }))
        })
    })

    function collectData(event)
    {
      //Logic to collect the data like quality and the id

      if(localStorage.getItem("cart") == null)
      {
        // Meaning is cart key is not present in the local storage, so it means even id and quantity is also  not in the local storage
        var cart = {}
      }
      else
      { 
        // {"cart" : {"1": 5}}
        // If cart key is already there in the local storage, it means id and quntity might be available
        // JSON data in to javascript Object

        cart = JSON.parse(localStorage.getItem("cart")) //{"1":5} --> {1:5}
      }

      // we need to Get the Id

      // cart = {1:4, 2: 1}
      let myId = event.target.id 

      if(cart[myId] == undefined)
      {
        //It means that id along with the quantity is not there inside the cart object
        
        var name = document.getElementById("myname"+myId).innerText
        var price = Number(document.getElementById("myprice"+myId).innerText)
        var quantity = 1
        cart[myId] = [quantity, name, price]
      }
      else
      { 
        quantity = cart[myId][0] + 1
        cart[myId][0] = quantity
        price = Number(document.getElementById("myprice"+myId).innerText)
        cart[myId][2] = price
      }

      localStorage.setItem("cart", JSON.stringify(cart))

      displayCart(cart)
      function displayCart(mycart)
      { 
        var cartData = ""
        for(let i in mycart)
        {
          cartData = cartData + "QTY:" + mycart[i][0] +" " + "NAME:" + mycart[i][1] + " " + "PRICE:" + mycart[i][2] +" "+ "<br/>"


        }
        cartData = cartData + "<a href='productData.html' class='btn btn-success'>Continue</a>"
        document.getElementById("mypopover").setAttribute("data-content", cartData)
        
      }
    }
   
  return (
    <div className='all' style={{display: "flex"}}>
        {
            productsData.map(function(i)
            {
                return <div key={i.slno} className="card" style={{width:350, margin: 30, padding: 30}}>
                  <h2>{i.slno}</h2>
                <img src={i.imageUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title" id={'myname'+i.slno}>{i.name}</h5>
                  <p className="card-text">{i.description}</p>
                  <del><h5 className="card-title">{i.originalPrice}</h5></del>
                  <h5 className="card-title" id={'myprice'+i.slno}>{i.discountedPrice}</h5>
                  <a href="#" className="btn btn-primary" onClick={collectData} id={i.slno}>Add to Cart</a>
                </div>
              </div>
                  
            })
        }




</div>
  )
}

export default Card