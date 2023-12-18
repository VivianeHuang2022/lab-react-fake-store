import { useState } from "react";
import { useEffect } from "react";
import {Link} from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:


useEffect(() => {

  const fetchData =async()=>{
    try{
        const response = await fetch("https://fakestoreapi.com/products")
        if(response.ok){
          const data =await response.json()
          console.log (data)
          setProducts(data)
        }     
    }catch (error){
      console.error("Error products:", error)
    } 
  }

  fetchData()  }, [])


  return (
    <div className="ProductListPage">
      {/* Render list of products here */}
      <h1>product list</h1>
      <ul>
      {products.map(product => (
          <li key={product.id}>

          <Link to = {`/product/details/${product.id}`}>

          <img src={product.image} alt={product.title}/>
          <p> {product.title} </p>
          <p> ${product.price} </p>
          <p>{product.description}</p>
          <p>{product.category}</p>

          </Link>
          
          </li>

        ))}
      
      </ul>
    </div>
  );
}

export default ProductListPage;
