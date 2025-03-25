import { use } from "react"

export default function Users({fetchUsers}){
    const users = use(fetchUsers)

    return(
        <div>
            <h2>Users: {users.length} </h2>
            {/* <ul>
               { users.map(user => <li key={user.id}>  {user.name} </li>)}
            </ul> */}
        </div>
    )
}