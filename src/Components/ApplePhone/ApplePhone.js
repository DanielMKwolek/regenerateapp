import chevron from '../../assets/images/rect10.png'
const ApplePhone = (props) => {
    return(
        <div className="applePhone">
            <header className="bls">
                <div className="backButtonDiv la">
                    <img src={chevron} />
                    <p onClick={() => {}}className="fss">Back</p>
                </div>
                <p className="la fsm">Regenerate</p>
                <div />
            </header>
        </div>
    );
}

export default ApplePhone;