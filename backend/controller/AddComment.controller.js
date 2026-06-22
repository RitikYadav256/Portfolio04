import mongoose from "mongoose";
import ImageModel from "../model/Schema.js";

const AddComment = async (req, res) => {
  console.log("Asking to comment");

  try {
    const { name, comment, _id } = req.body;

    const image = await ImageModel.findById(_id);
    if (!image) {
      return res.status(404).json("Image not found");
    }

    const res3=await ImageModel.findOneAndUpdate(
      { _id:_id},
      {
        $push: {
          comments: { name: name, comment: comment}
        }
      },
      { new: true } 
    );
    if (!res3) {
      return res.status(500).json(
      "Failed to comment"
      )
    }
    return res.status(200).json(
      "Successfull"
    )
  } catch (error) {
    console.error("Error while updating comment", error);
    return res.status(500).json("Server Error");
  }
};

export default AddComment;
