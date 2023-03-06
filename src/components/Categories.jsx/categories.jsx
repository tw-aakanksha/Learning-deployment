import "./categories.css"
import { Link } from "react-router-dom"
const Category = () => {
    return (
        <div>
            <div className='Categoriesheading'>CATEGORIES</div>
            <div className='directory-container'>
                <div className='category-container'>
                    <div
                        className='background-image'
                        style={{
                            backgroundImage:
                                "url(https://raw.githubusercontent.com/rookiemonkey/dummy-products-api/master/products/homeandliving/sofa_600.png)",
                        }}
                    ></div>

                    <div className='category-body-container'>
                        <h1>HomeLiving</h1>

                        <Link className='cardtext' to='/homelivingdata'>
                            Shop Now
                        </Link>
                    </div>
                </div>
                <div className='category-container'>
                    <div
                        className='background-image'
                        style={{
                            backgroundImage:
                                "url(https://i.ibb.co/GCCdy8t/womens.png)",
                        }}
                    ></div>

                    <div className='category-body-container'>
                        <h1>Women</h1>
                        <Link className='cardtext' to='/womendata'>
                            Shop Now
                        </Link>
                    </div>
                </div>

                <div className='category-container'>
                    <div
                        className='background-image'
                        style={{
                            backgroundImage:
                                "url(https://i.ibb.co/R70vBrQ/men.png)",
                        }}
                    ></div>

                    <div className='category-body-container'>
                        <h1>Men</h1>
                        <Link className='cardtext' to='/mendata'>
                            Shop now
                        </Link>
                    </div>
                </div>

                <div className='category-container'>
                    <div
                        className='background-image'
                        style={{
                            backgroundImage:
                                "url(https://i.ibb.co/cvpntL1/hats.png)",
                        }}
                    ></div>

                    <div className='category-body-container'>
                        <h1>Hats</h1>

                        <Link className='cardtext' to='/hatdata'>
                            Shop Now
                        </Link>
                    </div>
                </div>

                <div className='category-container'>
                    <div
                        className='background-image'
                        style={{
                            backgroundImage:
                                "url(https://raw.githubusercontent.com/rookiemonkey/dummy-products-api/master/products/groceries/tomatoes_600.png)",
                        }}
                    ></div>

                    <div className='category-body-container'>
                        <h1>Groceries</h1>

                        <Link className='cardtext' to='/groceriesdata'>
                            Shop Now
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category
