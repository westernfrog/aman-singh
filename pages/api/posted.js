import connectMongo from "../../database/conn";
import Text from "../../model/user";

export default async function addText(req, res) {
  try {
    await connectMongo();
    console.log("CONNECTED TO MONGO");

    const value = await Text.create(req.body);

    res.json({ value });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
