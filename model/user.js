import { Schema, model, models } from "mongoose";

const testSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
});

const Text = models.Text || model("Text", testSchema);

export default Text;
