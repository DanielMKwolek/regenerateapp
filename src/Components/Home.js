import ColorPreview from "./ColorPreview";
import Linkable from "./Linkable";
import AndroidPhone from "./AndroidPhone";
import ApplePhone from "./ApplePhone";

const Home = (props) => {
    return(
        <div id="homeDiv">
            <div id="headlineDiv">
                <div>
                    <p id="regenerate">R<span>EGENERATE</span></p>
                    <p id="colorBranding">Color Branding</p>
                    <p id="madeEasy">made easy</p>
                </div>
                <ColorPreview/>
            </div>
            <div id="blurbDiv1">
                <p>Color is a way of expressing your <span>values</span></p>
            </div>
            <div id="appleDiv">
                <ApplePhone />
            </div>
            <div id="blurbDiv2">
                <p>Our system makes branding a <span>breeze</span></p>
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