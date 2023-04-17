const Airtable = require("airtable");
const base = new Airtable({ apiKey: process.env.AIR_TABLE_API_KEY }).base(
  process.env.AIR_TABLE_BASE_KEY
);

const table = base("coffee-stores");

const createCoffeeStore = (req, res) => {
  if (req.method === "POST") res.json({ message: "Hi there" });
  else res.json({ message: "is GET" });
};

export default createCoffeeStore;
