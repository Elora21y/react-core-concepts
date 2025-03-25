import { use } from "react"
import Friend from "./Friend"

export default function Friends(props){
    const friends = use(props.friendsPromise)
    return(
        <div>
            <h3>Friends : {friends.length} </h3>
            {
                // friends.map(friend => <p style={{
                //     border : '2px solid gold',
                //     borderRadius : '10px',
                //     padding : '20px'
                // }} key={friend.id}>Name: {friend.name}</p>)
                friends.map( friend => <Friend key={friend.id} friend ={friend}></Friend>)
            }
        </div>
    )
}