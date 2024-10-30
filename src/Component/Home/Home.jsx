import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <h2 className="font-bold text-3xl text-red-400 pb-6">Router Form Home</h2>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;