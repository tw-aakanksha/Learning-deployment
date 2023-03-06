import Modal from "react-bootstrap/Modal"
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import "./Loginmodal.css"

const ModalLogin = ({ showLogin, onModalCloseLogin, onModalOkLogin }) => {
    return (

        <Modal show={showLogin} style={{ marginTop: "200px" }}>
            <div className='modaltitle-l' onClick={onModalCloseLogin}>
                X
            </div>

            <div
                style={{
                    color: "Black",
                    fontSize: "40px",
                    height: "80px",
                    textAlign: "center",
                }}
            >
                Login as a
            </div>

            <div className='modalbuttons-l'>
                <Link
                    className='modalbtns-l'
                    to='/LoginSeller'
                    onClick={onModalOkLogin}
                >
                    <Button
                        style={{
                            fontSize: "20px",
                            width: "150px",
                            backgroundColor: "rgba(116,169,173)",
                            outline: "none",
                            border: "none"
                        }}
                    >
                        Seller
                    </Button>
                </Link>
                <Link
                    className='modalbtns-l'
                    to='/LoginBuyer'
                    onClick={onModalOkLogin}
                >
                    <Button
                        style={{
                            fontSize: "20px",
                            width: "150px",
                            backgroundColor: "rgba(116,169,173)",
                            outline: "none",
                            border: "none"
                        }}
                    >
                        Buyer
                    </Button>
                </Link>
            </div>
        </Modal>

    )
}

export default ModalLogin
