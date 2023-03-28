import "./styles/Components.css"
import "./styles/Info.css"
import {useState} from "react";

function Info(props) {
    const {goToNextStep, name, email, setEmail, setName, phone, setPhone} = props;

    const [nameError, setNameError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [phoneError, setPhoneError] = useState('')

    const validateName = () => {
        if (!name) {
            setNameError('This field is required')
        } else {
            setNameError('')
        }
    }

    const validateEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!email) {
            setEmailError('This field is required')
        } else if (!emailRegex.test(email)) {
            setEmailError('This field is incorrect')
        } else {
            setEmailError('')
        }
    }

    const validatePhone = () => {
        const phoneRegex = /^\+?\d+$/
        if (!phone) {
            setPhoneError('This field is required')
        } else if (!phoneRegex.test(phone)) {
            setPhoneError('This field is incorrect')
        } else {
            setPhoneError('')
        }
    }

    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const handlePhoneChange = (event) => {
        setPhone(event.target.value)
    }

    const handleNextClick = () => {
        validateName()
        validateEmail()
        validatePhone()

        // Check if there are any error messages
        if (!nameError && !emailError && !phoneError) {
            goToNextStep()
        }
    }

    return (
        <div className="view-container">
            <header>
                <h1>Personal info</h1>
                <p>Please provide your name, email address and phone number.</p>
            </header>
            <section>
                <div className="fields input">
                    <div className="field-heading"><label htmlFor="name">Name</label>{nameError && <p className="error">{nameError}</p>}</div>
                    <input className={`${nameError ? 'error' : ''}`} id="name" placeholder="e.g. Stephen King" value={name} onChange={handleNameChange} onBlur={validateName} />
                    <div className="field-heading"><label htmlFor="email">Email Address</label>{emailError && <p className="error">{emailError}</p>}</div>
                    <input className={`${emailError ? 'error' : ''}`} id="email" placeholder="e.g. stephenking@lorem.com" value={email} onChange={handleEmailChange} onBlur={validateEmail} />
                    <div className="field-heading"><label htmlFor="phone">Phone Number</label>{phoneError && <p className="error">{phoneError}</p>}</div>
                    <input className={`${phoneError ? 'error' : ''}`} id="phone" placeholder="e.g. +1 234 567 890" value={phone} onChange={handlePhoneChange} onBlur={validatePhone} />
                </div>
                <div className="button-container single">
                    <button className="next-button" onClick={handleNextClick}>Next step</button>
                </div>
            </section>
        </div>
    )
}

export default Info
