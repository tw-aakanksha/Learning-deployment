import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import './toolbar.css'
import ModalRegister from './registermodal'
import ModalLogin from './Loginmodal'
import { Link } from 'react-router-dom'
import { UserContext } from '../../App'
import { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout, selectUser } from '../../reducers/userSlice'

import LOGO from '..//..//assets/logo2.png'

import 'bootstrap/dist/css/bootstrap.css'
import { Container, Dropdown } from 'react-bootstrap'
import SearchBar from './searchbar'
import { useCart } from "react-use-cart";
import Shoppingcart from './shopping-cart.png'



const Toolbar = () => {
    const { items,
        isEmpty,
        totalUniqueItems,
        totalItems,
        cartTotal,
        removeItem,
        emptyCart,
        updateItemQuantity
    } = useCart();
    const userLogInfo = useContext(UserContext)

    const dispatch = useDispatch()
    const user = useSelector(selectUser)

    const [showRegister, setShowRegister] = useState(false)

    const onModalCloseRegister = () => {
        setShowRegister(false)
    }

    const onModalOkRegister = () => {
        setShowRegister(false)

    }
    const handleShowRegister = () => {
        setShowRegister(true)
    }

    const [showLogin, setShowLogin] = useState(false)

    const onModalCloseLogin = () => {
        setShowLogin(false)
    }

    const onModalOkLogin = () => {
        setShowLogin(false)
    }
    const handleShowLogin = () => setShowLogin(true)

    const signoutHandler = () => {
        userLogInfo.setIsLoggedIn(false)
        dispatch(logout())
    }
    return (
        <div className="toolbar-container">
            <section className="sec">
                <div className="nav-bar">

                    <div className="Logo">
                        <img
                            src={LOGO}
                            alt="logo"
                            style={{
                                width: '80px',
                                height: '80px',
                                padding: '10px',
                            }}
                        />
                    </div>

                    <SearchBar />
                    <div className='nav-button-header'>
                        <div className="nav-buttons">
                            {/* <div className="navright"> */}
                            <div className="btnheader">
                                <Link className="btnheader" to="/">
                                    Home
                                </Link>
                            </div>

                            {/* </div> */}
                            {!userLogInfo.isLoggedIn ? (
                                <>
                                    <div className="btnheader" onClick={handleShowRegister}>
                                        Register
                                    </div>
                                    <div className="btnheader" onClick={handleShowLogin}>
                                        Login
                                    </div>
                                </>
                            ) : (
                                <>
                                    {
                                        <div>
                                            <Container className="p-9">
                                                <Dropdown>
                                                    <Dropdown.Toggle
                                                        variant="Secondary"
                                                        className="btnheader"
                                                    >
                                                        <i
                                                            className="fa fa-user"
                                                            aria-hidden="true"
                                                            style={{
                                                                fontSize: '30px',
                                                                position: 'absolute',
                                                                top: '50 %',
                                                                left: '50 %',
                                                                transform: 'translate(-50 %, -50 %)',
                                                                border: 'none',
                                                                outline: 'none',
                                                                display: 'inline'
                                                            }}
                                                        ></i>
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu>
                                                        <Dropdown.Item className="profile">
                                                            {user.email}
                                                        </Dropdown.Item>
                                                        <Dropdown.Item className="profile">
                                                            My Profile
                                                        </Dropdown.Item>
                                                        <Dropdown.Item>
                                                            <Link
                                                                to="/"
                                                                className="profile"
                                                                onClick={signoutHandler}
                                                            >
                                                                Logout
                                                            </Link>
                                                        </Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </Container>
                                        </div>
                                    }
                                </>
                            )}
                            <div className="btnheader">
                                <Link to="wishlist">
                                    <i className="fa fa-heart-o" aria-hidden="true"></i>
                                </Link>

                            </div>
                            <div className="iconbutton">
                                <Link to="cart">
                                    <img src={Shoppingcart} alt="shopping-cart" />
                                </Link>
                                <span className='iconbutton-badge'> {totalItems}  </span>
                            </div>
                        </div>
                    </div>
                </div>

                {
                    showRegister
                        ?
                        <ModalRegister
                            showRegister={showRegister}
                            onModalCloseRegister={onModalCloseRegister}
                            onModalOkRegister={onModalOkRegister}

                        />
                        :
                        <></>
                }
                {
                    showLogin
                        ?
                        <ModalLogin
                            showLogin={showLogin}
                            onModalCloseLogin={onModalCloseLogin}
                            onModalOkLogin={onModalOkLogin}
                        />
                        :
                        <></>
                }

            </section>

            <Outlet />
        </div>
    )
}

export default Toolbar
