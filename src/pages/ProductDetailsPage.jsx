import { useEffect, useState } from "react";
import { useParams} from "react-router-dom";


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  const {productId} = useParams();
  let url = "https://fakestoreapi.com/products/"

  useEffect(() =>{
    const fetchData = async () => {
      try{
        const response = await fetch(url + productId)
        const data = await response.json()
        setProduct(data)
      }catch(error){
        console.error("Error products:", error)
      }
    }
    fetchData()
  },[productId])
  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.

  // To fetch the product details, set up an effect with the `useEffect` hook:


  return (
    <div className="ProductDetailsPage">
    <ul>    
        <li>
          <img src={product.image} alt={product.title}/>
          <p> {product.title} </p>
          <p> {product.price} </p>
          <p>{product.description}</p>
          <p>{product.category}</p>

        </li>
    </ul>
    {/* Render product details here */}
    </div>
  );
}

export default ProductDetailsPage;
