import "./styles/Summary.css"
import thankYou from "../media/icon-thank-you.svg"
import {useState} from "react";

function Summary(props) {
    const {goToPrevStep, goToPlan, service, billing, storage, activePlan, profile, billingSymbol} = props;

    const [confirm, setConfirm] = useState(true)

    const handleConfirm = () => {
        setConfirm(!confirm)
    }

    function getTotal() {
        const planAmount = activePlan === 'arcade' ? 9 : activePlan === 'advanced' ? 12 : 15;
        const serviceAmount = service ? 1 : 0;
        const storageAmount = storage ? 2 : 0;
        const profileAmount = profile ? 2 : 0;
        const totalAmount = planAmount + serviceAmount + storageAmount + profileAmount;

        return billingSymbol(totalAmount)


    }

    return (
        <div className="view-container">
            {confirm ? (
                    <div>
                        <header>
                            <h1>Finishing up</h1>
                            <p>Double-check everything looks OK before confirming.</p>
                        </header>
                        <section>
                            <div className="fields">
                                <div className="summary">
                                    <div className="summary-wrapper">
                                        <div className="summary-plan-wrapper">
                                            <div className="summary-plan">
                                                <h4>{activePlan === 'arcade' ? 'Arcade' : activePlan === 'advanced' ? 'Advanced' : 'Pro'} {billing === 'monthly' ? '(Monthly)' : '(Yearly)'}</h4>
                                                <button className="change-plan" onClick={goToPlan}>Change</button>
                                            </div>
                                            <p className="plan-total">${activePlan === 'arcade' ? billingSymbol(9) : activePlan === 'advanced' ? billingSymbol(12) : billingSymbol(15)}</p>
                                        </div>
                                        <hr/>
                                        <div className="summary-add-ons-wrapper">
                                            {service && (
                                                <div className="summary-add-on">
                                                    <p>Online service</p>
                                                    <p className="add-on-total">+${billingSymbol(1)}</p>
                                                </div>
                                            )}
                                            {storage && (
                                                <div className="summary-add-on">
                                                    <p>Larger storage</p>
                                                    <p className="add-on-total">+${billingSymbol(2)}</p>
                                                </div>
                                            )}
                                            {profile && (
                                                <div className="summary-add-on">
                                                    <p>Customizable Profile</p>
                                                    <p className="add-on-total">+${billingSymbol(2)}</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="total-price">
                                        <p>Total {billing === 'monthly' ? '(per month)' : '(per year)'}</p>
                                        <p className="total-amount">${getTotal()}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="button-container">
                                <button onClick={goToPrevStep} className="prev-button">Go back</button>
                                <button onClick={handleConfirm} className="next-button">Confirm</button>
                            </div>
                        </section>
                    </div>
                ) :
                <div className="thank-you-page">
                    <img src={thankYou} alt=" "/>
                    <h1>Thank you!</h1>
                    <p className="thank-you-text">Thanks for confirming your subscription! We hope you have fun using
                        our platform. If you ever need support, please feel free to email us at
                        support@loremgaming.com</p>
                    <p>
                        This is an exercise from https://www.frontendmentor.io <br/>
                        Inserted data is not processed or saved in any way or form. This exercise is made for learning purposes.<br/>
                        If you find any bugs please contact me at sphost40@gmail.com
                    </p>
                </div>
            }
        </div>
    )
}

export default Summary