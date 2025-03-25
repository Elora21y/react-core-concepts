import { use } from "react"
import Post from "./Post"

export default function Posts({fetchPosts}){
    const posts = use(fetchPosts)
    return(
        <div>
            <h2>All Post : {posts.length} </h2>
            {
                posts.map(post => <Post key={post.id} post = {post}></Post>)
            }
        </div>
    )
}