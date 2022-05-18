import ColorPreview from "./ColorPreview";
import Linkable from "./Linkable";
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
            <div id="contactDiv">
                <p>C<span>ONTACT</span> U<span>S</span></p>
                <p>F<span>OR</span> Y<span>OUR</span> D<span>EMO</span></p>
                <Linkable url="" imgsrc="" />
            </div>
        </div>
    );
}

export default Home;