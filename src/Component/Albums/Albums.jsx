import { useLoaderData } from "react-router-dom";
import Album from "../Album/Album";

const Albums = () => {
    const albums = useLoaderData()
    return (
        <div>
            <h2>Total Albums: {albums.length}</h2>
            <div className="grid grid-cols-3 gap-2">
                {
                    albums.map(album => <Album key={albums.id} album={album}></Album>)
                }
            </div>
        </div>
    );
};

export default Albums;