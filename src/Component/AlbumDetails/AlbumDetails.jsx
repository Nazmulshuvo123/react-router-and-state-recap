import { useLoaderData } from "react-router-dom";

const AlbumDetails = () => {
    const album = useLoaderData()
    const {id, title} = album;
    return (
        <div>
            <h2>Id : {id}</h2>
            <h2>Title: {title}</h2>
        </div>
    );
};

export default AlbumDetails;