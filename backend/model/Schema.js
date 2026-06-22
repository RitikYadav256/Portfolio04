import { Schema } from "mongoose";
import mongoose  from "mongoose";

const ImageSchema = new mongoose.Schema({
  description: { type: String },
  name: { type: String, required: true },
  img: {
    data: { type: Buffer, required: true },
    contentType: { type: String, required: true }
  },
  comments: [
    {
      name: { type: String },
      comment: { type: String }
    }
  ]
});
const ImageModel = mongoose.model("Image", ImageSchema,"Portf");

export default ImageModel;
