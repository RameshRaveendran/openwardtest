import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 border-b">

      <h1 className="text-2xl font-bold">
        OpenWardlekk swagatham
      </h1>

      <div className="flex gap-4">

        <Link to="/">Home</Link>

        <Link to="/login">Login</Link>

        <Link to="/complaints">
          Complaints
        </Link>

        <Link to="/Contact">
          Contact Us
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;