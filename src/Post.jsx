export default function Post({post}){
    // console.log(post)
    const {body, title} = post
    return(
        <div style={{
            border : '2px solid gold',
            borderRadius : '20px',
            padding : '10px',
            margin : '5px'
        }}>
            <h2> {title} </h2>
            <p> {body} </p>
        </div>
    )
}