import HOMELIVING_DATA from "../../Products.json"
import "./data.css"
import Product from "../Product/product-card"

const Homeliving_DATA = () => {
    return (
        <div className='data'>
            {HOMELIVING_DATA.filter(
                (product) => product.Category == "homeliving"
            ).map((product) => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    )
}

export default Homeliving_DATA
