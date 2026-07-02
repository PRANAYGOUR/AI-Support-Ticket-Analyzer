const Ticket = require("../models/ticketModel");
const { analyzeTicket } = require("../services/geminiService");

const createTicket = async (req, res) => {
  try {
    const { customer_name, email, issue } = req.body;

    const aiResult = await analyzeTicket(issue);

    const id = await Ticket.createTicket({
      customer_name,
      email,
      issue,
      category: aiResult.category,
      priority: aiResult.priority,
      summary: aiResult.summary,
    });

    const ticket = await Ticket.getTicketById(id);

    res.status(201).json(ticket);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Failed to create ticket",
    });
  }
};

const getAllTickets = async (req, res) => {
  try {
    const tickets = await Ticket.getAllTickets();

    res.json(tickets);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch tickets",
    });
  }
};

const getTicketById = async (req, res) => {
  try {
    const ticket = await Ticket.getTicketById(req.params.id);

    if (!ticket) {
      return res.status(404).json({
        message: "Ticket not found",
      });
    }

    res.json(ticket);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch ticket",
    });
  }
};

module.exports = {
  createTicket,
  getAllTickets,
  getTicketById,
};