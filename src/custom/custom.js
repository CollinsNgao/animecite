import { useEffect,useState } from "react"
const  useFetch= (url) => {
    const[merchendise, setMerchendise]=useState(null)
    
useEffect(()=>{
    
    fetch(url)
    .then(res =>{
       return res.json()
    })
    .then((data) =>{
       setMerchendise(data)
    })

},[url])

return {merchendise}

}
 export default useFetch