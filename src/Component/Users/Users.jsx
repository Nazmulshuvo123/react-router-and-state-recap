import { useLoaderData } from "react-router-dom";
import User from "../User/User";


const Users = () => {
    const users = useLoaderData()
    console.log(users)
    return (
        <div>

            <h2 className="font-bold text-2xl text-green-700 pb-6">Our Users: {users.length}</h2>
            <p className="font-light text-xl text-black">This is the users section</p>
            <div className="grid grid-cols-3 gap-3">
                {
                    users.map((user) => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;