import { Link } from "react-router-dom";
const About = (props) => {
    return(
        <div className="aboutDiv">
            <p className="fsm ls">Our aim is to make your <span className="mb">personality</span> show through our <span className="da" >color palettes</span></p>
            <br/>
            <p className="fss ls">By crafting bespoke systems for all platforms, including native iOS, we make sure that the customers using your product get to enjoy their favorite operating systems</p>
            <Link to="/" className="backLink fss la">{`< back`}</Link>
        </div>
    );
}

export default About;