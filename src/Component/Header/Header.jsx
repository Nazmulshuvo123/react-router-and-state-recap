const Header = () => {
  return (
    <div>
      <h2 className="font-bold text-4xl text-black pb-3">Navbar</h2>
      <div className="font-bold text-xl text-cyan-900 flex justify-evenly pb-8">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contract">Contract</a>
      </div>
    </div>
  );
};

export default Header;
