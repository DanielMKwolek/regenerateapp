import ColorPreview from "./ColorPreview";
import Linkable from "./Linkable";
import AndroidPhone from "./AndroidPhone";
import ApplePhone from "./ApplePhone";

const Home = (props) => {
    return(
        <div>
            <p id="regenerate">R<span>EGENERATE</span></p>
            <p>Color Branding</p>
            <p>made easy</p>
            <ColorPreview/>
            <ApplePhone />
            <AndroidPhone />
            <p>Color is a way of expressing your <span>values</span></p>
            <p>Our system makes branding a <span>breeze</span></p>
            <p>C<span>ONTACT</span> U<span>S</span></p>
            <p>F<span>OR</span> Y<span>OUR</span> D<span>EMO</span></p>
            <Linkable url="" imgsrc="" />
        </div>
    );
}

export default Home;