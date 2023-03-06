import Shop from "./components/Product/products-container"
import { Routes, Route } from "react-router-dom"
import SignupBuyer from "./components/signup-buyer/signup-buyer-component"
import SignupSeller from "./components/signup-seller/signup-seller-component"
import Toolbar from "./routes/navigation/toolbar"

import LoginBuyer from "./components/Login-buyer/login-buyer"
import LoginSeller from "./components/Login-Seller/login-seller"
import { useState, createContext } from "react"
import Mendata from "./components/Data/mendata"
import Hatdata from "./components/Data/hatdata"
import Womendata from "./components/Data/womendata"
import Homelivingdata from "./components/Data/homelivingdata"
import Groceriesdata from "./components/Data/groeriesdata"
import Filterdata from "./components/Categories.jsx/filterpage"
import Product_data from "././Products.json"
import Details from "./components/Product/product-details"
import Cart from "./components/Product/Cart"
import { CartProvider } from "react-use-cart"
import Wishlist from "./components/Product/Wishlist"
import ModalSignupBuyer from "./components/signup-buyer/signup-buyer"



export const UserContext = createContext()

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    return (
        <div className='app-container'>
            <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
                <CartProvider>
                <Toolbar />
                <div className='body-container'>
                    <Routes>
                        <Route path='/' element={<Shop />} />
                        <Route path='signupbuyer' element={<SignupBuyer />} />
                        <Route path='signupseller' element={<SignupSeller />} />
                        <Route path='loginbuyer' element={<LoginBuyer />} />
                        <Route path='loginseller' element={<LoginSeller />} />
                        <Route
                            path='mendata'
                            element={<Mendata data={Product_data} />}
                        />
                        <Route
                            path='hatdata'
                            element={<Hatdata data={Product_data} />}
                        />
                        <Route
                            path='womendata'
                            element={<Womendata data={Product_data} />}
                        />
                        <Route
                            path='homelivingdata'
                            element={<Homelivingdata data={Product_data} />}
                        />
                        <Route
                            path='groceriesdata'
                            element={<Groceriesdata data={Product_data} />}
                        />
                        <Route path='filterdata' element={<Filterdata />} />
                        <Route
                            path='/details/:id'
                            element={<Details data={Product_data} />}
                        />
                        <Route
                            path='cart'
                            element={<Cart /> }
                        />
                        <Route
                            path='wishlist'
                            element={<Wishlist product={Product_data}/> }
                        />
                    </Routes>
                    
                    
                </div>
                </CartProvider>
            </UserContext.Provider>
        </div>
    )
}

export default App
