import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";

const Posts = () => {
    const posts = useLoaderData()
    return (
        <div>
            <h2 className="font-bold text-2xl pb-5">Posts: {posts.length}</h2>
           <div className="grid grid-cols-3 gap-2">
            {
                posts.map( post => <Post key={posts.id} post={post}></Post>)
            }
           </div>
        </div>
    );
};

export default Posts;