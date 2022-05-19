const ApplePhone = (props) => {
    return(
        <div className="applePhone">
            <header className="appleTitleBar">
                <div className="appleBackButtonDiv da">
                    <div className="appleBackChevron bda"> </div>
                    <p onClick={() => {}}className="fsam">Back</p>
                </div>
                <p className="appleTitle da fsal">Regenerate</p>
                <div />
            </header>
            <div className="appleBody">
                <form className="appleForm bda">
                    <input className="da fsas" type="text" placeholder="Name"/>
                    <input className="da fsas" type="text" placeholder="Username"/>
                    <input className="da fsas" type="text" placeholder="Email"/>
                    <input className="da fsas" type="password" placeholder="Password"/>
                    <input className="da fsas" type="password" placeholder="Repeat Password"/>
                </form>
            </div> 
        </div>
    );
}

export default ApplePhone;