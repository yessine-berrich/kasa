import { useParams } from "react-router-dom";
import { logementList } from '../datas/logementList'
import "./Cartes.css"
import "./Logement.css"
// import Carousel from "react-bootstrap/Carousel";
// import "bootstrap/dist/css/bootstrap.min.css";
// import img from "../assets/log3-1.jpg";
function Logement() {
    const { idlog } = useParams();
    const carte = logementList.find((c) => c.id == idlog);
    // const pics = [
    //     "https://cdn.pixabay.com/photo/2015/10/29/14/38/web-1012467_1280.jpg",
    //     "https://cdn.pixabay.com/photo/2015/10/29/14/38/web-1012467_1280.jpg",
    //     "https://cdn.pixabay.com/photo/2015/10/29/14/38/web-1012467_1280.jpg",
    //   ];
    return(
        <>
        {/* <Carousel className="carousel w-75 mx-auto">
            {pics.map((picture, index) => (
                <Carousel.Item key={index}>
                    <img className="carousel-img d-block w-100" src={picture} alt={`Slide ${index + 1}`} />
                </Carousel.Item>
            ))}
        </Carousel> */}
        <div className="item">
            <img className="img" src={carte.cover} alt={carte.title}/>
        </div>

        <div className="l1">
            <div className="l11">
                <h1>{carte.title}</h1>
                <h4>{carte.location}</h4>
            </div>
            <div className="pic">
                <img id="host" src={carte.host.picture} alt={carte.host.name} /><br/>
                {carte.host.name}
            </div>
        </div>
        <div className="l2">
            <p className="gg"><h3>Description</h3>{carte.description}</p>
            <div className="gg">
                <h3>Equipments</h3>
                <ul>
                   {carte.equipments.map((eq, index) => (
                        <li key={index}>{eq}</li>
                    ))}
                </ul>
            </div>
            <div className="gg">
                <h3>Tags</h3>
                <ul>
                    {carte.tags.map((tag, index) => (
                        <li key={index}>{tag}</li>
                    ))}
                </ul>
            </div>
        </div>
        </>
    )
}export default Logement;