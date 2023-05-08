import { findRecordByFilter, getMinifieldRecords, table } from "@/lib/airtable";

const favouriteCoffeeStoreById = async (req, res) => {
  if (req.method === "PUT") {
    try {
      const { id } = req.body;
      if (id) {
        const records = await findRecordByFilter(id);
        if (records.length !== 0) {
          const record = records[0];
          const calculateVoting = parseFloat(record.voting) + 1;

          const updateRecord = await table.update([
            {
              id: record.recordId,
              fields: {
                voting: calculateVoting,
              },
            },
          ]);

          if (updateRecord) {
            const minifiedRecords = getMinifieldRecords(updateRecord);
            res.json(minifiedRecords);
          }
          res.json(records);
        } else {
          res.json({ message: "Coffee store id doesn't exist", id });
        }
      } else {
        res.json({ message: "id is missing" });
      }
    } catch (error) {
      res.status(500);
      res.json({ message: "Error upvoting our coffeeStore store", error });
    }
  }
};

export default favouriteCoffeeStoreById;
