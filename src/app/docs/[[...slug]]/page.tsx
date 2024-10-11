//[...slug] - requried array
//[[...slug]] - optinal cathcing
export default function Docs({ params }: { params: { slug: string[] } }) {
    console.log('====================================')
    console.log(params)
    console.log('====================================')
    if (params.slug?.length === 2) {
        return <><h1>Viewing docs of feature {params.slug[0]} and concept {params.slug[1]} </h1></>
    } else if (params.slug?.length === 1) {
        return <h1> View Docs Of Feature {params.slug[0]}</h1>
    }
    return (
        <>
            <h1>Docs Main</h1>
        </>
    )

}
