import { useState } from "react"
import Modal from "react-bootstrap/Modal"

import "./signup-buyer-component.css"

import {
  createAuthUserWithEmailAndPassword_Buyer,
  createUserDocumentFromAuth_Buyer,
} from "../../utils/firebase_buyer/firebasebuyer-utils"

import ModalPopUP from "./modal"

import { useNavigate } from "react-router-dom"

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
}
const ModalSignupBuyer = ({
  showRegisterModal,
  onModalCloseRegisterModal
}) => {
  const [email, setEmail] = useState("")
  const [displayName, setDisplayName] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const [emailErr, setEmailErr] = useState(false)
  const [displayNameErr, setDisplayNameErr] = useState(false)
  const [passwordErr, setPasswordErr] = useState(false)
  const [confirmPasswordErr, setConfirmPasswordErr] = useState(false)

  const resetFormFields = () => {
    setDisplayName(defaultFormFields.displayName)
    setEmail(defaultFormFields.email)
    setPassword(defaultFormFields.password)
    setConfirmPassword(defaultFormFields.confirmPassword)
  }

  const navigate = useNavigate()

  const handleSubmit = async () => {
    if (password !== confirmPassword) {
      alert("password do not match")
      return
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword_Buyer(
        email,
        password
      )

      await createUserDocumentFromAuth_Buyer(user, {
        displayName,
      })

      navigate("/loginbuyer")
      resetFormFields()
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("cannot create user, email already in use")
      }
    }
  }

  const displayNameError = () => {
    let item = displayName
    if (item.length < 4 || item.length > 16 || !item.match(/^[a-zA-Z]+$/)) {
      setDisplayNameErr(true)
    } else {
      setDisplayNameErr(false)
    }
  }

  const displayHandler = (e) => {
    let item = e.target.value
    setDisplayName(item)
  }

  const emailError = () => {
    let item = email
    if (!item.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)) {
      setEmailErr(true)
    } else {
      setEmailErr(false)
    }
  }

  const emailHandler = (e) => {
    let item = e.target.value
    setEmail(item)
  }

  const passwordError = () => {
    let item = password
    if (
      !item.match(
        /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
      ) ||
      item.length < 0
    ) {
      setPasswordErr(true)
    } else {
      setPasswordErr(false)
    }
  }

  const passwordHandler = (e) => {
    let item = e.target.value
    setPassword(item)
  }

  const confirmPasswordHandler = (e) => {
    let item = e.target.value
    setConfirmPassword(item)
  }

  const confirmPasswordError = () => {
    let item = confirmPassword
    if (
      !item.match(
        /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
      ) ||
      item.length < 0
    ) {
      setConfirmPasswordErr(true)
    } else {
      setConfirmPasswordErr(false)
    }
  }

  const [show, setShow] = useState(false)

  const handleClose = () => {
    setShow(false)
  }

  const onModalClose = () => {
    setShow(false)
  }

  const onModalOk = () => {
    handleSubmit()
    setShow(false)
  }
  const handleShow = () => setShow(true)

  const SubmitButton = () => {
    if (
      !displayNameErr &&
      !passwordErr &&
      !confirmPasswordErr &&
      !emailErr &&
      displayName.length > 0 &&
      email.length > 0 &&
      password.length > 0 &&
      confirmPassword.length > 0
    ) {
      return (
        <>
          <button className='button-signup' onClick={handleShow}>
            SignUp
          </button>
        </>
      )
    } else {
      return (
        <button
          type='submit'
          className='button-signup-disabled'
          disabled
        >
          SIGN UP
        </button>
      )
    }
  }
  return (

    <Modal show={showRegisterModal} style={{ marginTop: "100px", width: "100%" }}>
      <div className='modaltitle' onClick={onModalCloseRegisterModal}>
        X
      </div>

      <div className='signupbg'>
        <div className='signup-buyer-container'>
          <h1>Signup as a Buyer</h1>
          <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input
              type='email'
              required
              onBlur={emailError}
              onChange={emailHandler}
              name='email'
              value={email}
              autoComplete='off' />
            <div className='text-danger'>
              {" "}
              {emailErr ? (
                <span>
                  Email Id is not Valid, Please enter valid email
                </span>
              ) : (
                ""
              )}{" "}
            </div>

            <br></br>

            <label>Display Name </label>
            <input
              type='text'
              required
              onBlur={displayNameError}
              onChange={displayHandler}
              name='displayName'
              value={displayName}
              autoComplete='off' />

            <div className='text-danger'>
              {displayNameErr ? (
                <span>
                  Display name should contain minimum 4 charcters
                  and Maximum of 16 charcters
                </span>
              ) : (
                ""
              )}
            </div>
            <br></br>

            <label>Password</label>
            <input
              type='password'
              required
              onBlur={passwordError}
              onChange={passwordHandler}
              name='password'
              value={password}
              autoComplete='off' />

            <div className='text-danger'>
              {" "}
              {passwordErr ? (
                <span>
                  Password should contain atleast one
                  uppercase,one lowercase,one letter and a special
                  character with minimum of length 8 characters
                </span>
              ) : (
                ""
              )}
            </div>

            <br></br>

            <label>Confirm Password</label>
            <input
              type='password'
              required
              onBlur={confirmPasswordError}
              onChange={confirmPasswordHandler}
              name='confirmPassword'
              value={confirmPassword} />

            <div className='text-danger'>
              {" "}
              {confirmPasswordErr ? (
                <span>
                  Password and Confirm Password are not matching
                </span>
              ) : (
                ""
              )}
            </div>

            <br></br>

            <SubmitButton />
            <ModalPopUP
              show={show}
              handleClose={handleClose}
              onModalClose={onModalClose}
              onModalOk={onModalOk} />
          </form>
        </div>
      </div>
      <div>

      </div>

    </Modal>

  )
}

export default ModalSignupBuyer
