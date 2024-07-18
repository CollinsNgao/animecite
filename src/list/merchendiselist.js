import { Link } from "react-router-dom";

const MerchendiseList = (props,img) => {
    const merchendise=props.merchendise 

    return (
        
        <div className="merchendise-List">
              {merchendise.map((merch)=>(
        <div className="merchendise-preview" key={merch.id}>
          <Link to={`/merchendise/${merch.id}`}>
          <h2>{merch.name}</h2> 
          <img src={merch.img}/>
          <p>{merch.category}</p>
          </Link>
        </div>
    
    ))}
        </div>
    );

}
 
export default MerchendiseList ;