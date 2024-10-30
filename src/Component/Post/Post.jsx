import { Link } from "react-router-dom";

const Post = ({post}) => {
    const{id, title} = post;
    return (
        <div className="font-bold p-3 border-[3px] border-pink-400 rounded-md">
            <h1>ID: {id}</h1>
            <p>Title: {title}</p>
            <Link to={`/post/${id}`}><button className="pt-2 text-green-600">Post Details</button></Link>
        </div>
    );
};

export default Post;