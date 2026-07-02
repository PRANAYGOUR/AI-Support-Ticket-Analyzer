const db = require("../config/db");
//used to create a new ticket 
const createTicket = async (ticket) => {
  const { customer_name, email, issue, category, priority, summary } = ticket;

  const [result] = await db.query(
    `INSERT INTO tickets
    (customer_name, email, issue, category, priority, summary)
    VALUES (?, ?, ?, ?, ?, ?)`,
    //? - They create parameterized queries, 
    // which prevent SQL injection attacks by separating SQL commands from user input.
    [customer_name, email, issue, category, priority, summary]
  );
//After inserting a ticket, we use the generated ID to fetch the complete
//  record and return it to the frontend.
  return result.insertId;
};

//used to fetch all the tickets from the database
const getAllTickets = async () => {
  const [rows] = await db.query(
    //we are writing order by desc - so that the user can see the latest ticktes first
    "SELECT * FROM tickets ORDER BY created_at DESC"
  );

  return rows;
};

//used to fetch a specific ticket by its ID from the database
const getTicketById = async (id) => {
  const [rows] = await db.query(
    //again we are using ? (parameterized query)
    "SELECT * FROM tickets WHERE id = ?",
    [id]
  );
//mysql will return an array of rows, but since we are fetching by ID, we expect only one row.
  return rows[0];
};

module.exports = {
  createTicket,
  getAllTickets,
  getTicketById,
};