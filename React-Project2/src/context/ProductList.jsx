import { useContext } from "react"
import { ProductsContext } from "./Products"
import "./ProductList.css"

const ProductList = () => {
    const {products} = useContext(ProductsContext);
    console.log(products)
  return (
    <div className="product-list">
        {
            products.map(i => (<div className="product-item" key={i.id}>
                <img src={i.image} alt={i.description} />
                <p>{i.category}</p>
                <h4>{i.price}</h4>
            </div>))
        }      
    </div>
  )
}

export default ProductList
