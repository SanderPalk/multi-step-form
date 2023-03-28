import "./styles/Components.css"
import "./styles/Plan.css"
import arcade from "../media/icon-arcade.svg"
import advanced from "../media/icon-advanced.svg"
import pro from "../media/icon-pro.svg"

function Plan(props) {
    const {goToNextStep, goToPrevStep, billing, setBilling, activePlan, setActivePlan, checked, setChecked} = props;

    function choosePlan(plan) {
        setActivePlan(plan)
    }

    const handleCheckboxChange = () => {
        setChecked(!checked);
        if (checked) {
            setBilling("monthly");
        } else {
            setBilling("yearly");
        }
    };


    return (
        <div className="view-container">
            <header>
                <h1>Select your plan</h1>
                <p>You have the option of monthly or yearly billing.</p>
            </header>
            <section>
                <div className="fields">
                    <div className="plans">
                        <div onClick={() => choosePlan('arcade')}
                             className={`plan ${activePlan === 'arcade' ? 'active' : ''}`}>
                            <div className="plan-content"><img alt=" " src={arcade} className="plan-image"/>
                                <div className="plan-text">
                                    <p className="bolder">Arcade</p>
                                    <p>{billing === 'monthly' ? '$9/mo' : '$90/yr'}</p>
                                    {billing === 'yearly' && (<p className="yearly-payment">2 months free</p>)}
                                </div>
                            </div>
                        </div>
                        <div onClick={() => choosePlan('advanced')}
                             className={`plan ${activePlan === 'advanced' ? 'active' : ''}`}>
                            <div className="plan-content"><img alt=" " src={advanced} className="plan-image"/>
                                <div className="plan-text">
                                    <p className="bolder">Advanced</p>
                                    <p>{billing === 'monthly' ? '$12/mo' : '$120/yr'}</p>
                                    {billing === 'yearly' && (<p className="yearly-payment">2 months free</p>)}
                                </div>
                            </div>
                        </div>
                        <div onClick={() => choosePlan('pro')}
                             className={`plan ${activePlan === 'pro' ? 'active' : ''}`}>
                            <div className="plan-content"><img alt=" " src={pro} className="plan-image"/>
                                <div className="plan-text">
                                    <p className="bolder">Pro</p>
                                    <p>{billing === 'monthly' ? '$15/mo' : '$150/yr'}</p>
                                    {billing === 'yearly' && (<p className="yearly-payment">2 months free</p>)}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="timeframe">
                        <div className="timeframe-wrapper">
                            <p className={`timeframe-text ${!checked ? 'active' : ''}`}>Monthly</p>
                            <label className="toggler-wrapper style-1">
                                <input type="checkbox" onChange={handleCheckboxChange} checked={checked}/>
                                <div className="toggler-slider">
                                    <div className="toggler-knob"></div>
                                </div>
                            </label>
                            <p className={`timeframe-text ${checked ? 'active' : ''}`}>Yearly</p>
                        </div>
                    </div>
                </div>
                <div className="button-container">
                    <button onClick={goToPrevStep} className="prev-button">Go back</button>
                    <button onClick={goToNextStep} className="next-button">Next step</button>
                </div>
            </section>
        </div>
    )
}

export default Plan