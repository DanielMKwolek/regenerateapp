import ColorPreview from "./ColorPreview";
import Linkables from "./Linkables";
import AndroidPhone from "./AndroidPhone";
import ApplePhone from "./ApplePhone";

const Home = (props) => {
    return(
        <div id="homeDiv">
            <div id="headlineDiv">
                <p className="ls fsm">Color Branding
                    <br/>
                    <span className="la">made easy</span>
                </p>
                <ColorPreview/>
            </div>
            <div id="blurbDiv1">
                <p className="ls fsm">Color is a way of expressing<br /><span className="da">values</span></p>
            </div>
            <div id="appleDiv">
                <ApplePhone />
            </div>
            <div id="blurbDiv2">
                <p className="ls fsm">Our system makes branding a <br /><span className="da">breeze</span></p>
            </div>
            <div id="androidDiv">
                <AndroidPhone />
            </div>
            <div className="bls mb fsl" id="contactDiv">
                <p>C<span className="la fsm">ONTACT</span> U<span className="la fsm">S</span></p>
                <p>F<span className="la fsm">OR</span> Y<span className="la fsm">OUR</span> D<span className="la  fsm">EMO</span></p>
                <Linkables url="" imgsrc="" />
            </div>
        </div>
    );
}

export default Home;