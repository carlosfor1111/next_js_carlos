import { table, getMinifieldRecords, findRecordByFilter } from "@/lib/airtable";

const createCoffeeStore = async (req, res) => {
  if (req.method === "POST") {
    //find a record

    const { id, name } = req.body;
    try {
      if (id) {
        const records = await findRecordByFilter(id);

        if (records.length !== 0) {
          res.json(records);
        } else {
          //create a record
          if (id && name) {
            const createRecords = await table.create([
              {
                fields: req.body,
              },
            ]);

            const records = getMinifieldRecords(createRecords);
            res.json(records);
          } else {
            res.status(400);
            res.json({ message: "Id or name is missing" });
          }
        }
      } else {
        res.status(400);
        res.json({ message: "Id is missing" });
      }
    } catch (error) {
      console.error("Error creating or finding a store", error);
      res.status(500);
      res.json({ message: "Error creating or finding a store", error });
    }
  }
};
export default createCoffeeStore;
