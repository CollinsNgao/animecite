import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import useFetch from "../custom/custom";

const MerchendiseDetails = () => {
   const {id} = useParams()
   const {merchendise}= useFetch('http://localhost:9000/clothing/' + id)

console.log(merchendise)

    return (
        <div className="merchendise-details">
            { merchendise && (
             <article>
                <img src={merchendise.img2}></img>
                <h2>{merchendise.name}</h2>
                <h2>{merchendise.category}</h2><br></br>
                               
                <article>
                       <h1> <span>Status:</span>   {merchendise.status}</h1>
                       <h1><span>Episodes:</span> {merchendise.episodes}</h1>
                       <h1><span>Rating:</span> {merchendise.rating} </h1>
                </article>

                <div className="link">
                <Link to={merchendise.link} style={{
                    color:"beige",
                }}>Watch Here  !</Link>
                 </div>

                    
                <div className="description">
                    <p>{merchendise.decription}</p> 
                     <br></br>
                </div>

            </article>         
            )}
            
        </div>
    );
}
 
export default MerchendiseDetails;