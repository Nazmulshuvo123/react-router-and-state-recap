import { useLoaderData } from "react-router-dom";


const UserDetails = () => {
    const user = useLoaderData();
    const {name, id , username, email} = user;
    return (
        <div>
            <h1 className="font-bold text-3xl text-pink-500">ID: {id}</h1>
            <p className="font-bold text-3xl text-teal-600">{username}</p>
            <p className="font-bold text-3xl text-teal-600">Name: {name}</p>
            <p className="font-bold text-3xl text-teal-600">Email: {email}</p>
        </div>
    );
};

export default UserDetails;