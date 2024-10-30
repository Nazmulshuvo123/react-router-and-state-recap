

const User = ({user}) => {
    const {id, name, email,phone} = user;

    return (
        <div className=" border-[3px] border-red-400  p-2 rounded-md ">
            <h1 className="font-bold text-3xl">ID: {id}</h1>
            <p className="font-bold text-3xl">Name: {name}</p>
            <p className="font-bold text-2xl">Email: {email}</p>
            <p className="font-bold text-xl">Phone: {phone}</p>
        </div>
    );
};

export default User;