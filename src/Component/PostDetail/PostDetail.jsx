import { useLoaderData } from "react-router-dom";


const PostDetail = () => {
    const post = useLoaderData()
    const {id, title, body} = post;

    return (
        <div className="border-[2px] border-pink-400 rounded-md p-3">
            <h1 className="font-bold text-2xl">ID: {id}</h1>
            <p className="font-bold text-2xl">Title: {title}</p>
            <p className="font-medium text-xl"> {body}</p>
        </div>
    );
};

export default PostDetail;