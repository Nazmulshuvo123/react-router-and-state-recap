import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <h2 className="font-bold text-4xl text-black pb-3">My Website</h2>
      <div className="font-bold text-xl text-cyan-900 flex justify-evenly pb-8">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/albums">Albums</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/users">Users</Link>
        <Link to="/contract">Contract</Link>
      </div>
    </div>
  );
};

export default Header;
