//useState  - react hook , lets the component to remember the data 
//without it , react forgets value after every render
import { useState } from "react";
import { createTicket } from "../services/ticketService";
import "../styles/form.css";

function CreateTicket() {
  const [formData, setFormData] = useState({
    customer_name: "",
    email: "",
    issue: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
        //... it is a spread operator, copies the exisiting object 
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await createTicket(formData);

      alert("Ticket Created Successfully!");

      console.log(response.data);

      setFormData({
        customer_name: "",
        email: "",
        issue: "",
      });

    } catch (error) {
      console.error(error);

      alert("Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <div className="container">

      <h1>Create Support Ticket</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="customer_name"
          placeholder="Customer Name"
          value={formData.customer_name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <textarea
          name="issue"
          placeholder="Describe your issue"
          rows="6"
          value={formData.issue}
          onChange={handleChange}
          required
        />

        <button type="submit">
          {loading ? "Analyzing..." : "Submit Ticket"}
        </button>

      </form>

    </div>
  );
}

export default CreateTicket;