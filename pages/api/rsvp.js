import { connectToDB } from "./db";
import responseModel from "./models/rsvp";

export default async function handler(req, res) {
  const { email } = req.body;
  if (!email) {
    res.status(400).json({ error: "error message not provided" });
  }
  //   write logic for rsvp
  // send invite
  // check if this person has responded
  const mailExists = await responseModel.findOne({ email });
  if (!mailExists) {
    const response = await responseModel.create({
      email,
    });
    console.log({ response });

    res.status(200).json({ user: response });
  }
  // if they have ignore
  // otherwise add then
  // respond accordingly
  res.status(200).json({ user: mailExists });
}
