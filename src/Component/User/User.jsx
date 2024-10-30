import { Link } from "react-router-dom";


const User = ({user}) => {
    const {id, name, email,phone} = user;

    return (
        <div className=" border-[3px] border-red-400  p-2 rounded-md ">
            <h1 className="font-bold text-3xl">ID: {id}</h1>
            <p className="font-bold text-3xl">Name: {name}</p>
            <p className="font-bold text-2xl py-2">Email: {email}</p>
            <p className="font-bold text-xl py-2">Phone: {phone}</p>
            <Link to={`/user/${id}`}><button>Details</button></Link>
        </div>
    );
};

export default User;