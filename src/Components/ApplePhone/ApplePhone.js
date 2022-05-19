const ApplePhone = (props) => {
    return(
        <div className="applePhone">
            <header className="appleTitleBar">
                <div className="appleBackButtonDiv da">
                    <div className="appleBackChevron bda"> </div>
                    <p onClick={() => {}}className="fsas">Back</p>
                </div>
                <p className="appleTitle mb fsal">Regenerate</p>
                <div />
            </header>
            <div className="appleBody">
                <p className="appleFormLabel la">User Info</p>
                <form className="appleForm">
                    <input className="mb fsas" type="text" placeholder="Name"/>
                    <div className="appleDividerLine"></div>
                    <input className="mb fsas" type="text" placeholder="Username"/>
                    <div className="appleDividerLine"></div>
                    <input className="mb fsas" type="text" placeholder="Email"/>
                    <div className="appleDividerLine"></div>
                    <input className="mb fsas" type="password" placeholder="Password"/>
                    <div className="appleDividerLine"></div>
                    <input className="mb fsas" type="password" placeholder="Repeat Password"/>
                </form>
                <form className="appleForm" id="appleForm2">
                    <textarea className="mb fsas" placeholder="Notes"></textarea>
                </form>
            </div> 
        </div>
    );
}

export default ApplePhone;