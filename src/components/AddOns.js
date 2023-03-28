import "./styles/AddOns.css"

function AddOns(props) {
    const {goToNextStep, goToPrevStep, service, setService, storage, setStorage, profile, setProfile, billingSymbol} = props;

    function handleAddOns(packageType) {
        if (packageType === 'service') {
            setService(!service)
        } else if (packageType === 'storage') {
            setStorage(!storage)
        } else if (packageType === 'profile') {
            setProfile(!profile)
        }
    }


    return (
        <div className="view-container">
            <header>
                <h1>Pick add-ons</h1>
                <p>Add-ons help enhance your gaming experience.</p>
            </header>
            <section>
                <div className="fields">
                    <div className="add-ons">
                        <div className={`add-on ${service ? 'active': ''}`}>
                            <div className="add-on-wrapper">
                                <div className="add-on-content">
                                    <input type="checkbox" onChange={() => handleAddOns('service')} checked={service}/>
                                    <div>
                                        <h4>Online service</h4>
                                        <p>Access to multiplayer games</p>
                                    </div>
                                </div>
                                <div className="monthly-payment">+${billingSymbol(1)}</div>
                            </div>
                        </div>

                        <div className={`add-on ${storage ? 'active': ''}`}>
                            <div className="add-on-wrapper">
                                <div className="add-on-content">
                                    <input type="checkbox" onChange={() => handleAddOns('storage')} checked={storage}/>
                                    <div>
                                        <h4>Larger storage</h4>
                                        <p>Extra 1TB of cloud save</p>
                                    </div>
                                </div>
                                <div className="monthly-payment">+${billingSymbol(2)}</div>
                            </div>
                        </div>

                        <div className={`add-on ${profile ? 'active': ''}`}>
                            <div className="add-on-wrapper">
                                <div className="add-on-content">
                                    <input type="checkbox" onChange={() => handleAddOns('profile')} checked={profile}/>
                                    <div>
                                        <h4>Customizable Profile</h4>
                                        <p>Custom theme on your profile</p>
                                    </div>
                                </div>
                                <div className="monthly-payment">+${billingSymbol(2)}</div>
                            </div>
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

export default AddOns