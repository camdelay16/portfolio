import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="navbar">
        <Link to={"/"}>
          <h4>Home</h4>
        </Link>
        <Link to={"/aboutme"}>
          <h4>About Me</h4>
        </Link>
        <Link to={"/portfolio"}>
          <h4>Portfolio</h4>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
