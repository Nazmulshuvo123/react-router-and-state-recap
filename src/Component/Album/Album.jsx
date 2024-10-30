
const Album = ({album}) => {
    const {id, title} = album;
    return (
        <div className="font-bold p-3 border-[3px] border-pink-400 rounded-md">
            <h2>Id : {id}</h2>
            <p>Title : {title}</p>
            <Link to= '/album/${id}' ><button>Details</button></Link>
        </div>
    );
};

export default Album;