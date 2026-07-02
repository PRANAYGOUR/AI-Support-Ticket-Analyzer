import { Link } from "react-router-dom";

function TicketCard({ ticket }) {
  return (
    <div className="ticket-card">

      <h2>{ticket.customer_name}</h2>

      <p>
        <strong>Email:</strong> {ticket.email}
      </p>

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

      <p>
        <strong>Summary:</strong>
      </p>

      <p>{ticket.summary}</p>

      <Link to={`/tickets/${ticket.id}`}>
        View Details
      </Link>

    </div>
  );
}

export default TicketCard;