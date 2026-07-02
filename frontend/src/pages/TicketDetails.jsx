import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTicket } from "../services/ticketService";
import Loader from "../components/Loader";
import "../styles/ticket.css";

function TicketDetails() {
  const { id } = useParams();

  const [ticket, setTicket] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTicket();
  }, []);

  const fetchTicket = async () => {
    try {
      const response = await getTicket(id);
      setTicket(response.data);
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  if (loading) return <Loader />;

  if (!ticket) {
    return <h2 style={{ textAlign: "center" }}>Ticket Not Found</h2>;
  }

  return (
    <div className="ticket-container">
      <div className="ticket-card">

        <h1>{ticket.customer_name}</h1>

        <p><strong>Email:</strong> {ticket.email}</p>

        <p><strong>Issue:</strong></p>

        <p>{ticket.issue}</p>

        <hr />

        <p>
  <strong>Category:</strong>

  <span className="category">
    {ticket.category}
  </span>
</p>

        <p>
  <strong>Priority:</strong>

  <span className={`priority ${ticket.priority.toLowerCase()}`}>
    {ticket.priority}
  </span>
</p>

        <p><strong>AI Summary:</strong></p>

        <p>{ticket.summary}</p>

        <hr />

        <p>
          <strong>Created:</strong>{" "}
          {new Date(ticket.created_at).toLocaleString()}
        </p>

      </div>
    </div>
  );
}

export default TicketDetails;