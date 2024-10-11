"use client"
export default function Blog({params}:any) {
    let {blogId,reviewId}=params
     return (
       <>
         <h1>Review {reviewId} For Page : {blogId}</h1>
       </>
     );
   }
   