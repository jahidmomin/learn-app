
//agar ye define kiye to yeh static meta data use krta means lauout me overide krta object kojb page render hota
// export const metadata = {
//     title: 'Product Title',
//     description:'my desc'
//   }
// either Static metadata   
   
  // or Dynamic metadata
  export async function generateMetadata() {
    return {
      title: 'Dynamic Meta DAta',
    }
  }


export default function Page({params}:any) {
    return (
        <>
            <h1>Page ID {params.p1}</h1>
        </>
    )

}
