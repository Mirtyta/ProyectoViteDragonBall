import "./Banner.css"
import Goku from "../assets/variosVolando.png"
// import Varios from "../assets/variosVolando.png"
import Fondo from "../assets/fondo2.mp4"
import Logod from "../assets/logoDragonBall.png"


const Header = () =>{
    return(
        <div className="banner">
            <video className="banner-video" autoPlay muted loop poster="../assets/logo.png">
                <source src={Fondo} type="video/mp4" />
                Tu navegador no soporta el video.
            </video>
            <img className="banner-img" src={Goku} alt="Frontal" />
            <img className="banner-logo" src={Logod} alt="Frontal" />
        </div>
    );
};

export default Header;