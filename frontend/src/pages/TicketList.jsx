import { useEffect, useState } from "react";
import { getTickets } from "../services/ticketService";
import TicketCard from "../components/TicketCard";
import Loader from "../components/Loader";
import "../styles/ticket.css";

function TicketList() {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTickets();
  }, []);
//[] - dependency array is empty, so the effect will only run once when the component mounts.

  const fetchTickets = async () => {
    try {
      const response = await getTickets();
      setTickets(response.data);
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  if (loading) return <Loader />;

  return (
    <div className="ticket-container">
      <h1>All Support Tickets</h1>

      {tickets.length === 0 ? (
        <h3>No Tickets Found</h3>
      ) : (
        tickets.map((ticket) => (
          <TicketCard
            key={ticket.id}
            ticket={ticket}
          />
        ))
      )}
    </div>
  );
}

export default TicketList;