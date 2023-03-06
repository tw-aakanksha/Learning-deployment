import WOMEN_DATA from "../../Products.json"
import "./data.css"
import Product from "../Product/product-card"

const Womendata = () => {
    return (
        <div className='data'>
            {WOMEN_DATA.filter((product) => product.Category == "women").map(
                (product) => (
                    <Product key={product.id} product={product} />
                )
            )}
        </div>
    )
}

export default Womendata
