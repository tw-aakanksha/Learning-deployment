import HAT_DATA from "../../Products.json"
import "./data.css"
import Product from "../Product/product-card"
const Hatdata = () => {
    return (
        <div className='data'>
            {HAT_DATA.filter((product) => product.Category == "hats").map(
                (product) => (
                    <Product key={product.id} product={product} />
                )
            )}
        </div>
    )
}

export default Hatdata
