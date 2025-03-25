export default function Friend({friend}){
    console.log(friend)
    const {name , email , phone} = friend
    return(
        <div style={{
            border : '2px solid gold',
            borderRadius : '20px',
            padding : '10px',
            margin : '5px'
        }}>
            <p >Name : {name} </p>
            <p >Email : {email} </p>
            <p >Phone : {phone} </p>
        </div>
    )
}