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

const findRecordByFilter = async (id) => {
  const findCoffeeStoreRecords = await table
    .select({
      filterByFormula: `id="${id}"`,
    })
    .firstPage();

  return getMinifieldRecords(findCoffeeStoreRecords);
};

export { table, getMinifieldRecords, findRecordByFilter };
