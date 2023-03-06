/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import "./style.css"

import { UserContext } from "../../App"
import { useContext } from "react"
import { Link } from "react-router-dom"

const Product = ({ product }) => {
    const userLogInfo = useContext(UserContext)

    return (
        <div className='product-card'>
            <div>
                <button className="fa fa-heart-o" style={{ border: "none", backgroundColor: "transparent" }}></button>
            </div>
            <img src={product.imageUrl} alt={`${product.name}`} />
            <div className='footer'>
                <span className='name'>
                    <Link to={`/details/${product.id}`}>{product.name}</Link>
                </span>
                {userLogInfo.isLoggedIn ? (
                    <span className='price'>${product.price}</span>
                ) : (
                    <></>
                )}
            </div>
        </div>
    )
}

export default Product
