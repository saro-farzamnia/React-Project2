import { useEffect, useState } from "react"
import "./ProductList.css"

const FetchProducts = () => {
  const [data,setData] = useState([]);

  useEffect(()=>{
    const fetchData = async () => {
      const req = await fetch("https://fakestoreapi.com/products");
      const data = await req.json();
      setData(data)
    }
    fetchData()
  },[])
  return (
    <div className="product-list">
        {
            data.map(i => (<div className="product-item" key={i.id}>
                <img src={i.image} alt={i.description} />
                <p>{i.category}</p>
                <h4>{i.price}</h4>
            </div>))
        }      
    </div>
  )
}

export default FetchProducts
