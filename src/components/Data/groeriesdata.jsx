import GROCERIES_DATA from "../../Products.json"
import "./data.css"

import Product from "../Product/product-card"

const Groceriesdata = () => {
    return (
        <div className='data'>
            {GROCERIES_DATA.filter(
                (product) => product.Category == "groceries"
            ).map((product) => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    )
}

export default Groceriesdata
