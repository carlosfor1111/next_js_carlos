const Airtable = require("airtable");
const base = new Airtable({ apiKey: process.env.AIR_TABLE_API_KEY }).base(
  process.env.AIR_TABLE_BASE_KEY
);

const table = base("coffee-stores");

const getMinifieldRecord = (record) => {
  return { ...record.fields };
};

const getMinifieldRecords = (records) => {
  return records.map((record) => getMinifieldRecord(record));
};

export { table, getMinifieldRecords };
