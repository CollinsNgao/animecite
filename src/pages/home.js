import { useEffect, useState } from "react";
import MerchendiseList from "../list/merchendiselist";
import useFetch from "../custom/custom";

const Home = () => {
    const {merchendise}= useFetch('http://localhost:9000/clothing')
    const [img,setimage]=useState([
        {img:"https://aniwatchtv.to/images/anw-min.webp", id:55},
        {img1:"https://aniwatchtv.to/images/discussion.png",id:56}
    ])

    return (
        <div className="home">
            {img.map((image)=>
            <div className="img">
                <img src={image.img}/>
            </div>

            
            )}
              {merchendise && <MerchendiseList merchendise={merchendise}/>}
        </div>
    );
}
 
export default Home;