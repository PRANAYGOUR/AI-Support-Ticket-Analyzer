import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import CreateTicket from "./pages/CreateTicket";
import TicketList from "./pages/TicketList";
import TicketDetails from "./pages/TicketDetails";

import "./styles/app.css";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<CreateTicket />} />

        <Route path="/tickets" element={<TicketList />} />

        <Route path="/tickets/:id" element={<TicketDetails />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;