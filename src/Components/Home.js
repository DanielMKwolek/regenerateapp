import ColorPreview from "./ColorPreview";
import AndroidPhone from "./AndroidPhone";
import ApplePhone from "./ApplePhone/ApplePhone";
import ColorableImage from "./ColorableImage";
import { Link } from "react-router-dom";

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
            <ApplePhone />
            <div id="blurbDiv2">
                <p className="ls fsm">Our system makes branding a <br /><span className="da">breeze</span></p>
            </div>
            <ColorableImage />
            <div className="mb fsl" id="contactDiv">
                <p>C<span className="la fsm">ONTACT</span> U<span className="la fsm">S</span></p>
                <p>F<span className="la fsm">OR</span> Y<span className="la fsm">OUR</span> D<span className="la  fsm">EMO</span></p>
                <Link to="/about">About this page...</Link>
            </div>
        </div>
    );
}

export default Home;