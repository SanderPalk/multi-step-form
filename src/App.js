import './App.css';
import {useState} from "react";
import Info from "./components/Info";
import Plan from "./components/Plan";
import AddOns from "./components/AddOns";
import Summary from "./components/Summary";

function App() {
    const [activeView, setActiveView] = useState(0)

    // Info states
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')


    // Select plan states
    const [billing, setBilling] = useState('monthly')
    const [activePlan, setActivePlan] = useState('arcade')
    const [checked, setChecked] = useState(false)

    // Add-ons states
    const [service, setService] = useState(false)
    const [storage, setStorage] = useState(false)
    const [profile, setProfile] = useState(false)


    function goToNextStep() {
        setActiveView(activeView + 1);
    }

    function goToPrevStep() {
        setActiveView(activeView - 1);
    }

    function goToPlan() {
        setActiveView(1);
    }

    const billingSymbolHandler = (price) => {
        if (billing === 'monthly') {
            return price + '/mo'
        } else if (billing === 'yearly') {
            return  price * 10 + '/yr'
        }
    }

    return (
        <div className="App">
            <div className="sidebar-container">
                <div className="view">
                    <div className={`circle ${activeView === 0 ? 'active' : ''}`}><p>1</p></div>
                    <div className="panel"><p>STEP 1</p>YOUR INFO</div>
                </div>
                <div className="view">
                    <div className={`circle ${activeView === 1 ? 'active' : ''}`}><p>2</p></div>
                    <div className="panel"><p>STEP 2</p> SELECT PLAN</div>
                </div>
                <div className="view">
                    <div className={`circle ${activeView === 2 ? 'active' : ''}`}><p>3</p></div>
                    <div className="panel"><p>STEP 3</p>ADD-ONS</div>
                </div>
                <div className="view">
                    <div className={`circle ${activeView === 3 ? 'active' : ''}`}><p>4</p></div>
                    <div className="panel"><p>STEP 4</p>SUMMARY</div>
                </div>
            </div>
            <div className="content-container">
                {activeView === 0 && (
                    <Info goToNextStep={goToNextStep} name={name} setName={setName} email={email} setEmail={setEmail}
                          phone={phone} setPhone={setPhone}/>
                )}
                {activeView === 1 && (
                    <Plan goToNextStep={goToNextStep} goToPrevStep={goToPrevStep} billing={billing}
                          setBilling={setBilling}
                          activePlan={activePlan} setActivePlan={setActivePlan} checked={checked}
                          setChecked={setChecked}/>
                )}
                {activeView === 2 && (
                    <AddOns goToNextStep={goToNextStep} goToPrevStep={goToPrevStep} service={service}
                            setService={setService} storage={storage} setStorage={setStorage} profile={profile}
                            setProfile={setProfile} billingSymbol={billingSymbolHandler}/>
                )}
                {activeView === 3 && (
                    <Summary goToPrevStep={goToPrevStep} goToPlan={goToPlan} billing={billing} activePlan={activePlan}
                             service={service} storage={storage} profile={profile} billingSymbol={billingSymbolHandler}/>
                )}
            </div>
        </div>
    );
}

export default App;
