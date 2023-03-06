import MEN_DATA from "../../Products.json"
import "./data.css"
import Product from "../Product/product-card"
const Mendata = () => {
    return (
        <div className='data'>
            {MEN_DATA.filter((product) => product.Category == "men").map(
                (product) => (
                    <Product key={product.id} product={product} />
                )
            )}
        </div>
    )
}

export default Mendata
