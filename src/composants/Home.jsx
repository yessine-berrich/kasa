import Banner from "./Banner"
import "./Cartes.css"
import { logementList } from "../datas/logementList"
import Carte from "./Carte"
import { Link } from "react-router-dom"

function Home () {
    return (
        <>
        <Banner/>
        <div className="article">
        {logementList.map((product) => (
                    <Link to={`/logement/${product.id}`} key={product.id} className="item">
                        <Carte cover={product.cover} title={product.title}/>
                    </Link>
                ))}
        </div>
        </>
    )
}
export default Home