import Records from "../model/records_schema.js";

/* render homepage */
export const home = async (req, res) => {
  try {
    const records = await Records.find();
    let total = 0;
    for (let obj of records) {
      if (obj.category == "income") {
        total += obj.amount;
      } else {
        total -= obj.amount;
      }
    }
    res.render("homepage", { records, total });
  } catch (err) {
    console.log(err);
  }
};

/* add record */
export const addRecord = async (req, res) => {
  try {
    await Records.create(req.body);
    res.redirect("/");
  } catch (err) {
    console.log(err);
  }
};

/* delete record */
export const deleteRecord = async (req, res) => {
  try {
    await Records.findByIdAndDelete(req.params.id);
    res.redirect("/");
  } catch (err) {
    console.log(err);
  }
};
