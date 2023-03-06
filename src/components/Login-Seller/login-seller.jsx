import { useState, useContext } from "react"

import { useNavigate } from "react-router-dom"

import { signInAuthUserWithEmailAndPassword_Seller } from "../../utils/firebase_seller/firebaseseller-utils"

import { UserContext } from "../../App"
import { useDispatch } from "react-redux"

import { login } from "../../reducers/userSlice"

import "./login-seller.css"
const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
}

const LoginSeller = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)

    const { email, password } = formFields

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    // console.log(formFields);

    const userLogInfo = useContext(UserContext)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleSubmit = async (event) => {
        event.preventDefault()
        dispatch(
            login({
                email: email,
            })
        )
        try {
            await signInAuthUserWithEmailAndPassword_Seller(email, password)
            userLogInfo.setIsLoggedIn(true)

            navigate("/")

            resetFormFields()
        } catch (error) {
            switch (error.code) {
                case "auth/wrong-password":
                    alert("Passowrd incorrect")
                    break
                case "auth/user-not-found":
                    alert("Email not registered")
                    break
                default:
                // console.log("error", error.message)
            }
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target

        setFormFields({ ...formFields, [name]: value })
    }

    return (
        <div className='loginsellerbg'>
            <div className='login-container-seller'>
                <h1>Already have an account as a Seller ?</h1>
                <span>Sign in with your Email and Password</span>
                <form onSubmit={handleSubmit}>
                    <label>Email</label>
                    <input
                        label='Email'
                        type='email'
                        required
                        onChange={handleChange}
                        name='email'
                        value={email}
                    />

                    <label>Password</label>
                    <input
                        label='Password'
                        type='password'
                        required
                        onChange={handleChange}
                        name='password'
                        value={password}
                    />

                    <button type='submit' className='button-loginseller'>
                        LOG IN
                    </button>
                </form>
            </div>
        </div>
    )
}

export default LoginSeller
