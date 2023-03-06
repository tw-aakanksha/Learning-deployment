import Product_data from "../../Products.json"
import "./style.css"
import Product from "./product-card"

import Background from "../Adv/adv"
import Category from "../Categories.jsx/categories"

const Shop = () => {
    return (
        <>
            <Background />
            <Category />
            <div className='product-card-container' id='products'>
                {Product_data.map((product) => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
        </>
    )
}

export default Shop
