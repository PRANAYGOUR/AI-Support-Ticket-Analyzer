import axios from "axios";

const API = "http://localhost:5000/api/tickets";

export const createTicket = (data) => axios.post(API, data);

export const getTickets = () => axios.get(API);

export const getTicket = (id) => axios.get(`${API}/${id}`);