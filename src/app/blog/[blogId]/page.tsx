
export default function Blog({params}:any) {
   let {blogId}=params
    return (
      <>
        <h1>Blog Page : {blogId}</h1>
      </>
    );
  }
  