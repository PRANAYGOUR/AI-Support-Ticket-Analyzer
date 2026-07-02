import { Link } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  return (
    <nav>
      <h2>AI Support Ticket Analyzer</h2>

      <div>
        <Link to="/">Create Ticket</Link>
        <Link to="/tickets">Tickets</Link>
      </div>
    </nav>
  );
}

export default Navbar;