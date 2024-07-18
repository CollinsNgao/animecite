import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup"
import { addDoc,collection } from "firebase/firestore";
import { auth,db } from "../../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { getDocs} from "firebase/firestore";
import { useEffect, useState } from "react";
import Posta from "./post";


const Form = () => {
  const [reviewList, setReviewList]=useState(null)
  const postRef=collection(db,"reviews")
  const getList=async()=>{
    const data =await getDocs(postRef)
    setReviewList(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
  }
  useEffect(()=>{
    getList()
  },[])

    const [user]=useAuthState(auth)

  const schema=yup.object().shape({
    review:yup.string().required("Please Leave a Review")
  })
  
  const{register,handleSubmit}= useForm({
    resolver: yupResolver(schema)
  })


  const onCreatePost=async(data)=>{
    await addDoc(postRef,{
        review: data.review,
        usename: user?.displayName,
        userId: user?.uid
    })
    console.log(data)

  }

    return (
      <div>
        <form onSubmit={handleSubmit(onCreatePost)}>
          <p style={{
            color:"BLACK",
            backgroundColor:"BEIGE"
          }}>Please Submit Once (and refresh page) to Avoid Duplication of Reviews</p> <br></br>
             <textarea placeholder="Give Your Review & Recommendations..." {...register("review")}/>
             <input type="submit"/>
        </form>
        <div>{reviewList?.map((review)=>(
           <Posta review={review}/>
          ))}</div>
      </div>
      
        
    );
}
 
export default Form;